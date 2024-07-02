"use client";
import React from "react";
import "../app/globals.css";
import { AppProps } from 'next/app';
import SideBar from "@/components/SideBar";
import { Inter } from "next/font/google";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { ThemeProvider } from "next-themes";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <HeroHighlight>
            <ThemeProvider attribute="class">
                <section className={`${inter.className} overflow-x-hidden flex min-h-screen text-neutral-700 dark:text-neutral-300`}>
                    <SideBar />
                    <Component {...pageProps} />
                </section>
            </ThemeProvider>
        </HeroHighlight>
    );
};

export default App;