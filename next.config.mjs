/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  // 아래 basePath와 assetPrefix는 GitHub 저장소 이름에 맞게 수정해야 합니다
  // 예: 저장소 이름이 'marketing-portfolio'인 경우
  basePath: process.env.NODE_ENV === 'production' ? '/marketing-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/marketing-portfolio/' : '',
}

export default nextConfig
