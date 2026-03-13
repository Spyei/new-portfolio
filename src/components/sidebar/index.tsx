"use client";

import { GithubOriginalIcon, LinkedinOriginalIcon } from "@devicon/react";
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
			<section className="absolute inset-8 left-0 w-52 flex flex-col gap-4 p-6 z-50 text-background overflow-hidden">
				<div className="flex flex-col gap-4 h-full overflow-hidden">
					<h1 className="font-bold font-grotesk text-xl">
						Informações
					</h1>
					<Nav />
					<h1 className="font-bold font-grotesk text-xl">Links</h1>
					<div className="flex flex-col gap-1 overflow-y-auto flex-1 sidebar-scroll">
						<Option
							link
							href="https://github.com/spyei"
							title="GitHub"
							icon={<GithubOriginalIcon size={20} />}
						/>
						<Option
							link
							href="https://www.linkedin.com/in/spyei"
							title="LinkedIn"
							icon={<LinkedinOriginalIcon size={20} />}
						/>
						<Option
							link
							href="https://www.instagram.com/ccaiooes"
							title="Instagram"
							icon={
								<Image
									src="/icons/instagram.svg"
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
									src="/icons/lastfm.svg"
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
								<div className="bg-background rounded-sm pt-0.5">
									<Image
										src="/icons/anilist.svg"
										alt="AniList icon"
										width={20}
										height={20}
									/>
								</div>
							}
						/>
					</div>
				</div>
			</section>
		</motion.nav>
	);
}
