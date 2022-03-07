/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "i.ytimg.com", "via.placeholder.com", "img.icons8.com"],
  },
}

module.exports = nextConfig
