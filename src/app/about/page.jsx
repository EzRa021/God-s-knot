"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Award, Heart, Users, Building, Microscope } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
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

  const leadershipTeam = [
    {
      name: "Dr. Emily Chen",
      role: "Chief Executive Officer",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Dr. Chen has over 20 years of experience in healthcare management and is dedicated to providing exceptional patient care.",
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Chief Medical Officer",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Dr. Rodriguez oversees all medical operations and ensures that our hospital maintains the highest standards of care.",
    },
    {
      name: "Sarah Johnson",
      role: "Chief Nursing Officer",
      image: "/placeholder.svg?height=200&width=200",
      bio: "With a passion for patient-centered care, Sarah leads our nursing staff to provide compassionate and effective healthcare.",
    },
    {
      name: "David Thompson",
      role: "Chief Financial Officer",
      image: "/placeholder.svg?height=200&width=200",
      bio: "David ensures the financial health of our hospital while maintaining our commitment to accessible healthcare for all.",
    },
  ]

  const milestones = [
    {
      year: "1998",
      title: "Foundation",
      description:
        "God's Knot Hospital was founded with a mission to provide accessible, high-quality healthcare to the community.",
    },
    {
      year: "2005",
      title: "Expansion",
      description:
        "Major expansion of facilities, adding a new wing with specialized departments and advanced technology.",
    },
    {
      year: "2010",
      title: "Research Center",
      description:
        "Establishment of our medical research center, focusing on innovative treatments and medical advancements.",
    },
    {
      year: "2015",
      title: "Community Programs",
      description: "Launch of extensive community health programs, providing preventive care and health education.",
    },
    {
      year: "2020",
      title: "Technological Innovation",
      description: "Implementation of state-of-the-art medical technology and digital health solutions.",
    },
    {
      year: "2023",
      title: "Excellence Recognition",
      description: "Received national recognition for excellence in patient care and medical innovation.",
    },
  ]

  const awards = [
    {
      title: "Excellence in Patient Care",
      year: "2023",
      organization: "National Healthcare Association",
    },
    {
      title: "Top Hospital for Patient Safety",
      year: "2022",
      organization: "Healthcare Safety Council",
    },
    {
      title: "Outstanding Community Service",
      year: "2021",
      organization: "Community Health Foundation",
    },
    {
      title: "Innovation in Medical Technology",
      year: "2020",
      organization: "Medical Technology Institute",
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
          style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
        >
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <motion.div className="max-w-2xl text-white" initial="hidden" animate="visible" variants={fadeIn}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About God's Knot Hospital</h1>
              <p className="text-lg md:text-xl">
                Dedicated to excellence in healthcare, serving our community with compassion and innovation since 1998.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl font-bold text-green-800 mb-6">Our Mission & Vision</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Our Mission</h3>
                  <p className="text-gray-700">
                    To provide exceptional healthcare with compassion and respect, improving the health and wellbeing of
                    the communities we serve through innovation, collaboration, and a patient-centered approach.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Our Vision</h3>
                  <p className="text-gray-700">
                    To be the leading healthcare provider known for excellence in patient care, medical innovation, and
                    community wellness, creating a healthier future for all.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Our Values</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center">
                      <Heart className="h-5 w-5 text-green-600 mr-2" />
                      <span>Compassion in every interaction</span>
                    </li>
                    <li className="flex items-center">
                      <Award className="h-5 w-5 text-green-600 mr-2" />
                      <span>Excellence in healthcare delivery</span>
                    </li>
                    <li className="flex items-center">
                      <Users className="h-5 w-5 text-green-600 mr-2" />
                      <span>Respect for all individuals</span>
                    </li>
                    <li className="flex items-center">
                      <Microscope className="h-5 w-5 text-green-600 mr-2" />
                      <span>Innovation in medical practices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg" variants={fadeIn}>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Medical professionals collaborating"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From our humble beginnings to becoming a leading healthcare institution, explore the key milestones that
              have shaped God's Knot Hospital.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-1/2"></div>

                  {/* Timeline Point */}
                  <div className="relative flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-green-500 z-10 flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-1/2 p-4">
                    <Card className="border-green-100">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-green-800 flex items-center">
                          <span className="text-2xl font-bold mr-2">{milestone.year}</span>
                          <span className="text-xl">| {milestone.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 text-base">
                          {milestone.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who guide our hospital's mission and ensure excellence in everything we
              do.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {leadershipTeam.map((leader) => (
              <motion.div key={leader.name} variants={fadeIn}>
                <Card className="border-green-100 overflow-hidden h-full">
                  <div className="relative h-64 w-full">
                    <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-green-800">{leader.name}</CardTitle>
                    <CardDescription className="text-gray-600 font-medium">
                      {leader.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{leader.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Facilities and Awards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Excellence & Recognition
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our state-of-the-art facilities and the recognition we've received for our commitment to
              excellence.
            </p>
          </motion.div>

          <Tabs defaultValue="facilities" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="facilities">Our Facilities</TabsTrigger>
              <TabsTrigger value="awards">Awards & Recognition</TabsTrigger>
            </TabsList>

            <TabsContent value="facilities">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeIn} className="col-span-1 md:col-span-2">
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Hospital main building"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center">
                      <Building className="h-5 w-5 mr-2" />
                      Modern Infrastructure
                    </h3>
                    <p className="text-gray-700">
                      Our hospital features modern architecture designed for patient comfort and efficient healthcare
                      delivery.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center">
                      <Microscope className="h-5 w-5 mr-2" />
                      Advanced Technology
                    </h3>
                    <p className="text-gray-700">
                      Equipped with the latest medical technology to provide accurate diagnostics and effective
                      treatments.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center">
                      <Heart className="h-5 w-5 mr-2" />
                      Patient-Centered Design
                    </h3>
                    <p className="text-gray-700">
                      Every aspect of our facility is designed with patient comfort and recovery in mind.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=250&width=400"
                      alt="Hospital operating room"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=250&width=400"
                      alt="Hospital patient room"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=250&width=400"
                      alt="Hospital garden"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="awards">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeIn} className="space-y-6">
                  <h3 className="text-2xl font-bold text-green-800 mb-6">
                    Recognition for Excellence
                  </h3>

                  {awards.map((award) => (
                    <Card key={award.title} className="border-green-100">
                      <CardHeader>
                        <CardTitle className="text-green-700 flex items-center">
                          <Award className="h-5 w-5 mr-2" />
                          {award.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {award.year} | {award.organization}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </motion.div>

                <motion.div variants={fadeIn}>
                  <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=500&width=600"
                      alt="Awards and recognition"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Community Involvement
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to improving the health and wellbeing of our community through various outreach programs
              and initiatives.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn} className="md:col-span-2">
              <Card className="border-green-100 h-full">
                <CardHeader>
                  <CardTitle className="text-green-800">Our Community Programs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    At God's Knot Hospital, we believe that healthcare extends beyond our walls. We actively engage
                    with our community through various programs designed to promote health, wellness, and education.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">
                        Health Education Workshops
                      </h4>
                      <p className="text-gray-600">
                        Free workshops on various health topics, empowering community members with knowledge for better
                        health decisions.
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">Free Screening Programs</h4>
                      <p className="text-gray-600">
                        Regular health screenings in underserved areas, detecting health issues early when they're most
                        treatable.
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">Youth Health Initiative</h4>
                      <p className="text-gray-600">
                        Programs focused on youth health, including school visits, sports physicals, and mental health
                        support.
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">Senior Wellness Program</h4>
                      <p className="text-gray-600">
                        Dedicated services for seniors, including health checks, medication management, and social
                        activities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Community health event"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-green-700 mb-3">Get Involved</h3>
                <p className="text-gray-700 mb-4">
                  We welcome community members to join us in our mission to create a healthier community. There are many
                  ways to get involved:
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Volunteer opportunities</li>
                  <li>• Donation programs</li>
                  <li>• Community health events</li>
                  <li>• Advocacy initiatives</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}