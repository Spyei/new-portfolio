import type { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
	return <section className="min-h-screen md:px-4 px-1 md:py-12 py-6 overflow-x-hidden">{children}</section>;
}
