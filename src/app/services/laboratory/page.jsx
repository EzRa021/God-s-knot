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
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/80 z-10" />
        <div
          className="relative h-[400px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/lab-hero.jpg')" }}
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

      {/* Quick Info Section */}
      <section className="py-8 bg-green-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-full mr-4">
                <Clock className="h-6 w-6 text-green-700 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 dark:text-green-400 mb-1">Hours</h3>
                <p className="text-gray-700 dark:text-gray-300">Monday - Friday: 7am - 7pm</p>
                <p className="text-gray-700 dark:text-gray-300">Saturday: 8am - 2pm</p>
                <p className="text-gray-700 dark:text-gray-300">Sunday: Closed (Emergency services available)</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-full mr-4">
                <FileText className="h-6 w-6 text-green-700 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 dark:text-green-400 mb-1">Results</h3>
                <p className="text-gray-700 dark:text-gray-300">Most routine results: Same day</p>
                <p className="text-gray-700 dark:text-gray-300">Specialized tests: 1-7 days</p>
                <p className="text-gray-700 dark:text-gray-300">Results available via patient portal</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-full mr-4">
                <Calendar className="h-6 w-6 text-green-700 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 dark:text-green-400 mb-1">Appointments</h3>
                <p className="text-gray-700 dark:text-gray-300">Walk-ins welcome for routine tests</p>
                <p className="text-gray-700 dark:text-gray-300">Appointments recommended for specialized tests</p>
                <Link href="/appointments" className="text-green-600 dark:text-green-400 hover:underline">
                  Schedule an appointment
                </Link>
              </div>
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
              <h2 className="text-3xl font-bold text-green-800 dark:text-green-400 mb-6">
                Comprehensive Laboratory Services
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our state-of-the-art laboratory provides a full spectrum of diagnostic testing services to support your
                healthcare needs. With cutting-edge technology and a team of experienced professionals, we deliver
                accurate results with quick turnaround times.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-3">
                    <FlaskConical className="h-5 w-5 text-green-700 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 dark:text-green-500">Clinical Chemistry</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Blood chemistry, metabolic panels, lipid profiles
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-3">
                    <Microscope className="h-5 w-5 text-green-700 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 dark:text-green-500">Microbiology</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Cultures, sensitivity testing, pathogen identification
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-3">
                    <Vial className="h-5 w-5 text-green-700 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 dark:text-green-500">Hematology</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Complete blood counts, coagulation studies
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-3">
                    <Beaker className="h-5 w-5 text-green-700 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 dark:text-green-500">Molecular Diagnostics</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      PCR testing, genetic analysis, pathogen detection
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 hover:bg-green-700">Schedule a Test</Button>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-700 hover:bg-green-50 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-950"
                >
                  Learn About Test Preparation
                </Button>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Modern laboratory equipment and technicians"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Test Search and Categories */}
      <section className="py-16 bg-green-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 dark:text-green-400 mb-4">Available Laboratory Tests</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We offer a comprehensive range of diagnostic tests to meet your healthcare needs. Use the search or browse
              by category to find information about specific tests.
            </p>
          </motion.div>

          <motion.div
            className="max-w-md mx-auto mb-12 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for a test..."
              className="pl-10 border-green-200 dark:border-green-900"
            />
          </motion.div>

          <Tabs defaultValue={labTests[0].category.toLowerCase().replace(/\s+/g, "-")}>
            <TabsList className="flex flex-wrap justify-center mb-8">
              {labTests.map((category) => (
                <TabsTrigger
                  key={category.category}
                  value={category.category.toLowerCase().replace(/\s+/g, "-")}
                  className="m-1"
                >
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {labTests.map((category) => (
              <TabsContent key={category.category} value={category.category.toLowerCase().replace(/\s+/g, "-")}>
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-400 flex items-center">
                      {category.category === "Blood Tests" && <Vial className="h-5 w-5 mr-2" />}
                      {category.category === "Urine Tests" && <Beaker className="h-5 w-5 mr-2" />}
                      {category.category === "Microbiology" && <Microscope className="h-5 w-5 mr-2" />}
                      {category.category === "Molecular Diagnostics" && <FlaskConical className="h-5 w-5 mr-2" />}
                      {category.category}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {category.tests.length} tests available in this category
                    </p>
                  </div>

                  <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {category.tests.map((test, index) => (
                      <div key={index} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h4 className="font-semibold text-green-700 dark:text-green-500 mb-1">{test.name}</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                              <span className="font-medium">Preparation:</span> {test.preparation}
                            </p>
                          </div>
                          <div className="mt-2 md:mt-0 flex items-center">
                            <Badge
                              variant="outline"
                              className="border-green-200 text-green-700 dark:border-green-900 dark:text-green-400"
                            >
                              Results: {test.turnaround}
                            </Badge>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="ml-2 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 p-0"
                            >
                              Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
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
            <h2 className="text-3xl font-bold text-green-900 dark:text-green-400 mb-4">Our Laboratory Facilities</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
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
              <Card className="border-green-100 dark:border-green-900 h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Advanced laboratory equipment"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-green-800 dark:text-green-400">Advanced Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                    Our laboratory is equipped with the latest diagnostic technology, including automated analyzers,
                    molecular diagnostic systems, and digital pathology tools.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-green-100 dark:border-green-900 h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Quality control processes"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-green-800 dark:text-green-400">Quality Assurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                    We maintain rigorous quality control processes and participate in proficiency testing programs to
                    ensure the highest standards of accuracy and reliability.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-green-100 dark:border-green-900 h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Digital results reporting"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-green-800 dark:text-green-400">Digital Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                    Our laboratory information system integrates with electronic health records, allowing for seamless
                    ordering of tests and reporting of results to healthcare providers.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 bg-green-50 dark:bg-gray-800 rounded-lg p-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="bg-green-100 dark:bg-green-900/50 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
                <ShieldCheck className="h-8 w-8 text-green-700 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">
                  Accreditation & Certification
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Our laboratory is fully accredited by the College of American Pathologists (CAP) and meets all CLIA
                  (Clinical Laboratory Improvement Amendments) requirements. We adhere to the highest standards of
                  quality and safety in all our testing procedures.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lab Team */}
      <section className="py-20 bg-green-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 dark:text-green-400 mb-4">Our Laboratory Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Meet our team of experienced pathologists, technologists, and specialists who ensure accurate and timely
              diagnostic services.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {labTeam.map((member) => (
              <motion.div key={member.name} variants={fadeIn}>
                <Card className="border-green-100 dark:border-green-900 overflow-hidden h-full">
                  <div className="relative h-64 w-full">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-green-800 dark:text-green-400">{member.name}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400 font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Specialization:</span> {member.specialization}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our team includes over 30 laboratory professionals, including pathologists, medical technologists,
              phlebotomists, and support staff, all dedicated to providing exceptional diagnostic services.
            </p>
            <Button
              variant="outline"
              className="border-green-600 text-green-700 hover:bg-green-50 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-950"
            >
              Meet Our Full Team
            </Button>
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
            <h2 className="text-3xl font-bold text-green-900 dark:text-green-400 mb-4">Patient Information</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Important information to help you prepare for laboratory tests and understand the testing process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-green-100 dark:border-green-900 h-full">
                <CardHeader>
                  <CardTitle className="text-green-800 dark:text-green-400">Preparing for Laboratory Tests</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-green-700 dark:text-green-500 mb-2">Before Your Test</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Proper preparation is essential for accurate test results. Follow these general guidelines:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Follow any fasting instructions provided by your doctor</li>
                      <li>Stay hydrated unless instructed otherwise</li>
                      <li>Bring your photo ID and insurance card</li>
                      <li>Bring your laboratory requisition form</li>
                      <li>Inform the laboratory staff of any medications you're taking</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-green-700 dark:text-green-500 mb-2">During Your Visit</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Our team is committed to making your laboratory visit as comfortable as possible:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Check in at the reception desk upon arrival</li>
                      <li>A phlebotomist will call you when it's your turn</li>
                      <li>The blood draw typically takes only a few minutes</li>
                      <li>For other sample collections, you'll receive specific instructions</li>
                      <li>You'll be informed about when and how to receive your results</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-green-700 dark:text-green-500 mb-2">After Your Test</h3>
                    <p className="text-gray-700 dark:text-gray-300">After your laboratory tests are completed:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Results will be sent to your ordering physician</li>
                      <li>Most results are also available through our patient portal</li>
                      <li>Your doctor will contact you to discuss abnormal results</li>
                      <li>You can request a printed copy of your results at our reception desk</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Alert className="mb-6 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Important Note</AlertTitle>
                <AlertDescription>
                  Some tests require special preparation. Always follow the specific instructions provided by your
                  healthcare provider.
                </AlertDescription>
              </Alert>

              <Card className="border-green-100 dark:border-green-900 mb-6">
                <CardHeader>
                  <CardTitle className="text-green-800 dark:text-green-400">Test Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Your test results will be available through:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                        <FileText className="h-4 w-4 text-green-700 dark:text-green-400" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">Your healthcare provider</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                        <FileText className="h-4 w-4 text-green-700 dark:text-green-400" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">Our secure patient portal</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                        <FileText className="h-4 w-4 text-green-700 dark:text-green-400" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">By request at our reception desk</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Access Patient Portal</Button>
                </CardFooter>
              </Card>

              <Card className="border-green-100 dark:border-green-900">
                <CardHeader>
                  <CardTitle className="text-green-800 dark:text-green-400">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    If you have questions about your laboratory tests or results, our team is here to help.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-green-600 text-green-700 hover:bg-green-50 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-950"
                  >
                    Contact Laboratory Services
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-green-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 dark:text-green-400 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
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
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-green-100 dark:border-green-900 last:border-0"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-green-50 dark:hover:bg-gray-800/80 text-left font-medium text-green-800 dark:text-green-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
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

