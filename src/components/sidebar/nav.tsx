"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect, useMemo } from "react";
import {
	Briefcase,
	FolderOpen,
	GraduationCap,
	House,
	UserRound,
} from "lucide-react";
import Option from "./option";
import { useFirstVisit } from "@/hooks/useFirstVisit";
import { useI18n } from "@/contexts/i18n";

export default function Nav() {
	const pathname = usePathname();
	const isFirstVisit = useFirstVisit();
	const { t } = useI18n();

	const routes = useMemo(
		() => [
			{ href: "/", title: t.nav.home, icon: <House size={20} /> },
			{
				href: "/projetos",
				title: t.nav.projects,
				icon: <FolderOpen size={20} />,
			},
			{
				href: "/experiencia",
				title: t.nav.experience,
				icon: <Briefcase size={20} />,
			},
			{
				href: "/educacao",
				title: t.nav.education,
				icon: <GraduationCap size={20} />,
			},
			{
				href: "/contato",
				title: t.nav.contact,
				icon: <UserRound size={20} />,
			},
		],
		[t.nav],
	);

	const refs = useRef<(HTMLDivElement | null)[]>([]);
	const [pillStyle, setPillStyle] = useState<{
		top: number;
		height: number;
	} | null>(null);
	const [introDone, setIntroDone] = useState(false);

	useEffect(() => {
		if (isFirstVisit) {
			const timer = setTimeout(() => setIntroDone(true), 800);
			return () => clearTimeout(timer);
		} else {
			setIntroDone(true);
		}
	}, [isFirstVisit]);

	useEffect(() => {
		const index = routes.findIndex((r) => r.href === pathname);
		const el = refs.current[index];
		if (el) setPillStyle({ top: el.offsetTop, height: el.offsetHeight });
	}, [pathname, routes]);

	return (
		<div className="relative flex flex-col gap-2 md:gap-1">
			{pillStyle && (
				<motion.div
					className="absolute left-0 right-0 bg-background rounded-2xl z-0"
					style={{ transformOrigin: "50% 50%" }}
					initial={
						isFirstVisit
							? {
									opacity: 0,
									scale: 0.5,
									y: pillStyle.height / 2,
								}
							: false
					}
					animate={{
						top: pillStyle.top,
						height: pillStyle.height,
						opacity: 1,
						scale: 1,
						y: 0,
					}}
					transition={
						introDone
							? { type: "spring", stiffness: 500, damping: 30 }
							: {
									type: "spring",
									stiffness: 500,
									damping: 30,
									delay: 0.45,
								}
					}
				/>
			)}
			{routes.map((route, i) => (
				<div
					key={route.href}
					ref={(el) => {
						refs.current[i] = el;
					}}
				>
					<Option
						href={route.href}
						title={route.title}
						icon={route.icon}
						isActive={pathname === route.href && introDone}
					/>
				</div>
			))}
		</div>
	);
}
