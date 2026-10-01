import BootstrapPlainIcon from "@devicon/react/bootstrap/plain";
import JavascriptPlainIcon from "@devicon/react/javascript/plain";
import NextjsOriginalIcon from "@devicon/react/nextjs/original";
import NodejsPlainIcon from "@devicon/react/nodejs/plain";
import PostgresqlPlainIcon from "@devicon/react/postgresql/plain";
import PrismaOriginalIcon from "@devicon/react/prisma/original";
import ReactOriginalIcon from "@devicon/react/react/original";
import RustOriginalIcon from "@devicon/react/rust/original";
import TailwindcssOriginalIcon from "@devicon/react/tailwindcss/original";
import TypescriptPlainIcon from "@devicon/react/typescript/plain";
import type { ReactNode } from "react";

interface Props {
	shadow: string;
	icon: ReactNode;
	href: string;
}

export const technologies: Record<string, Props> = {
	TypeScript: {
		shadow: "shadow-secondary/20",
		icon: <TypescriptPlainIcon color="var(--secondary)" size={22} />,
		href: "https://www.typescriptlang.org/",
	},
	JavaScript: {
		shadow: "shadow-secondary/20",
		icon: <JavascriptPlainIcon color="var(--secondary)" size={22} />,
		href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
	},
	"Next.js": {
		shadow: "shadow-secondary/20",
		icon: <NextjsOriginalIcon size={22} />,
		href: "https://nextjs.org/",
	},
	React: {
		shadow: "shadow-secondary/20",
		icon: <ReactOriginalIcon size={22} />,
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
	Prisma: {
		shadow: "shadow-secondary/20",
		icon: <PrismaOriginalIcon color="var(--secondary)" size={22} />,
		href: "https://www.prisma.io/",
	},
	PostgreSQL: {
		shadow: "shadow-secondary/20",
		icon: <PostgresqlPlainIcon color="var(--secondary)" size={22} />,
		href: "https://www.postgresql.org/",
	},
};
