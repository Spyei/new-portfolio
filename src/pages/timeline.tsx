import Head from "next/head";
import { Timeline as TimelineComponent, TimelineEntry } from "@/components/ui/timeline";

const data: TimelineEntry[] = [
    {
        title: "2018",
        content: (
            <span>
                Meu primeiro contato com a programação aconteceu no quinto ano no ensino fundamental, durante as aulas de informática da escola. Sem saber exatamente
                o que era programação, encontrei uma sessão chamada <strong>Ciências da Computação</strong> no site das aulas. Curioso, cliquei e descobri
                diversos jogos criados pela comunidade. Fiquei fascinado com o processo e comecei a explorar como esses jogos eram feitos.
                Foi aí que decidi criar meus próprios projetos, <strong>e o primeiro que publiquei foi um jogo de quiz sobre Minecraft</strong>, desenvolvido
                com HTML, CSS e JavaScript (mesmo eu não sabendo na época oque era isso de fato).
            </span>
        )
    },
    {
        title: "2020",
        content: (
            <span>
                Comecei a desenvolver jogos usando as engines **Construct 2** e **Game Maker**. Embora nenhum dos projetos tenha saído como eu esperava, o
                que mais me motivava era mostrar os resultados para amigos e familiares. Além disso, me divertia bastante desenhando as texturas, criando
                personagens e inventando histórias para os jogos, nessa engine eu não botava a mão no código, era orientado pela interface gráfica.
            </span>
        )
    },
    {
        title: "2021",
        content: (
            <span>
                Foi então que comecei a me interessar de verdade por programação, embora ainda não tivesse nenhum projeto em mente ou muito conhecimento na área.
                Tudo mudou quando descobri um aplicativo chamado <strong>Bot Designer for Discord</strong>, que permitia criar bots para Discord de maneira simplificada.
                Para exibir o ping do bot, por exemplo, bastava escrever $ping no código. Essa ferramenta me ajudou muito a entender conceitos fundamentais de programação,
                como condicionais, loops, funções, estados e etc.
            </span>
        )
    },
    {
        title: "2022",
        content: (
            <span>
                Após um ano desenvolvendo bots para o Discord, percebi que o aplicativo tinha muitas limitações. Decidi então explorar algo mais avançado e descobri o **JavaScript**.
                Com ele, pude criar funcionalidades que antes eram impossíveis no aplicativo de bots. Foi aí que comecei a brincar com JavaScript, criando bots simples e até algumas
                APIs, mesmo sabendo apenas o essencial para desenvolver esses projetos básicos.
            </span>
        )
    },
    {
        title: "2023",
        content: (
            <div className="flex flex-col gap-3">
                <p>
                    No início deste ano, meu pai comprou um curso de programação para mim. Com a experiência que já tinha acumulado criando bots para
                    o Discord e jogos, comecei a estudar HTML e CSS, seguindo o curso e colocando os projetos em prática. Depois, avancei para o JavaScript DOM e,
                    em seguida, para o React.
                </p>

                <p>No meio do ano, decidi que era hora de criar um projeto real. Mesmo conhecendo apenas o básico de React e um pouco de NodeJS para a API,
                    encontrei uma pessoa disposta a me ajudar. Ele cuidou da maior parte da API, enquanto eu trabalhei em partes importantes, como o sistema de
                    autenticação. Foi uma excelente escolha criar um projeto real, com usuários e uma equipe colaborando. Aprendi a usar o GitHub para
                    versionamento de código especificamente para esse projeto.
                </p>

                <p>Enfrentei vários desafios, como implementar autenticação para usuários, configurar um proxy reverso, entender sistemas escaláveis e lidar
                    com diversos aspectos de um projeto em produção. Mesmo começando sem saber muito, cada dificuldade me trouxe novos aprendizados, e o
                    mais importante: eu me divertia desenvolvendo todos os dias.
                </p>
            </div>
        )
    },
    {
        title: "2023",
        content: (
            <span>
                No começo desse ano, meu pai comprou para mim um curso de programação, com toda essa experiencia passada que eu adquiri criando bots para o Discord e jogos, comecei a
                estudar com HTML e CSS, seguia o curso e colocava os projetos de lá em prática, depois parti para o Javascript DOM, e depois dele foi para o react, foi quando no meio do ano
                eu decidi criar um projeto real, mesmo não sabendo só o básico de React para criar o site do meu projeto, e um pouco de NodeJS para a API, eu encontrei uma pessoa
                para me ajudar a criar o projeto, ele fez a api, e eu fiz umas partes da api, como autenticação e etc, ai começamos a criar, foi uma ótima escolha ter criado um projeto que era
                real, que usuários usassem ele, e que um time fizesse ele, nós usavamos github para versionamento de código, eu aprendi a usar github só para esse projeto, eu passei por vários
                desafios, de como criar um autenticador para usuários logados, e até fazer um proxy reverso, ou de como funcionava algo escalavel, e várias coisas de um projeto em produção
                mesmo eu não sabendo de nada no inicio, só pelo fato de eu ter começado esse projeto, eu aprendi diversas coisas, e eu me divertia fazendo ele diariamente.
            </span>
        )
    }
];

export default function Timeline() {
    return (
        <>
            <Head>
                <title>Linha do tempo</title>
            </Head>
            <section className="w-screen flex justify-center">
                <div className="max-w-[800px] w-full flex pt-16 mobile:pt-6">
                    <div className="flex gap-3 flex-col tablet:px-6 w-full">
                        <h1 className="font-bold text-3xl mobile:text-xl">Timeline</h1>
                        <span>Uma visão dos meus principais marcos e aprendizados ao longo da jornada como desenvolvedor.</span>
                        <TimelineComponent data={data} />
                    </div>
                </div>
            </section>
        </>
    )
}