"use client"
import Stacks from "@/components/Mixed/Stacks";
import Project from "@/components/Projects/Project";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";
import { useEffect, useState } from "react";

export default function Home() {
    const [age, setAge] = useState(0);

    useEffect(() => {
        const calculateAge = () => {
            const birthdate = new Date(2007, 8, 8);
            const today = new Date();

            let age = today.getFullYear() - birthdate.getFullYear();
            const monthDiff = today.getMonth() - birthdate.getMonth();
            const dayDiff = today.getDate() - birthdate.getDate();

            if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                age--;
            }

            return age;
        };

        setAge(calculateAge());
    }, []);

    return (
        <>
            <Head>
                <title>Início</title>
                <meta name="description" content="Um portfolio simples feito por mim mesmo 🗣🔥" />
                <meta name="og:title" content="Spyei Portfolio" />
                <meta name="og:description" content="Um portfolio simples feito por mim mesmo 🗣🔥" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="250" />
                <meta property="og:image:height" content="250" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Spyei Portfolio" />
            </Head>
            <div className="w-screen flex justify-center min-h-screen">
                <div className="max-w-[800px] w-full flex pt-16 mobile:pt-6">
                    <div className="flex gap-3 flex-col tablet:px-6">
                        <h1 className="font-bold text-3xl mobile:text-xl">Olá! Meu nome é Caio 👋</h1>
                        <div className="flex gap-1 flex-col">
                            <p>Sou um <Highlight>Desenvolvedor Front-end</Highlight> de 17 anos com paixão por programação e um forte desejo de continuar aprendendo.</p>
                            <p>Cada desafio é uma oportunidade de crescimento para mim, e estou sempre buscando melhorar minhas habilidades técnicas e interpessoais.</p>
                            <p>Acredito que a colaboração é essencial para o sucesso. Adoro contribuir para projetos open-source.</p>
                        </div>
                        <Stacks />
                        <div className="flex flex-col gap-1">
                            <h1 className="font-bold text-2xl mobile:text-xl mt-6">Projetos</h1>
                            <span>Projetos que eu estou desenvolvendo atualmente, <Link href="/projetos" className="text-blue-500 underline">ver mais projetos</Link>.</span>
                            <div className="w-full flex flex-col gap-4 mobile:mb-10">
                                <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                                    <Project name="Connections" langs={["next", "tailwind", "ts"]} description="Connections Dashboard é um website que modifica propriedades do bot e gerencia conexões." image="/connections/page.png" key={Math.random()} />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
