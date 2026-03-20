"use client";

import { useFirstVisit } from "@/hooks/useFirstVisit";
import Header from "./header";
import ActualProject from "./project";
import Technologies from "./technologies";
import { firstVisitDelay } from "@/utils/animations";
import DiscordActivity from "./activity";
import CarbonBadge from "./carbon";
import type { CarbonData } from "@/types";

export interface HomeContextProps {
	isFirstVisit: boolean;
	firstVisitDelay: (
		delay: number,
		returnDelay: number,
		isFirstVisit: boolean,
	) => number;
}

interface Props {
	carbon: CarbonData;
}

export default function HomeContent({ carbon }: Props) {
	const isFirstVisit = useFirstVisit();

	const visitProps = {
		isFirstVisit,
		firstVisitDelay,
	};

	return (
		<section className="flex flex-col gap-10">
			<Header {...visitProps} />
			<Technologies {...visitProps} />
			<ActualProject {...visitProps} />
			<DiscordActivity {...visitProps} />
			<CarbonBadge {...visitProps} data={carbon} />
		</section>
	);
}
