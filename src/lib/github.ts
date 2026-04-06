import type { GithubContributionDay, GithubData, GithubRepo } from "@/types";

const LANGUAGE_COLORS: Record<string, string> = {
	TypeScript: "#3178c6",
	JavaScript: "#f1e05a",
	Python: "#3572A5",
	Rust: "#dea584",
	Go: "#00ADD8",
	HTML: "#e34c26",
	CSS: "#563d7c",
	Shell: "#89e051",
	Vue: "#41b883",
	Kotlin: "#A97BFF",
};

const GITHUB_USER = "Spyei";

export async function getGithubData(): Promise<GithubData | null> {
	try {
		const token = process.env.GITHUB_TOKEN;

		const headers: Record<string, string> = {
			"Content-Type": "application/json",
			...(token ? { Authorization: `Bearer ${token}` } : {}),
		};

		const query = `{
      user(login: "${GITHUB_USER}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              stargazerCount
              primaryLanguage { name color }
            }
          }
        }
      }
    }`;

		const res = await fetch("https://api.github.com/graphql", {
			method: "POST",
			headers,
			body: JSON.stringify({ query }),
			next: { revalidate: 3600 },
		});

		if (!res.ok) return null;

		const { data } = await res.json();
		const user = data?.user;

		if (!user) return null;

		const calendar = user.contributionsCollection.contributionCalendar;

		const days = calendar.weeks
			.flatMap((w: any) => w.contributionDays)
			.sort((a: any, b: any) => b.date.localeCompare(a.date));

		let currentStreak = 0;
		let counting = true;

		for (const day of days) {
			if (!counting) break;

			if (day.contributionCount > 0) {
				currentStreak++;
			} else {
				const isToday =
					day.date === new Date().toISOString().slice(0, 10);

				if (!isToday) counting = false;
			}
		}

		let longestStreak = 0;
		let tempStreak = 0;

		for (const day of [...days].reverse()) {
			if (day.contributionCount > 0) {
				tempStreak++;

				if (tempStreak > longestStreak) longestStreak = tempStreak;
			} else {
				tempStreak = 0;
			}
		}

		const levelMap: Record<string, 0 | 1 | 2 | 3 | 4> = {
			NONE: 0,
			FIRST_QUARTILE: 1,
			SECOND_QUARTILE: 2,
			THIRD_QUARTILE: 3,
			FOURTH_QUARTILE: 4,
		};

		const weeks: GithubContributionDay[][] = calendar.weeks.map((w: any) =>
			w.contributionDays.map((d: any) => ({
				date: d.date,
				count: d.contributionCount,
				level: levelMap[d.contributionLevel] ?? 0,
			})),
		);

		const pinnedRepos: GithubRepo[] = user.pinnedItems.nodes.map(
			(r: any) => ({
				name: r.name,
				description: r.description,
				url: r.url,
				stars: r.stargazerCount,
				language: r.primaryLanguage?.name ?? null,
				languageColor:
					r.primaryLanguage?.color ??
					LANGUAGE_COLORS[r.primaryLanguage?.name] ??
					null,
			}),
		);

		return {
			totalContributions: calendar.totalContributions,
			currentStreak,
			longestStreak,
			weeks,
			pinnedRepos,
		};
	} catch {
		return null;
	}
}
