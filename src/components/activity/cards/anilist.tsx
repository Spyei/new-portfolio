"use client";

import { type Messages, useI18n } from "@/contexts/i18n";
import type { AnilistData, AnilistFavorite, AnilistMedia } from "@/types";
import Image from "next/image";
import { Stat } from "./github";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function AnilistActivity({ data }: { data: AnilistData }) {
	const { t } = useI18n();

	return (
		<div className="w-full shadow-lg bg-card border-border border rounded-2xl p-6 flex flex-col gap-4 font-sans">
			<div className="grid sm:grid-cols-2 gap-3">
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
			)}

			{data.favoriteAnime.length > 0 && (
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
			)}

			{data.favoriteManga.length > 0 && (
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
			)}
		</div>
	);
}

function FavoriteCard({ favorite }: { favorite: AnilistFavorite }) {
	const [tooltip, setTooltip] = useState<{
		x: number;
		y: number;
		title: string;
	} | null>(null);

	return (
		<a
			onMouseEnter={(e) => {
				const rect = e.currentTarget.getBoundingClientRect();
				setTooltip({
					x: rect.left + rect.width / 2,
					y: rect.top,
					title: favorite.title,
				});
			}}
			onMouseLeave={() => setTooltip(null)}
			href={favorite.siteUrl}
			target="_blank"
			rel="noreferrer"
			className="group relative w-16 h-22 rounded-lg overflow-hidden shrink-0 hover:scale-105 transition-transform shadow-lg"
		>
			{favorite.coverImage ? (
				<Image
					src={favorite.coverImage}
					alt={favorite.title}
					className="object-cover"
					width={300}
					height={300}
				/>
			) : (
				<div className="w-full h-full bg-secondary/10" />
			)}
			<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />

			{typeof window !== "undefined" &&
				createPortal(
					<AnimatePresence>
						{tooltip && (
							<motion.div
								key={tooltip.title}
								initial={{ opacity: 0, y: 6, scale: 0.85 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								exit={{ opacity: 0, y: 4, scale: 0.9 }}
								transition={{
									type: "spring",
									stiffness: 400,
									damping: 22,
									mass: 0.6,
								}}
								className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-full px-2 py-1 rounded-lg bg-secondary text-background text-[10px] font-medium whitespace-nowrap shadow-lg"
								style={{ left: tooltip.x, top: tooltip.y - 6 }}
							>
								<span>{tooltip.title}</span>
							</motion.div>
						)}
					</AnimatePresence>,
					document.body,
				)}
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
			className="flex gap-3 rounded-2xl bg-card border border-border p-3 shadow-lg hover:shadow-xl hover:scale-101 transition-transform group"
		>
			<div className="relative shrink-0 w-12 h-16 rounded-lg overflow-hidden">
				{media.coverImage ? (
					<Image
						src={media.coverImage}
						alt={media.title}
						className="object-cover"
						width={300}
						height={300}
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
