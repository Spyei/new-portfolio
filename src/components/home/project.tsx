import { springElement } from "@/utils/animations";
import { motion } from "framer-motion";
import ProjectCard from "../cards/project";
import type { HomeContextProps } from ".";
import Title from "../ui/title";

export default function ActualProject({ isFirstVisit, firstVisitDelay }: HomeContextProps) {
	return (
		<motion.div
			{...springElement(0.9, firstVisitDelay(2.4, 1.4, isFirstVisit))}
			className="flex flex-col gap-2"
		>
			<Title>Projeto Atual</Title>
			<span className="mb-4">No que estou trabalhando agora.</span>
			<ProjectCard firstVisitDelay={firstVisitDelay} isFirstVisit={isFirstVisit} id="connections" index={0} />
		</motion.div>
	);
}
