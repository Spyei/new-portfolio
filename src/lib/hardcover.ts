import type { HardcoverBook, HardcoverData } from "@/types";

const HARDCOVER_API = "https://api.hardcover.app/v1/graphql";
const HARDCOVER_USER = "spyei";
const PAGE_SIZE = 100;

interface HardcoverBookResponse {
	book_id: number;
	status_id: number;
	book: {
		id: number;
		title: string;
		pages: number | null;
		image: { url: string | null } | null;
		contributions: { author: { name: string } | null }[];
	} | null;
	user_book_status: { status: string; slug: string | null } | null;
	user_book_reads: { progress_pages: number | null }[];
}

const BOOKS_QUERY = `
	query UserBooks($userId: Int!, $limit: Int!, $offset: Int!) {
		user_books(
			where: { user_id: { _eq: $userId } }
			limit: $limit
			offset: $offset
			order_by: [{ updated_at: desc }, { id: desc }]
		) {
			book_id
			status_id
			book {
				id
				title
				pages
				image { url }
				contributions { author { name } }
			}
			user_book_status { status slug }
			user_book_reads(limit: 1, order_by: { id: desc }) { progress_pages }
		}
	}
`;

function normalizeStatus(
	entry: HardcoverBookResponse,
): HardcoverBook["status"] {
	const status = (
		entry.user_book_status?.slug ||
		entry.user_book_status?.status ||
		""
	)
		.toLowerCase()
		.replace(/[^a-z]+/g, "_")
		.replace(/^_|_$/g, "");

	if (status.includes("currently_read") || status === "reading") {
		return "currently_reading";
	}
	if (status.includes("want_to_read") || status === "to_read") {
		return "want_to_read";
	}
	if (status.includes("did_not_finish") || status === "dnf") {
		return "did_not_finish";
	}
	if (status.includes("pause")) return "paused";
	if (status === "read" || status === "completed") return "read";

	// Keep the standard Hardcover IDs as a fallback if status metadata is missing.
	const fallbackStatuses: Record<number, HardcoverBook["status"]> = {
		1: "want_to_read",
		2: "currently_reading",
		3: "read",
		4: "paused",
		5: "did_not_finish",
	};
	return fallbackStatuses[entry.status_id] ?? "other";
}

export async function getHardcoverData(): Promise<HardcoverData | null> {
	const token = process.env.HARDCOVER_API_KEY;
	if (!token) return null;

	try {
		const headers = {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
			"User-Agent": "spyei-portfolio/1.0",
		};

		const userResponse = await fetch(HARDCOVER_API, {
			method: "POST",
			headers,
			body: JSON.stringify({ query: "query { me { id username } }" }),
			next: { revalidate: 3600 },
		});
		if (!userResponse.ok) return null;
		const userPayload = await userResponse.json();
		const user = userPayload.data?.me?.[0];
		if (!user?.id || user.username?.toLowerCase() !== HARDCOVER_USER) {
			return null;
		}

		const allEntries: HardcoverBookResponse[] = [];
		let offset = 0;

		while (true) {
			const booksResponse = await fetch(HARDCOVER_API, {
				method: "POST",
				headers,
				body: JSON.stringify({
					query: BOOKS_QUERY,
					variables: {
						userId: user.id,
						limit: PAGE_SIZE,
						offset,
					},
				}),
				next: { revalidate: 3600 },
			});
			if (!booksResponse.ok) return null;

			const booksPayload = await booksResponse.json();
			const page = booksPayload.data?.user_books;
			if (!Array.isArray(page)) return null;

			allEntries.push(...(page as HardcoverBookResponse[]));
			if (page.length < PAGE_SIZE) break;
			offset += PAGE_SIZE;
		}

		const books = allEntries
			.filter((entry) => entry.book)
			.map(
				(entry): HardcoverBook => ({
					id: entry.book!.id,
					title: entry.book!.title,
					coverImage: entry.book!.image?.url ?? null,
					authors: (entry.book!.contributions ?? [])
						.map((contribution) => contribution.author?.name)
						.filter((name): name is string => Boolean(name)),
					pages: entry.book!.pages,
					progressPages:
						entry.user_book_reads?.[0]?.progress_pages ?? null,
					status: normalizeStatus(entry),
					statusLabel: entry.user_book_status?.status ?? "",
				}),
			);

		const totalBooksRead = books.filter(
			(book) => book.status === "read",
		).length;
		const totalPagesRead = books.reduce((total, book) => {
			const pagesRead =
				book.status === "read"
					? (book.pages ?? book.progressPages ?? 0)
					: [
								"currently_reading",
								"paused",
								"did_not_finish",
							].includes(book.status)
						? (book.progressPages ?? 0)
						: 0;
			return total + Math.max(0, pagesRead);
		}, 0);

		return { books, totalBooksRead, totalPagesRead };
	} catch {
		return null;
	}
}
