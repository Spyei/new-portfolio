import Image from "next/image";
import { motion } from "framer-motion";
import { springElement } from "@/utils/animations";
import type { HomeContextProps } from ".";
import { useI18n } from "@/contexts/i18n";

export default function Header({
	isFirstVisit,
	firstVisitDelay,
}: HomeContextProps) {
	const { t, locale } = useI18n();

	return (
		<motion.div
			{...springElement(0.9, firstVisitDelay(1.1, 0.1, isFirstVisit))}
			className="flex flex-col gap-3"
		>
			<h1 className="font-grotesk font-semibold md:text-5xl text-3xl">
				{t.home.greeting}
			</h1>
			<div>
				{locale === "pt" ? "Sou um" : "I'm a"}{" "}
				<span className="font-bold relative inline whitespace-nowrap">
					{t.home.role}
					<motion.div
						className="absolute left-0 top-4 w-full overflow-hidden"
						initial={{ clipPath: "inset(0 100% 0 0)" }}
						animate={{ clipPath: "inset(0 -5% 0 0)" }}
						transition={{
							duration: 0.8,
							ease: [0.22, 1, 0.36, 1],
							delay: 1.2,
						}}
					>
						<Image
							src="/underline.svg"
							alt="Highlight"
							width={200}
							height={20}
						/>
					</motion.div>
				</span>{" "}
				{t.home.description}
				<div>{t.home.collaboration}</div>
			</div>
		</motion.div>
	);
}
