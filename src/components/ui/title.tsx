export default function Title({ children }: { children: string }) {
	return <h1 className="font-grotesk font-semibold md:text-4xl text-2xl">{children}</h1>;
}