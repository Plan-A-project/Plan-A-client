/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**",
      },
    ],
  },
};
module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://dukcode.iptime.org/:path*",
      },
    ];
  },
};
module.exports = {
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: "public",
        },
      },
    ],
  ],
  nextConfig,
);
