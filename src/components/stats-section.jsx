"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"


const Stat = ({ value, label, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const increment = end / (duration / 16) // 16ms is roughly 60fps

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-green-700 mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 md:p-12">
            <Stat value={10} label="Years of Experience" suffix="+" />
            <Stat value={30} label="Medical Specialists" suffix="+" />
            <Stat value={10000} label="Patients Served" suffix="+" />
            <Stat value={24} label="Hours of Service" suffix="/7" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
