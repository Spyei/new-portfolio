"use client";

import CertificateCard from "@/components/cards/certificate";
import EducationCard from "@/components/cards/education";
import PageContainer from "@/components/ui/pageContainer";
import Title from "@/components/ui/title";
import { useFirstVisit } from "@/hooks/useFirstVisit";
import { firstVisitDelay, springElement } from "@/utils/animations";
import { getEducation } from "@/utils/education";
import { useI18n } from "@/contexts/i18n";
import { motion } from "framer-motion";

export default function Educacao() {
	const isFirstVisit = useFirstVisit();
	const { t, locale } = useI18n();
	const education = getEducation(locale);

	return (
		<PageContainer
			title={t.education.title}
			description={t.education.description}
		>
			<ul className="mt-4">
				{education.universities.map((university) => (
					<EducationCard
						key={university.id}
						certificate={university}
					/>
				))}
			</ul>
			<motion.div
				{...springElement(0.9, firstVisitDelay(1.6, 0.5, isFirstVisit))}
				className="flex flex-col gap-2 mt-4"
			>
				<Title>{t.education.certificates.title}</Title>
				<span>{t.education.certificates.description}</span>
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
