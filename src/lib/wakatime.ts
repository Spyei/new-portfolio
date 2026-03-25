import type { WakaTimeData } from "@/types";

export async function getWakaTimeData(): Promise<WakaTimeData | null> {
	try {
		const key = process.env.WAKATIME_API_KEY;

		if (!key) return null;

		const encoded = Buffer.from(key).toString("base64");
		const headers = { Authorization: `Basic ${encoded}` };
		const opts = { headers };

		const [statsRes, allTimeRes] = await Promise.all([
			fetch(
				"https://wakatime.com/api/v1/users/current/stats/all_time",
				opts,
			),
			fetch(
				"https://wakatime.com/api/v1/users/current/all_time_since_today",
				opts,
			),
		]);

		if (!statsRes.ok || !allTimeRes.ok) return null;

		const { data: s } = await statsRes.json();
		const { data: a } = await allTimeRes.json();

		return {
			totalHours: a.text,
			dailyAverage: s.human_readable_daily_average,
			bestDay: {
				date: new Date(s.best_day.date).toLocaleDateString("pt-BR", {
					day: "2-digit",
					month: "short",
					year: "numeric",
				}),
				text: s.best_day.text,
			},
			since: s.human_readable_range,
			languages: s.languages
				.slice(0, 8)
				.map((l: any) => ({
					name: l.name,
					percent: l.percent,
					text: l.text,
				})),
			editors: s.editors
				.slice(0, 3)
				.map((e: any) => ({
					name: e.name,
					percent: e.percent,
					text: e.text,
				})),
			operatingSystems: s.operating_systems
				.slice(0, 3)
				.map((o: any) => ({
					name: o.name,
					percent: o.percent,
					text: o.text,
				})),
			categories: s.categories
				.filter((c: any) => c.percent > 0.01)
				.slice(0, 2)
				.map((c: any) => ({
					name: c.name,
					percent: c.percent,
					text: c.text,
				})),
		};
	} catch {
		return null;
	}
}
