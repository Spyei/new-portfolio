import React from "react";
import "../app/globals.css";
import { AppProps } from 'next/app';
import SideBar from "@/components/SideBar";
import { Inter } from "next/font/google";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { ThemeProvider } from "next-themes";
import { Metadata } from "next"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Spyei Portfolio",
    description: "Um simples portfolio feito por mim mesmo 🗣🔥",
    icons: [
        {
            url: "https://cdn.discordapp.com/avatars/955095844275781693/4007e7943493138d10aeb5d6e64e481c.webp",
            type: "image/webp",
        }
    ],
    openGraph: {
        images: [
            {
                url: "https://cdn.discordapp.com/avatars/955095844275781693/4007e7943493138d10aeb5d6e64e481c.webp",
                type: "image/webp"
            }
        ]
    }
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider attribute="class">
            <HeroHighlight>
                <section className={`${inter.className} overflow-x-hidden flex bg-neutral-900 text-neutral-700 dark:text-neutral-300 min-h-screen`}>
                    <SideBar />
                    <Component {...pageProps} />
                </section>
            </HeroHighlight>
        </ThemeProvider>
    );
};

export default App;