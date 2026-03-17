"use client";

import type { getExperiences } from "@/utils/experiences";
import { firstVisitDelay, springElement } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { technologies } from "@/utils/technologies";
import { useFirstVisit } from "@/hooks/useFirstVisit";

type Experience = ReturnType<typeof getExperiences>[0];

interface Props {
	experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
	const isFirstVisit = useFirstVisit();

	return (
		<motion.div
			{...springElement(
				0.9,
				firstVisitDelay(
					1.4 + experience.id * 0.1,
					0.3 + experience.id * 0.1,
					isFirstVisit,
				),
			)}
			className="flex w-full shadow-lg bg-card border-border border rounded-2xl p-6 gap-1" 
		>
			<div>
				<Image
					className="rounded-lg w-full h-auto max-w-[320px] min-w-12"
					width={320}
					height={320}
					src={experience.logo}
					alt={experience.company}
				/>
			</div>
			<div className="flex flex-col gap-1">
				<h1 className="font-grotesk font-semibold md:text-2xl text-xl relative">
					{experience.company}
				</h1>
				<div className="flex flex-col gap-1 text-sm">
					<span>{experience.role}</span>
					<span className="text-secondary/70">{experience.type}</span>
					<span className="text-secondary/70">{experience.time}</span>
				</div>
				<div className="my-2 mb-3">{experience.description}</div>
				<div className="flex gap-2">
					{experience.technologies.map((technology) => (
						<li key={technology}>
							{technologies[technology].icon}
						</li>
					))}
				</div>
			</div>
		</motion.div>
	);
}
