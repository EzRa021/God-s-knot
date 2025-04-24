"use client"

import { motion } from "framer-motion"
import { ChevronRight, Phone, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceCard from "@/components/service-card"
import TestimonialCarousel from "@/components/testimonial-carousel"

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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

        {/* Hero Section */}
        <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/80 z-10" />
        <div
          className="relative h-[600px] bg-cover bg-center"
          style={{ backgroundImage: "url('/bg2.jpg')" }}
        >
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <motion.div className="max-w-2xl text-white" initial="hidden" animate="visible" variants={fadeIn}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Compassionate Care for a Healthier Tomorrow</h1>
              <p className="text-lg md:text-xl mb-8">
                At Gods Knot Hospital Limited, we combine cutting-edge medical technology with compassionate care to provide
                the best healthcare experience for our patients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-800 hover:bg-green-50">
                  Book an Appointment
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Emergency Services
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="bg-green-50 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <p className="text-lg font-bold text-green-900">08039297709, 08110014978,
                08157041274, 08071301058</p>
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
                <p className="text-lg font-bold text-green-900"> Opposite NIPCO Filling Station, Off Ido/Eruwa Road
                  <br />
                  lyana Ekerin, Ologuneru
                  <br />
                  Ibadan, Oyo State</p>
              </div>
            </motion.div>
          </div>
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
              icon="Brain"
              title="Neurology"
              description="Expert care for conditions affecting the brain, spine, and nervous system."
            />
            <ServiceCard
              icon="Baby"
              title="Pediatrics"
              description="Specialized healthcare for infants, children, and adolescents."
            />
            <ServiceCard
              icon="Bone"
              title="Orthopedics"
              description="Treatment for injuries and diseases affecting the musculoskeletal system."
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

