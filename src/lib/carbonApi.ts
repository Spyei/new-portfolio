import type { CarbonData } from "@/types";

const SITE_BYTES = 648100;
const IS_GREEN = 1;

export async function getCarbonData(): Promise<CarbonData | null> {
    try {
        const res = await fetch(
            `https://api.websitecarbon.com/data?bytes=${SITE_BYTES}&green=${IS_GREEN}`,
            { next: { revalidate: 86400 } }
        );

        console.log(res);

        if (!res.ok) return null;

        const data = await res.json();

        console.log(JSON.stringify(data));

        return {
            rating: data.rating,
            cleanerThan: data.cleanerThan,
            grams: data.gco2e,
            green: data.green,
        };
    } catch (error) {
        console.error(error);
        return null;
    }
}