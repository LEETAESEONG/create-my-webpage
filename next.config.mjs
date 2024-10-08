/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"], // 외부 이미지 도메인 추가
  },
  reactStrictMode: false,  // Strict Mode 비활성화
};

export default nextConfig;
