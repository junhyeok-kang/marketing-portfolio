import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface ProjectProps {
  project: {
    title: string
    period: string
    role: string
    description: string
    achievements: string[]
    image: string
  }
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="aspect-[4/3] relative w-full h-full overflow-hidden">
            <Image 
              src={project.image || "/placeholder.svg"} 
              alt={project.title} 
              fill 
              className="object-cover object-center" 
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
        <div className="p-6 md:col-span-2">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline">{project.period}</Badge>
            <Badge variant="outline" className="bg-orange-50">
              역할: {project.role}
            </Badge>
          </div>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <div>
            <h4 className="font-semibold mb-2">주요 성과:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="text-gray-700">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  )
}
