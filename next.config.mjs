/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "ddragon.leagueoflegends.com",
      "www.techm.kr",
      "thumb.zumst.com",
      "cmsassets.rgpub.io",
    ],
  },
};

export default nextConfig;
