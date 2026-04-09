/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                    // ← This makes it static (required for Cloudflare Pages)
  reactStrictMode: true,
  images: {
    unoptimized: true,                 // Required for static export
  },
  trailingSlash: true,                 // Recommended for Cloudflare Pages
};

export default nextConfig;
