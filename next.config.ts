import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		turbopackFileSystemCacheForDev: false,
	},
};

export default nextConfig;
