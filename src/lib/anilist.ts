import type { AnilistData, AnilistFavorite, AnilistMedia } from "@/types";

const ANILIST_USER = "spyei";

const STATUS_LABELS: Record<string, string> = {
	CURRENT: "Assistindo",
	COMPLETED: "Completo",
	PAUSED: "Pausado",
	DROPPED: "Dropped",
	PLANNING: "Planeja",
	REPEATING: "Revisitando",
};

export async function getAnilistData(): Promise<AnilistData | null> {
	try {
		const query = `
      query($name: String) {
        User(name: $name) {
          name
          avatar { large }
          statistics {
            anime { count episodesWatched minutesWatched }
            manga { count chaptersRead }
          }
		  favourites {
        	anime {
          		nodes { id title { romaji english } coverImage { large } siteUrl }
        	}
        	manga {
          		nodes { id title { romaji english } coverImage { large } siteUrl }
        	}
      	  }
        }
        watching: MediaListCollection(userName: $name, type: ANIME, status: CURRENT, sort: UPDATED_TIME_DESC) {
          lists {
            entries {
              progress
              media {
                id title { romaji english } coverImage { large }
                episodes status format siteUrl
              }
            }
          }
        }
        reading: MediaListCollection(userName: $name, type: MANGA, status: CURRENT, sort: UPDATED_TIME_DESC) {
          lists {
            entries {
              progress score(format: POINT_10)
              media {
                id title { romaji english } coverImage { large }
                chapters status format siteUrl
              }
            }
          }
        }
      }
    `;

		const res = await fetch("https://graphql.anilist.co", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({ query, variables: { name: ANILIST_USER } }),
		});

		if (!res.ok) return null;
		const { data } = await res.json();
		if (!data?.User) return null;

		const user = data.User;
		const stats = user.statistics;

		const mapEntries = (lists: any[], isAnime: boolean): AnilistMedia[] =>
			lists
				.flatMap((l: any) => l.entries)
				.slice(0, 4)
				.map((e: any) => ({
					id: e.media.id,
					title: e.media.title.english || e.media.title.romaji,
					coverImage: e.media.coverImage.large,
					score: e.score || null,
					progress: e.progress,
					total: isAnime ? e.media.episodes : e.media.chapters,
					status: STATUS_LABELS[e.media.status] ?? e.media.status,
					format: e.media.format,
					episodes: e.media.episodes ?? null,
					siteUrl: e.media.siteUrl,
				}));

		const mapFavorites = (nodes: any[]): AnilistFavorite[] =>
			nodes.map((n: any) => ({
				id: n.id,
				title: n.title.english || n.title.romaji,
				coverImage: n.coverImage.large,
				siteUrl: n.siteUrl,
			}));

		return {
			watching: mapEntries(data.watching.lists, true),
			reading: mapEntries(data.reading.lists, false),
			totalAnime: stats.anime.count,
			totalManga: stats.manga.count,
			daysWatched: Math.floor(stats.anime.minutesWatched / 1440),
			chaptersRead: stats.manga.chaptersRead,
			username: user.name,
			avatarUrl: user.avatar.large,
			favoriteAnime: mapFavorites(user.favourites?.anime?.nodes ?? []),
			favoriteManga: mapFavorites(user.favourites?.manga?.nodes ?? []),
		};
	} catch {
		return null;
	}
}
