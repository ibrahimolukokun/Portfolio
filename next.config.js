/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  async redirects() {
    return [1, 2, 3, 4, 5, 6, 7].map((num) => ({
      source: `/projects/Project-${num}`,
      destination: `/projects/project-${num}`,
      permanent: true,
    }));
  },
}

module.exports = nextConfig
