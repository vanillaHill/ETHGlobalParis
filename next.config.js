/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/app",
        has: [
          {
            type: "header",
            key: "host",
            value: "rply",
          },
        ],
        destination: "https://app.rply",
        permanent: true,
      },
      {
        source: "/app/:slug*",
        has: [
          {
            type: "header",
            key: "host",
            value: "rply",
          },
        ],
        destination: "https://app.rply/:slug*",
        permanent: true,
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
