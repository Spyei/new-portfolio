import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		turbopackFileSystemCacheForDev: false,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.discordapp.com",
			},
			{
				protocol: "https",
				hostname: "i.scdn.co",
			},
			{
				protocol: "https",
				hostname: "media.discordapp.net",
			},
			{
				protocol: "https",
				hostname: "s4.anilist.co",
			},
			{
				protocol: "https",
				hostname: "lastfm.freetls.fastly.net",
			},
			{
				protocol: "https",
				hostname: "i.imgur.com",
			},
			{
				protocol: "https",
				hostname: "lastfm.freetls.fastly.net",
			},
			{
				protocol: "https",
				hostname: "*.fastly.net",
			},
			{
				protocol: "https",
				hostname: "i.imgur.com",
			},
			{
				protocol: "https",
				hostname: "is1-ssl.mzstatic.com",
			},
			{
				protocol: "https",
				hostname: "is2-ssl.mzstatic.com",
			},
			{
				protocol: "https",
				hostname: "is3-ssl.mzstatic.com",
			},
			{
				protocol: "https",
				hostname: "is4-ssl.mzstatic.com",
			},
			{
				protocol: "https",
				hostname: "is5-ssl.mzstatic.com",
			},
			{
				protocol: "https",
				hostname: "*.mzstatic.com",
			},
		],
	},
};

export default nextConfig;
