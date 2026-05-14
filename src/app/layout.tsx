import type { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/sidebar";
import Head from "next/head";
import { I18nProvider } from "@/contexts/i18n";
import { ThemeProvider } from "@/contexts/theme";
import UsagiManager from "@/components/mixed/usagi";

export const metadata: Metadata = {
	title: "Portfolio",
	description: "portofolio legal e bonito",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="pt-BR" className="transition-colors">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Familjen+Grotesk:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body
				className="font-sans antialiased bg-background text-secondary transition-all ease-in-out relative"
			>
				<I18nProvider>
					<ThemeProvider>
						<Sidebar />
						<main className="md:ml-56 ml-16 flex-1 p-4 transition-colors">
							<div className="max-w-3xl mx-auto">{children}</div>
						</main>
					</ThemeProvider>
				</I18nProvider>
				<UsagiManager />
			</body>
		</html>
	);
}
