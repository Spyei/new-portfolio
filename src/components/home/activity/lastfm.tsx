"use client";

import { useI18n } from "@/contexts/i18n";
import type {
	LastfmAlbum,
	LastfmArtist,
	LastfmData,
	LastfmTrack,
} from "@/types";
import Image from "next/image";
import { Stat } from "./github";
import { formatNumber } from "@/utils/formatNumber";

export default function LastfmActivity({ data }: { data: LastfmData }) {
	const { t } = useI18n();

	const recent = data.recentTracks.slice(0, 7);
	const topTrack = data.topTracks[0];

	return (
		<div className="w-full shadow-lg bg-card border-border border rounded-2xl p-6 flex flex-col gap-5 font-sans">
			<div className="flex flex-col gap-4">
				<div className="sm:grid sm:grid-cols-3 flex flex-col gap-3">
					<Stat
						label={t.lastfm.totalScrobbles}
						value={formatNumber(data.userInfo.totalScrobbles)}
					/>
					<Stat
						label={t.lastfm.totalArtists}
						value={formatNumber(data.userInfo.totalArtists)}
					/>
					<Stat
						label={t.lastfm.avgScrobblesPerDay}
						value={data.userInfo.avgScrobblesPerDay}
					/>
				</div>
				<div>
					{topTrack && (
						<div className="rounded-2xl bg-card border border-border p-3 shadow-lg text-center flex w-full items-center">
							<div className="relative shrink-0 w-9 h-9 rounded-sm overflow-hidden bg-secondary/10">
								{topTrack.coverImage && (
									<Image
										src={topTrack.coverImage}
										alt={topTrack.name}
										fill
										className="object-cover"
										sizes="36px"
									/>
								)}
							</div>
							<div className="w-full">
								<p className="text-sm font-semibold tabular-nums">
									{topTrack.name}
								</p>
								<p className="text-[10px] font-semibold uppercase tracking-widest text-secondary/40 mt-0.5">
									{t.lastfm.topweekly}
								</p>
							</div>
						</div>
					)}
				</div>
			</div>

			<div className="grid grid-cols-2">
				{recent.length > 0 && (
					<div className="flex flex-col gap-2">
						<span className="text-[10px] font-semibold uppercase tracking-widest text-secondary/40">
							{t.lastfm.recent}
						</span>
						<div className="flex flex-col gap-2.5">
							{recent.map((track, i) => (
								<TrackRow key={i} track={track} />
							))}
						</div>
					</div>
				)}

				{data.topAlbums.length > 0 && (
					<div className="flex flex-col gap-2">
						<span className="text-[10px] font-semibold uppercase tracking-widest text-secondary/40">
							{t.lastfm.topAlbums}
						</span>
						<div className="flex flex-col gap-2.5">
							{data.topAlbums.map((album, i) => (
								<AlbumRow key={i} album={album} index={i} />
							))}
						</div>
					</div>
				)}
			</div>

			<div className="grid grid-cols-2 gap-4">
				{data.topTracks.length > 0 && (
					<div className="flex flex-col gap-2">
						<span className="text-[10px] font-semibold uppercase tracking-widest text-secondary/40">
							{t.lastfm.topTracks}
						</span>
						<div className="flex flex-col gap-2.5">
							{data.topTracks.map((track, i) => (
								<TrackRow key={i} track={track} showCount />
							))}
						</div>
					</div>
				)}

				{data.topArtists.length > 0 && (
					<div className="flex flex-col gap-2">
						<span className="text-[10px] font-semibold uppercase tracking-widest text-secondary/40">
							{t.lastfm.topArtists}
						</span>
						<div className="flex flex-col gap-2.5">
							{data.topArtists.map((artist, i) => (
								<ArtistRow key={i} artist={artist} />
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

function TrackRow({
	track,
	showCount,
}: {
	track: LastfmTrack;
	showCount?: boolean;
}) {
	return (
		<a
			href={track.url}
			target="_blank"
			rel="noreferrer"
			className="flex items-center gap-3 group"
		>
			<div className="relative shrink-0 w-9 h-9 rounded-sm overflow-hidden bg-secondary/10">
				{track.coverImage && (
					<Image
						src={track.coverImage}
						alt={track.name}
						fill
						className="object-cover"
						sizes="36px"
					/>
				)}
			</div>
			<div className="flex-1 min-w-0">
				<p className="text-[12px] font-semibold text-secondary truncate group-hover:text-[#d51007] transition-colors leading-tight">
					{track.name}
				</p>
				<p className="text-[10px] text-secondary/50 truncate">
					{track.artist}
				</p>
			</div>
			{showCount && track.playcount != null && (
				<span className="shrink-0 text-[10px] text-secondary/80 tabular-nums">
					{track.playcount}x
				</span>
			)}
		</a>
	);
}

function ArtistRow({ artist }: { artist: LastfmArtist }) {
	return (
		<a
			href={artist.url}
			target="_blank"
			rel="noreferrer"
			className="flex items-center gap-3 group"
		>
			<div className="relative shrink-0 w-9 h-9 rounded-full overflow-hidden bg-secondary/10">
				{artist.image && (
					<Image
						src={artist.image}
						alt={artist.name}
						fill
						className="object-cover"
						sizes="36px"
					/>
				)}
			</div>
			<div className="flex-1 min-w-0">
				<p className="text-[12px] font-semibold text-secondary truncate group-hover:text-[#d51007] transition-colors">
					{artist.name}
				</p>
			</div>
			<span className="shrink-0 text-[10px] text-secondary/80 tabular-nums">
				{artist.playcount}x
			</span>
		</a>
	);
}

function AlbumRow({ album, index }: { album: LastfmAlbum; index: number }) {
	return (
		<a
			key={index}
			href={album.url}
			target="_blank"
			rel="noreferrer"
			className="flex items-center gap-3 group"
		>
			<div className="relative shrink-0 w-9 h-9 rounded-lg overflow-hidden bg-secondary/10">
				{album.coverImage && (
					<Image
						src={album.coverImage}
						alt={album.name}
						fill
						className="object-cover"
						sizes="36px"
					/>
				)}
			</div>
			<div className="flex-1 min-w-0">
				<p className="text-[12px] font-semibold text-secondary truncate group-hover:text-[#d51007] transition-colors">
					{album.name}
				</p>
				<p className="text-[10px] text-secondary/50 truncate">
					{album.artist}
				</p>
			</div>
			<span className="shrink-0 text-[10px] text-secondary/80 tabular-nums">
				{album.playcount}x
			</span>
		</a>
	);
}
