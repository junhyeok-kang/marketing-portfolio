"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 여기에 실제 폼 제출 로직을 구현할 수 있습니다.
    // 예: API 호출, 이메일 전송 등

    // 제출 시뮬레이션
    setTimeout(() => {
      toast({
        title: "메시지가 전송되었습니다",
        description: "빠른 시일 내에 답변 드리겠습니다.",
      })

      // 폼 초기화
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            이름
          </label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="홍길동" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            이메일
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="example@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          제목
        </label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="문의 제목을 입력해주세요"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          메시지
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="문의 내용을 입력해주세요"
          rows={5}
        />
      </div>

      <Button type="submit" className="w-full bg-[#DC5F00] hover:bg-[#c05400]" disabled={isSubmitting}>
        {isSubmitting ? "전송 중..." : "메시지 보내기"}
      </Button>
    </form>
  )
}
