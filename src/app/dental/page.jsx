"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Smile, Clock, Calendar, Shield, Phone, CheckCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DentistryPage() {
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

  const dentalServices = [
    {
      title: "Preventive Dentistry",
      description: "Regular check-ups, cleanings, and preventive treatments to maintain optimal oral health.",
      icon: <Shield className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      title: "Restorative Dentistry",
      description: "Fillings, crowns, bridges, and implants to restore function and appearance of damaged teeth.",
      icon: <CheckCircle className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      title: "Cosmetic Dentistry",
      description: "Teeth whitening, veneers, and aesthetic procedures to enhance your smile.",
      icon: <Smile className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      title: "Emergency Dental Care",
      description: "Prompt treatment for dental emergencies, including toothaches and dental injuries.",
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
          style={{ backgroundImage: "url('/images/dentistry-hero.jpg')" }}
        >
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <motion.div className="max-w-2xl text-white" initial="hidden" animate="visible" variants={fadeIn}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Dental Care Excellence</h1>
              <p className="text-lg md:text-xl">
                Comprehensive dental services with a gentle touch for patients of all ages.
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
                <Clock className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Hours</h3>
                <p className="text-gray-700">Monday - Friday: 8am - 6pm</p>
                <p className="text-gray-700">Saturday: 9am - 2pm</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Calendar className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Appointments</h3>
                <p className="text-gray-700">Easy online scheduling</p>
                <p className="text-gray-700">Same-day emergency appointments available</p>
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
                <h3 className="font-semibold text-green-800 mb-1">Contact</h3>
                <p className="text-gray-700">Dental Office: (123) 456-7890</p>
                <p className="text-gray-700">Emergency: 1-800-DENTAL-HELP</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dental Care Overview */}
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
              <h2 className="text-3xl font-bold text-green-800 mb-6">Comprehensive Dental Care</h2>
              <p className="text-gray-700 mb-6">
                At God's Knot Dental Center, we provide a full range of dental services in a comfortable,
                patient-focused environment. Our team of experienced dentists and dental hygienists are committed to
                helping you achieve and maintain optimal oral health.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">State-of-the-Art Technology</h4>
                    <p className="text-gray-600">
                      Advanced digital imaging and modern dental equipment for precise diagnosis and treatment
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Gentle Approach</h4>
                    <p className="text-gray-600">
                      Comfort-focused care with options for dental anxiety management
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Preventive Focus</h4>
                    <p className="text-gray-600">
                      Emphasis on education and preventive care to avoid dental problems
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-green-600 hover:bg-green-700">
                Schedule a Dental Appointment
              </Button>
            </motion.div>

            <motion.div variants={fadeIn} className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Modern dental treatment room"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Dental Services */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">Our Dental Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of dental services to meet the needs of patients of all ages.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {dentalServices.map((service, index) => (
              <motion.div key={service.title} variants={fadeIn}>
                <Card className="border-green-100 h-full">
                  <CardHeader className="pb-2">
                    {service.icon}
                    <CardTitle className="text-xl text-green-800">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base">
                      {service.description}
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
            <Link href="/dentistry/services">
              <Button
                variant="outline"
                className="border-green-600 text-green-700 hover:bg-green-50"
              >
                View All Dental Services
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
            <h2 className="text-3xl font-bold text-white mb-6">Your Smile Matters to Us</h2>
            <p className="text-lg text-green-100 max-w-3xl mx-auto mb-8">
              Whether you need a routine check-up or more complex dental treatment, our team is here to provide the care
              you need in a comfortable, supportive environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-800 hover:bg-green-100">
                Schedule an Appointment
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-green-700/50">
                Learn About Insurance Options
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}