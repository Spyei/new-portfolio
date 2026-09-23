import ptData from "../../public/locales/pt.json";
import enData from "../../public/locales/en.json";

interface Project {
	id: string;
	name: string;
	github?: string;
	website: string;
	icon: string;
	technologies: string[];
	role?: string;
	development?: string;
	cardDescription?: string;
}

const staticProjects: Project[] = [
	{
		id: "leeseo",
		name: "Leeseo",
		website: "https://leeseobot.app",
		icon: "/projects/leeseo.webp",
		technologies: [],
	},
	{
		id: "connections",
		name: "Connections",
		github: "https://github.com/Spyei/connections-website",
		icon: "/projects/connections.webp",
		website: "https://connectionswebsite.vercel.app",
		technologies: ["Next.js", "TypeScript", "Tailwindcss"],
	},
	{
		id: "simo",
		name: "Simo Botlist",
		github: "https://github.com/simoworkspace/website",
		icon: "/projects/simo.webp",
		website: "https://simobotlist.vercel.app/",
		technologies: ["React", "TypeScript", "Tailwindcss"],
	},
];

export function getProjects(locale: "pt" | "en") {
	const translations =
		locale === "pt" ? ptData.data.projects : enData.data.projects;

	return staticProjects.map((p) => ({
		...p,
		...translations.find((t) => t.id === p.id),
	}));
}

export const projects = staticProjects.map((p) => ({
	...p,
	...ptData.data.projects.find((t) => t.id === p.id),
}));
