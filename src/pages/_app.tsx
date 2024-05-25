import React from "react";
import "../app/globals.css";
import { AppProps } from 'next/app';
import SideBar from "@/components/SideBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <section className={`${inter.className} overflow-x-hidden flex flex-1 text-neutral-700`}>
            <SideBar />
            <Component {...pageProps} />
        </section>
    );
};

export default App;