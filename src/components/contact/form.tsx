import { springElement } from "@/utils/animations";
import type { HomeContextProps } from "../home";
import Input from "./input";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/button";
import { type SubmitEvent, useState } from "react";
import { type ContactFormErrors, validateContactForm } from "@/validators/form";
import PopUp from "./popup";
import { LoaderCircleIcon, Send } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm({
	isFirstVisit,
	firstVisitDelay,
}: HomeContextProps) {
	const [errors, setErrors] = useState<ContactFormErrors>({});
	const [status, setStatus] = useState<Status>("idle");
	const [send, setSend] = useState(false);

	async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
		e.preventDefault();

		const form = e.currentTarget;
		const formData = new FormData(form);

		const data = {
			name: formData.get("name")?.toString() || "",
			email: formData.get("email")?.toString() || "",
			message: formData.get("message")?.toString() || "",
		};

		const validationErrors = validateContactForm(data);

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);

			return;
		}

		setSend(true);

		setTimeout(async () => {
			setSend(false);
			setStatus("loading");

			const res = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					access_key: "2a1e1665-97b5-420e-8fd7-1bc63f0efe2a",
					...data,
				}),
			});

			const json = await res.json();

			if (res.ok && json.success) {
				setStatus("success");

				form.reset();
			} else {
				setStatus("error");
			}
		}, 500);
	}

	return (
		<>
			<form className="flex gap-3 flex-col mt-4" onSubmit={handleSubmit}>
				<input
					type="hidden"
					name="access_key"
					value="2a1e1665-97b5-420e-8fd7-1bc63f0efe2a"
				/>
				<Input
					setErrors={setErrors}
					id="name"
					index={0}
					label="Nome"
					placeholder="Digite seu nome aqui..."
					type="text"
					error={errors.name}
				/>
				<Input
					setErrors={setErrors}
					id="email"
					index={1}
					label="E-mail"
					placeholder="Digite seu e-mail aqui..."
					type="text"
					error={errors.email}
				/>
				<Input
					setErrors={setErrors}
					id="message"
					index={2}
					label="Mensagem"
					placeholder="Digite sua mensagem aqui..."
					type="textarea"
					error={errors.message}
				/>
				<motion.div
					{...springElement(
						0.9,
						firstVisitDelay(1.7, 0.7, isFirstVisit),
					)}
					className="flex gap-2 flex-col mt-2"
				>
					<Button
						icon={
							status === "loading" ? (
								<LoaderCircleIcon
									size={20}
									className="animate-spin"
								/>
							) : (
								<Send
									className={`transition-all group-hover:rotate-45 ${send ? "rotate-45 opacity-0 translate-x-20 xl:translate-x-50 duration-500" : ""}`}
									size={18}
								/>
							)
						}
						disabled={status === "loading" || send}
						label={status === "loading" ? "Enviando" : "Enviar"}
						type="submit"
					/>
				</motion.div>
			</form>

			<AnimatePresence>
				{(status === "success" || status === "error") && (
					<PopUp setStatus={setStatus} status={status} />
				)}
			</AnimatePresence>
		</>
	);
}
