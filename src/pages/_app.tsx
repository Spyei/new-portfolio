import React from "react";
import "../app/globals.css";
import { AppProps } from 'next/app';
import SideBar from "@/components/SideBar";
import { Inter } from "next/font/google";
import { HeroHighlight } from "@/components/ui/hero-highlight";

const inter = Inter({ subsets: ["latin"] });

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <HeroHighlight>
            <section className={`${inter.className} overflow-x-hidden flex text-neutral-700`}>
                <SideBar />
                <Component {...pageProps} />
            </section>
        </HeroHighlight>
    );
};

export default App;