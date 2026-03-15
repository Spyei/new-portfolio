import { useFirstVisit } from "@/hooks/useFirstVisit";
import { springElement } from "@/utils/animations";
import { firstVisitDelay } from "@/utils/animations";
import type { ContactFormErrors } from "@/validators/form";
import { motion } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";

interface Props {
	id: string;
	index: number;
	label: string;
	placeholder: string;
	type: "text" | "textarea";
	error?: string;
	setErrors: Dispatch<SetStateAction<ContactFormErrors>>;
}

const baseClass =
	"p-4 border-border border transition rounded-2xl shadow-md bg-card focus:outline-0";

export default function Input({
	index,
	label,
	placeholder,
	type,
	id,
	error,
	setErrors,
}: Props) {
	const isFirstVisit = useFirstVisit();

	const errorClass = error
		? "border-red-500 focus:border-red-500 hover:border-red-500"
		: "focus:border-secondary hover:border-secondary/30";

	const resetError = () => setErrors((prev) => ({ ...prev, [id]: undefined }));
		
	const component =
		type === "textarea" ? (
			<textarea
				autoComplete="off"
				onChange={resetError}
				rows={10}
				id={id}
				name={id}
				className={`${baseClass} resize-none ${errorClass}`}
				placeholder={placeholder}
			/>
		) : (
			<input
				autoComplete="off"
				onChange={resetError}
				id={id}
				name={id}
				className={`${baseClass} ${errorClass}`}
				type={type}
				placeholder={placeholder}
			/>
		);

	return (
		<motion.div
			{...springElement(
				0.9,
				firstVisitDelay(
					1.4 + index * 0.1,
					0.3 + index * 0.1,
					isFirstVisit,
				),
			)}
			className="flex gap-1 flex-col"
		>
			<div className="flex flex-col gap-2">
				<label
					htmlFor={id}
					className="font-grotesk font-semibold text-lg md:text-xl ml-1"
				>
					{label}
				</label>
				{component}
			</div>

			{error && (
				<span className="text-red-500 text-sm ml-1">{error}</span>
			)}
		</motion.div>
	);
}
