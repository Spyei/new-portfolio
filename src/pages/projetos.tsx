import ProjectsComponent from "@/components/Projects";
import Head from "next/head";

export default function Projetos() {
    return (
        <>
            <Head>
                <title>Projetos</title>
                <meta name="description" content="Projetos que eu estou desenvolvendo atualmente" />
                <meta name="og:title" content="Projetos" />
                <meta name="og:description" content="Projetos que eu estou desenvolvendo atualmente" />
                <meta name="twitter:title" content="Projetos" />
                <meta name="twitter:description" content="Projetos que eu estou desenvolvendo atualmente" />
            </Head>
            <ProjectsComponent/>
        </>
    )
}