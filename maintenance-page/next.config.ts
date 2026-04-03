/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This generates a 'out' folder instead of a '.next' folder
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;