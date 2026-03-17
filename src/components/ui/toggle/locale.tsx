"use client";

import FlagEn from "@/components/flags/en";
import FlagBr from "@/components/flags/pt-br";
import { useI18n } from "@/contexts/i18n";
import { motion } from "framer-motion";

export default function LocaleToggle() {
	const { locale, setLocale } = useI18n();

	const isEn = locale === "en";

	return (
		<button
			type="button"
			onClick={() => setLocale(isEn ? "pt" : "en")}
			className="relative shadow-lg border border-border/10 rounded-full p-2 cursor-pointer duration-100 hover:scale-105 transition-shadow"
		>
			<motion.span
				key={locale}
				initial={{ opacity: 0, y: -8 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 6 }}
				transition={{ duration: 0.2 }}
				className="flex items-center gap-1"
			>
				<div className="md:p-0.5 md:w-8 w-5 p-0">
					{isEn ? <FlagBr /> : <FlagEn />}
				</div>
			</motion.span>
		</button>
	);
}
