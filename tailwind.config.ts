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
                "mobile": { max: "450px" },
                "mobilemin": { min: "450px" },
                "tabletmin": { max: "1000px" },
            },
        },
        variants: {
            fill: ["hover", "focus"]
        },
    },
    plugins: [],
};

export default config;
