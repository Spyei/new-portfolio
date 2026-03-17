"use client";
import ProjectCard from "@/components/cards/project";
import PageContainer from "@/components/ui/pageContainer";
import { getProjects } from "@/utils/projects";
import { useI18n } from "@/contexts/i18n";

export default function Projetos() {
	const { t, locale } = useI18n();
	const projects = getProjects(locale);

	return (
		<PageContainer
			title={t.projects.title}
			description={t.projects.description}
		>
			<ul className="flex flex-col gap-4 mt-4">
				{projects.map((project) => (
					<ProjectCard
						page
						key={project.id}
						id={project.id}
						index={projects.findIndex((p) => p.id === project.id)}
					/>
				))}
			</ul>
		</PageContainer>
	);
}
