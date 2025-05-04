"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Phone, Truck, Heart, AlertCircle, Users, Shield, Activity, Stethoscope, Clipboard, ChevronRight, FileText, Calendar, CheckCircle } from 'lucide-react'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"

export default function AmbulancePage() {
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

  const ambulanceServices = [
    {
      title: "Emergency Response",
      description:
        "Immediate response to life-threatening emergencies with advanced life support capabilities and highly trained paramedics.",
      icon: <AlertCircle className="h-10 w-10 text-green-600 mb-4" />,
      features: [
        "24/7 availability",
        "Advanced life support equipment",
        "Rapid response times",
        "Direct communication with emergency department",
      ],
    },
    {
      title: "Critical Care Transport",
      description:
        "Specialized transport for critically ill or injured patients between facilities with advanced monitoring and intervention capabilities.",
      icon: <Activity className="h-10 w-10 text-green-600 mb-4" />,
      features: [
        "ICU-level care during transport",
        "Specialized medical equipment",
        "Critical care trained staff",
        "Inter-facility transfers",
      ],
    },
    {
      title: "Non-Emergency Transport",
      description:
        "Scheduled transportation for patients requiring medical supervision or assistance during transport to medical appointments.",
      icon: <Truck className="h-10 w-10 text-green-600 mb-4" />,
      features: [
        "Scheduled appointments",
        "Comfortable transportation",
        "Medical supervision",
        "Wheelchair and stretcher accommodation",
      ],
    },
    {
      title: "Event Medical Coverage",
      description:
        "On-site medical support for public events, sporting competitions, and large gatherings to ensure rapid response to medical needs.",
      icon: <Users className="h-10 w-10 text-green-600 mb-4" />,
      features: [
        "Customized coverage plans",
        "On-site medical stations",
        "Rapid response teams",
        "Coordination with local emergency services",
      ],
    },
  ]

  const ambulanceTeam = [
    {
      name: "Dr. Robert Johnson",
      title: "Medical Director",
      image: "/placeholder.svg?height=300&width=300",
      description: "Board-certified emergency physician overseeing all ambulance service operations and protocols.",
    },
    {
      name: "Sarah Martinez",
      title: "Chief Paramedic",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Advanced care paramedic with 15+ years of experience leading our team of emergency medical professionals.",
    },
    {
      name: "Michael Chen",
      title: "Operations Manager",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Manages the day-to-day operations, logistics, and deployment of our ambulance fleet and personnel.",
    },
  ]

  const faqs = [
    {
      question: "When should I call an ambulance?",
      answer:
        "You should call an ambulance for any potentially life-threatening situation, including: severe chest pain or difficulty breathing, stroke symptoms (facial drooping, arm weakness, speech difficulties), severe injuries or bleeding, loss of consciousness, severe allergic reactions, or any situation where moving the person yourself might cause further harm. If you're unsure, it's always better to call for professional help.",
    },
    {
      question: "How much does an ambulance service cost?",
      answer:
        "The cost of ambulance services varies depending on the type of service required, distance traveled, and level of care provided. Emergency ambulance services are typically covered by most insurance plans, though there may be deductibles or co-pays. For non-emergency transport, coverage depends on your insurance plan and medical necessity. Our billing department can help verify your coverage and explain potential costs before scheduled transports.",
    },
    {
      question: "What information should I provide when calling for an ambulance?",
      answer:
        "When calling for an ambulance, be prepared to provide: your exact location (address, landmarks, cross streets), the nature of the emergency, the condition of the patient(s), any known medical history relevant to the situation, and a callback number. Stay on the line until the dispatcher tells you to hang up, as they may need to give you instructions for helping the patient until the ambulance arrives.",
    },
    {
      question: "How long will it take for an ambulance to arrive?",
      answer:
        "Response times vary based on several factors including your location, traffic conditions, weather, and the priority level of the emergency. For life-threatening emergencies in our primary service area, our target response time is under 8 minutes. The dispatcher may be able to give you an estimated arrival time when you call.",
    },
    {
      question: "Can I request a specific hospital?",
      answer:
        "In non-emergency situations, we can transport you to your preferred hospital if it's within our service area. However, in life-threatening emergencies, patients are transported to the nearest appropriate emergency facility that can provide the level of care needed. Certain conditions like stroke, trauma, or cardiac emergencies may require transport to specialized centers even if they're not the closest facility.",
    },
    {
      question: "How do I schedule non-emergency medical transport?",
      answer:
        "To schedule non-emergency medical transport, please call our scheduling line at (123) 456-7899 at least 48 hours in advance. You'll need to provide patient information, pickup and destination addresses, appointment time, mobility status (wheelchair, stretcher, etc.), and insurance information. A medical necessity form from your healthcare provider may be required for insurance coverage.",
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
          style={{ backgroundImage: "url('/WhatsApp Image 2025-04-28 at 12.31.27 PM.jpeg')" }}
        >
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <motion.div className="max-w-2xl text-white" initial="hidden" animate="visible" variants={fadeIn}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Ambulance Services</h1>
              <p className="text-lg md:text-xl">
                Professional emergency medical services available 24/7 with rapid response and advanced care
                capabilities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <Alert className="bg-red-50 border-red-200">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <AlertTitle className="text-red-800 text-lg">Medical Emergency?</AlertTitle>
            <AlertDescription className="text-gray-700">
              If you are experiencing a medical emergency, call <span className="font-bold">911</span> immediately. Do
              not use this website to request emergency assistance.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Service Overview */}
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
              <h2 className="text-3xl font-bold text-green-800 mb-6">Professional Emergency Medical Services</h2>
              <p className="text-gray-700 mb-6">
                God's Knot Hospital Limited's Ambulance Service provides comprehensive emergency medical services with a focus
                on rapid response, advanced care, and patient safety. Our fleet of modern ambulances is staffed by
                highly trained paramedics and emergency medical technicians ready to respond to any medical emergency.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Activity className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Rapid Response</h4>
                    <p className="text-gray-600">
                      Our strategically positioned ambulances ensure quick response times to emergencies throughout our
                      service area.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Stethoscope className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Advanced Care</h4>
                    <p className="text-gray-600">
                      Our ambulances are equipped with advanced life support equipment and medications to provide
                      critical care en route to the hospital.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Shield className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Certified Professionals</h4>
                    <p className="text-gray-600">
                      Our team consists of certified paramedics and EMTs with extensive training in emergency medicine
                      and critical care.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/WhatsApp Image 2025-04-28 at 12.31.25 PM.jpeg"
                alt="God's Knot Hospital Limited ambulance and paramedics"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ambulance Services */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">Our Ambulance Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of ambulance and medical transport services to meet various healthcare
              needs.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {ambulanceServices.map((service, index) => (
              <motion.div key={service.title} variants={fadeIn}>
                <Card className="border-green-100 h-full hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    {service.icon}
                    <CardTitle className="text-xl text-green-800">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base mb-6">{service.description}</CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Patient Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">Patient Information</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Important information about our ambulance services and what to expect during an emergency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-green-100 h-full">
                <CardHeader>
                  <CardTitle className="text-green-800">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-green-700 mb-2">When You Call 911</h3>
                    <p className="text-gray-700 mb-3">
                      When you call 911 for a medical emergency, here's what you can expect:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>
                        The dispatcher will ask about the nature of the emergency and the location to send appropriate
                        help
                      </li>
                      <li>The dispatcher may provide instructions for immediate care until help arrives</li>
                      <li>An ambulance with trained medical professionals will be dispatched to your location</li>
                      <li>While waiting, gather any relevant medical information and medications if possible</li>
                      <li>Make sure the entrance is accessible and consider having someone wait outside to guide EMS</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-green-700 mb-2">During Transport</h3>
                    <p className="text-gray-700 mb-3">What happens during ambulance transport:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>
                        Paramedics will assess your condition and provide necessary emergency care before and during
                        transport
                      </li>
                      <li>
                        They will communicate with the emergency department to prepare for your arrival and continue
                        treatment
                      </li>
                      <li>
                        A family member may be allowed to ride in the ambulance depending on the situation and available
                        space
                      </li>
                      <li>
                        The paramedics will decide which hospital is most appropriate based on your condition and
                        proximity
                      </li>
                      <li>
                        Throughout transport, your vital signs will be monitored and documented, and treatments will be
                        adjusted as needed
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-green-700 mb-2">After Transport</h3>
                    <p className="text-gray-700 mb-3">What happens after ambulance transport:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>
                        The paramedics will transfer your care to the emergency department staff with a detailed report
                      </li>
                      <li>You will receive a bill for ambulance services separate from hospital charges</li>
                      <li>
                        Most insurance plans cover emergency ambulance services, though coverage for non-emergency
                        transport varies
                      </li>
                      <li>
                        Our billing department can assist with insurance claims and payment options for ambulance
                        services
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="space-y-6">
                <Alert className="bg-green-50 border-green-200">
                  <AlertCircle className="h-4 w-4 text-green-600" />
                  <AlertTitle className="text-green-800">Emergency Tips</AlertTitle>
                  <AlertDescription className="text-gray-700">
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Stay calm and speak clearly when calling 911</li>
                      <li>Know your location - address, cross streets, landmarks</li>
                      <li>Follow the dispatcher's instructions exactly</li>
                      <li>Keep your phone line open after calling</li>
                      <li>Have a list of current medications ready if possible</li>
                    </ul>
                  </AlertDescription>
                </Alert>

                <Card className="border-green-100">
                  <CardHeader>
                    <CardTitle className="text-green-800">Non-Emergency Transport</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700">
                      Our non-emergency medical transport services provide safe transportation for patients who require
                      medical monitoring but are not experiencing an emergency.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-gray-700">Hospital discharges</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-gray-700">Inter-facility transfers</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-gray-700">Medical appointments</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-gray-700">Dialysis transportation</span>
                      </div>
                    </div>
                  </CardContent>
                 
                </Card>

                <Card className="border-green-100">
                  <CardHeader>
                    <CardTitle className="text-green-800">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-gray-700">
                        <span className="font-medium">Emergency:</span> 911
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-gray-700">
                        <span className="font-medium">Non-Emergency:</span> (123) 456-7899
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our ambulance services.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="px-6 py-4 text-green-800 hover:text-green-700 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-700">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 mb-4">
                Have more questions? Contact our ambulance services department for additional information.
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                <Phone className="mr-2 h-4 w-4" /> Contact Us
              </Button>
            </motion.div>
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
            <h2 className="text-3xl font-bold text-white mb-6">Emergency Preparedness</h2>
            <p className="text-lg text-green-100 max-w-3xl mx-auto mb-8">
              Being prepared for medical emergencies can save lives. Learn about emergency preparedness, CPR training,
              and other resources available through our community outreach programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-800 hover:bg-green-100">
                <Heart className="mr-2 h-4 w-4" /> CPR Training Courses
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-green-700/50">
                <FileText className="mr-2 h-4 w-4" /> Emergency Preparedness Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
