import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://upload.wikimedia.org/wikipedia/commons/7/7c/*'),
      new URL(
        'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/zurojqnv/file.png'
      ),
      new URL(
        'https://pocketstop.com/wp-content/uploads/2021/07/Factory%20against%20blue%20cloudy%20sky-1.jpeg'
      ),
      new URL(
        'https://dreammaker.co.uk/wp-content/uploads/2022/02/feeling-alone.jpg'
      ),
    ],
  },
  output: 'standalone',
};

export default nextConfig;
