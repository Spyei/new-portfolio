"use client";

import { motion } from "framer-motion";
import { CheckCircle2, X, XCircle } from "lucide-react";
import { useI18n } from "@/contexts/i18n";

export default function PopUp({
	status,
	setStatus,
}: {
	status: "success" | "error";
	setStatus: (status: "idle") => void;
}) {
	const { t } = useI18n();

	const component =
		status === "success" ? (
			<div className="flex gap-1 items-center flex-col">
				<CheckCircle2 size={60} className="text-green-500 mb-2" />
				<h1 className="font-grotesk text-2xl font-bold">
					{t.contact.popup.successTitle}
				</h1>
				<span className="text-sm max-w-72 text-center">
					{t.contact.popup.successDesc}
				</span>
			</div>
		) : (
			<div className="flex gap-1 items-center flex-col">
				<XCircle size={60} className="text-red-500 mb-2" />
				<h1 className="font-grotesk text-2xl font-bold">
					{t.contact.popup.errorTitle}
				</h1>
				<span className="text-sm max-w-72 text-center">
					{t.contact.popup.errorDesc}
				</span>
			</div>
		);

	return (
		<motion.div
			initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
			animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
			exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
			transition={{ duration: 0.1 }}
			onClick={() => setStatus("idle")}
			className="fixed inset-0 flex items-center justify-center z-50 bg-black/40"
		>
			<motion.div
				initial={{ opacity: 0, scale: 0.9, y: 20 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={{ opacity: 0, scale: 0.6, y: 20 }}
				transition={{
					type: "spring",
					stiffness: 300,
					damping: 25,
				}}
				onClick={(e) => e.stopPropagation()}
				className={`
					${status === "success" ? "shadow-green-500/10" : "shadow-red-500/10 "} 
					bg-card border border-border rounded-2xl p-5 py-8 flex flex-col gap-4 items-center shadow-md relative
				`}
			>
				<button
					onClick={() => setStatus("idle")}
					className="absolute top-2 right-2 rounded-full p-2 transition-colors hover:bg-black/20 cursor-pointer"
					type="button"
				>
					<X size={20} />
				</button>
				{component}
			</motion.div>
		</motion.div>
	);
}
