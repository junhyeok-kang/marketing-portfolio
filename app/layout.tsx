import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Providers } from "@/components/providers"

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-kr",
})

export const metadata: Metadata = {
  title: "강준혁 포트폴리오",
  description:
    "강준혁의 포트폴리오 웹사이트입니다. 콘텐츠 기획과 제작, 프로젝트 리더십, 그리고 사진 촬영 작업을 소개합니다.",
  openGraph: {
    title: "강준혁 포트폴리오",
    description: "강준혁의 포트폴리오 웹사이트입니다.",
    type: "website",
    locale: "ko_KR",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${notoSansKr.variable} font-sans`}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
