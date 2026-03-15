"use client";

import CertificateCard from "@/components/cards/certificate";
import EducationCard from "@/components/cards/education";
import PageContainer from "@/components/ui/pageContainer";
import Title from "@/components/ui/title";
import { useFirstVisit } from "@/hooks/useFirstVisit";
import { firstVisitDelay, springElement } from "@/utils/animations";
import { education } from "@/utils/education";
import { motion } from "framer-motion";

export default function Experiencia() {
	const isFirstVisit = useFirstVisit();

	return (
		<PageContainer
			title="Educação"
			description="Minha educação e formação acadêmica."
		>
			<ul className="mt-4">
				{education.universities.map((certificate) => (
					<EducationCard
						key={certificate.id}
						certificate={certificate}
					/>
				))}
			</ul>
			<motion.div
				{...springElement(0.9, firstVisitDelay(1.6, 0.5, isFirstVisit))}
				className="flex flex-col gap-2 mt-4"
			>
				<Title>Certificados</Title>
				<span>Minhas certificações e diplomas.</span>
				<ul className="flex flex-col gap-4 mt-4">
					{education.certificates.map((certificate) => (
						<CertificateCard
							key={certificate.id}
							certificate={certificate}
						/>
					))}
				</ul>
			</motion.div>
		</PageContainer>
	);
}
