"use client";

import { useI18n } from "@/contexts/i18n";
import type { WakaTimeData } from "@/types";
import { Stat } from "./github";

export default function WakaTimeCard({ data }: { data: WakaTimeData }) {
	const { t } = useI18n();

	return (
		<div className="w-full shadow-lg bg-card border-border border rounded-2xl p-6 flex flex-col gap-4 font-sans">
			<Stat label={t.wakatime.totalCoding} value={data.totalHours} />

			<div className="sm:grid sm:grid-cols-2 flex flex-col gap-3">
				<Stat label={t.wakatime.bestDay} value={data.bestDay.text} />
				<Stat
					label={t.wakatime.dailyAverage}
					value={data.dailyAverage}
				/>
			</div>

			<div className="flex flex-col gap-4">
				<div className="grid md:grid-cols-2 gap-4">
					<Section
						title={t.wakatime.languages}
						items={data.languages}
					/>
					<div className="flex flex-col gap-4">
						<Section
							title={t.wakatime.os}
							items={data.operatingSystems}
						/>
						<Section
							title={t.wakatime.editors}
							items={data.editors}
						/>
					</div>
				</div>
				<Section
					title={t.wakatime.categories}
					items={data.categories}
				/>
			</div>
		</div>
	);
}

function Bar({ percent }: { percent: number }) {
	return (
		<div className="h-0.75 rounded-full bg-secondary/10 overflow-hidden mt-1">
			<div
				className="h-full bg-blue-500 rounded-full"
				style={{ width: `${percent}%` }}
			/>
		</div>
	);
}

function StatRow({
	name,
	text,
	percent,
}: {
	name: string;
	text: string;
	percent: number;
}) {
	return (
		<div className="flex flex-col w-full gap-0.5">
			<div className="justify-between items-baseline flex">
				<span className="text-[12px] font-medium text-secondary truncate">
					{name}
				</span>
				<span className="text-[10px] text-secondary/40 shrink-0 ml-2 tabular-nums hidden sm:flex">
					{text}
				</span>
			</div>
			<Bar percent={percent} />
			<span className="text-[10px] text-secondary/40 shrink-0 tabular-nums sm:hidden flex self-end">
				{text}
			</span>
		</div>
	);
}

function Section({
	title,
	items,
}: {
	title: string;
	items: WakaTimeData["languages"];
}) {
	return (
		<div className="flex flex-col gap-2">
			<span className="text-[10px] font-semibold uppercase tracking-widest text-secondary/40">
				{title}
			</span>
			<div className="flex flex-col gap-2.5">
				{items.map((item) => (
					<StatRow key={item.name} {...item} />
				))}
			</div>
		</div>
	);
}
