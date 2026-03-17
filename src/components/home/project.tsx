"use client";
import { springElement } from "@/utils/animations";
import { motion } from "framer-motion";
import ProjectCard from "../cards/project";
import type { HomeContextProps } from ".";
import Title from "../ui/title";
import { useI18n } from "@/contexts/i18n";

export default function ActualProject({
	isFirstVisit,
	firstVisitDelay,
}: HomeContextProps) {
	const { t } = useI18n();

	return (
		<motion.div
			{...springElement(0.9, firstVisitDelay(2.4, 1.4, isFirstVisit))}
			className="flex flex-col gap-2"
		>
			<Title>{t.home.currentProject.title}</Title>
			<span className="mb-4">{t.home.currentProject.description}</span>
			<ProjectCard index={0} />
		</motion.div>
	);
}
