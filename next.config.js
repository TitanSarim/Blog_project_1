/** @type {import('next').NextConfig} */
require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["openweathermap.org"],
  },
};

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
