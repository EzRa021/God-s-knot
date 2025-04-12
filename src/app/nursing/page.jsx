"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Heart, Clock, Users, Award, Clipboard, Phone } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NursingPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const nursingSpecialties = [
    {
      title: "Critical Care",
      description: "Specialized care for patients with acute, life-threatening conditions requiring close monitoring.",
      icon: <Heart className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      title: "Pediatric Nursing",
      description: "Compassionate care for infants, children, and adolescents with various health needs.",
      icon: <Users className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      title: "Surgical Nursing",
      description: "Pre and post-operative care for patients undergoing various surgical procedures.",
      icon: <Clipboard className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      title: "Emergency Nursing",
      description: "Rapid assessment and care for patients with urgent and emergency medical conditions.",
      icon: <Clock className="h-10 w-10 text-green-600 mb-4" />,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/80 z-10" />
        <div
          className="relative h-[400px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/nursing-hero.jpg')" }}
        >
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <motion.div className="max-w-2xl text-white" initial="hidden" animate="visible" variants={fadeIn}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Nursing Excellence</h1>
              <p className="text-lg md:text-xl">
                Dedicated professionals providing compassionate, high-quality care at every stage of your health
                journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-8 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Award className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Magnet Recognition</h3>
                <p className="text-gray-700">
                  Recognized for nursing excellence and quality patient care
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Users className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Nursing Team</h3>
                <p className="text-gray-700">Over 300 dedicated nursing professionals</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Nurse Hotline</h3>
                <p className="text-gray-700">24/7 nurse advice line: 1-800-NURSE-HELP</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nursing Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl font-bold text-green-800 mb-6">Our Nursing Philosophy</h2>
              <p className="text-gray-700 mb-6">
                At God's Knot Hospital, our nursing team is the heart of our patient care. We believe in a holistic
                approach that treats the whole person—mind, body, and spirit. Our nurses are committed to providing
                evidence-based care with compassion and respect for each individual's unique needs.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Heart className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Patient-Centered Care</h4>
                    <p className="text-gray-600">
                      Focusing on individual needs and preferences in all care decisions
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Award className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Excellence in Practice</h4>
                    <p className="text-gray-600">
                      Commitment to ongoing education and evidence-based nursing practice
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Users className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Collaborative Approach</h4>
                    <p className="text-gray-600">
                      Working as part of an integrated healthcare team for comprehensive care
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-green-600 hover:bg-green-700">
                Meet Our Nursing Leadership
              </Button>
            </motion.div>

            <motion.div variants={fadeIn} className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Nurses providing compassionate care"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nursing Specialties */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">Nursing Specialties</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our nursing team includes professionals with specialized training across a wide range of healthcare areas.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {nursingSpecialties.map((specialty, index) => (
              <motion.div key={specialty.title} variants={fadeIn}>
                <Card className="border-green-100 h-full">
                  <CardHeader className="pb-2">
                    {specialty.icon}
                    <CardTitle className="text-xl text-green-800">{specialty.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base">
                      {specialty.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/careers">
              <Button
                variant="outline"
                className="border-green-600 text-green-700 hover:bg-green-50"
              >
                Nursing Career Opportunities
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Experience the God's Knot Difference</h2>
            <p className="text-lg text-green-100 max-w-3xl mx-auto mb-8">
              Our nursing team is committed to providing exceptional care and support throughout your healthcare
              journey.
            </p>
            <Button className="bg-white text-green-800 hover:bg-green-100">
              Schedule an Appointment
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}