"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  Calendar,
  Heart,
  Users,
  Microscope,
  Clipboard,
  ChevronRight,
  FileText,
  Star,
  StarHalf,
  Info,
  Search,
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
import Link from "next/link";

export default function FertilityCenterPage() {
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

  const treatmentOptions = [
    {
      title: "In Vitro Fertilization (IVF)",
      description:
        "A complex series of procedures where eggs are collected and fertilized by sperm in a lab, then implanted in the uterus.",
      icon: <Microscope className="h-10 w-10 text-green-600 mb-4" />,
      details: [
        "Controlled ovarian stimulation",
        "Egg retrieval procedure",
        "Laboratory fertilization",
        "Embryo development monitoring",
        "Embryo transfer procedure",
      ],
    },
    {
      title: "Intrauterine Insemination (IUI)",
      description:
        "A procedure that places sperm directly into the uterus during ovulation to facilitate fertilization.",
      icon: <Heart className="h-10 w-10 text-green-600 mb-4" />,
      details: [
        "Ovulation monitoring",
        "Sperm preparation",
        "Timed insemination procedure",
        "Minimally invasive approach",
        "Often used before progressing to IVF",
      ],
    },
    {
      title: "Fertility Preservation",
      description:
        "Options for preserving fertility for those facing medical treatments that may affect reproductive health or those wishing to delay parenthood.",
      icon: <Clipboard className="h-10 w-10 text-green-600 mb-4" />,
      details: [
        "Egg freezing (oocyte cryopreservation)",
        "Sperm freezing",
        "Embryo freezing",
        "Ovarian tissue preservation",
        "Long-term storage options",
      ],
    },
    {
      title: "Reproductive Surgery",
      description:
        "Surgical procedures to diagnose and treat conditions affecting fertility, often using minimally invasive techniques.",
      icon: <Microscope className="h-10 w-10 text-green-600 mb-4" />,
      details: [
        "Hysteroscopy",
        "Laparoscopy",
        "Tubal surgery",
        "Fibroid removal",
        "Endometriosis treatment",
      ],
    },
  ];

  const fertilityTeam = [
    {
      name: "Dr. Emily Rodriguez",
      title: "Reproductive Endocrinologist",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Board-certified specialist with over 15 years of experience in reproductive medicine and advanced fertility treatments.",
    },
    {
      name: "Dr. Michael Chen",
      title: "Fertility Specialist",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Expert in male fertility issues and minimally invasive surgical techniques for reproductive health.",
    },
    {
      name: "Sarah Johnson",
      title: "Embryologist",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Senior embryologist specializing in IVF laboratory procedures, embryo culture, and advanced reproductive technologies.",
    },
  ];
  const leadershipTeam = [
    {
      name: "Dr. Emmanuel I. Olowokere",
      role: "Founder & Medical Director",
      image: "/md.jpg",
      description:
        "Senior embryologist specializing in IVF laboratory procedures, embryo culture, and advanced reproductive technologies.",
    },
    {
      name: "Mrs. Rofiat Olowokere",
      role: "Hospital Administrator",
      image: "/raf.jpg",
      bio: "An epitome of diligence, prudence, sacrifice and dedication. Her unflinching support has been crucial to the hospital's development.",
    },
  ];

  const testimonials = [
    {
      quote:
        "After years of struggling with infertility, the team at God's Knot Hospital Limited Fertility Center gave us hope and guided us through every step of our IVF journey. We're now blessed with our beautiful twins, and we couldn't be more grateful.",
      name: "Jessica & Mark Thompson",
      rating: 5,
    },
    {
      quote:
        "The compassionate care we received at the Fertility Center made all the difference during our challenging time. Dr. Rodriguez and her team were not only medically excellent but also emotionally supportive throughout the entire process.",
      name: "David & Sarah Wilson",
      rating: 5,
    },
    {
      quote:
        "As a single woman pursuing motherhood, I was nervous about fertility preservation. The team at God's Knot Hospital Limited made me feel comfortable, informed, and empowered in my decision. Their personalized approach to my care was exceptional.",
      name: "Michelle Garcia",
      rating: 4.5,
    },
  ];

  const successRates = [
    { age: "Under 35", ivfRate: 60, iuiRate: 20 },
    { age: "35-37", ivfRate: 45, iuiRate: 15 },
    { age: "38-40", ivfRate: 35, iuiRate: 10 },
    { age: "41-42", ivfRate: 20, iuiRate: 5 },
    { age: "Over 42", ivfRate: 5, iuiRate: 2 },
  ];

  const faqs = [
    {
      question: "How do I know if I need fertility treatment?",
      answer:
        "If you've been trying to conceive for 12 months without success (or 6 months if you're over 35), it's recommended to consult with a fertility specialist. Other reasons to seek fertility care include irregular menstrual cycles, known reproductive conditions like PCOS or endometriosis, previous reproductive surgeries, or a history of miscarriages. Our initial consultation includes a comprehensive evaluation to determine if fertility treatment is appropriate for your situation.",
    },
    {
      question: "What does the initial fertility evaluation include?",
      answer:
        "Our comprehensive fertility evaluation typically includes a detailed medical history review, physical examination, and diagnostic testing for both partners. For women, this may include hormone testing, ovarian reserve assessment, and imaging studies like ultrasound or hysterosalpingogram (HSG) to evaluate the uterus and fallopian tubes. For men, a semen analysis is usually performed. Based on these results, our specialists will develop a personalized treatment plan tailored to your specific needs.",
    },
    {
      question: "How much do fertility treatments cost?",
      answer:
        "The cost of fertility treatments varies depending on the specific procedures needed, medication requirements, and number of treatment cycles. Basic treatments like IUI are less expensive than advanced treatments like IVF. We provide detailed cost information during your consultation, and our financial counselors can help you understand insurance coverage and financing options. We're committed to transparency in our pricing and offer various financial programs to help make treatment more affordable.",
    },
    {
      question: "How long does fertility treatment typically take?",
      answer:
        "The timeline for fertility treatment varies based on the treatment type and individual factors. Initial evaluation typically takes 2-4 weeks. IUI cycles generally take about 2-4 weeks from start to finish. IVF cycles typically take 4-6 weeks from the start of medications to the embryo transfer. Some patients may achieve success with their first treatment cycle, while others may require multiple cycles. During your consultation, we'll provide a more personalized timeline based on your specific treatment plan.",
    },
    {
      question: "What are the success rates for fertility treatments?",
      answer:
        "Success rates vary based on multiple factors including age, cause of infertility, and treatment type. Our center's success rates are consistently at or above the national average. For IVF, success rates range from approximately 5-60% per cycle, with higher rates for younger patients. For IUI, success rates typically range from 5-20% per cycle. During your consultation, we can provide more specific success rate information based on your individual circumstances and treatment plan.",
    },
    {
      question: "What support services do you offer for fertility patients?",
      answer:
        "We recognize that fertility treatment can be emotionally challenging, so we offer comprehensive support services including: fertility counseling with licensed mental health professionals specializing in reproductive issues, support groups for patients at various stages of treatment, nutritional counseling to optimize fertility and overall health, acupuncture and mind-body programs, and financial counselors to help navigate insurance and payment options. Our goal is to support you through every aspect of your fertility journey.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-900/80 z-10" />
        <div
          className="relative h-[400px] bg-cover bg-center"
          style={{ backgroundImage: "url('/IMG_0589.jpg')" }}
        >
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <motion.div
              className="max-w-2xl text-white"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Fertility Center
              </h1>
              <p className="text-lg md:text-xl">
                Compassionate care and advanced reproductive technologies to
                help build your family.
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
              <h2 className="text-3xl font-bold text-green-800 mb-6">
                Compassionate Fertility Care
              </h2>
              <p className="text-gray-700 mb-6">
                At God's Knot Hospital Limited Fertility Center, we understand
                that the journey to parenthood can be challenging. Our team of
                reproductive specialists combines advanced medical expertise
                with compassionate care to help you achieve your dream of
                building a family.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Users className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">
                      Personalized Approach
                    </h4>
                    <p className="text-gray-600">
                      We develop individualized treatment plans tailored to your
                      unique needs, circumstances, and goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Microscope className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">
                      Advanced Technology
                    </h4>
                    <p className="text-gray-600">
                      Our state-of-the-art laboratory and cutting-edge
                      reproductive technologies offer the highest standards of
                      care.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Heart className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">
                      Comprehensive Support
                    </h4>
                    <p className="text-gray-600">
                      We provide emotional, educational, and financial support
                      throughout your fertility journey.
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
                src="/WhatsApp Image 2025-05-05 at 11.50.27 AM.jpeg"
                alt="Doctor consulting with patient at Fertility Center"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              Fertility Treatment Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of fertility treatments and
              reproductive technologies to address various fertility challenges.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {treatmentOptions.map((treatment, index) => (
              <motion.div key={treatment.title} variants={fadeIn}>
                <Card className="border-green-100 h-full hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    {treatment.icon}
                    <CardTitle className="text-xl text-green-800">
                      {treatment.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base mb-6">
                      {treatment.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {treatment.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
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

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 mb-4">
              Our fertility specialists will help determine which treatment
              options are most appropriate for your specific situation during
              your consultation.
            </p>
            <Button
              variant="outline"
              className="border-green-600 text-green-700 hover:bg-green-50"
            >
              View All Treatment Options
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Patient Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              Your Fertility Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding what to expect during your fertility treatment
              process can help you feel more prepared and confident.
            </p>
          </motion.div>

          <Tabs defaultValue="initial" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="initial">Initial Consultation</TabsTrigger>
              <TabsTrigger value="testing">Diagnostic Testing</TabsTrigger>
              <TabsTrigger value="ongoing">Ongoing Care</TabsTrigger>
            </TabsList>

            <TabsContent value="initial">
              <motion.div
                className="grid grid-cols-1 mt-10 lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/WhatsApp Image 2025-05-05 at 11.53.03 AM.jpeg"
                    alt="Doctor consultation with patient"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-6">
                    Initial Consultation
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Your fertility journey begins with a comprehensive
                    consultation with one of our reproductive specialists.
                    During this visit, we will:
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">
                          Review Your Medical History
                        </h4>
                        <p className="text-gray-600">
                          Discuss your reproductive history, previous
                          treatments, and overall health
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">
                          Understand Your Goals
                        </h4>
                        <p className="text-gray-600">
                          Discuss your family-building goals and expectations
                          for treatment
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">
                          Initial Assessment
                        </h4>
                        <p className="text-gray-600">
                          Perform a physical examination and possibly an
                          ultrasound evaluation
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">
                          Discuss Next Steps
                        </h4>
                        <p className="text-gray-600">
                          Outline recommended diagnostic testing and potential
                          treatment approaches
                        </p>
                      </div>
                    </div>
                  </div>

                  <Alert className="bg-green-50 border-green-200">
                    <Info className="h-4 w-4 text-green-600" />
                    <AlertTitle className="text-green-800">
                      Preparation Tip
                    </AlertTitle>
                    <AlertDescription className="text-gray-700">
                      Bring any previous fertility-related medical records, test
                      results, and a list of current medications to your initial
                      consultation.
                    </AlertDescription>
                  </Alert>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="testing">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold text-green-800 mb-6">
                    Diagnostic Testing
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Comprehensive diagnostic testing helps us identify the
                    underlying causes of fertility challenges and develop an
                    effective treatment plan. Common fertility tests include:
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">
                          Hormone Testing
                        </h4>
                        <p className="text-gray-600">
                          Blood tests to evaluate hormone levels that affect
                          ovulation and reproductive function
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">
                          Ovarian Reserve Testing
                        </h4>
                        <p className="text-gray-600">
                          Assessment of egg quantity and quality through blood
                          tests and ultrasound
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">
                          Semen Analysis
                        </h4>
                        <p className="text-gray-600">
                          Evaluation of sperm count, motility, morphology, and
                          other parameters
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">
                          Imaging Studies
                        </h4>
                        <p className="text-gray-600">
                          Ultrasound, hysterosalpingogram (HSG), or
                          sonohysterogram to evaluate reproductive organs
                        </p>
                      </div>
                    </div>
                  </div>

                  <Alert className="bg-green-50 border-green-200">
                    <Info className="h-4 w-4 text-green-600" />
                    <AlertTitle className="text-green-800">
                      Testing Timeline
                    </AlertTitle>
                    <AlertDescription className="text-gray-700">
                      Most diagnostic testing is completed within one menstrual
                      cycle. Our team will coordinate your tests to minimize
                      office visits.
                    </AlertDescription>
                  </Alert>
                </div>

                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md order-1 lg:order-2">
                  <Image
                    src="/WhatsApp Image 2025-05-05 at 11.50.27 AM.jpeg"
                    alt="Fertility diagnostic testing"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="ongoing">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold text-green-800 mb-6">
                    Ongoing Care
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Throughout your fertility treatment and beyond, our team
                    provides comprehensive support and monitoring:
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">
                          Treatment Monitoring
                        </h4>
                        <p className="text-gray-600">
                          Regular ultrasounds and blood tests to track response
                          to treatment and adjust as needed
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">
                          Procedure Support
                        </h4>
                        <p className="text-gray-600">
                          Comprehensive care during egg retrieval, embryo
                          transfer, and other procedures
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">
                          Early Pregnancy Care
                        </h4>
                        <p className="text-gray-600">
                          Close monitoring during early pregnancy with
                          ultrasounds and hormone testing
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-700">
                          Transition to OB Care
                        </h4>
                        <p className="text-gray-600">
                          Seamless transition to obstetrical care once pregnancy
                          is well-established
                        </p>
                      </div>
                    </div>
                  </div>

                  <Alert className="bg-green-50 border-green-200">
                    <Info className="h-4 w-4 text-green-600" />
                    <AlertTitle className="text-green-800">
                      Nurse Support Line
                    </AlertTitle>
                    <AlertDescription className="text-gray-700">
                      Our dedicated fertility nurses are available by phone
                      during business hours to answer questions and provide
                      guidance throughout your treatment.
                    </AlertDescription>
                  </Alert>
                </div>

                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md order-1 lg:order-2">
                  <Image
                    src="/WhatsApp Image 2025-05-05 at 11.50.36 AM.jpeg"
                    alt="Ongoing fertility care and monitoring"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              Patient Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Read about the experiences of patients who have achieved their
              dream of parenthood with our help.
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
                    <p className="text-gray-700 mb-6 italic">
                      {testimonial.quote}
                    </p>
                    <div className="mt-auto">
                      <p className="font-semibold text-green-800">
                        {testimonial.name}
                      </p>
                      <div className="flex mt-2">
                        {[...Array(Math.floor(testimonial.rating))].map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-yellow-500 fill-yellow-500"
                            />
                          )
                        )}
                        {testimonial.rating % 1 !== 0 && (
                          <StarHalf className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        )}
                      </div>
                    </div>
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
            <Button
              variant="outline"
              className="border-green-600 text-green-700 hover:bg-green-50"
            >
              Read More Success Stories
            </Button>
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
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about fertility treatments and
              our services.
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
                Have more questions? Contact our fertility center for additional
                information.
              </p>
              <Link href="/contact">
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
