"use client";

import {
	GithubOriginalIcon,
	LinkedinPlainIcon,
} from "@devicon/react";
import Notch from "./notch";
import { motion } from "framer-motion";
import Image from "next/image";
import Option from "./option";
import Nav from "./nav";

export default function Sidebar() {
	return (
		<motion.nav
			className="fixed z-40 left-0 inset-y-0"
			initial={{ x: -300 }}
			animate={{ x: 0 }}
			transition={{ duration: 0.3 }}
		>
			<Notch />
			<section className="absolute inset-8 left-0 md:w-52 w-16 flex flex-col gap-4 md:p-6 p-1 items-center md:items-start z-50 text-background overflow-hidden">
				<div className="flex flex-col gap-4 h-full overflow-hidden">
					<h1 className="font-bold font-grotesk md:text-xl text-[1px] invisible md:visible">
						Informações
					</h1>
					<Nav />
					<h1 className="font-bold font-grotesk text-xl hidden md:inline">
						Links
					</h1>
					<div className="md:hidden inline h-0.5 rounded-full w-full bg-background" />
					<div className="flex flex-col md:gap-1 gap-2 overflow-y-auto flex-1 sidebar-scroll">
						<Option
							link
							href="https://github.com/spyei"
							title="GitHub"
							icon={
								<GithubOriginalIcon color="#212121" size={20} />
							}
						/>
						<Option
							link
							href="https://www.linkedin.com/in/spyei"
							title="LinkedIn"
							icon={
								<LinkedinPlainIcon color="#212121" size={20} />
							}
						/>
						<Option
							link
							href="https://www.instagram.com/ccaiooes"
							title="Instagram"
							icon={
								<Image
									src="/icons/instagramc.svg"
									alt="Instagram icon"
									width={20}
									height={20}
								/>
							}
						/>
						<Option
							link
							href="https://www.last.fm/user/spyeicaio"
							title="Last.fm"
							icon={
								<Image
									src="/icons/lastfmc.svg"
									alt="Last.fm icon"
									width={20}
									height={20}
								/>
							}
						/>
						<Option
							link
							href="https://anilist.co/user/spyei"
							title="AniList"
							icon={
								<Image
									src="/icons/anilistc.svg"
									alt="AniList icon"
									width={20}
									height={20}
								/>
							}
						/>
					</div>
				</div>
			</section>
		</motion.nav>
	);
}
