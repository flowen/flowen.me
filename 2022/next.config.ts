import type { NextConfig } from "next";
import type { Configuration } from "webpack";

import path from "path";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config: Configuration) => {
    config.module!.rules!.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // Ensure proper handling of ESM modules
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
      layers: true,
    };

    return config;
  },
  turbopack: {
    rules: {
      "*.{jpg,jpeg,png,webp}": ["next-image-loader"],
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
    resolveAlias: {
      "@": ".",
      "@assets": path.resolve(__dirname, "./assets"),
      "@components": path.resolve(__dirname, "./components"),
      "@pages": path.resolve(__dirname, "./pages"),
      "@styles": path.resolve(__dirname, "./styles"),
      "@utils": path.resolve(__dirname, "./utils"),
    },
  },
};

export default nextConfig;
