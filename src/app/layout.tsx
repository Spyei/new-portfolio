import type { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/sidebar";

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
			<body
				className={`font-sans antialiased bg-background text-secondary dark`}
			>
				<Sidebar />
				<main className="ml-56 flex-1 p-4">
					<div className="max-w-3xl mx-auto">{children}</div>
				</main>
			</body>
		</html>
	);
}
