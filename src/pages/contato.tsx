import ContactComponent from "@/components/Contact";
import Head from "next/head";

export default function Contato() {
    return (
        <>
            <Head>
                <title>Contato</title>
                <meta name="description" content="Página de contato, caso queira me contatar." />
                <meta name="og:title" content="Contato" />
                <meta name="og:description" content="Página de contato, caso queira me contatar." />
                <meta name="twitter:title" content="Contato" />
                <meta name="twitter:description" content="Página de contato, caso queira me contatar." />
            </Head>
            <ContactComponent />
        </>
    )
}