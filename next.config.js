/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'firebasestorage.googleapis.com',
      'img.icons8.com',
      'raw.githubusercontent.com',
      'i.imgur.com',
      'img.freepik.com',
      'media.geeksforgeeks.org',
      'next-portfolio-shubham-lingayat.s3.us-east-1.amazonaws.com' // <-- Add this line
    ]
  }
}

module.exports = nextConfig;
