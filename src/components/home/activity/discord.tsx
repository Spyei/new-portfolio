"use client";

import { type Messages, useI18n } from "@/contexts/i18n";
import { useDiscordActivity } from "@/hooks/useActivity";
import type { Activity, LanyardData, SpotifyData } from "@/types";
import {
	elapsed,
	formatMs,
	resolveAssetUrl,
	spotifyProgress,
} from "@/utils/discord";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Title from "../../ui/title";
import { motion } from "framer-motion";
import { springElement } from "@/utils/animations";
import type { HomeContextProps } from "..";
import { Check, Copy } from "lucide-react";

const DISCORD_USER_ID = "955095844275781693";

const STATUS_COLORS: Record<string, string> = {
	online: "bg-[#23a559]",
	idle: "bg-[#f0b132]",
	dnd: "bg-[#f23f43]",
	offline: "bg-[#80848e]",
};

export default function DiscordActivity({
	isFirstVisit,
	firstVisitDelay,
}: HomeContextProps) {
	const { data } = useDiscordActivity({ userId: DISCORD_USER_ID });
	const { t } = useI18n();
	const [copy, setCopy] = useState(false);

	const handleCopy = () => {
		setCopy(true);

		navigator.clipboard.writeText("@spyei");

		setTimeout(() => setCopy(false), 2000);
	};

	const visibleActivities =
		data?.activities.filter(
			(a) => a.type !== 4 && !(data.listening_to_spotify && a.type === 2),
		) ?? [];

	return (
		<motion.div
			{...springElement(0.9, firstVisitDelay(1.1, 0.1, isFirstVisit))}
			className="flex flex-col gap-2"
		>
			<div className="flex items-center gap-3">
				<Title>{t.discord.title}</Title>
				<button
					type="button"
					onClick={handleCopy}
					className={!copy ? "cursor-pointer mt-1.5" : ""}
				>
					{copy ? <Check /> : <Copy />}
				</button>
			</div>
			<span>{t.discord.description}</span>
			<motion.div
				{...springElement(0.9, firstVisitDelay(1.3, 0.3, isFirstVisit))}
				className="w-full shadow-lg bg-card border-border border rounded-2xl p-6 gap-4 flex flex-col mt-4"
			>
				<div className="flex items-center gap-3">
					<div className="relative shrink-0">
						{data ? (
							<Image
								src={
									data.discord_user.avatar
										? `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png?size=80`
										: `https://cdn.discordapp.com/embed/avatars/${Number(data.discord_user.discriminator) % 5}.png`
								}
								alt={data.discord_user.username}
								width={40}
								height={40}
								className="w-12 h-12 rounded-full"
							/>
						) : (
							<div className="w-12 h-12 rounded-full bg-secondary/10 animate-pulse" />
						)}
						{data && <StatusDot status={data.discord_status} />}
					</div>

					<div className="flex-1 min-w-0">
						<p className="text-sm font-semibold text-secondary truncate">
							{data?.discord_user.global_name ??
								data?.discord_user.username ??
								"Username"}
						</p>
						<p className="text-[10px] uppercase tracking-widest text-secondary/40 mt-0.5">
							{data
								? (t.discord.status[
										data.discord_status ?? "offline"
									] ?? data.discord_status)
								: "—"}
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					{!data && (
						<>
							<SkeletonCard />
							<SkeletonCard />
						</>
					)}

					{data && (
						<>
							{visibleActivities.map((activity) => (
								<motion.div
									{...springElement(
										0.9,
										firstVisitDelay(1, 0.2, isFirstVisit),
									)}
									key={activity.id}
								>
									<ActivityCard
										t={t}
										key={activity.id}
										activity={activity}
									/>
								</motion.div>
							))}
							{data.listening_to_spotify && data.spotify && (
								<motion.div
									{...springElement(
										0.9,
										firstVisitDelay(1.1, 0.3, isFirstVisit),
									)}
									key={1}
								>
									<SpotifyCard
										key={1}
										t={t}
										spotify={data.spotify}
									/>
								</motion.div>
							)}
							{!data.listening_to_spotify &&
								visibleActivities.length === 0 && (
									<p className="text-xs text-secondary/30 text-center py-1">
										{t.discord.noActivity}
									</p>
								)}
						</>
					)}
				</div>
			</motion.div>
		</motion.div>
	);
}

function StatusDot({ status }: { status: LanyardData["discord_status"] }) {
	return (
		<span
			className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-card ${STATUS_COLORS[status] ?? STATUS_COLORS.offline}`}
		/>
	);
}

function SpotifyCard({ spotify, t }: { spotify: SpotifyData; t: Messages }) {
	const [progress, setProgress] = useState(() => spotifyProgress(spotify));
	const prevTrackRef = useRef(spotify.track_id);
	const [animate, setAnimate] = useState(true);

	useEffect(() => {
		const isNewTrack = prevTrackRef.current !== spotify.track_id;

		if (isNewTrack) {
			prevTrackRef.current = spotify.track_id;

			setAnimate(false);
			setProgress(spotifyProgress(spotify));
			requestAnimationFrame(() => setAnimate(true));
		}

		const id = setInterval(
			() => setProgress(spotifyProgress(spotify)),
			1000,
		);
		return () => clearInterval(id);
	}, [spotify]);

	return (
		<div className="rounded-2xl bg-card border border-border p-4 shadow-lg">
			<div className="flex items-center gap-1.5 mb-3">
				<svg
					aria-hidden="true"
					viewBox="0 0 24 24"
					fill="#1db954"
					className="w-3 h-3 shrink-0"
				>
					<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
				</svg>
				<span className="text-[10px] font-semibold uppercase tracking-widest text-secondary/40 font-sans">
					{t.discord.listeningOnSpotify}
				</span>
			</div>

			<div className="flex gap-3 items-start">
				<Image
					src={spotify.album_art_url}
					alt={spotify.album}
					width={56}
					height={56}
					className="w-10 h-10 md:h-14 md:w-14 rounded-lg object-cover shadow-md shrink-0"
				/>
				<div className="w-full">
					<div className="flex-1 min-w-0">
						<p className="text-[14px] font-semibold text-secondary truncate font-sans">
							{spotify.song}
						</p>
						<div className="text-secondary/60 flex flex-col text-[12px]">
							<p className="truncate">{spotify.artist}</p>
							<p className="truncate">{spotify.album}</p>
						</div>
						<div className="mt-2.5 h-0.5 rounded-full bg-secondary/10 overflow-hidden">
							<div
								className="h-full bg-[#1db954] rounded-full"
								style={{
									width: `${progress}%`,
									transition: animate
										? "width 1s linear"
										: "none",
								}}
							/>
						</div>
					</div>
					<div className="flex justify-between mt-1">
						<span className="text-[10px] text-secondary/30 font-sans tabular-nums">
							{formatMs(Date.now() - spotify.timestamps.start)}
						</span>
						<span className="text-[10px] text-secondary/30 font-sans tabular-nums">
							{formatMs(
								spotify.timestamps.end -
									spotify.timestamps.start,
							)}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

function ActivityCard({ activity, t }: { activity: Activity; t: Messages }) {
	const [, setTick] = useState(0);

	const map: Record<number, string> = {
		0: "playing",
		1: "streaming",
		2: "listening",
		3: "watching",
		5: "competing",
	};

	const key = (map[activity.type] ??
		"unknown") as keyof typeof t.discord.activityType;

	useEffect(() => {
		if (!activity.timestamps?.start) return;
		const id = setInterval(() => setTick((t) => t + 1), 1000);
		return () => clearInterval(id);
	}, [activity.timestamps?.start]);

	const largeImg = resolveAssetUrl(
		activity.application_id,
		activity.assets?.large_image,
	);
	const smallImg = resolveAssetUrl(
		activity.application_id,
		activity.assets?.small_image,
	);

	return (
		<div className="rounded-2xl bg-card border border-border p-4 shadow-lg">
			<div className="mb-3">
				<span className="text-[10px] font-semibold uppercase tracking-widest text-secondary/40 font-sans">
					{t.discord.activityType[key]}
				</span>
			</div>

			<div className="flex gap-3 items-start">
				{largeImg && (
					<div className="relative shrink-0">
						<Image
							src={largeImg}
							alt={activity.assets?.large_text ?? activity.name}
							width={56}
							height={56}
							className="w-10 h-10 md:h-14 md:w-14 rounded-lg object-cover shadow-md"
						/>
						{smallImg && (
							<Image
								src={smallImg}
								alt={activity.assets?.small_text ?? ""}
								width={20}
								height={20}
								className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-card object-cover"
							/>
						)}
					</div>
				)}
				<div className="flex-1 min-w-0 gap-1">
					<p className="md:text-[14px] text-[13px] font-semibold text-secondary truncate font-sans">
						{activity.name}
					</p>
					<div className="flex flex-col  text-secondary/60 md:text-[12px] text-[11px] sm:gap-0 gap-1 mt-1 sm:mt-0">
						{activity.details && <p>{activity.details}</p>}
						{activity.state && <p>{activity.state}</p>}
					</div>
					{activity.timestamps?.start && (
						<p className="md:text-[12px] text-[11px] mt-1 font-sans text-green-500">
							{elapsed(activity.timestamps.start)}{" "}
							{t.discord.elapsed}
						</p>
					)}
				</div>
			</div>
		</div>
	);
}

function SkeletonCard() {
	return (
		<div className="rounded-2xl bg-card border border-border p-4 space-y-3">
			<div className="h-2 w-14 rounded bg-secondary/10 animate-pulse" />
			<div className="flex gap-3">
				<div className="w-14 h-14 rounded-lg bg-secondary/10 animate-pulse shrink-0" />
				<div className="flex-1 space-y-2 pt-1">
					<div className="h-2.5 w-3/4 rounded bg-secondary/10 animate-pulse" />
					<div className="h-2 w-1/2 rounded bg-secondary/10 animate-pulse" />
					<div className="h-2 w-2/3 rounded bg-secondary/10 animate-pulse" />
				</div>
			</div>
		</div>
	);
}
