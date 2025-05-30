"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  MapPin,
  Phone,
  Calendar,
  Users,
  ClipboardCheck,
  Stethoscope,
  Heart,
  Brain,
  TreesIcon as Lungs,
  Baby,
  Bone,
  Activity,
  ChevronRight,
  Search,
  Syringe,
  Clipboard,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// import { useToast } from "@/components/ui/so"

export default function GOSAMClinicPage() {
  // Add toast functionality
  // const { toast } = useToast()
  
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    specialty: "",
    reason: "",
    insurance: "",
    notes: ""
  })

  // WhatsApp number to send the form data to (replace with your actual number)
  const whatsappNumber = "08132815449" // Format: country code + number without +

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value
    })
  }

  // Handle select changes
  const handleSelectChange = (id, value) => {
    setFormData({
      ...formData,
      [id]: value
    })
  }

  // Format and send data to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create message text with all form data
    const message = `
*New Appointment Request*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time || "Not specified"}
Specialty: ${formData.specialty || "Not specified"}
Reason: ${formData.reason}
Insurance: ${formData.insurance}
Additional Notes: ${formData.notes || "None"}
    `.trim()
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Show success toast

    
    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, "_blank")
  }

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

  const specialties = [
    {
      name: "Family Medicine Clinic",
      description:
        "Comprehensive primary care for patients of all ages, focusing on preventive care and managing chronic conditions.",
      icon: <Users className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      name: "ANC (Antenatal Care)",
      description:
        "Specialized care for expectant mothers throughout pregnancy, ensuring the health and well-being of both mother and baby.",
      icon: <Baby className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      name: "Gynecology",
      description:
        "Specialized care for women's reproductive health, including routine check-ups, diagnostics, and treatments.",
      icon: <Heart className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      name: "General Outpatient Clinic",
      description: "Walk-in and appointment-based care for a wide range of health concerns and conditions.",
      icon: <Stethoscope className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      name: "Pediatric Clinic",
      description:
        "Specialized healthcare for infants, children, and adolescents, focusing on growth, development, and childhood illnesses.",
      icon: <Baby className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      name: "Immunization Clinic",
      description:
        "Preventive vaccines for children and adults according to national and international immunization schedules.",
      icon: <Syringe className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      name: "Orthopedic Clinic",
      description:
        "Specialized care for musculoskeletal conditions, including bone, joint, ligament, tendon, and muscle disorders.",
      icon: <Bone className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      name: "Wound Dressing and Management",
      description:
        "Professional care for acute and chronic wounds, including surgical wounds, pressure ulcers, and diabetic foot ulcers.",
      icon: <Clipboard className="h-10 w-10 text-green-600 mb-4" />,
    },
  ]

  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Internal Medicine",
      image: "/placeholder.svg?height=300&width=300",
      education: "Harvard Medical School",
      experience: "15+ years",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Cardiology",
      image: "/placeholder.svg?height=300&width=300",
      education: "Johns Hopkins University",
      experience: "12+ years",
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      image: "/placeholder.svg?height=300&width=300",
      education: "Stanford University School of Medicine",
      experience: "10+ years",
    },
    {
      name: "Dr. David Thompson",
      specialty: "Neurology",
      image: "/placeholder.svg?height=300&width=300",
      education: "Yale School of Medicine",
      experience: "14+ years",
    },
  ]

  const testimonials = [
    {
      quote:
        "The care I received at GOSAM Clinic was exceptional. The doctors took the time to listen to my concerns and developed a treatment plan that addressed all my needs.",
      name: "Robert Wilson",
      title: "Patient",
    },
    {
      quote:
        "As a long-time patient with a chronic condition, I've found the medical team at GOSAM Clinic to be thorough, compassionate, and committed to my ongoing health.",
      name: "Maria Garcia",
      title: "Patient",
    },
    {
      quote:
        "The staff at GOSAM Clinic made my children feel comfortable during their check-ups. The pediatrician was patient and thorough, explaining everything clearly.",
      name: "James Anderson",
      title: "Parent",
    },
  ]

  const faqs = [
    {
      question: "What services does GOSAM Clinic offer?",
      answer:
        "GOSAM Clinic offers a comprehensive range of medical services including preventive care, diagnostic services, treatment for acute and chronic conditions, specialist consultations, and follow-up care. Our multi-specialty team provides care across internal medicine, cardiology, neurology, pulmonology, pediatrics, orthopedics, and more.",
    },
    {
      question: "How do I schedule an appointment?",
      answer:
        "You can schedule an appointment by calling our reception at (123) 456-7890, using our online appointment booking system on this website, or visiting our reception desk in person. We offer same-day appointments for urgent matters and scheduled appointments for routine care and specialist consultations.",
    },
    {
      question: "What insurance plans do you accept?",
      answer:
        "GOSAM Clinic accepts most major insurance plans, including Medicare and Medicaid. We recommend contacting our billing department or your insurance provider before your visit to verify coverage details. Our staff can assist you with understanding your benefits and any potential out-of-pocket costs.",
    },
    {
      question: "What should I bring to my first appointment?",
      answer:
        "For your first visit, please bring your photo ID, insurance card, a list of current medications (including dosages), your medical history information, any relevant medical records or test results, and a list of questions or concerns you'd like to discuss with your provider.",
    },
    {
      question: "Do you offer telehealth appointments?",
      answer:
        "Yes, GOSAM Clinic offers telehealth appointments for appropriate cases. Virtual visits are available for follow-up appointments, medication management, reviewing test results, and certain consultations. Please call our office to determine if your medical concern is suitable for a telehealth appointment.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/80 z-10" />
        <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/IMG_0589.jpg')" }}>
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <motion.div className="max-w-2xl text-white" initial="hidden" animate="visible" variants={fadeIn}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">GOSAM Clinic</h1>
              <p className="text-lg md:text-xl">
                Comprehensive, patient-centered healthcare delivered by experienced medical professionals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinic Overview */}
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
              <h2 className="text-3xl font-bold text-green-800 mb-6">Comprehensive Medical Care</h2>
              <p className="text-gray-700 mb-6">
                GOSAM Clinic provides comprehensive outpatient medical services for patients of all ages. Our
                multi-specialty team of healthcare professionals is committed to delivering personalized, evidence-based
                care in a comfortable and supportive environment.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Users className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Patient-Centered Approach</h4>
                    <p className="text-gray-600">
                      We focus on building long-term relationships with our patients, understanding their unique needs,
                      and involving them in decisions about their care.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <ClipboardCheck className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Coordinated Care</h4>
                    <p className="text-gray-600">
                      Our integrated approach ensures seamless coordination between primary care and specialists,
                      providing comprehensive management of your health.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Activity className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Preventive Focus</h4>
                    <p className="text-gray-600">
                      We emphasize preventive care and early intervention to help you maintain optimal health and
                      prevent disease progression.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/african-american-medic-pregnant-woman-talking.jpg"
                alt="Doctor consulting with patient"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Medical Specialties - Changed heading to "Our Services" */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              GOSAM Clinic offers a wide range of medical specialties to address diverse healthcare needs under one
              roof.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {specialties.map((specialty, index) => (
              <motion.div key={specialty.name} variants={fadeIn}>
                <Card className="border-green-100 h-full hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    {specialty.icon}
                    <CardTitle className="text-xl text-green-800">{specialty.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base">{specialty.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-green-700 hover:text-green-800 hover:bg-green-50 p-0">
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardFooter>
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
            <Link href="/services">
              <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                View All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Appointment Booking - Updated with form handling */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">Schedule an Appointment</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Book an appointment with our medical professionals quickly and easily.
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Card className="border-green-100 shadow-md">
              <CardHeader>
                <CardTitle className="text-green-800">Appointment Request</CardTitle>
                <CardDescription>
                  Fill out the form below to request an appointment. Submit to send details via WhatsApp.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          placeholder="Enter your full name" 
                          className="border-green-200" 
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Enter your email" 
                          className="border-green-200" 
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          placeholder="Enter your phone number" 
                          className="border-green-200" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="date">Preferred Date</Label>
                        <Input 
                          id="date" 
                          type="date" 
                          className="border-green-200" 
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="time">Preferred Time</Label>
                        <Select onValueChange={(value) => handleSelectChange("time", value)}>
                          <SelectTrigger className="border-green-200">
                            <SelectValue placeholder="Select a time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Morning (8AM - 12PM)">Morning (8AM - 12PM)</SelectItem>
                            <SelectItem value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</SelectItem>
                            <SelectItem value="Evening (4PM - 6PM)">Evening (4PM - 6PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="specialty">Specialty</Label>
                        <Select onValueChange={(value) => handleSelectChange("specialty", value)}>
                          <SelectTrigger className="border-green-200">
                            <SelectValue placeholder="Select a specialty" />
                          </SelectTrigger>
                          <SelectContent>
                            {specialties.map((specialty) => (
                              <SelectItem key={specialty.name} value={specialty.name}>
                                {specialty.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="reason">Reason for Visit</Label>
                        <Input 
                          id="reason" 
                          placeholder="Brief description of your concern" 
                          className="border-green-200" 
                          value={formData.reason}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="insurance">Insurance Provider</Label>
                        <Input 
                          id="insurance" 
                          placeholder="Enter your insurance provider" 
                          className="border-green-200" 
                          value={formData.insurance}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <textarea
                      id="notes"
                      className="w-full min-h-[100px] p-2 border border-green-200 rounded-md"
                      placeholder="Any additional information that might be helpful"
                      value={formData.notes}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                
                  <div className="mt-6 flex justify-between">
                    <Button type="button" variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                      Call Instead
                    </Button>
                    <Button type="submit" className="bg-green-600 hover:bg-green-700">
                      Submit via WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">Patient Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Read what our patients have to say about their experience at GOSAM Clinic.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="border-green-100 h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="36"
                        fill="currentColor"
                        className="opacity-30"
                      >
                        <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                    <div className="mt-auto">
                      <p className="font-semibold text-green-800">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.title}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
              Find answers to common questions about GOSAM Clinic services and policies.
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
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}