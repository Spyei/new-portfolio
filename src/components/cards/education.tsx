"use client";

import { firstVisitDelay, springElement } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { useFirstVisit } from "@/hooks/useFirstVisit";
import type { education } from "@/utils/education";
import HighlightLink from "../ui/highlightLink";

interface Props {
	certificate: (typeof education.universities)[0];
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
			className="w-full shadow-lg bg-card border-border border rounded-2xl p-6 gap-1 group cursor-pointer hover:shadow-neutral-900 transition-shadow"
		>
			<a
				target="_blank"
				rel="noreferrer"
				className="flex gap-2"
				href={certificate.url}
			>
				<div className="mr-2">
					<Image
						className="rounded-lg w-full h-auto max-w-20 min-w-17.5"
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
