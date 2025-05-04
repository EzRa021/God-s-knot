"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  Phone,
  Utensils,
  Wifi,
  Monitor,
  CheckCircle,
  Building2,
  MessageSquare,
  Headphones,
  Calendar,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ConferenceCenterPage() {
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

  const conferenceSpaces = [
    {
      title: "Main Auditorium",
      description:
        "Our largest space, perfect for conferences, lectures, and large presentations. Features tiered seating, advanced audiovisual systems, and a spacious stage area.",
      icon: <Users className="h-10 w-10 text-green-600 mb-4" />,
      features: [
        "Capacity for 300 people",
        "4,500 sq ft of space",
        "Theater style, tiered seating",
        "Stage, podium, and projection",
      ],
      image: "/IMG_06150.jpg",
    },
    {
      title: "Conference Rooms",
      description:
        "Versatile meeting spaces for medium-sized gatherings, team meetings, and presentations with flexible seating arrangements.",
      icon: <Building2 className="h-10 w-10 text-green-600 mb-4" />,
      features: [
        "Capacities from 20-80 people",
        "800-1,200 sq ft spaces",
        "Flexible seating arrangements",
        "Built-in AV equipment",
      ],
      image: "/IMG_0616.jpg",
    },
   
  ]

  const amenities = [
    {
      title: "High-Speed Wi-Fi",
      description: "Secure, high-speed internet access throughout the Femi & Funmi Bisiriyu Conference Center.",
      icon: <Wifi />,
    },
    {
      title: "AV Equipment",
      description: "State-of-the-art audiovisual equipment with technical support.",
      icon: <Monitor />,
    },
    {
      title: "Catering Services",
      description: "Customizable catering options from our hospital's culinary team.",
      icon: <Utensils />,
    },
    {
      title: "Video Conferencing",
      description: "Advanced video conferencing capabilities for hybrid events.",
      icon: <MessageSquare />,
    },
    {
      title: "Business Center",
      description: "Access to printing, copying, and other business services.",
      icon: <Building2 />,
    },
    {
      title: "Technical Support",
      description: "On-site technical support staff to assist with your event needs.",
      icon: <Headphones />,
    },
  ]

  const faqs = [
    {
      question: "How far in advance should I book a space?",
      answer:
        "We recommend booking at least 4-6 weeks in advance for smaller meetings and 3-6 months in advance for larger conferences or events. Popular dates and the auditorium tend to book quickly, especially during medical conference seasons.",
    },
    {
      question: "Can I arrange a tour of the facilities?",
      answer:
        "Yes, we encourage potential clients to tour our facilities before booking. Tours can be arranged Monday through Friday between 9:00 AM and 4:00 PM. Please contact our office to schedule a convenient time.",
    },
    {
      question: "What audiovisual equipment is included?",
      answer:
        "Basic AV equipment is included with room rental, including projectors or displays, sound systems, microphones, and video conferencing capabilities. Specialized equipment may incur additional charges. Our technical staff can discuss your specific needs.",
    },
    {
      question: "Is parking available for attendees?",
      answer:
        "Yes, parking is available in the hospital's West Parking Garage. Validation is provided for conference attendees at a reduced rate. Valet parking is also available at the main hospital entrance for an additional fee.",
    },
    {
      question: "Can you accommodate special dietary requirements?",
      answer:
        "Yes, our catering team can accommodate a wide range of dietary requirements including vegetarian, vegan, gluten-free, and allergen-specific meals. Please inform us of any special dietary needs when planning your event menu.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Cancellations made more than 30 days before the event receive a full refund minus a small administrative fee. Cancellations made 15-30 days before receive a 50% refund. Cancellations less than 15 days before the event are not eligible for a refund, but we can work with you to reschedule if possible.",
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
          style={{ backgroundImage: "url('/images/conference-hero.jpg')" }}
        >
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <motion.div className="max-w-2xl text-white" initial="hidden" animate="visible" variants={fadeIn}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Femi & Funmi Bisiriyu Conference Center</h1>
              <p className="text-lg md:text-xl">
                State-of-the-art meeting facilities for medical conferences, training, and professional events.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Center Overview */}
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
              <h2 className="text-3xl font-bold text-green-800 mb-6">About Our Femi & Funmi Bisiriyu Conference Center</h2>
              <p className="text-gray-700 mb-6">
                The Femi & Funmi Bisiriyu Conference Center offers modern, flexible meeting spaces designed to
                accommodate medical conferences, training sessions, board meetings, and professional events of all
                sizes.
              </p>
              <p className="text-gray-700 mb-6">
                Our facilities feature state-of-the-art technology, professional support staff, and a convenient
                location within the hospital complex, making it ideal for healthcare-related events and professional
                gatherings.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Versatile Spaces</h4>
                    <p className="text-gray-600">
                      8 versatile meeting spaces accommodating 10-300 people for events of all sizes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Advanced Technology</h4>
                    <p className="text-gray-600">
                      State-of-the-art audiovisual equipment and technical support for seamless presentations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Full-Service Support</h4>
                    <p className="text-gray-600">
                      On-site catering, event planning assistance, and dedicated technical support.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/IMG-20250418-WA0001.jpg"
                alt="Femi & Funmi Bisiriyu Conference Center Main Hall"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

   

      {/* Room Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">Room Specifications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed information about our conference spaces to help you select the perfect venue for your event.
            </p>
          </motion.div>

          <Tabs defaultValue="auditorium" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="auditorium">Large Spaces</TabsTrigger>
              <TabsTrigger value="meeting-rooms">Meeting Rooms</TabsTrigger>
            </TabsList>

            <TabsContent value="auditorium">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/IMG_0616.jpg"
                    alt="/"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-6">Main Auditorium</h3>
                  <p className="text-gray-700 mb-6">
                    Our largest space, perfect for conferences, lectures, and large presentations. Features tiered
                    seating, advanced audiovisual systems, and a spacious stage area.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">Capacity</h4>
                        <p className="text-sm text-gray-600">300 people, theater-style seating</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">Size</h4>
                        <p className="text-sm text-gray-600">4,500 square feet</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">AV Equipment</h4>
                        <p className="text-sm text-gray-600">Dual projection, surround sound, wireless mics</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">Features</h4>
                        <p className="text-sm text-gray-600">Stage, podium, green room, lighting controls</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Large Conferences</Badge>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Lectures</Badge>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Presentations</Badge>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Ceremonies</Badge>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="meeting-rooms">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold text-green-800 mb-6">Executive Boardroom</h3>
                  <p className="text-gray-700 mb-6">
                    Our executive boardroom offers an elegant, professional environment for board meetings, executive
                    discussions, and small high-level gatherings. With premium furnishings and advanced technology, it's
                    ideal for important decision-making sessions.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">Capacity</h4>
                        <p className="text-sm text-gray-600">20 people, boardroom-style table</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">Size</h4>
                        <p className="text-sm text-gray-600">600 square feet</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">Technology</h4>
                        <p className="text-sm text-gray-600">Video conferencing, interactive display</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">Features</h4>
                        <p className="text-sm text-gray-600">Premium furnishings, refreshment service</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Board Meetings</Badge>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Executive Sessions</Badge>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Private Discussions</Badge>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Video Conferencing</Badge>
                  </div>
                </div>

                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md order-1 lg:order-2">
                  <Image
                    src="/IMG_0615.jpg"
                    alt="Executive Boardroom"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">Amenities & Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Femi & Funmi Bisiriyu Conference Center offers a comprehensive range of amenities and services to ensure your event runs
              smoothly.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {amenities.map((amenity, index) => (
              <motion.div key={amenity.title} variants={fadeIn}>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-green-100 hover:shadow-md transition-shadow h-full">
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                    <div className="text-green-700">{amenity.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3 text-center">{amenity.title}</h3>
                  <p className="text-gray-600 text-center">{amenity.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    
      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our Femi & Funmi Bisiriyu Conference Center.
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
                Have more questions? Contact our Femi & Funmi Bisiriyu Conference Center team for additional information.
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                <Phone className="mr-2 h-4 w-4" /> Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    <Footer/>
    </div>
  )
}
