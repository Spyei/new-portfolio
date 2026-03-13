import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { HomeContextProps } from "../home";

interface Props extends HomeContextProps {
	name: string;
	shadow: string;
	icon: ReactNode;
    index: number;
}

export default function TechnologyCard({ name, shadow, icon, index, isFirstVisit, firstVisitDelay }: Props) {
	return (
		<motion.li
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				delay: firstVisitDelay(1.3 + index * 0.1, 0.3 + index * 0.1, isFirstVisit),
				duration: 0.5,
				type: "spring",
				stiffness: 300,
				damping: 20,
			}}
			key={name}
			className={`flex gap-2 items-center p-4 bg-card ${shadow} shadow-sm hover:shadow-md transition-shadow border-border border rounded-xl`}
		>
			{icon}
			<span>{name}</span>
		</motion.li>
	);
}
