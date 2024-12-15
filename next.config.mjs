/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = process.cwd();
    return config;
  },
};

export default nextConfig;