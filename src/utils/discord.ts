import type { SpotifyData } from "@/types";

export function resolveAssetUrl(
    applicationId: string | undefined,
    assetKey: string | undefined,
): string | null {
    if (!assetKey) return null;

    if (assetKey.startsWith("mp:external/"))
        return `https://media.discordapp.net/external/${assetKey.replace("mp:external/", "")}`;

    if (assetKey.startsWith("spotify:"))
        return `https://i.scdn.co/image/${assetKey.replace("spotify:", "")}`;

    if (applicationId)
        return `https://cdn.discordapp.com/app-assets/${applicationId}/${assetKey}.png`;

    return null;
}

export function elapsed(start: number): string {
    const diff = Math.floor((Date.now() - start) / 1000);
    const h = Math.floor(diff / 3600);
    const m = Math.floor((diff % 3600) / 60);
    const s = diff % 60;

    if (h > 0)
        return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

    return `${m}:${String(s).padStart(2, "0")}`;
}

export function formatMs(ms: number): string {
    const total = Math.max(0, Math.floor(ms / 1000));
    const m = Math.floor(total / 60);
    const s = total % 60;

    return `${m}:${String(s).padStart(2, "0")}`;
}

export function spotifyProgress(spotify: SpotifyData): number {
    const { start, end } = spotify.timestamps;

    return Math.min(
        100,
        Math.max(0, ((Date.now() - start) / (end - start)) * 100),
    );
}