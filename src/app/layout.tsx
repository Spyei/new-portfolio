import type { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/sidebar";
import Head from "next/head";

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
		<html lang="pt-BR">
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
				className={`font-sans antialiased bg-background text-secondary dark`}
			>
				<Sidebar />
				<main className="md:ml-56 ml-16 flex-1 p-4">
					<div className="max-w-3xl mx-auto">{children}</div>
				</main>
			</body>
		</html>
	);
}
