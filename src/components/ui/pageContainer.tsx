"use client";

import { useFirstVisit } from "@/hooks/useFirstVisit";
import type { ReactNode } from "react";
import Container from "./container";
import Title from "./title";
import { firstVisitDelay, springElement } from "@/utils/animations";
import { motion } from "framer-motion";

interface Props {
	title: string;
	description: string;
	children: ReactNode;
}

export default function PageContainer({ children, title, description }: Props) {
	const isFirstVisit = useFirstVisit();

	return (
		<Container>
			<motion.div
				{...springElement(0.9, firstVisitDelay(1.1, 0.1, isFirstVisit))}
				className="flex flex-col gap-2"
			>
				<Title>{title}</Title>
				<span>{description}</span>
				{children}
			</motion.div>
		</Container>
	);
}
