"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  MapPin,
  Phone,
  Calendar,
  FileText,
  ShieldCheck,
  Users,
  CheckCircle,
  Info,
  Search,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function XrayPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const xrayTypes = [
    {
      name: "Chest X-ray",
      description:
        "Examines the lungs, heart, and chest wall to detect conditions such as pneumonia, heart failure, or lung cancer.",
      preparation:
        "No special preparation required. You'll need to remove jewelry and wear a hospital gown.",
      duration: "5-10 minutes",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Bone X-ray",
      description:
        "Evaluates bones for fractures, dislocations, or other abnormalities in the skeletal system.",
      preparation:
        "No special preparation required. You may need to remove jewelry or metal objects.",
      duration: "5-15 minutes",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Abdominal X-ray",
      description:
        "Examines organs in the abdomen to detect conditions such as intestinal blockages or kidney stones.",
      preparation:
        "You may be asked to fast for a few hours before the examination.",
      duration: "10-15 minutes",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Dental X-ray",
      description:
        "Provides detailed images of the teeth, bones, and supporting tissues of the mouth.",
      preparation: "No special preparation required.",
      duration: "5-10 minutes",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Spine X-ray",
      description:
        "Examines the alignment and condition of the vertebrae in the neck, mid-back, or lower back.",
      preparation: "You may need to remove jewelry, belts, or metal objects.",
      duration: "10-20 minutes",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Sinus X-ray",
      description:
        "Evaluates the paranasal sinuses for signs of infection, inflammation, or structural abnormalities.",
      preparation: "No special preparation required.",
      duration: "5-10 minutes",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  const radiologyTeam = [
    {
      name: "Dr. James Wilson",
      title: "Chief Radiologist",
      image: "/placeholder.svg?height=300&width=300",
      specialization: "Diagnostic Radiology",
      experience: "15+ years",
    },
    {
      name: "Dr. Sarah Chen",
      title: "Radiologist",
      image: "/placeholder.svg?height=300&width=300",
      specialization: "Musculoskeletal Radiology",
      experience: "10+ years",
    },
    {
      name: "Michael Rodriguez",
      title: "Lead Radiologic Technologist",
      image: "/placeholder.svg?height=300&width=300",
      specialization: "Advanced Imaging Techniques",
      experience: "12+ years",
    },
  ];

  const faqs = [
    {
      question: "Is X-ray radiation safe?",
      answer:
        "X-ray examinations use a small amount of radiation to create images of the body. The benefits of an accurate diagnosis far outweigh the risks from radiation exposure. Our modern equipment uses the lowest possible dose of radiation to obtain high-quality images. Our technologists are trained to use techniques that minimize radiation exposure while maintaining image quality.",
    },
    {
      question: "How should I prepare for an X-ray?",
      answer:
        "For most X-rays, no special preparation is needed. You may be asked to change into a hospital gown and remove jewelry, eyeglasses, or any metal objects that might interfere with the images. For some specific X-rays, you may need to fast for a few hours or take a contrast agent. Our staff will provide specific instructions when you schedule your appointment.",
    },
    {
      question: "How long does an X-ray examination take?",
      answer:
        "Most X-ray examinations are quick, typically taking between 5 and 15 minutes to complete. However, the entire process, including preparation and positioning, may take up to 30 minutes. More complex examinations may take longer.",
    },
    {
      question: "When will I get my X-ray results?",
      answer:
        "A radiologist will review and interpret your X-ray images, usually within 24-48 hours. The results will be sent to your referring physician, who will discuss them with you. In urgent cases, results may be available sooner. You can also access your results through our patient portal once they're available.",
    },
    {
      question: "Can I get an X-ray if I'm pregnant?",
      answer:
        "If you are or might be pregnant, it's important to inform the technologist before having an X-ray. In general, X-rays of the extremities, head, teeth, or chest pose minimal risk to a developing baby, especially if the abdomen and pelvis are shielded. However, your doctor will carefully weigh the benefits against the risks and may suggest alternative imaging methods like ultrasound when appropriate.",
    },
    {
      question: "Do I need a referral for an X-ray?",
      answer:
        "Yes, most X-ray examinations require a referral from a healthcare provider. This ensures that the examination is medically necessary and appropriate for your condition. If you believe you need an X-ray, please consult with your primary care physician or specialist.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/80 z-10" />
        <Navbar />
        <div
          className="relative h-[400px] bg-cover bg-center"
          style={{ backgroundImage: "url('/xray1.jpg')" }}
        >
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <motion.div
              className="max-w-2xl text-white"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                X-ray Services
              </h1>
              <p className="text-lg md:text-xl">
                Advanced diagnostic imaging with state-of-the-art technology and
                expert interpretation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* X-ray Overview */}
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
                Advanced X-ray Imaging
              </h2>
              <p className="text-gray-700 mb-6">
                Our X-ray department utilizes state-of-the-art digital
                radiography equipment to provide high-quality diagnostic images
                with minimal radiation exposure. X-rays are a quick, painless
                way to visualize the internal structures of your body, helping
                our physicians diagnose and treat a wide range of conditions.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <ShieldCheck className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">
                      Digital Technology
                    </h4>
                    <p className="text-gray-600">
                      Our advanced digital X-ray systems produce high-resolution
                      images with lower radiation doses than traditional X-rays.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Users className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">
                      Expert Interpretation
                    </h4>
                    <p className="text-gray-600">
                      All X-rays are interpreted by board-certified radiologists
                      with specialized training and experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Clock className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">
                      Quick Results
                    </h4>
                    <p className="text-gray-600">
                      Digital technology allows for faster image processing and
                      reporting, with most results available within 24-48 hours.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/xray1.jpg"
                alt="Modern X-ray equipment in the radiology department"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Types of X-rays */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              X-ray Examinations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of X-ray examinations to diagnose
              various conditions and injuries.
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="all">All X-rays</TabsTrigger>
              <TabsTrigger value="bone">Bone & Joint</TabsTrigger>
              <TabsTrigger value="organ">Organ & Tissue</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {xrayTypes.map((xray, index) => (
                  <motion.div key={xray.name} variants={fadeIn}>
                    <Card className="border-green-100 h-full hover:shadow-md transition-shadow">
                      <div className="relative h-40 w-full">
                        <Image
                          src={xray.image || "/placeholder.svg"}
                          alt={xray.name}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl text-green-800">
                          {xray.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 text-base mb-4">
                          {xray.description}
                        </CardDescription>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                            <span className="text-gray-700">
                              <span className="font-medium">Preparation:</span>{" "}
                              {xray.preparation}
                            </span>
                          </div>
                          <div className="flex items-start">
                            <Clock className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                            <span className="text-gray-700">
                              <span className="font-medium">Duration:</span>{" "}
                              {xray.duration}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="ghost"
                          className="text-green-700 hover:text-green-800 hover:bg-green-50 p-0"
                        >
                          Learn more <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="bone">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {xrayTypes
                  .filter((xray) =>
                    ["Bone X-ray", "Spine X-ray", "Dental X-ray"].includes(
                      xray.name
                    )
                  )
                  .map((xray, index) => (
                    <motion.div key={xray.name} variants={fadeIn}>
                      <Card className="border-green-100 h-full hover:shadow-md transition-shadow">
                        <div className="relative h-40 w-full">
                          <Image
                            src={xray.image || "/placeholder.svg"}
                            alt={xray.name}
                            fill
                            className="object-cover rounded-t-lg"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-xl text-green-800">
                            {xray.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-600 text-base mb-4">
                            {xray.description}
                          </CardDescription>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                              <span className="text-gray-700">
                                <span className="font-medium">
                                  Preparation:
                                </span>{" "}
                                {xray.preparation}
                              </span>
                            </div>
                            <div className="flex items-start">
                              <Clock className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                              <span className="text-gray-700">
                                <span className="font-medium">Duration:</span>{" "}
                                {xray.duration}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="ghost"
                            className="text-green-700 hover:text-green-800 hover:bg-green-50 p-0"
                          >
                            Learn more <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="organ">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {xrayTypes
                  .filter((xray) =>
                    ["Chest X-ray", "Abdominal X-ray", "Sinus X-ray"].includes(
                      xray.name
                    )
                  )
                  .map((xray, index) => (
                    <motion.div key={xray.name} variants={fadeIn}>
                      <Card className="border-green-100 h-full hover:shadow-md transition-shadow">
                        <div className="relative h-40 w-full">
                          <Image
                            src={xray.image || "/placeholder.svg"}
                            alt={xray.name}
                            fill
                            className="object-cover rounded-t-lg"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-xl text-green-800">
                            {xray.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-600 text-base mb-4">
                            {xray.description}
                          </CardDescription>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                              <span className="text-gray-700">
                                <span className="font-medium">
                                  Preparation:
                                </span>{" "}
                                {xray.preparation}
                              </span>
                            </div>
                            <div className="flex items-start">
                              <Clock className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                              <span className="text-gray-700">
                                <span className="font-medium">Duration:</span>{" "}
                                {xray.duration}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="ghost"
                            className="text-green-700 hover:text-green-800 hover:bg-green-50 p-0"
                          >
                            Learn more <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
          </Tabs>
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
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              Patient Information
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Important information to help you prepare for your X-ray
              examination.
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
                  <CardTitle className="text-green-800">
                    Preparing for Your X-ray
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-green-700 mb-2">
                      Before Your Appointment
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Most X-ray examinations require little to no special
                      preparation. However, there are a few general guidelines
                      to follow:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>
                        Bring your physician's referral or order, if provided
                      </li>
                      <li>Bring your insurance card and photo ID</li>
                      <li>
                        Arrive 15 minutes before your scheduled appointment to
                        complete registration
                      </li>
                      <li>
                        Inform our staff if you are pregnant or might be
                        pregnant before your examination begins
                      </li>
                      <li>
                        For specific examinations like abdominal X-rays, you may
                        be asked to fast for a few hours beforehand
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-green-700 mb-2">
                      During Your X-ray
                    </h3>
                    <p className="text-gray-700 mb-3">
                      What to expect during your X-ray examination:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>
                        You'll be asked to change into a hospital gown for most
                        examinations to avoid interference from clothing
                      </li>
                      <li>
                        You'll need to remove jewelry, eyeglasses, or any metal
                        objects in the area being examined
                      </li>
                      <li>
                        The technologist will position you on the examination
                        table or standing against the X-ray machine
                      </li>
                      <li>
                        You'll be asked to hold still and sometimes hold your
                        breath briefly while the X-ray is taken
                      </li>
                      <li>
                        The technologist will take multiple images from
                        different angles as needed
                      </li>
                      <li>
                        The entire process typically takes between 5 and 15
                        minutes
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-green-700 mb-2">
                      After Your X-ray
                    </h3>
                    <p className="text-gray-700 mb-3">
                      What happens after your examination is complete:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>
                        You can resume normal activities immediately after your
                        X-ray
                      </li>
                      <li>
                        A radiologist will review and interpret your images,
                        usually within 24-48 hours
                      </li>
                      <li>
                        The results will be sent to your referring physician,
                        who will discuss them with you
                      </li>
                      <li>
                        You can also access your results through our patient
                        portal once they're available
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <Alert className="bg-green-50 border-green-200">
                  <Info className="h-4 w-4 text-green-600" />
                  <AlertTitle className="text-green-800">
                    Important Note
                  </AlertTitle>
                  <AlertDescription className="text-gray-700">
                    Please inform our staff if you are pregnant or might be
                    pregnant before your X-ray examination.
                  </AlertDescription>
                </Alert>

                <Card className="border-green-100">
                  <CardHeader>
                    <CardTitle className="text-green-800">
                      Appointment Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">
                        Scheduling
                      </h4>
                      <p className="text-gray-600">
                        X-ray examinations can be scheduled by calling our
                        appointment line at (123) 456-7892 or through our online
                        scheduling system.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">
                        Referrals
                      </h4>
                      <p className="text-gray-600">
                        Most X-ray examinations require a referral from your
                        healthcare provider. Please have your referral
                        information ready when scheduling.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">
                        Insurance
                      </h4>
                      <p className="text-gray-600">
                        We accept most major insurance plans. Please contact our
                        billing department if you have questions about coverage
                        for your examination.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-100">
                  <CardHeader>
                    <CardTitle className="text-green-800">
                      Patient Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link
                      href="#"
                      className="flex items-center text-green-700 hover:text-green-600 hover:underline"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      X-ray Patient Preparation Guide
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center text-green-700 hover:text-green-600 hover:underline"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Understanding Your X-ray Results
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center text-green-700 hover:text-green-600 hover:underline"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Radiation Safety Information
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center text-green-700 hover:text-green-600 hover:underline"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Insurance & Billing FAQ
                    </Link>
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
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about X-ray examinations.
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
                    <AccordionContent className="px-6 pb-4 text-gray-700">
                      {faq.answer}
                    </AccordionContent>
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
                Have more questions? Contact our X-ray department for additional
                information.
              </p>
              <Link href="tel:+2348132815449">
                <Button className="bg-green-600 hover:bg-green-700">
                  <Phone className="mr-2 h-4 w-4" /> Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
