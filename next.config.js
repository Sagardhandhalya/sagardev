/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
    domains: ['www.notion.so','prod-files-secure.s3.us-west-2.amazonaws.com','placehold.co','images.unsplash.com'],
  },
}

module.exports = nextConfig
