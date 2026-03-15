import ProjectCard from "@/components/cards/project";
import PageContainer from "@/components/ui/pageContainer";
import { projects } from "@/utils/projects";

export default function Projetos() {
	return (
		<PageContainer
			title="Projetos"
			description="Projetos que eu criei ou fiz parte do desenvolvimento."
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
