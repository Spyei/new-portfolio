import ptData from "../../public/locales/pt.json";
import enData from "../../public/locales/en.json";

const staticProjects = [
	{
		id: "latens",
		name: "Latens",
		github: "https://github.com/latensworkspace",
		website: "https://latens.vercel.app",
		icon: "/projects/latens.png",
		technologies: ["Next.js", "TypeScript", "Tailwindcss", "PostgreSQL"],
	},
	{
		id: "connections",
		name: "Connections",
		github: "https://github.com/Spyei/connections-website",
		icon: "/projects/connections.png",
		website: "https://connectionswebsite.vercel.app",
		technologies: ["Next.js", "TypeScript", "Tailwindcss"],
	},
	{
		id: "simo",
		name: "Simo Botlist",
		github: "https://github.com/simoworkspace/website",
		icon: "/projects/simo.png",
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
