import {
	BootstrapPlainIcon,
	JavascriptOriginalIcon,
	NextjsOriginalIcon,
	NodejsPlainIcon,
	PostgresqlOriginalIcon,
	ReactOriginalIcon,
	RustOriginalIcon,
	TailwindcssOriginalIcon,
	TypescriptOriginalIcon,
} from "@devicon/react";
import type { ReactNode } from "react";

export const technologies: Record<string, { shadow: string; icon: ReactNode }> =
	{
		TypeScript: {
			shadow: "shadow-[#007acc]/20",
			icon: <TypescriptOriginalIcon size={22} />,
		},
		JavaScript: {
			shadow: "shadow-[#f7df1e]/20",
			icon: <JavascriptOriginalIcon size={22} />,
		},
		"Next.js": {
			shadow: "shadow-[#ffffff]/20",
			icon: <NextjsOriginalIcon size={22} />,
		},
		React: {
			shadow: "shadow-[#61dafb]/20",
			icon: <ReactOriginalIcon size={22} />,
		},
		"Node.js": {
			shadow: "shadow-[#339933]/20",
			icon: <NodejsPlainIcon size={22} />,
		},
		Tailwindcss: {
			shadow: "shadow-[#06b6d4]/20",
			icon: <TailwindcssOriginalIcon size={22} />,
		},
		Boostrap: {
			shadow: "shadow-[#712cf9]/20",
			icon: <BootstrapPlainIcon size={22} />,
		},
		Rust: {
			shadow: "shadow-[#b7410e]/20",
			icon: <RustOriginalIcon color="#b7410e" size={22} />,
		},
		PostgreSQL: {
			shadow: "shadow-[#4169e1]/20",
			icon: <PostgresqlOriginalIcon size={22} />,
		},
	};