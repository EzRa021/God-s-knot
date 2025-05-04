"use client"

import  React from "react"

import { motion } from "framer-motion"
import { Shield, Clock, Award, Users } from "lucide-react"



const Feature = ({ icon, title, description }) => (
  <motion.div
    className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
    whileHover={{ y: -5 }}
  >
    <div className="p-3 bg-green-50 rounded-full mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-green-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

export default function FeatureSection() {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-green-700" />,
      title: "Quality Care",
      description:
        "We are committed to providing the highest quality healthcare services with compassion and excellence.",
    },
    {
      icon: <Clock className="h-6 w-6 text-green-700" />,
      title: "24/7 Services",
      description: "Our hospital is open 24 hours a day, 7 days a week to serve you in times of need.",
    },
    {
      icon: <Award className="h-6 w-6 text-green-700" />,
      title: "Certified Experts",
      description: "Our team consists of board-certified physicians and healthcare professionals.",
    },
    {
      icon: <Users className="h-6 w-6 text-green-700" />,
      title: "Patient-Centered",
      description: "We put patients first, ensuring personalized care that addresses individual needs.",
    },
  ]

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Gods Knot Hospital, we are dedicated to excellence in healthcare delivery and patient satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Feature icon={feature.icon} title={feature.title} description={feature.description} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
