"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  Bed,
  Clock,
  Calendar,
  MapPin,
  Phone,
  Wifi,
  Coffee,
  Utensils,
  Car,
  Tv,
  ShowerHead,
  Snowflake,
  ChevronRight,
  Star,
  StarHalf,
  Users,
  CalendarDays,
  CreditCard,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LodgePage() {
  const [checkInDate, setCheckInDate] = useState("")
  const [checkOutDate, setCheckOutDate] = useState("")
  const [guests, setGuests] = useState("1")
  const [roomType, setRoomType] = useState("standard")

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

  const roomTypes = [
    {
      id: "standard",
      name: "Standard Room",
      description: "Comfortable room with essential amenities for a restful stay.",
      price: 89,
      capacity: "1-2 guests",
      size: "250 sq ft",
      beds: "1 Queen Bed",
      image: "/IMG_0635.jpg",
      amenities: ["Free Wi-Fi", "TV", "Private Bathroom", "Air Conditioning", "Daily Housekeeping"],
    },
    {
      id: "deluxe",
      name: "Deluxe Room",
      description: "Spacious room with additional amenities for added comfort.",
      price: 129,
      capacity: "1-3 guests",
      size: "350 sq ft",
      beds: "1 King Bed or 2 Queen Beds",
      image: "/IMG_0636.jpg",
      amenities: [
        "Free Wi-Fi",
        "TV",
        "Private Bathroom",
        "Air Conditioning",
        "Daily Housekeeping",
        "Mini Fridge",
        "Coffee Maker",
        "Work Desk",
      ],
    },
  ]

  const amenities = [
    { name: "Free Wi-Fi", icon: <Wifi className="h-5 w-5 text-green-600" /> },
    { name: "Complimentary Breakfast", icon: <Coffee className="h-5 w-5 text-green-600" /> },
    { name: "On-site Dining", icon: <Utensils className="h-5 w-5 text-green-600" /> },
    { name: "Free Parking", icon: <Car className="h-5 w-5 text-green-600" /> },
    { name: "Cable TV", icon: <Tv className="h-5 w-5 text-green-600" /> },
    { name: "Private Bathrooms", icon: <ShowerHead className="h-5 w-5 text-green-600" /> },
    { name: "Air Conditioning", icon: <Snowflake className="h-5 w-5 text-green-600" /> },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      relationship: "Patient's Daughter",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      comment:
        "The God's Knot Lodge was a blessing during my mother's extended hospital stay. Being able to stay so close to the hospital made a difficult time much more manageable. The staff was incredibly supportive and understanding.",
    },
    {
      name: "Michael Rodriguez",
      relationship: "Patient's Spouse",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4.5,
      comment:
        "Clean, comfortable, and convenient. The lodge provided everything I needed while my wife was receiving treatment. Having a place to rest that was just steps away from the hospital made all the difference.",
    },
    {
      name: "Emily Chen",
      relationship: "Out-of-town Patient",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      comment:
        "As someone traveling from out of state for specialized treatment, the lodge was perfect. The shuttle service to and from appointments was reliable, and the kitchenette in my room allowed me to prepare meals according to my dietary needs.",
    },
  ]

 
  const faqs = [
    {
      question: "What are the check-in and check-out times?",
      answer:
        "Check-in time is 3:00 PM and check-out time is 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability.",
    },
    {
      question: "Is there a shuttle service to the hospital?",
      answer:
        "Yes, we offer a complimentary shuttle service between the lodge and hospital buildings. The shuttle runs every 30 minutes from 6:00 AM to 10:00 PM daily.",
    },
    {
      question: "Are meals provided?",
      answer:
        "We offer a complimentary continental breakfast daily from 6:30 AM to 9:30 AM. There is also a café on-site that serves lunch and dinner, and each room has a small refrigerator and microwave.",
    },
    {
      question: "Can family members stay with patients?",
      answer:
        "The lodge is specifically designed for patients' families, caregivers, and outpatients. We offer special rates and accommodations for those supporting loved ones during hospital stays.",
    },
    {
      question: "Is there a minimum or maximum length of stay?",
      answer:
        "There is no minimum stay requirement. For extended stays of more than 14 days, please contact our office directly for special rates and arrangements.",
    },
  ]

  const calculatePrice = () => {
    if (!checkInDate || !checkOutDate) return 0

    const start = new Date(checkInDate)
    const end = new Date(checkOutDate)
    const diffTime = Math.abs(end - start)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    const selectedRoom = roomTypes.find((room) => room.id === roomType)
    return diffDays * (selectedRoom?.price || 0)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/80 z-10" />
        <div
          className="relative h-[400px] bg-cover bg-center"
          style={{ backgroundImage: "url('/IMG_0636.jpg')" }}
        >
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <motion.div className="max-w-2xl text-white" initial="hidden" animate="visible" variants={fadeIn}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">God's Knot Lodge</h1>
              <p className="text-lg md:text-xl">
                Comfortable accommodations for patients and families, conveniently located on the hospital campus.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lodge Overview */}
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
              <h2 className="text-3xl font-bold text-green-800 mb-6">A Home Away From Home</h2>
              <p className="text-gray-700 mb-6">
                The God's Knot Lodge offers comfortable, convenient accommodations for patients receiving outpatient
                treatment and families of hospitalized patients. Located directly on the hospital campus, our lodge
                provides a supportive environment during your healthcare journey.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Bed className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Comfortable Accommodations</h4>
                    <p className="text-gray-600">Various room types to meet different needs and budgets</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <MapPin className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Convenient Location</h4>
                    <p className="text-gray-600">Just steps away from all hospital facilities</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Users className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Supportive Environment</h4>
                    <p className="text-gray-600">Staff who understand the unique needs of patients and families</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {amenities.map((amenity, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="flex items-center gap-1 bg-green-50 border-green-200 text-green-800 px-3 py-1"
                  >
                    {amenity.icon}
                    <span>{amenity.name}</span>
                  </Badge>
                ))}
              </div>

              <Button className="bg-green-600 hover:bg-green-700">Book Your Stay</Button>
            </motion.div>

            <motion.div variants={fadeIn} className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/lodge.jpg"
                alt="God's Knot Lodge exterior"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">Accommodations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from a variety of room types designed to meet your needs during your stay at God's Knot Hospital Limited  .
            </p>
          </motion.div>

          <Tabs defaultValue="standard" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="standard">Standard</TabsTrigger>
              <TabsTrigger value="deluxe">Deluxe</TabsTrigger>
            </TabsList>

            {roomTypes.map((room) => (
              <TabsContent key={room.id} value={room.id}>
                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative h-full rounded-lg overflow-hidden shadow-md">
                    <Image src={room.image || "/lodge2.jpg"} alt={room.name} fill className="object-contain" />
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-green-800">{room.name}</h3>
                        <p className="text-gray-600">{room.description}</p>
                      </div>
                      
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-green-600 mr-2" />
                        <span className="text-gray-700">{room.capacity}</span>
                      </div>
                      <div className="flex items-center">
                        <Bed className="h-5 w-5 text-green-600 mr-2" />
                        <span className="text-gray-700">{room.beds}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-green-700 mb-2">Room Amenities:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {room.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-green-600 mr-1" />
                            <span className="text-gray-700">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">Book {room.name}</Button>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>



      {/* FAQs */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about staying at God's Knot Lodge.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-green-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-green-800 text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Book Your Stay?</h2>
            <p className="text-lg text-green-100 max-w-3xl mx-auto mb-8">
              Contact our reservation team to book your stay at God's Knot Lodge or to inquire about special rates for
              patients and families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-800 hover:bg-green-100">
                <Phone className="h-4 w-4 mr-2" />
                Call Reservations
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-green-700/50">
                <Calendar className="h-4 w-4 mr-2" />
                Book Online
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
