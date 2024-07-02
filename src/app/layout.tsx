import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="pt-br">
            <ThemeProvider attribute="class">
                <body className={inter.className}>
                    <SideBar />
                    {children}
                </body>
            </ThemeProvider>
        </html>
    );
}
