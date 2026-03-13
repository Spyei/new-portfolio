import { motion } from "framer-motion";
import { springElement } from "@/utils/animations";
import { technologies } from "@/utils/technologies";
import TechnologyCard from "../cards/technology";
import type { HomeContextProps } from ".";
import Title from "../ui/title";

export default function Technologies({ isFirstVisit, firstVisitDelay }: HomeContextProps) {
	return (
		<motion.div
			{...springElement(0.9, firstVisitDelay(1.3, 0.3, isFirstVisit))}
			className="flex flex-col gap-2"
		>
			<Title>Tecnologias</Title>
			<span>Linguagens e ferramentas que uso no dia a dia.</span>
			<ul className="grid grid-cols-3 gap-4 mt-4">
				{Object.entries(technologies).map(
					([name, { shadow, icon }], index) => (
						<TechnologyCard
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
