import type {
	LastfmAlbum,
	LastfmArtist,
	LastfmData,
	LastfmTrack,
} from "@/types";

const LASTFM_USER = "spyeicaio";
const BASE = "https://ws.audioscrobbler.com/2.0";

function buildUrl(method: string, extra: Record<string, string> = {}) {
	const key = process.env.LASTFM_API_KEY;

	if (!key) throw new Error("Missing LASTFM_API_KEY");

	const params = new URLSearchParams({
		method,
		user: LASTFM_USER,
		api_key: key,
		format: "json",
		limit: "10",
		...extra,
	});

	return `${BASE}?${params}`;
}

const PLACEHOLDER = "2a96cbd8b46e442fc41c2b86b821562f";

function extractImage(images: any[]): string | null {
	if (!Array.isArray(images) || images.length === 0) return null;

	const sorted = [...images].reverse();

	for (const img of sorted) {
		const url: string = img?.["#text"] ?? "";

		if (url && !url.includes(PLACEHOLDER)) return url;
	}

	return null;
}

async function fetchTrackImage(
	artist: string,
	track: string,
	apiKey: string,
): Promise<string | null> {
	try {
		const res = await fetch(
			`${BASE}?method=track.getInfo&artist=${encodeURIComponent(artist)}&track=${encodeURIComponent(track)}&api_key=${apiKey}&format=json`,
		);

		const data = await res.json();

		return extractImage(data.track?.album?.image ?? []);
	} catch {
		return null;
	}
}

async function fetchArtistImage(artist: string): Promise<string | null> {
	try {
		const res = await fetch(
			`https://itunes.apple.com/search?term=${encodeURIComponent(artist)}&limit=1&entity=song&media=music`,
		);

		const data = await res.json();
		const result = data.results?.[0];

		if (!result) return null;

		return result.artworkUrl100 ?? null;
	} catch {
		return null;
	}
}

export async function getLastfmData(): Promise<LastfmData | null> {
	try {
		const [
			recentRes,
			topTracksRes,
			topArtistsRes,
			infoRes,
			topAlbumsRes,
			allArtistsRes,
		] = await Promise.all([
			fetch(buildUrl("user.getrecenttracks", { limit: "7" })),
			fetch(
				buildUrl("user.gettoptracks", { period: "7day", limit: "8" }),
			),
			fetch(
				buildUrl("user.gettopartists", { period: "7day", limit: "8" }),
			),
			fetch(buildUrl("user.getinfo")),
			fetch(
				buildUrl("user.gettopalbums", { period: "7day", limit: "7" }),
			),
			fetch(
				buildUrl("user.gettopartists", {
					period: "overall",
					limit: "1",
				}),
			),
		]);

		if (
			!recentRes.ok ||
			!topTracksRes.ok ||
			!topArtistsRes.ok ||
			!infoRes.ok ||
			!topAlbumsRes.ok ||
			!allArtistsRes.ok
		)
			return null;

		const [recent, topTracks, topArtists, info, topAlbums, allArtists] =
			await Promise.all([
				recentRes.json(),
				topTracksRes.json(),
				topArtistsRes.json(),
				infoRes.json(),
				topAlbumsRes.json(),
				allArtistsRes.json(),
			]);

		const registeredAt = Number(info.user?.registered?.unixtime ?? 0);
		const totalScrobbles = Number(info.user?.playcount ?? 0);

		const totalArtists = Number(
			allArtists.topartists?.["@attr"]?.total ?? 0,
		);

		const daysSinceRegistered = registeredAt
			? Math.floor((Date.now() / 1000 - registeredAt) / 86400)
			: 1;

		const avgScrobblesPerDay =
			daysSinceRegistered > 0
				? Math.round(totalScrobbles / daysSinceRegistered)
				: 0;

		const recentTracks: LastfmTrack[] = (
			recent.recenttracks?.track ?? []
		).map((t: any) => ({
			name: t.name,
			artist: t.artist["#text"],
			album: t.album["#text"],
			coverImage: extractImage(t.image),
			url: t.url,
			nowPlaying: t["@attr"]?.nowplaying === "true",
		}));

		const topTracksList: LastfmTrack[] = (
			topTracks.toptracks?.track ?? []
		).map((t: any) => ({
			name: t.name,
			artist: t.artist.name,
			album: "",
			coverImage: null,
			url: t.url,
			playcount: Number(t.playcount),
		}));

		const key = process.env.LASTFM_API_KEY!;

		const topArtistsList: LastfmArtist[] = (
			topArtists.topartists?.artist ?? []
		).map((a: any) => ({
			name: a.name,
			playcount: Number(a.playcount),
			url: a.url,
			image: null,
		}));

		const topArtistsWithImages = await Promise.all(
			topArtistsList.map(async (a) => ({
				...a,
				image: await fetchArtistImage(a.name),
			})),
		);

		const topTracksWithImages = await Promise.all(
			topTracksList.map(async (t) => {
				const trackImage = await fetchTrackImage(t.artist, t.name, key);
				const coverImage =
					trackImage ?? (await fetchArtistImage(t.artist));
				return { ...t, coverImage };
			}),
		);

		const topAlbumsList: LastfmAlbum[] = (
			topAlbums.topalbums?.album ?? []
		).map((a: any) => ({
			name: a.name,
			artist: a.artist.name,
			playcount: Number(a.playcount),
			url: a.url,
			coverImage: extractImage(a.image),
		}));

		const weekTopTrack =
			topTracksWithImages.length > 0 ? topTracksWithImages[0] : null;

		return {
			userInfo: {
				totalScrobbles,
				totalArtists,
				avgScrobblesPerDay,
				registeredAt,
			},
			recentTracks,
			topTracks: topTracksWithImages,
			topArtists: topArtistsWithImages,
			topAlbums: topAlbumsList,
			topTrack: weekTopTrack,
		};
	} catch {
		return null;
	}
}
