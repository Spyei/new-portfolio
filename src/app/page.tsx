export const dynamic = "force-dynamic";

import HomeContent from "@/components/home";
import Container from "@/components/ui/container";
import { getCarbonData } from "@/lib/carbonApi";

export const revalidate = 86400;

export default async function Home() {
	const carbon = await getCarbonData();

	return (
		<Container>
			<HomeContent carbon={carbon} />
		</Container>
	);
}
