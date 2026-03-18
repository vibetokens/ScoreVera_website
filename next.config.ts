import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    domains: ["scorevera.com"],
  },
};

export default nextConfig;
