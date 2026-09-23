import HomeContent from "@/components/home";
import Container from "@/components/ui/container";

export default async function Home() {
	const carbon = {
		rating: "A+",
		cleanerThan: 0.95,
		grams: 0.03,
		green: false,
	};

	return (
		<Container>
			<HomeContent carbon={carbon} />
		</Container>
	);
}
