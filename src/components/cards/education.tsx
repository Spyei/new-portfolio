"use client";

import { firstVisitDelay, springElement } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { useFirstVisit } from "@/hooks/useFirstVisit";
import type { getEducation } from "@/utils/education";
import HighlightLink from "../ui/highlightLink";

type University = ReturnType<typeof getEducation>["universities"][0];

interface Props {
	certificate: University;
}

export default function EducationCard({ certificate }: Props) {
	const isFirstVisit = useFirstVisit();

	return (
		<motion.div
			{...springElement(
				0.9,
				firstVisitDelay(
					1.4 + certificate.id * 0.1,
					0.3 + certificate.id * 0.1,
					isFirstVisit,
				),
			)}
			className="w-full shadow-lg bg-card border-border border rounded-2xl p-6 gap-1 group cursor-pointer hover:shadow-xl transition-shadow flex flex-col md:flex-row"
		>
			<a
				target="_blank"
				rel="noreferrer"
				className="flex gap-2 flex-col md:flex-row"
				href={certificate.url}
			>
				<div className="mr-2 md:w-20 md:h-20 w-16 h-16">
					<Image
						className="rounded-lg w-full h-auto max-w-20 min-w-12"
						width={320}
						height={320}
						src={certificate.logo}
						alt={certificate.name}
					/>
				</div>
				<div className="flex flex-col gap-1">
					<HighlightLink label={certificate.name} />
					<div className="flex flex-col">
						<span>{certificate.course}</span>
						<span>{certificate.degree}</span>
					</div>
					<div className="flex flex-col gap-1 text-sm">
						<span className="text-secondary/70">
							{certificate.time}
						</span>
					</div>
				</div>
			</a>
		</motion.div>
	);
}
