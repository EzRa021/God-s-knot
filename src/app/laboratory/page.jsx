"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  FlaskConical,
  Microscope,
  VolumeIcon as Vial,
  Clock,
  FileText,
  ShieldCheck,
  Beaker,
  Search,
  Calendar,
  AlertCircle,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"

export default function LaboratoryPage() {
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

  const labTests = [
    {
      category: "Blood Tests",
      tests: [
        { name: "Complete Blood Count (CBC)", turnaround: "Same day", preparation: "No special preparation required" },
        {
          name: "Basic Metabolic Panel",
          turnaround: "Same day",
          preparation: "Fasting for 8-12 hours may be required",
        },
        {
          name: "Comprehensive Metabolic Panel",
          turnaround: "Same day",
          preparation: "Fasting for 8-12 hours may be required",
        },
        { name: "Lipid Panel", turnaround: "Same day", preparation: "Fasting for 9-12 hours required" },
        { name: "Thyroid Function Tests", turnaround: "1-2 days", preparation: "No special preparation required" },
        { name: "Hemoglobin A1C", turnaround: "1-2 days", preparation: "No special preparation required" },
      ],
    },
    {
      category: "Urine Tests",
      tests: [
        { name: "Urinalysis", turnaround: "Same day", preparation: "Clean catch sample required" },
        { name: "Urine Culture", turnaround: "2-3 days", preparation: "Clean catch sample required" },
        {
          name: "24-Hour Urine Collection",
          turnaround: "2-3 days",
          preparation: "Special collection instructions provided",
        },
      ],
    },
    {
      category: "Microbiology",
      tests: [
        { name: "Throat Culture", turnaround: "2-3 days", preparation: "No eating or drinking for 30 minutes prior" },
        { name: "Wound Culture", turnaround: "2-3 days", preparation: "No special preparation required" },
        { name: "Stool Culture", turnaround: "3-5 days", preparation: "Special collection instructions provided" },
      ],
    },
    {
      category: "Molecular Diagnostics",
      tests: [
        { name: "PCR Testing", turnaround: "1-3 days", preparation: "Varies by test" },
        { name: "Genetic Testing", turnaround: "7-14 days", preparation: "Consultation required before testing" },
        {
          name: "COVID-19 Testing",
          turnaround: "Same day to 24 hours",
          preparation: "No special preparation required",
        },
      ],
    },
  ]

  const labTeam = [
    {
      name: "Dr. Sarah Chen",
      role: "Laboratory Director",
      image: "/placeholder.svg?height=200&width=200",
      specialization: "Clinical Pathology",
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Chief Pathologist",
      image: "/placeholder.svg?height=200&width=200",
      specialization: "Anatomical Pathology",
    },
    {
      name: "Dr. Emily Johnson",
      role: "Clinical Microbiologist",
      image: "/placeholder.svg?height=200&width=200",
      specialization: "Infectious Disease Diagnostics",
    },
    {
      name: "Dr. David Thompson",
      role: "Molecular Diagnostics Specialist",
      image: "/placeholder.svg?height=200&width=200",
      specialization: "Genetic Testing",
    },
  ]

  const faqs = [
    {
      question: "Do I need an appointment for lab tests?",
      answer:
        "Most routine lab tests do not require an appointment. However, specialized tests may require scheduling. We recommend calling ahead for complex tests or if you have special needs.",
    },
    {
      question: "How do I prepare for a blood test?",
      answer:
        "Preparation depends on the specific test. Some tests require fasting (no food or drink except water) for 8-12 hours before the test. Your doctor will provide specific instructions, or you can contact our laboratory for guidance.",
    },
    {
      question: "How long will it take to get my test results?",
      answer:
        "Turnaround times vary by test. Routine tests are often available the same day or within 24 hours. More specialized tests may take several days to a week. Your results will be sent to your doctor who will discuss them with you.",
    },
    {
      question: "Can I access my lab results online?",
      answer:
        "Yes, lab results are available through our secure patient portal. You'll need to register for access if you haven't already. Results are typically posted after your doctor has reviewed them.",
    },
    {
      question: "Will my insurance cover laboratory tests?",
      answer:
        "Most insurance plans cover medically necessary laboratory tests. However, coverage varies by plan and test type. We recommend contacting your insurance provider to verify coverage before testing.",
    },
    {
      question: "What should I bring to the laboratory?",
      answer:
        "Please bring your photo ID, insurance card, and the laboratory requisition form from your doctor. If you're collecting a sample at home, follow the provided instructions carefully.",
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
          style={{ backgroundImage: "url('/IMG_0589.jpg')" }}
        >
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <motion.div className="max-w-2xl text-white" initial="hidden" animate="visible" variants={fadeIn}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Laboratory Services</h1>
              <p className="text-lg md:text-xl">
                State-of-the-art diagnostic testing with precision, accuracy, and quick turnaround times to support your
                healthcare needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Lab Overview */}
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
                Comprehensive Laboratory Services
              </h2>
              <p className="text-gray-700 mb-6">
                Our state-of-the-art laboratory provides a full spectrum of diagnostic testing services to support your
                healthcare needs. With cutting-edge technology and a team of experienced professionals, we deliver
                accurate results with quick turnaround times.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <FlaskConical className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700">Clinical Chemistry</h3>
                    <p className="text-gray-600 text-sm">
                      Blood chemistry, metabolic panels, lipid profiles
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Microscope className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700">Microbiology</h3>
                    <p className="text-gray-600 text-sm">
                      Cultures, sensitivity testing, pathogen identification
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Vial className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700">Hematology</h3>
                    <p className="text-gray-600 text-sm">
                      Complete blood counts, coagulation studies
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Beaker className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700">Molecular Diagnostics</h3>
                    <p className="text-gray-600 text-sm">
                      PCR testing, genetic analysis, pathogen detection
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 hover:bg-green-700">Schedule a Test</Button>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-700 hover:bg-green-50"
                >
                  Learn About Test Preparation
                </Button>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/lab1.jpg"
                alt="Modern laboratory equipment and technicians"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

    
      {/* Lab Facilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">Our Laboratory Facilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Equipped with cutting-edge technology and staffed by experienced professionals, our laboratory delivers
              accurate results with quick turnaround times.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn}>
              <Card className="border-green-100 h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src="/lab1.jpg"
                    alt="Advanced laboratory equipment"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-green-800">Advanced Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    Our laboratory is equipped with the latest diagnostic technology, including automated analyzers,
                    molecular diagnostic systems, and digital pathology tools.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-green-100 h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src="/lab3.jpg"
                    alt="Quality control processes"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-green-800">Quality Assurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    We maintain rigorous quality control processes and participate in proficiency testing programs to
                    ensure the highest standards of accuracy and reliability.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-green-100 h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src="/lab2.jpg"
                    alt="Digital results reporting"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-green-800">Digital Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    Our laboratory information system integrates with electronic health records, allowing for seamless
                    ordering of tests and reporting of results to healthcare providers.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 bg-green-50 rounded-lg p-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
                <ShieldCheck className="h-8 w-8 text-green-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Accreditation & Certification
                </h3>
                <p className="text-gray-700">
                  Our laboratory is fully accredited by the College of American Pathologists (CAP) and meets all CLIA
                  (Clinical Laboratory Improvement Amendments) requirements. We adhere to the highest standards of
                  quality and safety in all our testing procedures.
                </p>
              </div>
            </div>
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
              Find answers to common questions about our laboratory services and testing procedures.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Accordion
              type="single"
              collapsible
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-green-100 last:border-0"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-green-50 text-left font-medium text-green-800">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Don't see your question here? Contact our laboratory services team for assistance.
              </p>
              <Button className="bg-green-600 hover:bg-green-700">Contact Us</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}