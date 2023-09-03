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
  reactStrictMode: false,
};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://api.infli.co/:path*",
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

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  // next.js config
});
