import type { HTMLMotionProps } from "framer-motion";

export const firstVisitDelay = (
	firstDelay: number,
	returnDelay: number,
	isFirstVisit: boolean,
) => (isFirstVisit ? firstDelay : returnDelay);

export const springElement = (
	scale: number = 0.5,
	delay: number = 0.8,
): HTMLMotionProps<"div"> => ({
	initial: { opacity: 0, scale },
	animate: { opacity: 1, scale: 1 },
	transition: {
		type: "spring",
		stiffness: 600,
		damping: 20,
		delay,
	},
});

export const scrollReveal = (): HTMLMotionProps<"div"> => ({
	initial: { opacity: 0, y: 24 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.15 },
	transition: {
		type: "spring",
		stiffness: 120,
		damping: 20,
	},
});
