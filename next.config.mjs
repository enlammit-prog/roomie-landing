/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/conserje",
        destination: "/concierge",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
