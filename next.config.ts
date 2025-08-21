import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://upload.wikimedia.org/wikipedia/commons/7/7c/*'),
      new URL(
        'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/zurojqnv/file.png'
      ),
    ],
  },
};

export default nextConfig;
