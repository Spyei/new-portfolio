export interface DiscordUser {
	id: string;
	username: string;
	discriminator: string;
	avatar: string | null;
	display_name: string | null;
	global_name: string | null;
}

export interface ActivityAssets {
	large_image?: string;
	large_text?: string;
	small_image?: string;
	small_text?: string;
}

export interface ActivityTimestamps {
	start?: number;
	end?: number;
}

export interface ActivityParty {
	id?: string;
	size?: [number, number];
}

export interface Activity {
	id: string;
	name: string;
	type: number;
	state?: string;
	details?: string;
	timestamps?: ActivityTimestamps;
	assets?: ActivityAssets;
	application_id?: string;
	party?: ActivityParty;
	emoji?: {
		id?: string;
		name: string;
		animated?: boolean;
	};
	url?: string;
}

export interface SpotifyData {
	track_id: string;
	song: string;
	artist: string;
	album: string;
	album_art_url: string;
	timestamps: { start: number; end: number };
}

export interface LanyardData {
	discord_user: DiscordUser;
	discord_status: "online" | "idle" | "dnd" | "offline";
	activities: Activity[];
	listening_to_spotify: boolean;
	spotify: SpotifyData | null;
	active_on_discord_web: boolean;
	active_on_discord_desktop: boolean;
	active_on_discord_mobile: boolean;
	kv: Record<string, string>;
}

export type ConnectionStatus =
	| "connecting"
	| "connected"
	| "disconnected"
	| "error";

export interface CarbonData {
	rating: string;
	cleanerThan: number;
	grams: number;
	green: boolean;
}

export interface WakaTimeData {
	totalHours: string;
	dailyAverage: string;
	bestDay: { date: string; text: string };
	since: string;
	languages: { name: string; percent: number; text: string }[];
	editors: { name: string; percent: number; text: string }[];
	operatingSystems: { name: string; percent: number; text: string }[];
	categories: { name: string; percent: number; text: string }[];
}

export interface GithubRepo {
	name: string;
	description: string | null;
	url: string;
	stars: number;
	language: string | null;
	languageColor: string | null;
}

export interface GithubContributionDay {
	date: string;
	count: number;
	level: 0 | 1 | 2 | 3 | 4;
}

export interface GithubData {
	totalContributions: number;
	currentStreak: number;
	longestStreak: number;
	weeks: GithubContributionDay[][];
	pinnedRepos: GithubRepo[];
}

export interface LastfmTrack {
	name: string;
	artist: string;
	album: string;
	coverImage: string | null;
	url: string;
	playcount?: number;
	nowPlaying?: boolean;
}

export interface LastfmAlbum {
	name: string;
	artist: string;
	playcount: number;
	url: string;
	coverImage: string | null;
}

export interface LastfmArtist {
	name: string;
	playcount: number;
	url: string;
	image: string | null;
}

export interface LastfmData {
	recentTracks: LastfmTrack[];
	topTracks: LastfmTrack[];
	topArtists: LastfmArtist[];
	topAlbums: LastfmAlbum[];
	userInfo: {
		totalScrobbles: number;
		totalArtists: number;
		avgScrobblesPerDay: number;
		registeredAt: number;
	};
	topTrack: LastfmTrack | null;
}

export interface AnilistMedia {
	id: number;
	title: string;
	coverImage: string;
	score: number | null;
	progress: number;
	total: number | null;
	status: string;
	format:
		| "TV"
		| "MOVIE"
		| "OVA"
		| "ONA"
		| "SPECIAL"
		| "MANGA"
		| "NOVEL"
		| string;
	episodes: number | null;
	siteUrl: string;
}

export interface AnilistFavorite {
  id: number;
  title: string;
  coverImage: string;
  siteUrl: string;
}

export interface AnilistData {
	watching: AnilistMedia[];
	reading: AnilistMedia[];
	totalAnime: number;
	totalManga: number;
	daysWatched: number;
	chaptersRead: number;
	username: string;
	avatarUrl: string;
	favoriteAnime: AnilistFavorite[];
	favoriteManga: AnilistFavorite[];
}
