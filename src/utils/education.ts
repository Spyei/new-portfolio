import ptData from "../../public/locales/pt.json";
import enData from "../../public/locales/en.json";

const staticEducation = {
	certificates: [
		{
			id: 0,
			name: "CS50's Web Programming",
			company: "Harvard University",
			logo: "/education/harvard.jpg",
			url: "https://certificates.cs50.io/0a19600d-14a9-45a6-a6c3-1592b3ebf3cb.pdf?size=letter",
			code: "0a19600d-14a9-45a6-a6c3-1592b3ebf3cb",
		},
	],
	universities: [
		{
			id: 0,
			name: "Estácio",
			logo: "/education/estacio.jpeg",
			url: "https://estacio.br",
		},
	],
};

export function getEducation(locale: "pt" | "en") {
	const data =
		locale === "pt" ? ptData.data.education : enData.data.education;

	return {
		certificates: staticEducation.certificates.map((c) => ({
			...c,
			...data.certificates.find((t) => t.id === c.id),
		})),
		universities: staticEducation.universities.map((u) => ({
			...u,
			...data.universities.find((t) => t.id === u.id),
		})),
	};
}

export const education = {
	certificates: staticEducation.certificates.map((c) => ({
		...c,
		...ptData.data.education.certificates.find((t) => t.id === c.id),
	})),

	universities: staticEducation.universities.map((u) => ({
		...u,
		...ptData.data.education.universities.find((t) => t.id === u.id),
	})),
};
