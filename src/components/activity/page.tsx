"use client";

import { useFirstVisit } from "@/hooks/useFirstVisit";
import { useI18n } from "@/contexts/i18n";
import { motion } from "framer-motion";
import { firstVisitDelay, springElement } from "@/utils/animations";
import GithubActivity from "@/components/home/activity/github";
import type {
	AnilistData,
	GithubData,
	LastfmData,
	WakaTimeData,
} from "@/types";
import Container from "../ui/container";
import { ArrowUpRight } from "lucide-react";
import WakaTimeCard from "../home/activity/wakatime";
import LastfmActivity from "../home/activity/lastfm";
import DiscordActivity from "../home/activity/discord";
import AnilistActivity from "../home/activity/anilist";

interface Props {
	githubData: GithubData | null;
	wakatimeData: WakaTimeData | null;
	lastFmData: LastfmData | null;
	anilistData: AnilistData | null;
}

export default function ActivityContent({
	githubData,
	wakatimeData,
	lastFmData,
	anilistData,
}: Props) {
	const isFirstVisit = useFirstVisit();
	const { t } = useI18n();

	return (
		<Container>
			<div className="flex flex-col gap-10">
				<DiscordActivity
					firstVisitDelay={firstVisitDelay}
					isFirstVisit={isFirstVisit}
				/>
				<motion.div
					{...springElement(
						0.9,
						firstVisitDelay(2.1, 1.1, isFirstVisit),
					)}
					className="flex flex-col gap-2"
				>
					<HighlightLink
						link="https://github.com/spyei"
						title="Github"
						description={t.activity.github}
					/>
					{githubData && (
						<motion.div
							className="mt-4"
							{...springElement(
								0.9,
								firstVisitDelay(2.5, 1.4, isFirstVisit),
							)}
						>
							<GithubActivity data={githubData} />
						</motion.div>
					)}
				</motion.div>
				<motion.div
					{...springElement(
						0.9,
						firstVisitDelay(3, 1.6, isFirstVisit),
					)}
					className="flex flex-col gap-2"
				>
					<HighlightLink
						link="https://wakatime.com/@Spyei"
						title="WakaTime"
						description={t.activity.wakatime}
					/>
					{wakatimeData && (
						<motion.div
							className="mt-4"
							{...springElement(
								0.9,
								firstVisitDelay(3.2, 1.8, isFirstVisit),
							)}
						>
							<WakaTimeCard data={wakatimeData} />
						</motion.div>
					)}
				</motion.div>
				<motion.div
					{...springElement(
						0.9,
						firstVisitDelay(3.5, 2, isFirstVisit),
					)}
					className="flex flex-col gap-2"
				>
					<HighlightLink
						link="https://www.last.fm/user/spyeicaio"
						title="Last.fm"
						description={t.activity.lastfm}
					/>
					{lastFmData && (
						<motion.div
							className="mt-4"
							{...springElement(
								0.9,
								firstVisitDelay(3.8, 2.2, isFirstVisit),
							)}
						>
							<LastfmActivity data={lastFmData} />
						</motion.div>
					)}
				</motion.div>
				<motion.div
					{...springElement(
						0.9,
						firstVisitDelay(4.1, 2.4, isFirstVisit),
					)}
					className="flex flex-col gap-2"
				>
					<HighlightLink
						link="https://anilist.co/user/spyei"
						title="AniList"
						description={t.activity.anilist}
					/>
					{anilistData && (
						<motion.div
							className="mt-4"
							{...springElement(
								0.9,
								firstVisitDelay(4.4, 2.6, isFirstVisit),
							)}
						>
							<AnilistActivity data={anilistData} />
						</motion.div>
					)}
				</motion.div>
			</div>
		</Container>
	);
}

function HighlightLink({
	title,
	description,
	link,
}: {
	title: string;
	description: string;
	link: string;
}) {
	return (
		<>
			<a
				href={link}
				target="_blank"
				rel="noreferrer"
				className="flex gap-2 group w-fit"
			>
				<h1 className="font-grotesk font-semibold md:text-4xl text-2xl relative">
					{title}
					<span className="absolute bottom-0 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
				</h1>
				<ArrowUpRight
					className="mt-2 group-hover:mt-1 group-hover:ml-1 transition-all"
					size={20}
				/>
			</a>
			<span>{description}</span>
		</>
	);
}
