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
                Comecei a desenvolver jogos usando as engines <strong>Construct 2</strong> e <strong>Game Maker</strong>. Embora nenhum dos projetos tenha saído como eu esperava, o
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
                Após um ano desenvolvendo bots para o Discord, percebi que o aplicativo tinha muitas limitações. Decidi então explorar algo mais avançado e descobri o <strong>Javascript</strong>.
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

                <p>
                    Enfrentei vários desafios, como implementar autenticação para usuários, configurar um proxy reverso, entender sistemas escaláveis e lidar
                    com diversos aspectos de um projeto em produção. Mesmo começando sem saber muito, cada dificuldade me trouxe novos aprendizados, e o
                    mais importante: eu me divertia desenvolvendo todos os dias.
                </p>
            </div>
        )
    },
    {
        title: "2024",
        content: (
            <div className="flex flex-col gap-3">
                <p>
                    No início deste ano, eu ainda estava trabalhando em um website que havia criado com meu conhecimento básico de React. Melhorava o código todos os
                    dias à medida que aprendia algo novo. No entanto, depois de cinco meses no mesmo projeto, percebi que o código não estava nas melhores condições,
                    já que comecei com pouca experiência tanto em React quanto em boas práticas de programação. Decidi interromper o desenvolvimento, pois estava cada
                    vez mais difícil progredir com aquela base.
                </p>
                <p>
                    Nos primeiros meses do ano, fiz diversos mini-freelances, criando websites básicos e pequenas APIs para gerar uma renda extra enquanto trabalhava nos meus
                    projetos pessoais. Ainda nesse período, recebi uma proposta para refazer um site estático, já em produção, utilizando tecnologias mais modernas.
                    O site antigo era feito em WordPress, e o novo desenvolvimento levou cerca de três meses para ser concluído. Após finalizá-lo, coloquei-o em produção.
                </p>
                <p>
                    Em abril, um amigo me convidou para desenvolver uma dashboard para um projeto que ele havia iniciado. Aceitei o convite, pois estava sem projetos pessoais
                    no momento, e enxerguei nisso uma oportunidade de aprendizado. No projeto, fui responsável por toda a parte de front-end, incluindo UX, UI, logotipo e design
                    geral do site. Também contribuí parcialmente no back-end, enquanto meu amigo cuidava da maior parte dessa área.
                </p>
                <p>
                    Infelizmente, tive que abandonar um projeto em que estava envolvido há cinco meses devido a motivos pessoais e questões com a equipe. Nesse projeto, eu cuidava
                    da dashboard, dos designs e de parte da API. Apesar de não tê-lo finalizado, ele me trouxe muita experiência e uma visão mais ampla sobre o funcionamento do
                    back-end, área em que eu ainda era iniciante. Foi um aprendizado que me ajudou a lidar melhor com problemas em produção.
                </p>
                <p>
                    No meio do ano, recebi uma proposta para implementar um gateway de pagamentos e um sistema de cadastro de usuários no mesmo website que havia modernizado
                    anteriormente. Graças à experiência adquirida no projeto anterior com meu amigo, consegui criar uma API robusta, com funcionalidades como autenticação,
                    cadastro de usuários, integração com banco de dados e gateway de pagamentos. Após entregar essa API, fui contratado como um {`"freelancer fixo"`} por essa
                    empresa, que ficou satisfeita com o trabalho.
                </p>
                <p>
                    Quase no final do ano, comecei a planejar meu próximo projeto, já desenhando o design do site e definindo como seria o desenvolvimento. Aproveitei que tinha
                    um tempo livre após concluir outro projeto e comecei a colocar minhas ideias em prática, sempre buscando me manter atualizado e aprimorar minhas habilidades.
                </p>
                <p>
                    Neste ano, recebi várias propostas para trabalhar em projetos como e-commerces, sites de vendas e muitos outros. Alguns consegui aceitar e concluir em uma semana
                    ou mês; outros tive que recusar devido ao tempo limitado, já que estava no segundo ano do ensino médio. Para otimizar meu tempo, costumava programar no celular
                    durante intervalos na escola, adiantando trabalho sempre que possível.
                </p>
                <p>
                    No final do ano, iniciei um projeto real com um amigo, focado na venda de serviços, comecei a ler alguns livros de programação como o Código limpo, e percebi o 
                    quanto eu poderia melhorar nos meus códigos com boas práticas. Além disso, continuei criando websites e APIs como freelancer.
                </p>
            </div>
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