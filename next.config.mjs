/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "presswisp.s3.eu-west-1.amazonaws.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
