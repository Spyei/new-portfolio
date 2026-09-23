"use client";

import { useI18n } from "@/contexts/i18n";
import type { HardcoverBook, HardcoverData } from "@/types";
import Image from "next/image";
import { Stat } from "./github";

const BOOK_STATUSES: HardcoverBook["status"][] = [
	"currently_reading",
	"want_to_read",
	"read",
	"paused",
	"did_not_finish",
	"other",
];

export default function HardcoverActivity({ data }: { data: HardcoverData }) {
	const { t, locale } = useI18n();
	const numberLocale = locale === "pt" ? "pt-BR" : "en-US";

	return (
		<div className="w-full shadow-lg bg-card border-border border rounded-2xl p-6 flex flex-col gap-5 font-sans">
			<div className="grid sm:grid-cols-2 gap-3">
				<Stat
					label={t.hardcover.booksRead}
					value={data.totalBooksRead.toLocaleString(numberLocale)}
				/>
				<Stat
					label={t.hardcover.pagesRead}
					value={data.totalPagesRead.toLocaleString(numberLocale)}
				/>
			</div>

			{BOOK_STATUSES.map((status) => {
				const books = data.books.filter(
					(book) => book.status === status,
				);
				if (books.length === 0) return null;

				return (
					<section key={status} className="flex flex-col gap-2">
						<span className="text-[10px] font-semibold uppercase tracking-widest text-secondary/40">
							{status === "other"
								? books[0].statusLabel ||
									t.hardcover.status.other
								: t.hardcover.status[status]}
						</span>
						<div className="flex flex-col gap-2">
							{books.map((book) => (
								<a
									key={`${status}-${book.id}`}
									href="https://hardcover.app/@spyei"
									target="_blank"
									rel="noreferrer"
									className="flex gap-3 rounded-2xl bg-card border border-border p-3 shadow-lg hover:shadow-xl hover:scale-101 transition-transform group"
								>
									<div className="relative shrink-0 w-12 h-16 rounded-lg overflow-hidden bg-secondary/10">
										{book.coverImage && (
											<Image
												src={book.coverImage}
												alt={book.title}
												className="object-cover"
												fill
												sizes="48px"
											/>
										)}
									</div>
									<div className="flex-1 min-w-0 flex flex-col justify-center">
										<p className="text-[12px] font-semibold text-secondary truncate group-hover:text-blue-500 transition-colors leading-tight">
											{book.title}
										</p>
										{book.authors.length > 0 && (
											<p className="text-[10px] text-secondary/40 mt-1 truncate">
												{book.authors.join(", ")}
											</p>
										)}
										{(book.status === "read" &&
											book.pages !== null) ||
										book.progressPages !== null ? (
											<p className="text-[10px] text-secondary/40 mt-1">
												{book.status === "read" &&
												book.pages !== null
													? book.pages.toLocaleString(
															numberLocale,
														)
													: `${book.progressPages!.toLocaleString(numberLocale)}${book.pages !== null ? ` / ${book.pages.toLocaleString(numberLocale)}` : ""}`}{" "}
												{t.hardcover.pagesShort}
											</p>
										) : null}
									</div>
								</a>
							))}
						</div>
					</section>
				);
			})}
		</div>
	);
}
