import ActivityContent from "@/components/activity/page";
import { getAnilistData } from "@/lib/anilist";
import { getHardcoverData } from "@/lib/hardcover";
import { getGithubData } from "@/lib/github";
import { getLastfmData } from "@/lib/lastfm";
import { getWakaTimeData } from "@/lib/wakatime";

export default async function ActivityPage() {
	const [githubData, wakaTimeData, lastFmData, anilistData, hardcoverData] =
		await Promise.all([
			getGithubData(),
			getWakaTimeData(),
			getLastfmData(),
			getAnilistData(),
			getHardcoverData(),
		]);

	return (
		<ActivityContent
			githubData={githubData}
			wakatimeData={wakaTimeData}
			lastFmData={lastFmData}
			anilistData={anilistData}
			hardcoverData={hardcoverData}
		/>
	);
}
