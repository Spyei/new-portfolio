"use client";

import ContactForm from "@/components/contact/form";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import { useFirstVisit } from "@/hooks/useFirstVisit";
import { firstVisitDelay, springElement } from "@/utils/animations";
import { motion } from "framer-motion";
import { useI18n } from "@/contexts/i18n";

export default function Contato() {
	const isFirstVisit = useFirstVisit();
	const { t } = useI18n();

	return (
		<Container>
			<motion.div
				{...springElement(0.9, firstVisitDelay(1.1, 0.1, isFirstVisit))}
				className="flex flex-col gap-2"
			>
				<Title>{t.contact.title}</Title>
				<span>{t.contact.description}</span>
				<ContactForm
					firstVisitDelay={firstVisitDelay}
					isFirstVisit={isFirstVisit}
				/>
			</motion.div>
		</Container>
	);
}
