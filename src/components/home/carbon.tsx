"use client";

import { useI18n } from "@/contexts/i18n";
import type { CarbonData } from "@/types";
import type { HomeContextProps } from ".";
import { motion } from "framer-motion";
import { springElement } from "@/utils/animations";
import { ArrowUpRight } from "lucide-react";

interface Props extends HomeContextProps {
	data: CarbonData;
}

export default function CarbonBadge({
	data,
	isFirstVisit,
	firstVisitDelay,
}: Props) {
	const { t } = useI18n();

	return (
		<motion.div
			{...springElement(0.9, firstVisitDelay(4, 3, isFirstVisit))}
		>
			<a
				href="https://www.websitecarbon.com/website/spyeicaio-vercel-app/"
				target="_blank"
				rel="noreferrer"
				className="flex items-center gap-3 group transition-colors bg-card p-4 shadow-lg rounded-2xl"
			>
				<span className="font-bold text-3xl text-green-500">
					{data.rating}
				</span>
				<div className="flex flex-col gap-1 md:text-base text-sm">
					<div className="flex gap-1">
						<div className="relative">
							{t.carbon.cleanerThan.replace(
								"{percent}",
								String(Math.round(data.cleanerThan * 100)),
							)}
							<span className="absolute bottom-0 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
						</div>
						<ArrowUpRight
							className="mt-1 group-hover:mt-0 group-hover:ml-1 transition-all"
							size={13}
						/>
					</div>
					<div className="flex md:flex-row md:text-sm flex-col md:gap-2 text-xs text-secondary/80">
						<span>
							{t.carbon.co2PerVisit.replace(
								"{grams}",
								data.grams.toFixed(2),
							)}
						</span>
						{data.green && (
							<span className="text-green-500/90">
								{t.carbon.renewable}
							</span>
						)}
					</div>
				</div>
			</a>
		</motion.div>
	);
}
