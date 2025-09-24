/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", 
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "my-portfolio-qpcu.vercel.app", 
      },
      {
        protocol: "https",
        hostname: "media.licdn.com", 
      },
    ],
  },
};

module.exports = nextConfig;
