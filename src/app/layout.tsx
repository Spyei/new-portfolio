import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
    themeColor: "#29BDFF"
} 

export const metadata: Metadata = {
    title: "Página inicial",
    description: "Um simples portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt-br">
            <body className={inter.className}>
                <main className="overflow-x-hidden flex flex-1 text-neutral-700">
                    <SideBar />
                    {children}
                </main>
            </body>
        </html>
    );
}
