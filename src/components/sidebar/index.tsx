"use client";

import { GithubOriginalIcon, LinkedinPlainIcon } from "@devicon/react";
import Notch from "./notch";
import { motion } from "framer-motion";
import Image from "next/image";
import Option from "./option";
import Nav from "./nav";
import { useI18n } from "@/contexts/i18n";
import { useTheme } from "@/contexts/theme";
import LocaleToggle from "../ui/toggle/locale";
import ThemeToggle from "../ui/toggle/theme";

export default function Sidebar() {
	const { t } = useI18n();
	const { theme } = useTheme();

	return (
		<motion.nav
			className="fixed z-40 left-0 inset-y-0"
			initial={{ x: -500 }}
			animate={{ x: 0 }}
			transition={{ duration: 0.3 }}
		>
			<Notch />
			<section className="absolute inset-8 left-0 md:w-52 w-16 flex flex-col gap-4 md:p-6 p-1 items-center md:items-start z-50 text-background overflow-hidden">
				<div className="flex flex-col gap-4 h-full overflow-hidden">
					<div className="flex items-center justify-between w-full">
						<h1 className="font-bold font-grotesk md:text-xl text-[1px] invisible md:visible">
							{t.sidebar.info}
						</h1>
					</div>
					<Nav />
					<h1 className="font-bold font-grotesk text-xl hidden md:inline">
						{t.sidebar.links}
					</h1>
					<div className="md:hidden inline h-0.5 rounded-full w-full bg-background" />
					<div className="flex flex-col md:gap-1 gap-2 overflow-y-auto flex-1 sidebar-scroll">
						<Option
							link
							href="https://github.com/spyei"
							title="GitHub"
							icon={
								<GithubOriginalIcon
									color="var(--background)"
									size={20}
								/>
							}
						/>
						<Option
							link
							href="https://www.linkedin.com/in/spyei"
							title="LinkedIn"
							icon={
								<LinkedinPlainIcon
									color="var(--background)"
									size={20}
								/>
							}
						/>
						<Option
							link
							href="https://www.instagram.com/ccaiooes"
							title="Instagram"
							icon={
								<Image
									src={
										theme === "dark"
											? "/icons/instagramc.svg"
											: "/icons/instagram.svg"
									}
									alt="Instagram icon"
									width={20}
									height={20}
								/>
							}
						/>
						<Option
							link
							href="https://open.spotify.com/user/31z6rizzti7ttwtyfoyewqozpicq"
							title="Spotify"
							icon={
								<Image
									src={
										theme === "dark"
											? "/icons/spotifyc.svg"
											: "/icons/spotify.svg"
									}
									alt="Instagram icon"
									width={20}
									height={20}
								/>
							}
						/>
					</div>
				</div>
				<div className="w-full flex md:flex-row flex-col md:gap-1 gap-2 items-center mb-3 md:mb-0">
					<ThemeToggle />
					<LocaleToggle />
				</div>
			</section>
		</motion.nav>
	);
}
