/** @type {import('next').NextConfig} */
import withPlugins from "next-compose-plugins";
import withPWA from "next-pwa";

const nextConfig = {
  reactStrictMode: true,
};

export default withPlugins(
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
