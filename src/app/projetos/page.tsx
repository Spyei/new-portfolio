"use client";

import ProjectCard from "@/components/cards/project";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import { useFirstVisit } from "@/hooks/useFirstVisit";
import { firstVisitDelay, springElement } from "@/utils/animations";
import { projects } from "@/utils/projects";
import { motion } from "framer-motion";

export default function Projetos() {
	const isFirstVisit = useFirstVisit();

	return (
		<Container>
			<motion.div
				{...springElement(0.9, firstVisitDelay(1.1, 0.1, isFirstVisit))}
				className="flex flex-col gap-2"
			>
				<Title>Projetos</Title>
				<span>
					Projetos que eu criei ou fiz parte do desenvolvimento.
				</span>
				<ul className="flex flex-col gap-4 mt-4">
					{projects.map((project) => (
						<ProjectCard
							page
							firstVisitDelay={firstVisitDelay}
							isFirstVisit={isFirstVisit}
							key={project.id}
							id={project.id}
							index={projects.findIndex((p) => p.id === project.id)}
						/>
					))}
				</ul>
			</motion.div>
		</Container>
	);
}
