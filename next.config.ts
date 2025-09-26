// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/file/d/**',
      },
       {
        protocol: 'https',
        hostname: 'mir-s3-cdn-cf.behance.net',
        pathname: '/project_modules/fs_webp/**',
      },
      
    ],
  },
};

export default nextConfig;
