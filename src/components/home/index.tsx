"use client";

import { useFirstVisit } from "@/hooks/useFirstVisit";
import Header from "./header";
import ActualProject from "./project";
import Technologies from "./technologies";
import { firstVisitDelay } from "@/utils/animations";

export interface HomeContextProps {
	isFirstVisit: boolean;
	firstVisitDelay: (delay: number, returnDelay: number, isFirstVisit: boolean) => number;
}

export default function HomeContent() {
	const isFirstVisit = useFirstVisit();

	return (
		<section className="flex flex-col gap-10">
			<Header
				isFirstVisit={isFirstVisit}
				firstVisitDelay={firstVisitDelay}
			/>
			<Technologies
				isFirstVisit={isFirstVisit}
				firstVisitDelay={firstVisitDelay}
			/>
			<ActualProject
				isFirstVisit={isFirstVisit}
				firstVisitDelay={firstVisitDelay}
			/>
		</section>
	);
}
