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
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: "http://localhost:8000/:path*",
  //     },
  //   ];
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: "http://localhost:8000/:path*",
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
