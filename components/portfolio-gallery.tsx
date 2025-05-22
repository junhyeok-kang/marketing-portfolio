import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PortfolioItem {
  title: string
  category: string
  image: string
  link: string
}

interface PortfolioGalleryProps {
  items: PortfolioItem[]
}

export default function PortfolioGallery({ items }: PortfolioGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <Card key={index} className="overflow-hidden group">
          <div className="aspect-[4/3] relative w-full overflow-hidden">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute top-2 right-2">
              <Badge className="bg-white/80 text-gray-800 hover:bg-white/90">{item.category}</Badge>
            </div>
          </div>
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <h3 className="font-bold">{item.title}</h3>
              <Link href={item.link} className="text-orange-600" target="_blank">
                <ExternalLink className="h-5 w-5" />
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
