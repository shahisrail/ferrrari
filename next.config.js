// next.config.js
/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  basePath: "",
  reactStrictMode: false,
  trailingSlash: true,

  images: { unoptimized: true },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  compiler: { styledComponents: true },
};
