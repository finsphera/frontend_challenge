/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'localhost',
      'image.tmdb.org'
    ],
  },
};

export default nextConfig;
