import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["lastfm.freetls.fastly.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lastfm.freetls.fastly.net",
        port: "",
        pathname: "/i/u/**",
      },
    ],
  },
};

export default nextConfig;
