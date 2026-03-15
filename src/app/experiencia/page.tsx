"use client";

import ExperienceCard from "@/components/cards/experience";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import { useFirstVisit } from "@/hooks/useFirstVisit";
import { firstVisitDelay, springElement } from "@/utils/animations";
import { experiences } from "@/utils/experiences";
import { motion } from "framer-motion";

export default function Experiencia() {
	const isFirstVisit = useFirstVisit();

	return (
		<Container>
			<motion.div
				{...springElement(0.9, firstVisitDelay(1.1, 0.1, isFirstVisit))}
				className="flex flex-col gap-2"
			>
				<Title>Experiência</Title>
				<span>Minha experiência profissional como desenvolvedor.</span>
				<ul className="flex flex-col gap-4 mt-4">
					{experiences.map((experience) => (
						<ExperienceCard
							key={experience.id}
							experience={experience}
							firstVisitDelay={firstVisitDelay}
							isFirstVisit={isFirstVisit}
						/>
					))}
				</ul>
			</motion.div>
		</Container>
	);
}
