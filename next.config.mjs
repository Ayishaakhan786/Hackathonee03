/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io', // Aapki image ka hostname
            port: '',
            pathname: '/images/f2on0i8u/**', // Specific path
          },
        ],
      },
};

export default nextConfig;
