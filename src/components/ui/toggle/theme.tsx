import { useTheme } from "@/contexts/theme";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

    const isDark = theme === "dark";

	return (
		<button
            type="button"
			onClick={toggleTheme}
			className="p-1"
		>
			<div className="shadow-lg border border-border/10 rounded-full p-2 cursor-pointer duration-100 hover:scale-105 transition-transform hover:shadow-xl">
				<motion.div animate={{ rotate: isDark ? 260 : 0 }}>
					{isDark ? (
						<Sun color="#212121" className="md:size-7 size-5" />
					) : (
						<Moon color="#F9F8F0" className="md:size-7 size-5" />
					)}
				</motion.div>
			</div>
		</button>
	);
}
