"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Clock,
  MapPin,
  Phone,
  Heart,
  Users,
  Stethoscope,
  ChevronRight,
  Calendar,
  CheckCircle,
  Microscope,
  Pill,
  Syringe,
  Baby,
  Bone,
  Clipboard,
  Activity,
  FlaskConical,
  Scan,
  Building2,
  AlertCircle,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
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

  const outpatientServices = [
    {
      title: "Family Medicine Clinic",
      description:
        "Comprehensive primary care for patients of all ages, focusing on preventive care and managing chronic conditions.",
      icon: <Users className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      title: "ANC (Antenatal Care)",
      description:
        "Specialized care for expectant mothers throughout pregnancy, ensuring the health and well-being of both mother and baby.",
      icon: <Baby className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      title: "Gynecology",
      description:
        "Specialized care for women's reproductive health, including routine check-ups, diagnostics, and treatments.",
      icon: <Heart className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      title: "General Outpatient Clinic",
      description: "Walk-in and appointment-based care for a wide range of health concerns and conditions.",
      icon: <Stethoscope className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      title: "Pediatric Clinic",
      description:
        "Specialized healthcare for infants, children, and adolescents, focusing on growth, development, and childhood illnesses.",
      icon: <Baby className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      title: "Immunization Clinic",
      description:
        "Preventive vaccines for children and adults according to national and international immunization schedules.",
      icon: <Syringe className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      title: "Orthopedic Clinic",
      description:
        "Specialized care for musculoskeletal conditions, including bone, joint, ligament, tendon, and muscle disorders.",
      icon: <Bone className="h-10 w-10 text-green-600 mb-4" />,
    },
    {
      title: "Wound Dressing and Management",
      description:
        "Professional care for acute and chronic wounds, including surgical wounds, pressure ulcers, and diabetic foot ulcers.",
      icon: <Clipboard className="h-10 w-10 text-green-600 mb-4" />,
    },
  ]

  const labTests = [
    { test: "MP", cost: "3,000" },
    { test: "FBS (ANALYZER)", cost: "3,000" },
    { test: "FBS/RBS (GLUCOMETER)", cost: "1,500" },
    { test: "2HPP (GLUCOMETER)", cost: "1,500" },
    { test: "OGTT", cost: "7,500" },
    { test: "FBC, FBC WITH PLATELET", cost: "5,000 / 10,000" },
    { test: "PCV", cost: "1,500" },
    { test: "GENOTYPE INSTANT", cost: "4,000 / 10,000" },
    { test: "BLOODGROUP", cost: "3,000" },
    { test: "E/U/Cr", cost: "15,000" },
    { test: "BILLIRUBIN", cost: "6,000" },
    { test: "CULTURE", cost: "10,000" },
    { test: "SFA", cost: "20,000" },
    { test: "WIDAL", cost: "4,000" },
    { test: "RVS", cost: "4,000" },
    { test: "HBsAG", cost: "3,000" },
    { test: "HCV", cost: "4,000" },
    { test: "VDRL", cost: "3,000" },
    { test: "URINALYSIS", cost: "2,500" },
    { test: "ANC INVESTIGATION", cost: "25,000" },
    { test: "PT", cost: "2,000" },
    { test: "HORMONE PROFILE", cost: "50,000 / 70,000(2ND PACKAGE)" },
    { test: "LFT", cost: "15,000" },
    { test: "PSA", cost: "20,000" },
    { test: "FLP", cost: "15,000" },
    { test: "PAP SMEAR", cost: "20,000" },
    { test: "PT/PTTK/INR", cost: "35,000" },
    { test: "TFT", cost: "30,000" },
    { test: "HbA1c", cost: "15,000" },
    { test: "CALCIUM", cost: "10,000" },
    { test: "POTASSIUM", cost: "7,000" },
    { test: "PROLACTIN", cost: "15,000" },
    { test: "AMH", cost: "40,000" },
    { test: "ESR", cost: "10,000" },
    { test: "ECG", cost: "10,000" },
    { test: "H.PYLORI", cost: "10,000" },
  ]

  const faqs = [
    {
      question: "How do I schedule an appointment?",
      answer:
        "You can schedule an appointment by calling our reception desk at (123) 456-7890, using our online appointment booking system on our website, or visiting our reception desk in person. For specialist consultations, a referral may be required from your primary care physician.",
    },
    {
      question: "What insurance plans do you accept?",
      answer:
        "We accept a wide range of insurance plans including national health insurance, private health insurance, and corporate health plans. Please contact our billing department or check our website for a complete list of accepted insurance providers. We recommend verifying your coverage before your appointment.",
    },
    {
      question: "What should I bring to my first appointment?",
      answer:
        "For your first appointment, please bring your valid ID, insurance card, referral letter (if applicable), list of current medications, relevant medical records or test results from previous healthcare providers, and a list of questions or concerns you'd like to discuss with your healthcare provider.",
    },
    {
      question: "How do I get my laboratory test results?",
      answer:
        "Laboratory test results can be accessed through our patient portal, which provides secure online access to your health information. Results may also be provided during your follow-up appointment, by phone call from your healthcare provider, or by mail. The timeframe for receiving results varies depending on the type of test.",
    },
    {
      question: "Do you offer emergency services?",
      answer:
        "Yes, our Accident and Emergency department is open 24/7 to handle medical emergencies. For life-threatening situations, please call emergency services (911) immediately. Our emergency department is equipped to handle a wide range of urgent medical conditions with experienced healthcare professionals.",
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
          style={{ backgroundImage: "url('/bg2.jpg')" }}
        >
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <motion.div className="max-w-2xl text-white" initial="hidden" animate="visible" variants={fadeIn}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-lg md:text-xl">
                Comprehensive healthcare services delivered with compassion, expertise, and cutting-edge technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Service Categories Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">Our Healthcare Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              GreenHealth Hospital offers a comprehensive range of medical services to meet all your healthcare needs,
              from preventive care to specialized treatments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-green-100 h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Stethoscope className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-green-800">Outpatient Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    Comprehensive clinical services for non-hospitalized patients, including consultations, diagnostics,
                    and treatments.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href="#outpatient">
                    <Button variant="ghost" className="text-green-700 hover:text-green-800 hover:bg-green-50 p-0">
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-green-100 h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <AlertCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-green-800">Emergency Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    24/7 emergency care for acute illnesses and injuries, with rapid assessment and treatment by
                    specialized teams.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href="#emergency">
                    <Button variant="ghost" className="text-green-700 hover:text-green-800 hover:bg-green-50 p-0">
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-green-100 h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Microscope className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-green-800">Diagnostic Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    Advanced laboratory and radiology services for accurate diagnosis and monitoring of health
                    conditions.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href="#diagnostic">
                    <Button variant="ghost" className="text-green-700 hover:text-green-800 hover:bg-green-50 p-0">
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-green-100 h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Building2 className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-green-800">Inpatient Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    Comprehensive care for patients requiring hospitalization, with 24/7 monitoring and specialized
                    treatment.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href="#inpatient">
                    <Button variant="ghost" className="text-green-700 hover:text-green-800 hover:bg-green-50 p-0">
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outpatient Services */}
      <section id="outpatient" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">Outpatient Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive outpatient services provide expert care for a wide range of medical needs without
              requiring hospital admission.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {outpatientServices.map((service, index) => (
              <motion.div key={service.title} variants={fadeIn}>
                <Card className="border-green-100 h-full hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    {service.icon}
                    <CardTitle className="text-xl text-green-800">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                  </CardContent>
                  
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Emergency Services */}
      <section id="emergency" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl font-bold text-green-800 mb-6">Accident & Emergency Services</h2>
              <p className="text-gray-700 mb-6">
                Our Accident and Emergency department provides immediate care for patients with acute illnesses and
                injuries. Our specialized team is available 24/7 to handle all types of medical emergencies with
                state-of-the-art equipment and facilities.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Activity className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Trauma Care</h4>
                    <p className="text-gray-600">
                      Immediate treatment for serious injuries with a specialized trauma team and advanced equipment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Heart className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Cardiac Emergencies</h4>
                    <p className="text-gray-600">
                      Rapid response for heart attacks and other cardiac conditions with specialized cardiac care
                      protocols.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <AlertCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Critical Care</h4>
                    <p className="text-gray-600">
                      Intensive monitoring and treatment for critically ill patients requiring immediate intervention.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">24/7 Availability</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Rapid Response</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Advanced Equipment</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Specialized Team</Badge>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/WhatsApp Image 2025-04-28 at 12.31.27 PM.jpeg"
                alt="Emergency department with medical staff attending to patients"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Wellness & Surgery */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="wellness" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="wellness">Wellness Clinic</TabsTrigger>
              <TabsTrigger value="surgery">General Surgery</TabsTrigger>
            </TabsList>

            <TabsContent value="wellness">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/african-american-medic-pregnant-woman-talking.jpg"
                    alt="Wellness clinic with healthcare provider consulting patient"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-6">Wellness Clinic Services</h3>
                  <p className="text-gray-700 mb-6">
                    Our Wellness Clinic focuses on preventive healthcare and maintaining optimal health through regular
                    check-ups, screenings, and lifestyle guidance. We offer personalized wellness plans to help you
                    achieve your health goals.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">Health Screenings</h4>
                        <p className="text-sm text-gray-600">
                          Comprehensive health assessments and preventive screenings
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">Nutrition Counseling</h4>
                        <p className="text-sm text-gray-600">Personalized dietary advice for optimal health</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">Lifestyle Medicine</h4>
                        <p className="text-sm text-gray-600">
                          Evidence-based approaches to prevent and treat chronic diseases
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">Stress Management</h4>
                        <p className="text-sm text-gray-600">
                          Techniques and therapies to reduce stress and improve wellbeing
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="surgery">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold text-green-800 mb-6">General Surgery Services</h3>
                  <p className="text-gray-700 mb-6">
                    Our General Surgery department provides a wide range of surgical procedures performed by experienced
                    surgeons using advanced techniques and equipment. We focus on minimally invasive approaches when
                    possible to reduce recovery time.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">Abdominal Surgery</h4>
                        <p className="text-sm text-gray-600">Procedures for conditions affecting the abdomen</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">Hernia Repair</h4>
                        <p className="text-sm text-gray-600">Advanced techniques for all types of hernias</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">Minimally Invasive Surgery</h4>
                        <p className="text-sm text-gray-600">Laparoscopic procedures for faster recovery</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">Wound Care</h4>
                        <p className="text-sm text-gray-600">Specialized treatment for complex wounds</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md order-1 lg:order-2">
                  <Image
                    src="/IMG_0589.jpg"
                    alt="Modern operating room with surgical equipment"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Laboratory Services */}
      <section id="diagnostic" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">Laboratory Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art laboratory provides accurate and timely diagnostic testing to support clinical
              decision-making and patient care.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FlaskConical className="h-6 w-6 text-green-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800">Our Laboratory Capabilities</h3>
                </div>

                <p className="text-gray-700 mb-6">
                  Our laboratory is equipped with advanced technology and staffed by experienced professionals to
                  provide a comprehensive range of diagnostic tests. We adhere to strict quality control measures to
                  ensure accurate results.
                </p>
              </div>
            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-6 bg-green-50 border-b border-green-100">
              <h3 className="text-xl font-bold text-green-800">Laboratory Tests & Pricing</h3>
              <p className="text-gray-600">
                Current rates for our most commonly requested laboratory tests (prices in Naira)
              </p>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[70%]">Test Name</TableHead>
                    <TableHead className="text-right">Cost (₦)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {labTests.map((test, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-green-50"}>
                      <TableCell className="font-medium">{test.test}</TableCell>
                      <TableCell className="text-right">{test.cost}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="p-4 bg-green-50 border-t border-green-100 text-sm text-gray-600">
              * Prices subject to change. Please confirm current rates at the time of service.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complementary healthcare services to provide comprehensive care for all your medical needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-green-100 h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <Scan className="h-10 w-10 text-green-600 mb-4" />
                  <CardTitle className="text-xl text-green-800">Radiology Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base mb-4">
                    Advanced imaging services including X-rays, ultrasound, CT scans, and MRI for accurate diagnosis and
                    treatment planning.
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-gray-700">Digital X-ray imaging</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-gray-700">Ultrasound diagnostics</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-gray-700">Specialized imaging procedures</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-green-700 hover:text-green-800 hover:bg-green-50 p-0">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-green-100 h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <Pill className="h-10 w-10 text-green-600 mb-4" />
                  <CardTitle className="text-xl text-green-800">Pharmacy Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base mb-4">
                    Comprehensive pharmacy services with prescription medications, over-the-counter products, and
                    medication counseling.
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-gray-700">Prescription filling</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-gray-700">Medication counseling</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-gray-700">Medication management</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-green-700 hover:text-green-800 hover:bg-green-50 p-0">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-green-100 h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <Building2 className="h-10 w-10 text-green-600 mb-4" />
                  <CardTitle className="text-xl text-green-800">Admission Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base mb-4">
                    Inpatient care for patients requiring hospitalization, with comfortable rooms and 24/7 nursing care.
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-gray-700">Private and semi-private rooms</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-gray-700">24/7 nursing care</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-gray-700">Specialized care units</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-green-700 hover:text-green-800 hover:bg-green-50 p-0">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
