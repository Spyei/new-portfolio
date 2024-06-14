"use client"
import ImageCarousel from "@/components/Projects/Carousel";
import { languages } from "@/components/Projects/Project";
import { ProjectPageProps } from "@/types";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiLink } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const projects: ProjectPageProps[] = [
    {
        id: "simo",
        devlopment: false,
        github: "https://github.com/simoworkspace/website",
        website: "https://simobotlist.online",
        title: "Simo",
        description: "A Simo é uma plataforma online dedicada à divulgação e descoberta de bots para o Discord, uma plataforma de comunicação popular entre gamers, comunidades online e grupos de amigos. Com uma ampla gama de funcionalidades, A Simo oferece aos usuários a oportunidade de encontrar, avaliar e interagir com uma variedade de bots para enriquecer suas experiências no Discord.",
        images: ["/simo/page.png", "/simo/bot.png", "/simo/profile.png", "/simo/loading.png", "/simo/team.png"],
        tecnologies: ["react", "tailwind", "ts"]
    },
    {
        id: "postboy",
        devlopment: true,
        github: "",
        website: "",
        title: "Postboy",
        description: "O Postboy é uma plataforma online dedicada à realização de requisições para APIs, semelhante ao Postman. Com uma interface intuitiva e fácil de usar, o Postboy oferece aos desenvolvedores e entusiastas da programação a oportunidade de testar, analisar e interagir com diversas APIs. Através de uma ampla gama de funcionalidades, o Postboy permite criar, salvar e organizar requisições, visualizar respostas em tempo real e gerar documentação automatizada, proporcionando uma experiência rica e eficiente para a exploração e integração de APIs.",
        images: ["/postboy/page.png", "/postboy/page.png"],
        tecnologies: ["next", "tailwind", "ts"]
    },
    {
        id: "connections",
        devlopment: true,
        github: "",
        website: "",
        title: "Postboy",
        description: "Connections é um bot de Discord projetado para facilitar conexões entre servidores, promovendo o engajamento e dinamismo em seu servidor. Com uma interface intuitiva e fácil de usar, Connections oferece aos administradores e membros de servidores a oportunidade de criar e fortalecer laços entre diferentes comunidades. Através de uma ampla gama de funcionalidades, Connections permite estabelecer parcerias, organizar eventos inter-servidores, compartilhar anúncios e promover atividades colaborativas, proporcionando uma experiência rica e envolvente para todos os participantes. Seja para expandir sua rede ou simplesmente aumentar a interação dentro da sua comunidade, Connections é a ferramenta ideal para transformar a dinâmica do seu servidor.",
        images: ["/connections/page.png", "/connections/connections.png", "/connections/createcon.png", "/connections/loading.png"],
        tecnologies: ["next", "tailwind", "ts"]
    }
]

export default function ProjectsPage() {
    const { query: { project: id } } = useRouter();
    const [project, setProject] = useState<ProjectPageProps>();

    useEffect(() => {
        const project = projects.find((a) => a.id === id);

        setProject(project as ProjectPageProps);
    }, [id]);

    return (
        <>
            <Head>
                <title>Projeto | {project?.title}</title>
            </Head>
            <section className="w-screen flex justify-center overflow-y-hidden">
                {project && (
                    <div className="max-w-[800px] w-full flex pt-16 mobile:pt-6">
                        <div className="flex gap-3 flex-col tablet:px-6 w-full">
                            <div className="flex gap-2 items-center">
                                <h1 className="font-bold text-3xl mobile:text-xl">{project.title}</h1>
                                {project.devlopment && <div className="p-1 bg-white border-neutral-600 border-2 rounded-xl text-sm">Desenvolvendo</div>}
                            </div>
                            <div className="break-words w-full">{project.description}</div>
                            <div className="flex">
                                <div className="flex w-full gap-2 flex-grow">
                                    {project.tecnologies.map((lang) => languages[lang as keyof typeof languages])}
                                </div>
                                <div className="flex gap-2">
                                    {project.github !== "" && (
                                        <a href={project.github} target="_blank">
                                            <BsGithub size={26} className="hover:fill-black transition"/>
                                        </a>
                                    )}
                                    {project.website !== "" && (
                                        <a href={project.github} target="_blank">
                                            <BiLink size={26} className="hover:fill-[#29BDFF] transition"/>
                                        </a>
                                    )}
                                </div>
                            </div>
                            {project?.images && (
                                <div className="w-full">
                                    <ImageCarousel images={project.images} key={Math.random()} />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}