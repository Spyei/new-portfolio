"use client";

import { type Messages, useI18n } from "@/contexts/i18n";
import type { AnilistData, AnilistFavorite, AnilistMedia } from "@/types";
import Image from "next/image";
import { Stat } from "./github";

export default function AnilistActivity({ data }: { data: AnilistData }) {
	const { t } = useI18n();

	return (
		<div className="w-full shadow-lg bg-card border-border border rounded-2xl p-6 flex flex-col gap-4 font-sans">
			<div className="grid grid-cols-2 gap-3">
				<Stat label={t.anilist.totalAnime} value={data.totalAnime} />
				<Stat
					label={t.anilist.daysWatched}
					value={`${data.daysWatched}d`}
				/>
				<Stat label={t.anilist.totalManga} value={data.totalManga} />
				<Stat
					label={t.anilist.chaptersRead}
					value={data.chaptersRead.toLocaleString("pt-BR")}
				/>
			</div>

			{data.watching.length > 0 && (
				<div className="flex flex-col gap-2">
					<span className="text-[10px] font-semibold uppercase tracking-widest text-secondary/40">
						{t.anilist.watching}
					</span>
					<div className="flex flex-col gap-2">
						{data.watching.map((m) => (
							<MediaCard t={t} key={m.id} media={m} />
						))}
					</div>
				</div>
			)}

			{data.reading.length > 0 && (
				<>
					<div className="h-px bg-border" />
					<div className="flex flex-col gap-2">
						<span className="text-[10px] font-semibold uppercase tracking-widest text-secondary/40">
							{t.anilist.reading}
						</span>
						<div className="flex flex-col gap-2">
							{data.reading.map((m) => (
								<MediaCard t={t} key={m.id} media={m} />
							))}
						</div>
					</div>
				</>
			)}

			{data.favoriteAnime.length > 0 && (
				<>
					<div className="h-px bg-border" />
					<div className="flex flex-col gap-2">
						<span className="text-[10px] font-semibold uppercase tracking-widest text-secondary/40">
							{t.anilist.favoriteAnime}
						</span>
						<div className="flex flex-wrap gap-2">
							{data.favoriteAnime.map((f) => (
								<FavoriteCard key={f.id} favorite={f} />
							))}
						</div>
					</div>
				</>
			)}

			{data.favoriteManga.length > 0 && (
				<>
					<div className="h-px bg-border" />
					<div className="flex flex-col gap-2">
						<span className="text-[10px] font-semibold uppercase tracking-widest text-secondary/40">
							{t.anilist.favoriteManga}
						</span>
						<div className="flex flex-wrap gap-2">
							{data.favoriteManga.map((f) => (
								<FavoriteCard key={f.id} favorite={f} />
							))}
						</div>
					</div>
				</>
			)}
		</div>
	);
}

function FavoriteCard({ favorite }: { favorite: AnilistFavorite }) {
	return (
		<a
			href={favorite.siteUrl}
			target="_blank"
			rel="noreferrer"
			className="group relative w-16 h-22 rounded-lg overflow-hidden shrink-0 hover:scale-105 transition-transform shadow-lg"
			title={favorite.title}
		>
			{favorite.coverImage ? (
				<Image
					src={favorite.coverImage}
					alt={favorite.title}
					fill
					className="object-cover"
					sizes="40px"
				/>
			) : (
				<div className="w-full h-full bg-secondary/10" />
			)}
			<div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
		</a>
	);
}

function MediaCard({ media, t }: { media: AnilistMedia; t: Messages }) {
	const progressLabel =
		media.total !== null
			? `${media.progress} / ${media.total}`
			: media.progress;

	const progressPct =
		media.total !== null
			? Math.min(100, (media.progress / media.total) * 100)
			: null;

	return (
		<a
			href={media.siteUrl}
			target="_blank"
			rel="noreferrer"
			className="flex gap-3 rounded-2xl bg-card border border-border p-3 shadow-lg hover:shadow-xl transition-shadow group"
		>
			<div className="relative shrink-0 w-12 h-16 rounded-lg overflow-hidden">
				{media.coverImage ? (
					<Image
						src={media.coverImage}
						alt={media.title}
						fill
						className="object-cover"
						sizes="80px"
					/>
				) : (
					<div className="w-full h-full bg-secondary/10" />
				)}
			</div>

			<div className="flex-1 min-w-0 flex flex-col justify-between">
				<div>
					<p className="text-[12px] font-semibold text-secondary truncate group-hover:text-blue-500 transition-colors leading-tight">
						{media.title}
					</p>
					<p className="text-[10px] text-secondary/40 mt-0.5">
						{t.anilist.formatLabels[
							media.format as keyof typeof t.anilist.formatLabels
						] ?? media.format}
					</p>
				</div>

				<div className="mt-1.5">
					<div className="flex justify-between items-center mb-1">
						<span className="text-[10px] text-secondary/50 tabular-nums">
							{progressLabel}
						</span>
						{media.score !== null && (
							<span className="text-[10px] text-highlight/80">
								★ {media.score}
							</span>
						)}
					</div>
					{progressPct != null && (
						<div className="h-0.5 rounded-full bg-secondary/10 overflow-hidden">
							<div
								className="h-full bg-blue-500 rounded-full"
								style={{ width: `${progressPct}%` }}
							/>
						</div>
					)}
				</div>
			</div>
		</a>
	);
}
