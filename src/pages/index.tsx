import Stacks from "@/components/Mixed/Stacks";
import Project from "@/components/Projects/Project";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>Início</title>
            </Head>
            <section className="w-screen flex justify-center">
                <div className="max-w-[800px] w-full flex pt-16 mobile:pt-6">
                    <div className="flex gap-3 flex-col tablet:px-6">
                        <h1 className="font-bold text-3xl mobile:text-xl">Olá! Meu nome é Caio 👋</h1>
                        <div className="flex gap-1 flex-col">
                            <p>Tenho {new Date().getFullYear() - 2007} anos, e sou um <strong>Desenvolvedor Front-end</strong> apaixonado por programação, tenho <strong>1 ano de experiência</strong> na área, fazendo freelances e projetos pessoais.</p>
                            <p>Estou constantemente em busca de aprendizado e aprimoramento dos meus conhecimentos, sempre tentando melhorar a cada dia!</p>
                        </div>
                        <Stacks />
                        <div className="flex flex-col gap-1">
                            <h1 className="font-bold text-2xl mobile:text-xl mt-6">Projetos</h1>
                            <span>Projetos que eu estou desenvolvendo atualmente, <Link href="/projetos" className="text-blue-500 underline">ver mais projetos</Link>.</span>
                            <div className="w-full flex flex-col gap-4">
                                <Project name="Connections" langs={["next", "tailwind", "ts"]} description="Connections Dashboard é um website que modifica propriedades do bot e gerencia conexões." image="/connections/page.png" key={Math.random()} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}