import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            screens: {
                "tablet": { max: "1000px" },
                "tabletdesk": { min: "1000px" },
                "mobile": { max: "450px" }
            },
            colors: {
                "cianolegal": "#29BDFF",
            }
        }
    },
    plugins: [],
};

export default config;
