import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.giphy.com", // Replace with your external asset domain
        port: "",
        pathname: "/**", // Matches all paths under this domain
      },
    ],
  },
};

export default nextConfig;
