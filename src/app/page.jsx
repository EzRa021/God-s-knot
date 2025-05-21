"use client"

import { motion } from "framer-motion"
import { ChevronRight, Phone, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceCard from "@/components/service-card"
import TestimonialCarousel from "@/components/testimonial-carousel"
import Image from "next/image"
import HeroCarousel from "@/components/hero-carousel"
import FeatureSection from "@/components/feature-section"
import StatsSection from "@/components/stats-section"
import MultiImageSlider from "@/components/image-slider"

export default function HomePage() {
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

  const leadershipTeam = [
    {
      name: "Dr. Emmanuel I. Olowokere",
      role: "Founder & Medical Director",
      image: "/md.jpg",
      bio: "MBChB, FWACS, FWACOG. Founded God's Knot Hospital Limited in 2014 with a vision to provide exceptional healthcare to all.",
    },
    {
      name: "Mrs. Rofiat Olowokere",
      role: "Hospital Administrator",
      image: "/raf.jpg",
      bio: "An epitome of diligence, prudence, sacrifice and dedication. Her unflinching support has been crucial to the hospital's development.",
    },
    {
      name: "Prof. Ojengbede",
      role: "Chairman, Board of Advisers",
      image: "/prof.jpg",
      bio: "Director, Centre for Population and Reproductive Health. Provides mentorship and leadership to the hospital.",
    },
    {
      name: "Dr. Olumide Gbala",
      role: "Guest Lecturer",
      image: "/olu.jpg",
      bio: "CMD, UNIMEDTH, Ondo. A long-time mentor to the founder and contributor to the hospital's growth.",
    },
  ]

  // Facility images for the slider
  const facilityImages = [
    { src: "/WhatsApp Image 2025-05-02 at 7.57.51 AM (1).jpeg", alt: "Hospital reception area" },
    { src: "/WhatsApp Image 2025-05-02 at 7.57.52 AM.jpeg", alt: "Modern operating theater" },
    { src: "/WhatsApp Image 2025-05-02 at 7.57.53 AM.jpeg", alt: "Patient ward" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Carousel */}
      <section className="relative">
        <HeroCarousel />
      </section>

      {/* Quick Info Section */}
      <section className="bg-white py-6 shadow-md relative z-10 -mt-16 rounded-t-3xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-xl shadow-lg p-6">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-green-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <p className="text-sm text-green-800 font-medium">Emergency Hotline</p>
                <p className="text-lg font-bold text-green-900">08110014978, 08157041274, 07032451916</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-green-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <p className="text-sm text-green-800 font-medium">Working Hours</p>
                <p className="text-lg font-bold text-green-900">24/7 Services</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-green-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <p className="text-sm text-green-800 font-medium">Location</p>
                <p className="text-lg font-bold text-green-900">
                  Opposite NIPCO Filling Station, Off Ido/Eruwa Road
                  <br />
                  lyana Ekerin, Ologuneru
                  <br />
                  Ibadan, Oyo State
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <FeatureSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Facility Images Slider */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <MultiImageSlider images={facilityImages} className="shadow-xl" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Our Medical Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of medical services to meet all your healthcare needs, delivered by our
              team of experienced and compassionate professionals.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ServiceCard
              icon="Heart"
              title="Cardiology"
              description="Comprehensive heart care with advanced diagnostic and treatment options."
            />

            <ServiceCard
              icon="Stethoscope"
              title="Primary Care"
              description="Routine check-ups, preventive care, and management of common illnesses."
            />
            <ServiceCard
              icon="FlaskConical"
              title="Laboratory"
              description="Advanced diagnostic testing with quick and accurate results."
            />
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/services">
              <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                View All Services <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who guide our hospital's mission and ensure excellence in everything we
              do.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {leadershipTeam.map((leader) => (
              <motion.div key={leader.name} variants={fadeIn}>
                <Card className="border-green-100 overflow-hidden h-full hover:shadow-lg transition-shadow">
                  <div className="relative h-64 w-full">
                    <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-green-800">{leader.name}</CardTitle>
                    <CardDescription className="text-gray-600 font-medium">{leader.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{leader.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Patient Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our patients about their experiences with our healthcare services.
            </p>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      <Footer />
    </div>
  )
}
