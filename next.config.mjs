/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",

                reactStrictMode: false,
  output: 'export',
  images: {
    unoptimized: true,
  },

    ];
  },
};

export default nextConfig;
