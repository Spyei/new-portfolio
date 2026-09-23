import HomeContent from "@/components/home";
import Container from "@/components/ui/container";

export default async function Home() {
	const carbon = {
		rating: "E",
		dirtierThan: 0.57,
	};

	return (
		<Container>
			<HomeContent carbon={carbon} />
		</Container>
	);
}
