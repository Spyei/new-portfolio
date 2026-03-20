import HomeContent from "@/components/home";
import Container from "@/components/ui/container";

export default async function Home() {
	const carbon = {
		rating: "A",
		cleanerThan: 0.88,
		grams: 0.12,
		green: true,
	};

	return (
		<Container>
			<HomeContent carbon={carbon} />
		</Container>
	);
}
