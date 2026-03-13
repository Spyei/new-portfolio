"use client";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface OptionProps {
	title: string;
	icon: ReactNode;
	href: string;
	link?: boolean;
	isActive?: boolean;
}

export default function Option({
	title,
	icon,
	link,
	href,
	isActive,
}: Readonly<OptionProps>) {
	if (link)
		return (
			<a
				target="_blank"
				rel="noreferrer"
				href={href}
				className="relative flex gap-2 cursor-pointer transition rounded-xl p-2 px-3 group"
			>
				{icon}
				<div className="relative">
					{title}
					<span className="absolute bottom-0 left-0 w-0 h-px bg-background transition-all duration-300 group-hover:w-full" />
				</div>
				<ArrowUpRight
					className="mt-1 group-hover:mt-0 group-hover:ml-1 transition-all"
					size={15}
				/>
			</a>
		);

	return (
		<Link
			href={href}
			className={`relative flex gap-2 cursor-pointer transition rounded-xl p-2.5 px-3 z-10
    ${isActive ? "text-secondary" : "text-background"}`}
		>
			<motion.span
				className="flex gap-2 items-center"
				animate={{
					color: isActive ? "var(--secondary)" : "var(--background)",
				}}
				transition={{ type: "spring", stiffness: 500, damping: 30 }}
			>
				{icon}
				{title}
			</motion.span>
		</Link>
	);
}
