import BootstrapPlainIcon from "@devicon/react/bootstrap/plain";
import JavascriptOriginalIcon from "@devicon/react/javascript/original";
import NextjsOriginalIcon from "@devicon/react/nextjs/original";
import NodejsPlainIcon from "@devicon/react/nodejs/plain";
import PostgresqlOriginalIcon from "@devicon/react/postgresql/original";
import ReactOriginalIcon from "@devicon/react/react/original";
import RustOriginalIcon from "@devicon/react/rust/original";
import TailwindcssOriginalIcon from "@devicon/react/tailwindcss/original";
import TypescriptOriginalIcon from "@devicon/react/typescript/original";
import type { ReactNode } from "react";

interface Props {
	shadow: string;
	icon: ReactNode;
	href: string;
}

export const technologies: Record<string, Props> = {
	TypeScript: {
		shadow: "shadow-secondary/20",
		icon: <TypescriptOriginalIcon color="var(--secondary)" size={22} />,
		href: "https://www.typescriptlang.org/",
	},
	JavaScript: {
		shadow: "shadow-secondary/20",
		icon: <JavascriptOriginalIcon color="var(--secondary)" size={22} />,
		href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
	},
	"Next.js": {
		shadow: "shadow-secondary/20",
		icon: <NextjsOriginalIcon color="var(--secondary)" size={22} />,
		href: "https://nextjs.org/",
	},
	React: {
		shadow: "shadow-secondary/20",
		icon: <ReactOriginalIcon color="var(--secondary)" size={22} />,
		href: "https://react.dev/",
	},
	"Node.js": {
		shadow: "shadow-secondary/20",
		icon: <NodejsPlainIcon color="var(--secondary)" size={22} />,
		href: "https://nodejs.org/",
	},
	Tailwindcss: {
		shadow: "shadow-secondary/20",
		icon: <TailwindcssOriginalIcon color="var(--secondary)" size={22} />,
		href: "https://tailwindcss.com/",
	},
	Boostrap: {
		shadow: "shadow-secondary/20",
		icon: <BootstrapPlainIcon color="var(--secondary)" size={22} />,
		href: "https://getbootstrap.com/",
	},
	Rust: {
		shadow: "shadow-secondary/20",
		icon: <RustOriginalIcon color="var(--secondary)" size={22} />,
		href: "https://www.rust-lang.org/",
	},
	PostgreSQL: {
		shadow: "shadow-secondary/20",
		icon: <PostgresqlOriginalIcon color="var(--secondary)" size={22} />,
		href: "https://www.postgresql.org/",
	},
};
