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
  distDir: 'dist',
  // username.github.io 형식의 저장소는 basePath와 assetPrefix가 필요하지 않습니다
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
  // 정적 HTML 내보내기 형식 설정
  experimental: {
    appDocumentPreloading: false
  },
  // swc 경고 무시
  swcMinify: false
}

export default nextConfig
