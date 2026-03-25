"use client";

import { useI18n } from "@/contexts/i18n";
import { createPortal } from "react-dom";
import type { GithubContributionDay, GithubData } from "@/types";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

const LEVEL_CLASSES: Record<number, string> = {
	0: "bg-secondary/[0.06]",
	1: "bg-green-500/30",
	2: "bg-green-500/55",
	3: "bg-green-500/75",
	4: "bg-green-500",
};

export default function GithubActivity({ data }: { data: GithubData}) {
	const { t } = useI18n();

	return (
		<div className="w-full shadow-lg bg-card border-border border rounded-2xl p-6 flex flex-col gap-4 font-sans">
			<div className="sm:grid sm:grid-cols-3 flex flex-col gap-3">
				<Stat
					label={t.github.contributions}
					value={data.totalContributions.toLocaleString("pt-BR")}
				/>
				<Stat
					label={t.github.currentStreak}
					value={`${data.currentStreak}d`}
				/>
				<Stat
					label={t.github.longestStreak}
					value={`${data.longestStreak}d`}
				/>
			</div>

			<div className="rounded-2xl bg-card border border-border p-1 pb-1 shadow-lg overflow-x-auto github-scroll">
				<ContributionGraph weeks={data.weeks} />
			</div>

			<span className="text-xs text-secondary/30">
				{t.github.advice}
			</span>

			{data.pinnedRepos.length > 0 && (
				<div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
					{data.pinnedRepos.map((repo) => (
						<RepoCard key={repo.name} repo={repo} />
					))}
				</div>
			)}
		</div>
	);
}

function ContributionGraph({ weeks }: { weeks: GithubContributionDay[][] }) {
	const [tooltip, setTooltip] = useState<{
		x: number;
		y: number;
		day: GithubContributionDay;
	} | null>(null);

	return (
		<div className="flex gap-0.75 p-2">
			{weeks.map((week, index) => (
				<div key={index} className="flex flex-col gap-0.75">
					{week.map((day) => (
						<button
							type="button"
							key={day.date}
							onMouseEnter={(e) => {
								const rect =
									e.currentTarget.getBoundingClientRect();
								setTooltip({
									x: rect.left + rect.width / 2,
									y: rect.top,
									day,
								});
							}}
							onMouseLeave={() => setTooltip(null)}
							className={`w-2.5 h-2.5 rounded-sm transition-opacity hover:opacity-70 ${LEVEL_CLASSES[day.level]}`}
						/>
					))}
				</div>
			))}

			{typeof window !== "undefined" &&
				createPortal(
					<AnimatePresence>
						{tooltip && (
							<motion.div
								key={tooltip.day.date}
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
								{tooltip.day.count} contribution
								{tooltip.day.count !== 1 ? "s" : ""} ·{" "}
								{new Date(
									tooltip.day.date + "T12:00:00",
								).toLocaleDateString("pt-BR", {
									day: "2-digit",
									month: "short",
									year: "numeric",
								})}
								<div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-secondary" />
							</motion.div>
						)}
					</AnimatePresence>,
					document.body,
				)}
		</div>
	);
}

function RepoCard({ repo }: { repo: GithubData["pinnedRepos"][0] }) {
	return (
		<a
			href={repo.url}
			target="_blank"
			rel="noreferrer"
			className="rounded-2xl bg-card border border-border p-4 shadow-lg hover:shadow-xl transition-shadow flex flex-col gap-2 group"
		>
			<div className="flex items-start justify-between gap-2">
				<div className="flex gap-1.5">
					<h1 className="font-grotesk font-semibold text-[13px] relative">
						{repo.name}
						<span className="absolute bottom-0 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
					</h1>
					<ArrowUpRight
						className="mt-0.5 group-hover:mt-0 group-hover:ml-0.5 transition-all"
						size={10}
					/>
				</div>
				{repo.stars > 0 && (
					<span className="shrink-0 flex items-center gap-1 text-[10px] text-amber-500">
						<Star className="fill-amber-500" size={12} />
						{repo.stars}
					</span>
				)}
			</div>
			{repo.description && (
				<p className="text-[11px] text-secondary/50 line-clamp-2 leading-relaxed">
					{repo.description}
				</p>
			)}
			{repo.language && (
				<div className="flex items-center gap-1.5 mt-auto">
					<span
						className="w-2.5 h-2.5 rounded-full shrink-0"
						style={{
							backgroundColor: repo.languageColor ?? "#888",
						}}
					/>
					<span className="text-[10px] text-secondary/50">
						{repo.language}
					</span>
				</div>
			)}
		</a>
	);
}

export function Stat({ label, value }: { label: string; value: string | number }) {
	return (
		<div className="rounded-2xl bg-card border border-border p-3 shadow-lg text-center">
			<p className="text-sm font-semibold tabular-nums">{value}</p>
			<p className="text-[10px] font-semibold uppercase tracking-widest text-secondary/40 mt-0.5">
				{label}
			</p>
		</div>
	);
}
