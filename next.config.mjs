/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://bageto-backend.onrender.com/api/:path*",
      },
    ];
  },
};

export default nextConfig; // ✅ correct for .mjs
