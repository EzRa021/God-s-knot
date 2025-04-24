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
      name: "Dr. Emmanuel I. Olowokere",
      role: "Founder & Medical Director",
      image: "/md.jpg",
      bio: "MBChB, FWACS, FWACOG. Founded God's Knot Hospital Limited in 2014 with a vision to provide exceptional healthcare to all.",
    },
    {
      name: "Mrs. Rofiat Olowokere",
      role: "Hospital Administrator",
      image: "/raf.jpg",
      bio: "An epitome of diligence, prudence, sacrifice and dedication. Her unflinching support has been crucial to the hospital's development.",
    },
    {
      name: "Prof. Ojengbede",
      role: "Chairman, Board of Advisers",
      image: "/prof.jpg",
      bio: "Director, Centre for Population and Reproductive Health. Provides mentorship and leadership to the hospital.",
    },
    {
      name: "Dr. Olumide Gbala",
      role: "Guest Lecturer",
      image: "/olu.jpg",
      bio: "CMD, UNIMEDTH, Ondo. A long-time mentor to the founder and contributor to the hospital's growth.",
    },
  ]

  const milestones = [
    {
      title: "Early Beginnings",
      description:
        "Dr. Emmanuel Idowu Olowokere's journey in healthcare began with his education and early medical practice.",
    },
    {
      year: "2003",
      title: "Haske Medical Centre",
      description:
        "Established Haske Medical Centre in Barkin Ladi during NYSC, which later relocated back to the South in 2004.",
    },
    {
      year: "2008-2014",
      title: "Medical Specialization",
      description: "Completed residency in Obstetrics & Gynaecology at University College Hospital (UCH), Ibadan.",
    },
    {
      year: "June 6, 2014",
      title: "God's Knot Hospital Limited Founded",
      description:
        "God's Knot Hospital Limited was inaugurated to commemorate the founder's father, built with dedication and sacrifice.",
    },
    {
      year: "2018",
      title: "Expansion of Services",
      description: "Established the Fertility Centre, which has since become one of the leading centers in Ibadan.",
    },
    {
      year: "2023",
      title: "Corporate Status",
      description:
        "Became incorporated as a limited liability company: God's Knot Hospital Limited Limited (with CAC registration number 6938311).",
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
          style={{ backgroundImage: "url('/DSC_2907.jpg')" }}
        >
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <motion.div className="max-w-2xl text-white" initial="hidden" animate="visible" variants={fadeIn}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About God's Knot Hospital</h1>
              <p className="text-lg md:text-xl">
                Dedicated to excellence in healthcare, serving our community with compassion and innovation since 2014.
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
                    To deliver a high level of care at a relatively cheap and affordable cost.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Our Vision</h3>
                  <p className="text-gray-700">
                    To be an unrivalled private health care provider of repute in Nigeria offering the best standard of
                    care to all, irrespective of social strata.
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
                src="/DSC_2907.jpg"
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
                        <CardDescription className="text-gray-600 text-base">{milestone.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Founder's Story</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The inspiring journey of our founder, Dr. Emmanuel Idowu Olowokere, and how God's Knot Hospital Limited came to
              be.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/md.jpg"
                alt="Dr. Emmanuel Idowu Olowokere, Founder of God's Knot Hospital"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-green-100">
                <h3 className="text-xl font-semibold text-green-700 mb-3">The Origin of God's Knot</h3>
                <p className="text-gray-700">
                  "God's Knot" came from two sources: MY LIFE and MY WORK! Dr. Olowokere was nicknamed "MR KNIFE" as his
                  KNOTs were being tied by the supernatural hands. The hospital was inaugurated on June 6, 2014, to
                  commemorate the demise of the founder's father.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-green-100">
                <h3 className="text-xl font-semibold text-green-700 mb-3">A Journey of Faith</h3>
                <p className="text-gray-700">
                  "We started very small and were thoroughly derided. We were called a 'mushroom' hospital. The
                  environment was hostile. Some even said we will not last 5 years. We heard that no meaningful thing
                  survived in the area; but we are like Abraham who flourished in the desert, we stayed glued to
                  purpose."
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-green-100">
                <h3 className="text-xl font-semibold text-green-700 mb-3">Building Through Sacrifice</h3>
                <p className="text-gray-700">
                  "God's Knot Hospital Limited was built out of rare dedication and sacrifice. After salary payment, almost
                  everything returned back into the system to procure equipment, purchase land, materials for building
                  etc. We are daily pushed by the consciousness to ensure that we live our vision and mission
                  statements."
                </p>
              </div>
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
                    <CardDescription className="text-gray-600 font-medium">{leader.role}</CardDescription>
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
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Excellence & Recognition</h2>
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
                      src="/bg2.jpg"
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
                      src="/IMG_0589.jpg"
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
                      src="/DSC_6083.jpg"
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
                  <h3 className="text-2xl font-bold text-green-800 mb-6">Our Achievements</h3>

                  <Card className="border-green-100">
                    <CardHeader>
                      <CardTitle className="text-green-700 flex items-center">
                        <Award className="h-5 w-5 mr-2" />
                        NHIA Accreditation
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        Duly accredited by the National Health Insurance Agency
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-green-100">
                    <CardHeader>
                      <CardTitle className="text-green-700 flex items-center">
                        <Award className="h-5 w-5 mr-2" />
                        Fertility Center Excellence
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        Certified by the Association for Fertility and Reproductive Health in Nigeria
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-green-100">
                    <CardHeader>
                      <CardTitle className="text-green-700 flex items-center">
                        <Award className="h-5 w-5 mr-2" />
                        UCH Partnership
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        MOU with the University College Hospital for staff surgeries
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="border-green-100">
                    <CardHeader>
                      <CardTitle className="text-green-700 flex items-center">
                        <Award className="h-5 w-5 mr-2" />
                        Healthcare Network
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        MOU with about 35 health maintenance organizations
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-green-100 mb-6">
                    <h3 className="text-xl font-semibold text-green-700 mb-3">Our Impact in Numbers</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 font-semibold px-2 py-1 rounded mr-3">
                          15,100+
                        </span>
                        <span>Registered clients served since inception</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 font-semibold px-2 py-1 rounded mr-3">2,500+</span>
                        <span>Successful deliveries performed</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 font-semibold px-2 py-1 rounded mr-3">3,800+</span>
                        <span>Major surgeries including laparotomies, C-sections, and orthopedic procedures</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 font-semibold px-2 py-1 rounded mr-3">2,400+</span>
                        <span>Minor surgeries performed</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 font-semibold px-2 py-1 rounded mr-3">64</span>
                        <span>Babies born from IVF/Surrogacy at our Fertility Centre in the last 3 years</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 font-semibold px-2 py-1 rounded mr-3">53</span>
                        <span>Staff members, growing from just 6 at inception</span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/s/hospiimagetal-mission.jpeg"
                      alt="Hospital achievements"
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
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Community Involvement</h2>
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
                    At God's Knot Hospital, we believe that healthcare extends beyond our walls. We actively engage with
                    our community through various programs designed to promote health, wellness, and education.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">Health Education Workshops</h4>
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
                  src="/DSC_2907.jpg"
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

      {/* Future Plans */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Our Future Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              God's Knot is not just a single plant. It is purposed to become a plantation. The seed has produced few
              crops standing.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md border border-green-100">
              <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                <Building className="h-5 w-5 mr-2" />
                Expansion Projects
              </h3>
              <p className="text-gray-700 mb-4">Currently working on a four-story building that will house:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  Pediatric Centre
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  Renal Centre
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  Intensive Care Unit (ICU)
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md border border-green-100">
              <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                <Microscope className="h-5 w-5 mr-2" />
                Advanced Diagnostics
              </h3>
              <p className="text-gray-700 mb-4">Plans to enhance our radiodiagnostic capabilities to include:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  Computerized Tomography (CT) scan
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  Magnetic Resonant Imaging (MRI)
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md border border-green-100">
              <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Educational Partnerships
              </h3>
              <p className="text-gray-700 mb-4">Aiming to become a Tertiary Institution with:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  Collaboration with Post-graduate Medical College
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  Training for residents in O&G and other surgical specialties
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  Expansion to Isarun with land already acquired
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <blockquote className="italic text-lg text-green-800 max-w-3xl mx-auto">
              "They look far-fetched but we can achieve them! God's Knot is not my seed. It is God's seed. I was only
              favoured to be given by God. Hence, the seed (or seeds) and the eventual plantation are purposed to
              continue even after I am gone!"
              <footer className="text-base text-gray-600 mt-2">
                — Dr. Emmanuel I. Olowokere, Founder & Medical Director
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
