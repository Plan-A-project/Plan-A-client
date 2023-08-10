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

const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  // next.js config
});
