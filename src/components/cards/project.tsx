"use client";

import { firstVisitDelay, springElement } from "@/utils/animations";
import { getProjects } from "@/utils/projects";
import { technologies } from "@/utils/technologies";
import { motion } from "framer-motion";
import { useFirstVisit } from "@/hooks/useFirstVisit";
import HighlightLink from "../ui/highlightLink";
import Image from "next/image";
import { GithubOriginalIcon } from "@devicon/react";
import { useI18n } from "@/contexts/i18n";

interface Props {
	id?: string;
	index: number;
	page?: boolean;
}

export default function ProjectCard({ id, index, page }: Props) {
	const isFirstVisit = useFirstVisit();
	const { locale } = useI18n();
	const projects = getProjects(locale);

	const project = id
		? projects.find((project) => project.id === id)
		: projects[0];

	if (!project) return;

	const delays = page ? [1.4 + index * 0.1, 0.3 + index * 0.1] : [2.8, 1.7];

	return (
		<motion.div
			{...springElement(
				0.9,
				firstVisitDelay(delays[0], delays[1], isFirstVisit),
			)}
			className="w-full flex shadow-lg bg-card border-border border rounded-2xl p-6 gap-5 hover:shadow-xl transition-shadow"
		>
			<div className="md:w-20 md:h-20 w-12 h-12">
				<Image
					className="rounded-lg object-cover w-full h-full md:min-w-20 min-w-12"
					width={64}
					height={64}
					src={project.icon}
					alt={project.name}
				/>
			</div>

			<div className="flex flex-col gap-3 grow">
				<a
					href={project.website}
					target="_blank"
					rel="noopener noreferrer"
					className="flex flex-col gap-1 group"
				>
					<HighlightLink label={project.name} />
					<span className="mt-2 text-sm text-secondary/70">
						{project.role}
					</span>
					<span className="text-sm sm:text-base">
						{project.cardDescription}
					</span>
				</a>

				<div className="flex flex-col md:flex-row gap-2 mt-2">
					<ul className="flex gap-2 grow">
						{project.technologies.map((technology) => (
							<li key={technology}>
								{technologies[technology].icon}
							</li>
						))}
					</ul>
					<div className="flex gap-2 items-center">
						{project.github && (
							<motion.a
								whileHover={{
									scale: 1.1,
									transition: {
										duration: 0.09,
									},
								}}
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="text-secondary/50 hover:text-secondary transition-colors"
							>
								<GithubOriginalIcon color="#F9F8F0" size={22} />
							</motion.a>
						)}
						<span className="italic text-sm">
							{project.development}
						</span>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
