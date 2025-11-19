import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.figma.com",
                pathname: "/api/mcp/asset/**",
            },
        ]
    },

    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
