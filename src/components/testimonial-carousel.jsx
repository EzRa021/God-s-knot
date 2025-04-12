"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Patient",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "The care I received at God's Knot Hospital was exceptional. The doctors were knowledgeable and took the time to explain everything to me. The nurses were compassionate and attentive. I couldn't have asked for better care.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Patient",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "After my surgery, the rehabilitation team at God's Knot was instrumental in my recovery. Their expertise and encouragement helped me regain my strength and mobility faster than I expected. I'm grateful for their dedication.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Parent",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "When my son needed emergency care, the pediatric team at God's Knot was amazing. They not only provided excellent medical care but also made him feel comfortable and less scared. Their family-centered approach made all the difference.",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="relative">
      <div className="mx-auto max-w-4xl px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-green-100 shadow-sm">
              <CardContent className="p-8">
                <Quote className="h-12 w-12 text-green-100 mb-6" />
                <p className="text-lg text-gray-700 italic mb-8">{testimonials[current].quote}</p>
                <div className="flex items-center">
                  <Avatar className="h-14 w-14 border-2 border-green-100">
                    <AvatarImage src={testimonials[current].image} alt={testimonials[current].name} />
                    <AvatarFallback className="bg-green-100 text-green-800">
                      {testimonials[current].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="font-bold text-green-800">{testimonials[current].name}</h4>
                    <p className="text-gray-500">{testimonials[current].role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800"
          onClick={prev}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800"
          onClick={next}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

