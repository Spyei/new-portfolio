import React from "react";
import "../app/globals.css";
import { AppProps } from 'next/app';
import SideBar from "@/components/SideBar";
import { Inter } from "next/font/google";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import DarkMode from "@/components/Mixed/DarkMode";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider attribute="class">
            <HeroHighlight>
                <section className={`${inter.className} overflow-x-hidden flex text-neutral-700 dark:text-neutral-300 min-h-screen`}>
                    <SideBar />
                    <Component {...pageProps} />
                </section>
            </HeroHighlight>
        </ThemeProvider>
    );
};

export default App;