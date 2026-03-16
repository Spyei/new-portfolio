"use client";

import { firstVisitDelay, springElement } from "@/utils/animations";
import { projects } from "@/utils/projects";
import { technologies } from "@/utils/technologies";
import { motion } from "framer-motion";
import Link from "next/link";
import { useFirstVisit } from "@/hooks/useFirstVisit";
import HighlightLink from "../ui/highlightLink";
import Image from "next/image";

interface Props {
	id?: string;
	index: number;
	page?: boolean;
}

export default function ProjectCard({ id, index, page }: Props) {
	const isFirstVisit = useFirstVisit();

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
			className="w-full flex shadow-lg bg-card border-border border rounded-2xl p-6 gap-5 cursor-pointer group hover:shadow-neutral-900 transition-shadow"
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
			<Link
				className="flex flex-col gap-3"
				href={`/projetos/${project.id}`}
			>
				<div className="flex flex-col gap-1">
					<HighlightLink label={project.name} />
					<span className="mt-2 text-sm text-secondary/70">
						{project.role}
					</span>
					<span className="text-sm sm:text-base">
						{project.cardDescription}
					</span>
				</div>
				<div className="flex flex-col md:flex-row gap-2 mt-2">
					<ul className="flex gap-2 grow">
						{project.technologies.map((technology) => (
							<li key={technology}>
								{technologies[technology].icon}
							</li>
						))}
					</ul>
					<div className="flex flex-col gap-1">
						<span className="italic text-sm">
							{project.development}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
}
