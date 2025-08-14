import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   typescript: {
    ignoreBuildErrors: true,
  },

  // ❌ Disable ESLint checking
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
