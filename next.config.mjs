/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ajsoft-portfolio',
  assetPrefix: '/ajsoft-portfolio/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
