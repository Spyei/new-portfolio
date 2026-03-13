import type { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
	return <section className="min-h-screen px-4 py-12">{children}</section>;
}
