import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, Globe, Award, Users, GraduationCap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "@/components/project-card"
import PortfolioGallery from "@/components/portfolio-gallery"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center px-4 md:px-6 py-12 relative">
        <div className="max-w-5xl w-full mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            안녕하세요, <span className="text-orange-600">강준혁</span>입니다
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            콘텐츠 기획과 제작, 프로젝트 리더십, 그리고 사진 촬영을 통해
            <br className="hidden md:block" />
            가치 있는 스토리를 전달합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
              <Link href="#projects">
                프로젝트 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="#contact">연락하기</Link>
            </Button>
          </div>
        </div>

        {/* Featured Images */}
        <div className="w-full max-w-5xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="aspect-[4/3] relative w-full h-full overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold text-lg">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-6 w-6 rotate-90 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="relative rounded-lg overflow-hidden" style={{ height: '100%', minHeight: '500px' }}>
              <Image src="/portfolio-images/IMG_0110.jpg" alt="강준혁 프로필 이미지" fill className="object-cover object-center" />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-orange-600">안녕하세요!</h3>
              <p className="text-gray-700">
                저는 콘텐츠 기획과 제작, 프로젝트 리더십, 그리고 사진 촬영에 열정을 가진 강준혁입니다. 다양한 팀
                프로젝트에서 리더 역할을 수행하며 팀원들과 함께 목표를 달성하는 경험을 쌓았습니다.
              </p>
              <p className="text-gray-700">
                교내 촬영기자단과 홍보소통팀에서 활동하며 사진 촬영, 콘텐츠 제작, 그리고 홍보 업무를 담당했습니다. 또한
                GTEP(글로벌무역전문가양성사업)에 참여하여 해외 시장 조사와 이커머스 플랫폼 운영 경험을 쌓았습니다.
              </p>
              <p className="text-gray-700">
                환경 문제에도 관심이 많아 굴패각 재활용 프로젝트와 탄소중립 팀 프로젝트에 참여했으며, 이를 통해
                지속가능한 미래를 위한 솔루션을 모색하고 있습니다.
              </p>

              <div className="pt-4">
                <h4 className="font-semibold text-lg mb-2">핵심 역량</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Resume</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-orange-600 flex items-center">
                <Users className="mr-2 h-5 w-5" /> 학내외 활동
              </h3>
              {activities.map((activity, index) => (
                <div key={index} className="mb-6 border-l-2 border-gray-200 pl-4 py-1">
                  <h4 className="font-bold">{activity.title}</h4>
                  <p className="text-sm text-gray-500">{activity.period}</p>
                  <p className="text-sm text-orange-600 font-medium">{activity.role}</p>
                  <p className="mt-2 text-gray-700">{activity.description}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-orange-600 flex items-center">
                <GraduationCap className="mr-2 h-5 w-5" /> 학력
              </h3>
              {educations.map((edu, index) => (
                <div key={index} className="mb-6 border-l-2 border-gray-200 pl-4 py-1">
                  <h4 className="font-bold">{edu.title}</h4>
                  <p className="text-sm text-gray-500">{edu.period}</p>
                  {edu.details && <p className="text-sm text-gray-600">{edu.details}</p>}
                </div>
              ))}

              <h3 className="text-xl font-bold mb-6 mt-12 text-orange-600 flex items-center">
                <Shield className="mr-2 h-5 w-5" /> 군 경력
              </h3>
              {militaryService.map((service, index) => (
                <div key={index} className="mb-6 border-l-2 border-gray-200 pl-4 py-1">
                  <h4 className="font-bold">{service.title}</h4>
                  <p className="text-sm text-gray-500">{service.period}</p>
                  {service.details && <p className="text-sm text-gray-600">{service.details}</p>}
                </div>
              ))}

              <h3 className="text-xl font-bold mb-6 mt-12 text-orange-600 flex items-center">
                <Award className="mr-2 h-5 w-5" /> 자격 및 어학
              </h3>
              {qualifications.map((qual, index) => (
                <div key={index} className="mb-6 border-l-2 border-gray-200 pl-4 py-1">
                  <h4 className="font-bold">{qual.title}</h4>
                  <p className="text-sm text-gray-500">{qual.date}</p>
                  {qual.details && <p className="text-sm text-gray-600">{qual.details}</p>}
                </div>
              ))}

              <h3 className="text-xl font-bold mb-6 mt-12 text-orange-600 flex items-center">
                <Globe className="mr-2 h-5 w-5" /> 해외 경험
              </h3>
              {internationalExperiences.map((exp, index) => (
                <div key={index} className="mb-6 border-l-2 border-gray-200 pl-4 py-1">
                  <h4 className="font-bold">{exp.title}</h4>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                  <p className="mt-2 text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Portfolio</h2>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="all">전체</TabsTrigger>
              <TabsTrigger value="photos">사진</TabsTrigger>
              <TabsTrigger value="articles">기사</TabsTrigger>
              <TabsTrigger value="instagram">인스타그램</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <PortfolioGallery items={[...portfolioPhotos, ...portfolioArticles, ...portfolioInstagram]} />
            </TabsContent>
            <TabsContent value="photos">
              <PortfolioGallery items={portfolioPhotos} />
            </TabsContent>
            <TabsContent value="articles">
              <PortfolioGallery items={portfolioArticles} />
            </TabsContent>
            <TabsContent value="instagram">
              <PortfolioGallery items={portfolioInstagram} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-orange-600">연락처 정보</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Email:</span>
                  <a href="mailto:kangjh0611@tukorea.ac.kr" className="text-orange-600 hover:underline">
                    kangjh0611@tukorea.ac.kr
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Phone:</span>
                  <a href="tel:+821053665579" className="text-orange-600 hover:underline">
                    010-5366-5579
                  </a>
                </p>
              </div>

              <h3 className="text-xl font-bold mb-4 mt-8 text-orange-600">SNS</h3>
              <div className="flex gap-4">
                <Link
                  href="https://www.instagram.com/rkd_wnsgur/"
                  target="_blank"
                  className="text-gray-600 hover:text-orange-600 transition-colors"
                  title="개인 인스타그램"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/damso.photo/"
                  target="_blank"
                  className="text-gray-600 hover:text-orange-600 transition-colors"
                  title="스냅사진 계정"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-camera"
                  >
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </Link>

              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-orange-600">메시지 보내기</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      이름
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      이메일
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    제목
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="문의 제목을 입력해주세요"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    메시지
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="문의 내용을 입력해주세요"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                  메시지 보내기
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// 샘플 데이터
const featuredImages = [
  {
    src: "/portfolio-images/winter-vacation.jpg",
    alt: "겨울방학 캠퍼스 사진",
    title: "캠퍼스 풍경",
    description: "한국공학대학교 겨울방학 캠퍼스 모습",
  },
  {
    src: "/portfolio-images/university-festival.jpg",
    alt: "해오름제 행사 사진",
    title: "대학 행사",
    description: "한국공학대학교 해오름제 현장 스케치",
  },
  {
    src: "/portfolio-images/GTEP_image.JPG",
    alt: "GTEP 활동",
    title: "GTEP 활동",
    description: "글로벌무역전문가양성사업 활동",
  },
]

const skills = [
  "콘텐츠 기획",
  "사진 촬영",
  "영상 편집",
  "프로젝트 관리",
  "팀 리더십",
  "마케팅",
  "SNS 운영",
  "일본어",
  "Adobe Photoshop",
  "Adobe Premiere Pro",
]

const activities = [
  {
    title: "사진 동아리",
    period: "2023.03 - 2025.12",
    role: "부회장",
    description:
      "교내 비공식으로 존재하던 사진 소모임을 학교 정식 중앙 동아리로 승격, 전환 시키며 다양한 행사(출사, 사진 콘테스트, MT, 동아리홍보, 동아리연합활동 등)를 진행.",
  },
  {
    title: "사회자본 조사 프로젝트",
    period: "2023.09 - 2023.12",
    role: "팀장(조사 기획, 자료 정리, 발표 총괄)",
    description:
      "지역 내 리더들의 사회자본 조사를 위해 정왕 지역 어린이집 원장과의 인터뷰를 주도. 인터뷰 사전 준비, 진행, 장소 섭외 및 팀원 역할 분담 등 전 과정을 기획하고 조율.",
  },
  {
    title: "GTEP(글로벌무역전문가양성사업)",
    period: "2024.02 - 2025.02",
    role: "팀장(기업 컨텍 및 Shopee 운영, 자료조사, 발표)",
    description:
      "무역실무 교육 수강, 해외시장 조사, 바이어 상담 실습 등을 수행. 유망 중소기업과 협업하여 싱가포르 화장품 시장을 대상으로 수출 마케팅 전략을 수립하고 실행. 동남아 최대 이커머스 플랫폼 Shopee에 브랜드 계정을 개설하고 운영.",
  },
  {
    title: "교내 공식 촬영기자단",
    period: "2024.03 - 2026.08",
    role: "팀장",
    description: "학교 전경, 구성원, 행사 촬영 및 업로드, 학교공식 SNS계정 및 홈페이지 미디어 센터 운영.",
  },
  {
    title: "탄소중립 연구 프로젝트",
    period: "2024.05 - 2024.05",
    role: "팀장(조사 기획, 자료 분석, 발표 총괄)",
    description:
      "글로벌 탄소중립 도전과 기업의 책임의 주제로 기업의 탄소중립 이행 캠페인(RE100, CF100, K-RE100)의 개념과 차이를 정리하고, 국내외 주요 기업의 참여 사례를 조사. 팀장으로서 자료 수집, 발표자료 제작, 팀원 역할 분배를 총괄하고 발표를 진행.",
  },
  {
    title: "한국공학대학교 홍보소통팀",
    period: "2024.09 - 2025.02",
    role: "행정지원 봉사",
    description:
      "각종 공지사항을 카드뉴스 형태로 제작 및 업로드. 문의전화 응대, 행사 사진 및 영상 촬영, 편집 업무 수행.",
  },
  {
    title: "굴패각 재활용 프로젝트",
    period: "2024.10 - 2025.08",
    role: "기업컨텍, 자료조사",
    description:
      "연간 약 30만 톤이 발생하는 굴패각 문제를 해결하기 위해 굴패각을 활용한 운동장 라이너 개발 활동에 참여. 굴패각의 탄산칼슘 성분을 이용한 마그네샤 대체재를 연구하고, 자원순환 기반의 친환경 소재 상용화 방안 기획.",
  },
  {
    title: "교내 대학혁신지원사업단 모니터링단",
    period: "2025.03 - 2026.02",
    role: "유튜브팀",
    description:
      "콘텐츠 기획, 취재, 홍보, 모니터링 활동 수행. 대학혁신지원사업 행사(비교과박람회, 성과포럼 등) 운영 지원.",
  },
  {
    title: "미래대학 자유전공학부 서포터즈 리버티노",
    period: "2025.05 - 2025.08",
    role: "콘텐츠 기획 및 제작",
    description:
      "카드뉴스, 릴스, 쇼츠 등 콘텐츠 기획 및 촬영, 편집 업무를 수행. 주요 행사와 융합전공, 마이크로디그리 등 전공 소개를 주제로 콘텐츠 제작을 통해 학생 대상 홍보 효과를 높이는데 기여.",
  },
]

const qualifications = [
  {
    title: "지게차 운전기능사",
    date: "취득",
    details: "한국산업인력공단 (21662500940D)",
  },
  {
    title: "운전면허",
    date: "2020.08.18",
    details: "",
  },
]

const educations = [
  {
    title: "한국공학대학교(한국산업기술대학교)",
    period: "2020.03 - 2026.02 (예정)",
    details: "경영학부 경영학전공",
  },
  {
    title: "인하대학교사범대학부속고등학교",
    period: "2017.03 - 2020.02",
    details: "국제경영반",
  },
  {
    title: "인하대학교사범대학부속중학교",
    period: "2014.03 - 2017.02",
    details: "",
  },
]

const militaryService = [
  {
    title: "육군",
    period: "2021.04 - 2022.10",
    details: "병장 만기전역, 크레인 차량 운전병, 행정병, 1호차 운전병",
  },
]

const internationalExperiences = [
  {
    title: "일본 국제 유아용품 전시회",
    period: "2024.07.02 - 2024.07.07",
    description: "지원 업무, 바이어 응대 및 홍보, 통역 담당",
  },
]

const projects = [
  {
    title: "GTEP 마케팅 프로젝트",
    period: "2024.02 - 2025.02",
    role: "팀장",
    description:
      "산업통상자원부 지원 청년 무역전문가 양성 프로그램(GTEP 18기)에 참여하여 무역실무 교육 수강, 해외시장 조사, 바이어 상담 실습 등을 수행. 유망 중소기업과 협업하여 싱가포르 화장품 시장을 대상으로 수출 마케팅 전략을 수립하고 실행.",
    achievements: [
      "동남아 최대 이커머스 플랫폼 Shopee에 브랜드 계정 개설 및 운영",
      "상품 등록, 콘텐츠 제작, 판매관리, CS 대응 등 플랫폼 운영 전반 주도",
      "현지 소비자 특성과 시장 수요에 맞춘 제품 포지셔닝 전략 적용",
    ],
    image: "/portfolio-images/GTEP_image.JPG",
  },
  {
    title: "굴패각 재활용 프로젝트",
    period: "2024.10 - 2025.08",
    role: "기업컨텍, 자료조사",
    description:
      "연간 약 30만 톤이 발생하는 굴패각 문제를 해결하기 위해 굴패각을 활용한 운동장 라이너 개발 활동에 참여. 굴패각의 탄산칼슘 성분을 이용한 마그네샤 대체재를 연구하고, 자원순환 기반의 친환경 소재 상용화 방안 기획.",
    achievements: [
      "굴패각의 탄산칼슘 성분을 이용한 마그네샤 대체재 연구",
      "자원순환 기반의 친환경 소재 상용화 방안 기획",
      "지역 폐기물 저감 및 스포츠시설 친환경 전환을 위한 실증적 사업화 기초 마련",
    ],
    image: "/portfolio-images/oyster.JPG",
  },
  {
    title: "탄소중립 팀 프로젝트",
    period: "2024.05 - 2024.05",
    role: "팀장",
    description:
      "글로벌 탄소중립 도전과 기업의 책임의 주제로 기업의 탄소중립 이행 캠페인(RE100, CF100, K-RE100)의 개념과 차이를 정리하고, 국내외 주요 기업의 참여 사례를 조사하였다. 국내와 해외 기업의 방식을 비교하고, 국내 기업의 방향성을 제시하였다.",
    achievements: [
      "팀장으로서 자료 수집, 발표자료 제작, 팀원 역할 분배를 총괄",
      "국내외 주요 기업의 탄소중립 이행 캠페인 참여 사례 조사",
      "국내와 해외 기업의 방식 비교 및 국내 기업의 방향성 제시",
    ],
    image: "/portfolio-images/RE100.png",
  },
  {
    title: "교내 공식 촬영기자단",
    period: "2024.03 - 2026.08",
    role: "팀장",
    description:
      "교내 공식 촬영기자단 4~6기로 활동하며 학교 전경, 구성원, 행사 촬영 및 업로드, 학교공식 SNS계정 및 홈페이지 미디어 센터 운영을 담당.",
    achievements: ["학교 전경, 구성원, 행사 촬영 및 업로드", "학교공식 SNS계정 운영", "홈페이지 미디어 센터 운영"],
    image: "/portfolio-images/photo.png",
  },
]

const portfolioPhotos = [
  {
    title: "비교과 박람회",
    category: "사진",
    image: "/portfolio-images/extracurricular-fair.jpg",
    link: "https://www.tukorea.ac.kr/bbs/tukorea/134/135900/artclView.do?layout=unknown",
  },
  {
    title: "실용경제교육",
    category: "사진",
    image: "/portfolio-images/practical-economics.jpg",
    link: "https://www.tukorea.ac.kr/bbs/tukorea/134/134881/artclView.do?layout=unknown",
  },
  {
    title: "2024 한국공학대전",
    category: "사진",
    image: "/portfolio-images/engineering-fair.jpg",
    link: "https://www.tukorea.ac.kr/bbs/tukorea/134/134746/artclView.do?layout=unknown",
  },
  {
    title: "잠시 산책 어때?",
    category: "사진",
    image: "/portfolio-images/campus-walk.jpg",
    link: "https://www.tukorea.ac.kr/bbs/tukorea/134/131685/artclView.do?layout=unknown",
  },
  {
    title: "오케스트라 챔버",
    category: "사진",
    image: "/portfolio-images/orchestra-chamber.jpg",
    link: "https://www.tukorea.ac.kr/bbs/tukorea/134/130957/artclView.do?layout=unknown",
  },
  {
    title: "필x간지x미러스",
    category: "사진",
    image: "/portfolio-images/university-event.jpg",
    link: "https://www.tukorea.ac.kr/bbs/tukorea/134/130119/artclView.do?layout=unknown",
  },
  {
    title: "한국공대 해오름제",
    category: "사진",
    image: "/portfolio-images/university-festival.jpg",
    link: "https://www.tukorea.ac.kr/bbs/tukorea/134/119599/artclView.do?layout=unknown",
  },
  {
    title: "2025년 입학식",
    category: "사진",
    image: "/portfolio-images/entrance-ceremony.jpg",
    link: "https://www.tukorea.ac.kr/bbs/tukorea/134/137977/artclView.do?layout=unknown",
  },
  {
    title: "한국공대의 겨울방학",
    category: "사진",
    image: "/portfolio-images/winter-vacation.jpg",
    link: "https://www.tukorea.ac.kr/bbs/tukorea/134/137080/artclView.do?layout=unknown",
  },
  {
    title: "사진동아리 홍보",
    category: "사진",
    image: "/portfolio-images/photo-club.jpg",
    link: "https://www.tukorea.ac.kr/bbs/tukorea/134/136797/artclView.do?layout=unknown",
  },
]

const portfolioArticles = [
  {
    title: "경기도 RISE사업",
    category: "기사",
    image: "https://www.tukorea.ac.kr/CrossEditor/binary/images/000214/Group_1.png",
    link: "https://www.tukorea.ac.kr/bbs/tukorea/108/138832/artclView.do?layout=unknown",
  },
  {
    title: "ITP 46기 입학식",
    category: "기사",
    image: "https://www.tukorea.ac.kr/CrossEditor/binary/images/000213/Group_1-1.png",
    link: "https://www.tukorea.ac.kr/bbs/tukorea/108/138716/artclView.do?layout=unknown",
  },
  {
    title: "신임 교수 프로필 사진(김장헌 교수)",
    category: "기사",
    image: "https://www.tukorea.ac.kr/CrossEditor/binary/images/000211/Group_1(%EA%B9%80%EC%9E%A5%ED%97%8C)_3.png",
    link: "https://www.tukorea.ac.kr/bbs/tukorea/108/138590/artclView.do?layout=unknown",
  },
  {
    title: "신임 교수 프로필 사진(김혜진 교수)",
    category: "기사",
    image: "https://www.tukorea.ac.kr/CrossEditor/binary/images/000211/%EA%B9%80%ED%98%9C%EC%A7%84%EA%B5%90%EC%88%98%EB%8B%984%E2%98%85%E2%98%85(%EC%8D%B8%EB%84%A4%EC%9D%BC).png",
    link: "https://www.tukorea.ac.kr/bbs/tukorea/108/138588/artclView.do?layout=unknown",
  },
  {
    title: "신임 교수 프로필 사진(조상민 교수)",
    category: "기사",
    image: "https://www.tukorea.ac.kr/CrossEditor/binary/images/000211/Group_1(%EC%A1%B0%EC%83%81%EB%AF%BC%EA%B5%90%EC%88%98).png",
    link: "https://www.tukorea.ac.kr/bbs/tukorea/108/138530/artclView.do?layout=unknown",
  },
  {
    title: "신임 교수 임명식",
    category: "기사",
    image: "https://www.tukorea.ac.kr/CrossEditor/binary/images/000210/%EC%A0%9C%EB%AA%A9%EC%9D%84-%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94_-001_1.jpg",
    link: "https://www.tukorea.ac.kr/bbs/tukorea/108/138472/artclView.do?layout=unknown",
  },
  {
    title: "신임 교수 프로필 사진(강송희 교수)",
    category: "기사",
    image: "https://www.tukorea.ac.kr/CrossEditor/binary/images/000211/Group_1(%EA%B0%95%EC%86%8C%ED%9D%AC)_1.png",
    link: "https://www.tukorea.ac.kr/bbs/tukorea/108/138453/artclView.do?layout=unknown",
  },
  {
    title: "신임 교수 프로필 사진(최성환 교수)",
    category: "기사",
    image: "https://www.tukorea.ac.kr/CrossEditor/binary/images/000211/Group_1(%EC%B5%9C%EC%84%B1%ED%99%98)_2.png",
    link: "https://www.tukorea.ac.kr/bbs/tukorea/108/138451/artclView.do?layout=unknown",
  },
  {
    title: "입학식",
    category: "기사",
    image: "https://www.tukorea.ac.kr/CrossEditor/binary/images/000212/%EC%9E%85%ED%95%99%EC%8B%9D15_1.png",
    link: "https://www.tukorea.ac.kr/bbs/tukorea/108/138269/artclView.do?layout=unknown",
  },
  {
    title: "입학식",
    category: "기사",
    image: "https://www.tukorea.ac.kr/CrossEditor/binary/images/000206/20250304170120692_HETXYRDL.png",
    link: "https://www.tukorea.ac.kr/bbs/tukorea/108/138005/artclView.do?layout=unknown",
  },
  {
    title: "학위수여식",
    category: "기사",
    image: "https://www.tukorea.ac.kr/CrossEditor/binary/images/000203/20250224160732798_F4CITJKW.png",
    link: "https://www.tukorea.ac.kr/bbs/tukorea/108/137771/artclView.do?layout=unknown",
  },
  {
    title: "ITP 45기 수료식",
    category: "기사",
    image: "https://www.tukorea.ac.kr/CrossEditor/binary/images/000203/20250224134343133_YZZTRV2L.png",
    link: "https://www.tukorea.ac.kr/bbs/tukorea/108/137766/artclView.do?layout=unknown",
  },
]

const portfolioInstagram = [
  {
    title: "🎓 전공, 이제 내가 만들 수 있다고?!",
    category: "인스타그램",
    image: "/portfolio-images/DYD.png",
    link: "https://www.instagram.com/reel/DJiYS49h4Hb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "2025년 입학식",
    category: "인스타그램",
    image: "/portfolio-images/entrance-ceremony.jpg",
    link: "https://www.instagram.com/p/DGw4HTXhECf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "한국공대 학보사",
    category: "인스타그램",
    image: "/portfolio-images/강준혁학보사105호 1.jpg",
    link: "https://www.instagram.com/p/DHvQw64hIqF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "2024 한국공학대전",
    category: "인스타그램",
    image: "/portfolio-images/engineering-fair.jpg",
    link: "https://www.instagram.com/p/DAaRKSyhNP_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "한국공대 겨울방학",
    category: "인스타그램",
    image: "/portfolio-images/winter-vacation.jpg",
    link: "https://www.instagram.com/p/DE6s2VIBKs0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "가장 아름다운 순간 화양연화",
    category: "인스타그램",
    image: "/portfolio-images/photo-club.jpg",
    link: "https://www.instagram.com/p/DERpdA6BvTi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "TU 비교과 박람회",
    category: "인스타그램",
    image: "/portfolio-images/extracurricular-fair.jpg",
    link: "https://www.instagram.com/p/DCZBOxXhQ1u/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "한국공대 해오름제",
    category: "인스타그램",
    image: "/portfolio-images/university-festival.jpg",
    link: "https://www.instagram.com/p/DIS3S_aBm0_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
]
