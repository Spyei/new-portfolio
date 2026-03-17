"use client";
import { motion } from "framer-motion";
import { springElement } from "@/utils/animations";
import { technologies } from "@/utils/technologies";
import TechnologyCard from "../cards/technology";
import type { HomeContextProps } from ".";
import Title from "../ui/title";
import { useI18n } from "@/contexts/i18n";

export default function Technologies({
	isFirstVisit,
	firstVisitDelay,
}: HomeContextProps) {
	const { t } = useI18n();

	return (
		<motion.div
			{...springElement(0.9, firstVisitDelay(1.3, 0.3, isFirstVisit))}
			className="flex flex-col gap-2"
		>
			<Title>{t.home.technologies.title}</Title>
			<span>{t.home.technologies.description}</span>
			<ul className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4">
				{Object.entries(technologies).map(
					([name, { shadow, icon, href }], index) => (
						<TechnologyCard
							href={href}
							firstVisitDelay={firstVisitDelay}
							isFirstVisit={isFirstVisit}
							key={name}
							name={name}
							shadow={shadow}
							icon={icon}
							index={index}
						/>
					),
				)}
			</ul>
		</motion.div>
	);
}
