/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //image
  images: {
    domains: ["www.linkpicture.com", "upload.wikimedia.org", "ipfs.infura.io"],
  },
};

module.exports = nextConfig;
