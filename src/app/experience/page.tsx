"use client";
import ExperienceCard from "@/components/cards/experience";
import PageContainer from "@/components/ui/pageContainer";
import { getExperiences } from "@/utils/experiences";
import { useI18n } from "@/contexts/i18n";

export default function ExperiencePage() {
	const { t, locale } = useI18n();
	const experiences = getExperiences(locale);

	return (
		<PageContainer
			title={t.experience.title}
			description={t.experience.description}
		>
			<ul className="flex flex-col gap-4 mt-4">
				{experiences.map((experience) => (
					<ExperienceCard
						key={experience.id}
						experience={experience}
					/>
				))}
			</ul>
		</PageContainer>
	);
}
