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

export type ConnectionStatus = "connecting" | "connected" | "disconnected" | "error";

export interface CarbonData {
    rating: string;
    cleanerThan: number;
    grams: number;
    green: boolean;
}
