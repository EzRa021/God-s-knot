"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  Clock,
  MapPin,
  Phone,
  ShoppingCart,
  Tag,
  Truck,
  CreditCard,
  Gift,
  Calendar,
  CheckCircle,
  Heart,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function RuffshallSupermarketPage() {
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

  const productCategories = [
    {
      title: "Health Foods",
      description: "Specialized dietary products, supplements, and health-focused foods for various nutritional needs.",
      icon: <Heart className="h-10 w-10 text-green-600 mb-4" />,
      features: [
        "Gluten-free options",
        "Diabetic-friendly foods",
        "Protein supplements",
        "Vitamin and mineral supplements",
      ],
      image: "/IMG_0600.jpg",
    },
    {
      title: "Personal Care",
      description: "Hygiene products, over-the-counter medications, and personal care essentials for hospital stays.",
      icon: <Heart className="h-10 w-10 text-green-600 mb-4" />,
      features: ["Gentle skin care products", "Common medications", "First aid supplies", "Baby and childcare items"],
      image: "/IMG_0599.jpg",
    },
  
  ]

  const services = [
    {
      title: "Room Delivery",
      description: "We deliver groceries and essentials directly to patient rooms and hospital departments.",
      icon: <Truck />,
    },
    {
      title: "Online Ordering",
      description: "Order online through our website or app for pickup or delivery within the hospital.",
      icon: <ShoppingCart />,
    },
    {
      title: "Special Orders",
      description: "We can special order items not normally stocked to meet specific dietary or personal needs.",
      icon: <Tag />,
    },
    {
      title: "Staff Discounts",
      description: "Hospital staff receive special discounts with valid ID badges.",
      icon: <CreditCard />,
    },
    {
      title: "Gift Baskets",
      description: "Custom gift baskets for patients, available for purchase and delivery.",
      icon: <Gift />,
    },
    {
      title: "Weekly Specials",
      description: "Check our weekly specials and promotions for great savings.",
      icon: <Calendar />,
    },
  ]

  const faqs = [
    {
      question: "Can I order groceries for delivery to a patient room?",
      answer:
        "Yes, we offer delivery service to patient rooms within God's Knot Hospital Limited Hospital. You can place an order in person, by phone, or through our online ordering system. Please provide the patient's name and room number when ordering.",
    },
    {
      question: "Do you offer special dietary products?",
      answer:
        "Yes, we carry a wide range of special dietary products including gluten-free, sugar-free, low-sodium, and allergen-free options. Our staff can help you locate specific items for dietary needs.",
    },
    {
      question: "Can hospital staff get discounts?",
      answer:
        "Yes, all God's Knot Hospital Limitedstaff receive a 10% discount on purchases with a valid hospital ID badge. Certain exclusions may apply to promotional items.",
    },
    {
      question: "How does the loyalty program work?",
      answer:
        "Our Ruffshall Rewards program lets you earn 1 point for every dollar spent. You earn double points on health food purchases. Points can be redeemed for discounts, free items, and special offers. You can sign up at the checkout counter or online.",
    },
    {
      question: "Do you carry over-the-counter medications?",
      answer:
        "Yes, we have a pharmacy section with common over-the-counter medications such as pain relievers, cold and flu remedies, digestive aids, and first aid supplies. For prescription medications, please visit the main hospital pharmacy.",
    },
    {
      question: "Can I special order items not normally stocked?",
      answer:
        "Yes, we can special order items not normally stocked to meet your specific needs. Please speak with a store manager or customer service representative about special orders. Most special orders can be fulfilled within 2-3 business days depending on availability.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Navbar/>
      <section className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/80 z-10" />
        <div
          className="relative h-[400px] bg-cover bg-center"
          style={{ backgroundImage: "url('/IMG_0600.jpg')" }}
        >
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <motion.div className="max-w-2xl text-white" initial="hidden" animate="visible" variants={fadeIn}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Ruffshall Supermarket</h1>
              <p className="text-lg md:text-xl">
                Convenient shopping for groceries, health foods, and essentials right within God's Knot Hospital Limited Hospital.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Store Overview */}
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
              <h2 className="text-3xl font-bold text-green-800 mb-6">About Ruffshall Supermarket</h2>
              <p className="text-gray-700 mb-6">
                Ruffshall Supermarket at God's Knot Hospital Limitedoffers a convenient shopping experience for patients,
                visitors, and staff. Our store provides a wide range of groceries, fresh produce, health foods, personal
                care items, and hospital essentials.
              </p>
              <p className="text-gray-700 mb-6">
                We understand the unique needs of hospital visitors and patients, which is why we stock specialized
                health foods, dietary products, and items that cater to various medical requirements.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Convenient Location</h4>
                    <p className="text-gray-600">
                      Located on the ground floor of the East Wing for easy access by patients, visitors, and staff.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Health-Focused Selection</h4>
                    <p className="text-gray-600">
                      Curated product selection with emphasis on health, nutrition, and special dietary needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Patient-Centered Services</h4>
                    <p className="text-gray-600">
                      Room delivery, special orders, and other services designed specifically for hospital patients.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/IMG_0600.jpg"
                alt="Inside Ruffshall Supermarket"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">Our Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our wide range of products carefully selected to meet the needs of our hospital community.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {productCategories.map((category, index) => (
              <motion.div key={category.title} variants={fadeIn}>
                <Card className="border-green-100 h-full hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    {category.icon}
                    <CardTitle className="text-xl text-green-800">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base mb-6">{category.description}</CardDescription>
                    <div className="relative h-48 w-full mb-6 rounded-md overflow-hidden">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      {category.features.map((feature, idx) => (
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
              Find answers to common questions about Ruffshall Supermarket.
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
                Have more questions? Contact our supermarket staff for additional information.
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
            <h2 className="text-3xl font-bold text-white mb-6">Visit Ruffshall Supermarket Today</h2>
            <p className="text-lg text-green-100 max-w-3xl mx-auto mb-8">
              Experience convenient shopping right within God's Knot Hospital Limited Hospital. From fresh groceries to health
              essentials, we've got everything you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-800 hover:bg-green-100">
                <MapPin className="mr-2 h-4 w-4" /> Find Us
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-green-700/50">
                <ShoppingCart className="mr-2 h-4 w-4" /> View Products
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
