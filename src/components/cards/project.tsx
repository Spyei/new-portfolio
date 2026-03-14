import { springElement } from "@/utils/animations";
import { projects } from "@/utils/projects";
import { technologies } from "@/utils/technologies";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { HomeContextProps } from "../home";

interface Props extends HomeContextProps {
	id?: string;
	index: number;
	page?: boolean;
}

export default function ProjectCard({
	id,
	index,
	isFirstVisit,
	firstVisitDelay,
	page,
}: Props) {
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
			className="w-full shadow-lg bg-card border-border rounded-xl p-6 gap-3 cursor-pointer group hover:shadow-neutral-900 transition-shadow"
		>
			<Link
				className="flex flex-col gap-3"
				href={`/projetos/${project.id}`}
			>
				<div className="flex flex-col gap-1">
					<div className="flex gap-2">
						<h1 className="font-grotesk font-semibold md:text-2xl text-xl relative">
							{project?.name}
							<span className="absolute bottom-0 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
						</h1>
						<ArrowUpRight
							className="mt-2 group-hover:mt-1 group-hover:ml-1 transition-all"
							size={15}
						/>
					</div>
					<span className="text-sm sm:text-base">{project.cardDescription}</span>
				</div>
				<div className="flex flex-col md:flex-row gap-2">
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
