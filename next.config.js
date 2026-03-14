/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/about-us', destination: '/', permanent: true },
      { source: '/premium', destination: '/20-factor-scorecard', permanent: true },
      { source: '/contact', destination: '/', permanent: true },
      { source: '/feedzy-demo-page', destination: '/research', permanent: true },
      {
        source: '/early-edge-club-founding-cohort-application',
        destination: '/investor-circle',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**',
      },
      {
        protocol: 'https',
        hostname: 'substackcdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'substack-post-media.s3.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig;
