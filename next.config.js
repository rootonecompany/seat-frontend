/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com", "k.kakaocdn.net"],
  },
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:3001/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
