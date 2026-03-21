import ActivityContent from "@/components/activity/page";
import { getGithubData } from "@/lib/github";

export default async function ActivityPage() {
	const githubData = await getGithubData();

	return <ActivityContent githubData={githubData} />;
}
