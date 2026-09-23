"use client";

import { useI18n } from "@/contexts/i18n";
import { motion } from "framer-motion";
import { scrollReveal } from "@/utils/animations";
import type {
	AnilistData,
	HardcoverData,
	GithubData,
	LastfmData,
	WakaTimeData,
} from "@/types";
import Container from "../ui/container";
import { ArrowUpRight } from "lucide-react";
import DiscordActivity from "./cards/discord";
import GithubActivity from "./cards/github";
import WakaTimeCard from "./cards/wakatime";
import LastfmActivity from "./cards/lastfm";
import AnilistActivity from "./cards/anilist";
import HardcoverActivity from "./cards/hardcover";

interface Props {
	githubData: GithubData | null;
	wakatimeData: WakaTimeData | null;
	lastFmData: LastfmData | null;
	anilistData: AnilistData | null;
	hardcoverData: HardcoverData | null;
}

export default function ActivityContent({
	githubData,
	wakatimeData,
	lastFmData,
	anilistData,
	hardcoverData,
}: Props) {
	const { t } = useI18n();

	return (
		<Container>
			<div className="flex flex-col gap-10">
				<DiscordActivity />
				<motion.div
					{...scrollReveal()}
					className="flex flex-col gap-2"
				>
					<HighlightLink
						link="https://github.com/spyei"
						title="Github"
						description={t.activity.github}
					/>
					{githubData && (
						<div className="mt-4">
							<GithubActivity data={githubData} />
						</div>
					)}
				</motion.div>
				<motion.div
					{...scrollReveal()}
					className="flex flex-col gap-2"
				>
					<HighlightLink
						link="https://wakatime.com/@Spyei"
						title="WakaTime"
						description={t.activity.wakatime}
					/>
					{wakatimeData && (
						<div className="mt-4">
							<WakaTimeCard data={wakatimeData} />
						</div>
					)}
				</motion.div>
				<motion.div
					{...scrollReveal()}
					className="flex flex-col gap-2"
				>
					<HighlightLink
						link="https://www.last.fm/user/spyeicaio"
						title="Last.fm"
						description={t.activity.lastfm}
					/>
					{lastFmData && (
						<div className="mt-4">
							<LastfmActivity data={lastFmData} />
						</div>
					)}
				</motion.div>
				<motion.div
					{...scrollReveal()}
					className="flex flex-col gap-2"
				>
					<HighlightLink
						link="https://anilist.co/user/spyei"
						title="AniList"
						description={t.activity.anilist}
					/>
					{anilistData && (
						<div className="mt-4">
							<AnilistActivity data={anilistData} />
						</div>
					)}
				</motion.div>
				<motion.div
					{...scrollReveal()}
					className="flex flex-col gap-2"
				>
					<HighlightLink
						link="https://hardcover.app/@spyei"
						title="Hardcover"
						description={t.activity.hardcover}
					/>
					{hardcoverData && (
						<div className="mt-4">
							<HardcoverActivity data={hardcoverData} />
						</div>
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
