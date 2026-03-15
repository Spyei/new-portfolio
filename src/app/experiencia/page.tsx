import ExperienceCard from "@/components/cards/experience";
import PageContainer from "@/components/ui/pageContainer";
import { experiences } from "@/utils/experiences";

export default function Experiencia() {
	return (
		<PageContainer
			title="Experiência"
			description="Minha experiência profissional como desenvolvedor."
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
