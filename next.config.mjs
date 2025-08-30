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
    return process.env.NODE_ENV === "development"
      ? [
          {
            source: "/api/:path*",
            destination: "http://localhost:5000/api/:path*",
          },
        ]
      : [
          {
            source: "/api/:path*",
            destination: "https://bageto-backend.onrender.com/api/:path*",
          },
        ];
  },
};

export default nextConfig;
