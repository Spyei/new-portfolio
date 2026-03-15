"use client";

import { firstVisitDelay, springElement } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { useFirstVisit } from "@/hooks/useFirstVisit";
import type { education } from "@/utils/education";
import HighlightLink from "../ui/highlightLink";
import { Award, AwardIcon } from "lucide-react";

interface Props {
	certificate: (typeof education.certificates)[0];
}

export default function CertificateCard({ certificate }: Props) {
	const isFirstVisit = useFirstVisit();

	return (
		<motion.div
			{...springElement(
				0.9,
				firstVisitDelay(
					1.8 + certificate.id * 0.1,
					0.8 + certificate.id * 0.1,
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
                    <span>{certificate.company}</span>
					<div className="flex flex-col gap-1 text-sm text-secondary/70">
						<span>
							Emitido em {certificate.time}
						</span>
                        <span>Código da credencial {certificate.code}</span>
					</div>
				</div>
			</a>
		</motion.div>
	);
}
