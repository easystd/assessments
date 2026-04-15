import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
  trailingSlash: true,
  transpilePackages: ["@easystd/ui-shared"],
};

export default nextConfig;
