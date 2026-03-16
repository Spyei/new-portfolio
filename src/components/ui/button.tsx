import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
	label: string;
	type: "button" | "submit";
	icon?: ReactNode;
	onClick?: () => void;
	disabled?: boolean;
}

export default function Button({
	label,
	type,
	icon,
	onClick,
	disabled,
}: Props) {
	return (
		<motion.button
			whileHover={{ scale: disabled ? 1 : 1.03 }}
			whileTap={{ scale: disabled ? 1 : 0.95 }}
			onClick={onClick}
			type={type}
			disabled={disabled}
			className="disabled:cursor-default disabled:bg-secondary/80 bg-secondary text-background rounded-2xl p-3 px-4 font-bold w-full cursor-pointer transition-colors group flex items-center justify-center gap-2 z-60"
		>
			{label}
			{icon && <div>{icon}</div>}
		</motion.button>
	);
}
