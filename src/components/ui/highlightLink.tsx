import { ArrowUpRight } from "lucide-react";

export default function HighlightLink({ label }: { label: string }) {
	return (
		<div className="flex gap-2">
			<h1 className="font-grotesk font-semibold md:text-2xl text-xl relative">
				{label}
				<span className="absolute bottom-0 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
			</h1>
			<ArrowUpRight
				className="mt-2 group-hover:mt-1 group-hover:ml-1 transition-all"
				size={15}
			/>
		</div>
	);
}
