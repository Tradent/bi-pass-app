/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Explicitly disable the App Router's not-found page
  experimental: {
    disableOptimizedLoading: true,
    skipTrailingSlashRedirect: true,
    skipMiddlewareUrlNormalize: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Add webpack configuration to handle pino-pretty
  webpack: (config, { isServer }) => {
    // Add fallbacks for node.js core modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      pino: false,
      "pino-pretty": false,
    }

    return config
  },
  // Use a different approach for 404 handling
  pageExtensions: ["tsx", "ts", "jsx", "js", "md", "mdx"],
}

module.exports = nextConfig
