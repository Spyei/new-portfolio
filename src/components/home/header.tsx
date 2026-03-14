import Image from "next/image";
import { motion } from "framer-motion";
import { springElement } from "@/utils/animations";
import type { HomeContextProps } from ".";

export default function Header({ isFirstVisit, firstVisitDelay }: HomeContextProps) {
	return (
		<motion.div
			{...springElement(0.9, firstVisitDelay(1.1, 0.1, isFirstVisit))}
			className="flex flex-col gap-3"
		>
			<h1 className="font-grotesk font-semibold md:text-5xl text-3xl">
				Olá, Eu me chamo Caio
			</h1>
			<div>
				Sou um{" "}
				<span className="font-bold relative inline whitespace-nowrap">
					Desenvolvedor Full Stack
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
				especializado em Next.js e TypeScript, focado em construir
				aplicações modernas com alta performance, código limpo e
				interfaces bem pensadas.
				<div>Acredito que colaboração é essencial para o sucesso.</div>
			</div>
		</motion.div>
	);
}
