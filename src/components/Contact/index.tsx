import { BackgroundGradient } from "../ui/backgroundGradient";
import { motion } from "framer-motion";

export default function ContactComponent() {
    return (
        <section className="w-screen flex justify-center">
            <div className="max-w-[800px] w-full flex pt-16 mobile:pt-6">
                <div className="flex gap-3 flex-col tablet:px-6 w-full">
                    <h1 className="font-bold text-3xl mobile:text-xl">Contato</h1>
                    <span>Preencha o formulário abaixo caso queira me contatar.</span>
                    <form method="POST" action="https://getform.io/f/cf1f145d-e3f5-40a6-b00d-7ee66aebbbd5" className="flex flex-col w-full gap-3">
                        <motion.input
                            initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                            type="text"
                            name="name"
                            required
                            placeholder="Nome"
                            className="p-2 bg-neutral-100 border-2 rounded-lg border-neutral-300 focus:outline-none focus:border-neutral-400 duration-300 transition-colors"
                        />
                        <motion.input
                            initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}
                            type="email"
                            name="email"
                            required
                            placeholder="E-mail"
                            className="p-2 bg-neutral-100 border-2 rounded-lg border-neutral-300 focus:outline-none focus:border-neutral-400 duration-300 transition-colors"
                        />
                        <motion.textarea
                            initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}
                            name="message"
                            placeholder="Mensagem"
                            rows={10}
                            required
                            className="p-2 bg-neutral-100 border-2 rounded-lg border-neutral-300 focus:outline-none focus:border-neutral-400 duration-300 transition-colors"
                        />
                        <BackgroundGradient>
                            <button type="submit" className="w-full border-2 border-neutral-300 rounded-lg bg-neutral-100 p-2 transition-colors">Enviar</button>
                        </BackgroundGradient>
                    </form>
                </div>
            </div>
        </section>
    )
}