import ptData from "../../public/locales/pt.json";
import enData from "../../public/locales/en.json";

const staticExperiences = [
	{
		id: 0,
		company: "Plataforma Astra",
		logo: "/experiences/astra.png",
		technologies: ["Next.js", "TypeScript", "Node.js", "Tailwindcss"],
	},
];

export function getExperiences(locale: "pt" | "en") {
	const translations =
		locale === "pt" ? ptData.data.experiences : enData.data.experiences;

	return staticExperiences.map((e) => ({
		...e,
		...translations.find((t) => t.id === e.id),
	}));
}

export const experiences = staticExperiences.map((e) => ({
	...e,
	...ptData.data.experiences.find((t) => t.id === e.id),
}));
