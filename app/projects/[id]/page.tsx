import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

// 프로젝트 데이터 (실제 구현에서는 데이터베이스나 CMS에서 가져올 수 있습니다)
const projects = [
  {
    id: "gtep",
    title: "GTEP 마케팅 캠페인",
    period: "2023.03 - 2023.12",
    role: "마케팅 전략 기획",
    contribution: "70%",
    description:
      "글로벌 무역 전문가 양성 프로그램(GTEP)의 인지도 향상 및 참가자 모집을 위한 종합 마케팅 캠페인을 기획하고 실행했습니다. 소셜미디어, 교내 홍보, 오프라인 이벤트 등 다양한 채널을 활용하여 타겟 오디언스에게 효과적으로 메시지를 전달했습니다.",
    fullDescription: `
      <p>글로벌 무역 전문가 양성 프로그램(GTEP)은 대학생들에게 국제 무역 실무 경험을 제공하는 프로그램입니다. 이 프로그램의 인지도 향상과 참가자 모집을 위한 종합 마케팅 캠페인을 기획하고 실행했습니다.</p>
      
      <h3>프로젝트 목표</h3>
      <ul>
        <li>GTEP 프로그램의 인지도 향상</li>
        <li>지원자 수 전년 대비 20% 증가</li>
        <li>프로그램 참가자의 만족도 향상</li>
      </ul>
      
      <h3>주요 활동</h3>
      <ol>
        <li>타겟 오디언스 분석 및 마케팅 전략 수립</li>
        <li>소셜미디어 콘텐츠 기획 및 제작 (인스타그램, 페이스북)</li>
        <li>교내 홍보물 디자인 (포스터, 배너, 리플렛)</li>
        <li>오프라인 이벤트 기획 및 운영 (설명회, 부스 운영)</li>
        <li>이메일 마케팅 캠페인 실행</li>
        <li>프로그램 참가자 인터뷰 영상 제작</li>
      </ol>
      
      <h3>성과</h3>
      <ul>
        <li>지원자 수 전년 대비 35% 증가</li>
        <li>소셜미디어 팔로워 50% 증가</li>
        <li>콘텐츠 평균 참여율 25% 향상</li>
        <li>프로그램 참가자 만족도 4.8/5.0 달성</li>
      </ul>
    `,
    tools: ["Adobe Photoshop", "Adobe Premiere Pro", "Google Analytics", "Instagram", "Facebook", "Canva"],
    image: "/placeholder.svg?height=600&width=900&query=global trade expert program marketing",
    gallery: [
      "/placeholder.svg?height=600&width=900&query=marketing campaign presentation",
      "/placeholder.svg?height=600&width=900&query=social media marketing content",
      "/placeholder.svg?height=600&width=900&query=offline marketing event booth",
    ],
  },
  {
    id: "carbon-neutral",
    title: "탄소중립 리서치 프로젝트",
    period: "2022.03 - 2022.08",
    role: "리서치 및 콘텐츠 제작",
    contribution: "60%",
    description:
      "기업의 탄소중립 전략과 환경 친화적 비즈니스 모델에 관한 연구를 진행했습니다. 국내외 사례를 분석하고, 실현 가능한 탄소중립 전략을 제안하는 보고서를 작성했습니다. 연구 결과를 바탕으로 인포그래픽과 프레젠테이션 자료를 제작하여 발표했습니다.",
    fullDescription: `
      <p>기업의 탄소중립 전략과 환경 친화적 비즈니스 모델에 관한 연구를 진행했습니다. 국내외 사례를 분석하고, 실현 가능한 탄소중립 전략을 제안하는 보고서를 작성했습니다.</p>
      
      <h3>프로젝트 목표</h3>
      <ul>
        <li>기업의 탄소중립 전략 사례 조사 및 분석</li>
        <li>환경 친화적 비즈니스 모델 연구</li>
        <li>실현 가능한 탄소중립 전략 제안</li>
      </ul>
      
      <h3>주요 활동</h3>
      <ol>
        <li>국내외 기업의 탄소중립 전략 사례 조사</li>
        <li>환경 친화적 비즈니스 모델 분석</li>
        <li>탄소중립 전략 제안 보고서 작성</li>
        <li>인포그래픽 및 프레젠테이션 자료 제작</li>
        <li>연구 결과 발표 및 피드백 수렴</li>
      </ol>
      
      <h3>성과</h3>
      <ul>
        <li>학술지 게재</li>
        <li>교내 연구 발표회 우수상 수상</li>
        <li>기업 탄소중립 전략 가이드라인 제작</li>
      </ul>
    `,
    tools: ["Microsoft Excel", "PowerPoint", "Canva", "Figma", "Google Scholar", "SPSS"],
    image: "/placeholder.svg?height=600&width=900&query=carbon neutral business research",
    gallery: [
      "/placeholder.svg?height=600&width=900&query=carbon neutral research presentation",
      "/placeholder.svg?height=600&width=900&query=environmental business model infographic",
      "/placeholder.svg?height=600&width=900&query=sustainability research data visualization",
    ],
  },
  {
    id: "oyster-shell",
    title: "굴패각 재활용 캠페인",
    period: "2021.09 - 2022.02",
    role: "캠페인 기획 및 SNS 운영",
    contribution: "80%",
    description:
      "해양 폐기물인 굴패각의 재활용 인식을 개선하기 위한 캠페인을 기획하고 실행했습니다. 굴패각을 활용한 업사이클링 제품을 소개하고, 환경 보호의 중요성을 알리는 콘텐츠를 제작했습니다. 인스타그램과 유튜브를 통해 캠페인 메시지를 확산시켰습니다.",
    fullDescription: `
      <p>해양 폐기물인 굴패각의 재활용 인식을 개선하기 위한 캠페인을 기획하고 실행했습니다. 굴패각을 활용한 업사이클링 제품을 소개하고, 환경 보호의 중요성을 알리는 콘텐츠를 제작했습니다.</p>
      
      <h3>프로젝트 목표</h3>
      <ul>
        <li>굴패각 재활용의 중요성 인식 확산</li>
        <li>업사이클링 제품 소개 및 홍보</li>
        <li>환경 보호 메시지 전달</li>
      </ul>
      
      <h3>주요 활동</h3>
      <ol>
        <li>굴패각 재활용 현황 및 문제점 조사</li>
        <li>업사이클링 제품 기획 및 제작</li>
        <li>캠페인 콘텐츠 기획 및 제작</li>
        <li>인스타그램 및 유튜브 채널 운영</li>
        <li>오프라인 전시회 기획 및 운영</li>
      </ol>
      
      <h3>성과</h3>
      <ul>
        <li>인스타그램 팔로워 2,000명 확보</li>
        <li>유튜브 영상 누적 조회수 15,000회 달성</li>
        <li>지역 환경 단체와 협업 프로젝트 진행</li>
        <li>지역 언론 보도 2회</li>
      </ul>
    `,
    tools: ["Adobe Photoshop", "Adobe Premiere Pro", "Instagram", "YouTube", "Canva"],
    image: "/placeholder.svg?height=600&width=900&query=oyster shell recycling campaign",
    gallery: [
      "/placeholder.svg?height=600&width=900&query=oyster shell recycling campaign",
      "/placeholder.svg?height=600&width=900&query=upcycling products from marine waste",
      "/placeholder.svg?height=600&width=900&query=environmental campaign social media content",
    ],
  },
]

// 정적 내보내기를 위한 generateStaticParams 함수 추가
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <Link href="/#projects" className="inline-flex items-center text-[#DC5F00] mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> 프로젝트 목록으로 돌아가기
        </Link>

        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h1>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">{project.period}</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">역할: {project.role}</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">기여도: {project.contribution}</span>
          </div>

          <div className="aspect-[16/9] relative rounded-lg overflow-hidden mb-8">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="prose max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: project.fullDescription }} />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">사용 툴</h2>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span key={idx} className="px-3 py-2 bg-[#DC5F00]/10 text-[#DC5F00] rounded-md">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">프로젝트 갤러리</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.gallery.map((image, idx) => (
                <div key={idx} className="aspect-[3/2] relative rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} 이미지 ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
