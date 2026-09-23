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
		shadow: "shadow-[#007acc]/20",
		icon: <TypescriptOriginalIcon size={22} />,
		href: "https://www.typescriptlang.org/",
	},
	JavaScript: {
		shadow: "shadow-[#f7df1e]/20",
		icon: <JavascriptOriginalIcon size={22} />,
		href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
	},
	"Next.js": {
		shadow: "shadow-[#ffffff]/20",
		icon: <NextjsOriginalIcon size={22} />,
		href: "https://nextjs.org/",
	},
	React: {
		shadow: "shadow-[#61dafb]/20",
		icon: <ReactOriginalIcon size={22} />,
		href: "https://react.dev/",
	},
	"Node.js": {
		shadow: "shadow-[#339933]/20",
		icon: <NodejsPlainIcon size={22} />,
		href: "https://nodejs.org/",
	},
	Tailwindcss: {
		shadow: "shadow-[#06b6d4]/20",
		icon: <TailwindcssOriginalIcon size={22} />,
		href: "https://tailwindcss.com/",
	},
	Boostrap: {
		shadow: "shadow-[#712cf9]/20",
		icon: <BootstrapPlainIcon size={22} />,
		href: "https://getbootstrap.com/",
	},
	Rust: {
		shadow: "shadow-[#b7410e]/20",
		icon: <RustOriginalIcon color="#b7410e" size={22} />,
		href: "https://www.rust-lang.org/",
	},
	PostgreSQL: {
		shadow: "shadow-[#4169e1]/20",
		icon: <PostgresqlOriginalIcon size={22} />,
		href: "https://www.postgresql.org/",
	},
};
