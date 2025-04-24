"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Clock, Phone, Pill, Truck, FileText, ShieldCheck, Repeat, CalendarClock } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PharmacyPage() {
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

  const pharmacyServices = [
    {
      title: "Prescription Filling",
      description: "Quick and accurate filling of prescriptions with pharmacist consultation.",
      icon: <Pill className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      title: "Medication Delivery",
      description: "Home delivery service for medications within our service area.",
      icon: <Truck className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      title: "Medication Management",
      description: "Personalized medication reviews and management plans.",
      icon: <FileText className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      title: "Automatic Refills",
      description: "Convenient automatic refill program for maintenance medications.",
      icon: <Repeat className="h-10 w-10 text-green-600 mb-4" />,
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
          style={{ backgroundImage: "url('/images/pharmacy-hero.jpg')" }}
        >
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <motion.div className="max-w-2xl text-white" initial="hidden" animate="visible" variants={fadeIn}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Hospital Pharmacy</h1>
              <p className="text-lg md:text-xl">
                Expert pharmaceutical care and medication services for patients and the community.
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
                <p className="text-gray-700">Monday - Friday: 8am - 8pm</p>
                <p className="text-gray-700">Saturday: 9am - 5pm</p>
                <p className="text-gray-700">Sunday: 10am - 4pm</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Contact</h3>
                <p className="text-gray-700">Pharmacy Direct: (123) 456-7895</p>
                <p className="text-gray-700">Refill Line: (123) 456-7896</p>
                <p className="text-gray-700">Email: pharmacy@God's Knot.com</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <CalendarClock className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Prescription Refills</h3>
                <p className="text-gray-700">Online: Available 24/7</p>
                <p className="text-gray-700">Phone: During pharmacy hours</p>
                <p className="text-gray-700">Mobile App: Available 24/7</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pharmacy Overview */}
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
              <h2 className="text-3xl font-bold text-green-800 mb-6">
                Comprehensive Pharmacy Services
              </h2>
              <p className="text-gray-700 mb-6">
                The God's Knot Hospital Limited  Pharmacy provides comprehensive pharmaceutical services for inpatients,
                outpatients, and the community. Our team of experienced pharmacists and technicians are committed to
                ensuring safe and effective medication therapy for all patients.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <ShieldCheck className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Medication Safety</h4>
                    <p className="text-gray-600">
                      Multiple safety checks and electronic verification systems to ensure accuracy
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <FileText className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Medication Counseling</h4>
                    <p className="text-gray-600">
                      One-on-one consultations with pharmacists about your medications
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Pill className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Specialized Medications</h4>
                    <p className="text-gray-600">Access to specialty and hard-to-find medications</p>
                  </div>
                </div>
              </div>

              <Button className="bg-green-600 hover:bg-green-700">
                Transfer Your Prescriptions
              </Button>
            </motion.div>

            <motion.div variants={fadeIn} className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Pharmacist consulting with a patient"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pharmacy Services */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">Our Pharmacy Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of pharmacy services designed to meet your medication needs and support your overall
              health.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pharmacyServices.map((service, index) => (
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
            <Link href="/pharmacy/services">
              <Button
                variant="outline"
                className="border-green-600 text-green-700 hover:bg-green-50"
              >
                View All Pharmacy Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              Additional Pharmacy Offerings
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond prescription services, our pharmacy provides a range of health-related products and services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-green-100 h-full">
                <CardHeader>
                  <CardTitle className="text-green-800">Immunization Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Our pharmacy offers a variety of immunizations administered by certified pharmacists, including:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                      Flu vaccines (seasonal)
                    </li>
                    <li className="flex items-center">
                      <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                      Pneumonia vaccines
                    </li>
                    <li className="flex items-center">
                      <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                      Shingles vaccines
                    </li>
                    <li className="flex items-center">
                      <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                      Travel vaccines
                    </li>
                    <li className="flex items-center">
                      <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                      Other recommended adult vaccines
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-green-100 h-full">
                <CardHeader>
                  <CardTitle className="text-green-800">Health & Wellness Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Our pharmacy carries a wide selection of health and wellness products, including:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600">
                    <div className="flex items-center">
                      <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                      Over-the-counter medications
                    </div>
                    <div className="flex items-center">
                      <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                      Vitamins and supplements
                    </div>
                    <div className="flex items-center">
                      <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                      First aid supplies
                    </div>
                    <div className="flex items-center">
                      <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                      Diabetic care products
                    </div>
                    <div className="flex items-center">
                      <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                      Home health equipment
                    </div>
                    <div className="flex items-center">
                      <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                      Personal care items
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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
            <h2 className="text-3xl font-bold text-white mb-6">Your Health is Our Priority</h2>
            <p className="text-lg text-green-100 max-w-3xl mx-auto mb-8">
              Our pharmacists are available to answer your questions and provide personalized medication counseling to
              help you achieve the best possible health outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-800 hover:bg-green-100">
                Refill a Prescription
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-green-700/50">
                Speak with a Pharmacist
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}