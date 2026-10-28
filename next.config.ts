import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  experimental: {
    turbopackPluginRuntimeStrategy: "workerThreads",
  },
  async redirects() {
    return [
      {
        source: "/machines/flow-wrap-machine-200",
        destination: "/machines",
        permanent: true,
      },
      {
        source: "/machines/flow-wrap-machine-150",
        destination: "/machines",
        permanent: true,
      },
      {
        source: "/machines/toffee-wrapping-machine",
        destination: "/machines/toffee-packing-machine",
        permanent: true,
      },
      {
        source: "/machines/ar-200",
        destination: "/machines",
        permanent: true,
      },
      {
        source: "/machines/ar-150",
        destination: "/machines",
        permanent: true,
      },
      {
        source: "/products/ar-200",
        destination: "/machines",
        permanent: true,
      },
      {
        source: "/products/ar-150",
        destination: "/machines",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/machines",
        permanent: true,
      },
      {
        source: "/products/:slug",
        destination: "/machines/:slug",
        permanent: true,
      },
      {
        source: "/gallery",
        destination: "/galleryhb",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
