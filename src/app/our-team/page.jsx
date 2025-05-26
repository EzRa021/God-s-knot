"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Users, Heart, Award, BookOpen } from "lucide-react"

const teamData = {
  doctors: [
    {
      name: "Dr. Fawole Saheed Olalekan",
      title: "Senior Medical Officer (SMO)",
      image: "/Fawole.jpeg",
      background:
        "Fawole Saheed Olalekan hails from Osun State, Nigeria, though he spent his formative years across various parts of the country, including Lagos, Ondo, and Cross River States. He began his secondary education at Community Junior Grammar School in Lagos State, and later continued at Millennium Senior Secondary School, also in Lagos. For his tertiary education, he attended the University of Port Harcourt, located in Rivers State.",
      interests:
        "Saheed is passionate about football and enjoys reading and engaging in indoor games during his leisure time.",
    },
    {
      name: "Dr. Nkor Kabari Koko",
      title: "Medical Officer (MO)",
      image: "/Nkor.jpeg",
      background:
        "Nkor Kabari Koko was raised in Eku and Obaruku, both in Delta State, Nigeria, where he also hails from. He began his education at Word of Faith College in Benin City, Edo State, and later attended Umukwaja Secondary School in Umukwata, Delta State. He pursued higher education at the University of Port Harcourt, located in Rivers State, and furthered his studies at V.N. Karazin Kharkiv National University in Kharkiv, Ukraine.",
      interests: "Nkor enjoys watching football, playing table tennis, and engaging in games of chess.",
    },
    {
      name: "Dr. Mustapha Sherif Adewole",
      title: "Medical Officer (MO)",
      image: "/Mustapha.jpeg",
      background:
        "Mustapha Sherif Adewole hails from Saki, Oyo State, where he was born and raised. He attended Primrose Model Private College (PMPC) in Saki for his secondary education. Pursuing his passion for healthcare, he went on to study Medicine at the College of Medicine, University of Ibadan (COMUI), also in Oyo State.",
      interests:
        "Mustapha is a curious and driven individual who enjoys learning new things. In his leisure time, he loves watching football and reading.",
    },
  ],
  nurses: [
    {
      name: "Mrs. Faloye Olayinka Iyabo",
      title: "Matron",
      image: "/Faloye.jpeg",
      background:
        "Faloye Olayinka Iyabo was born and raised in Ibadan, Oyo State, Nigeria, though her family hails from Ogun State. She began her education at Baptist Grammar School, Idi-Ishin, in Ibadan. Her passion for health and wellness led her to pursue further studies at the Ondo State School of Health Technology, Akure, and the Institute of Occupational Health Nursing in Ibadan.",
      interests:
        "Faloye is a lifelong learner with a strong interest in reading and acquiring new knowledge. She is also actively engaged in sports, reflecting her dedication to both mental and physical well-being.",
    },
    {
      name: "Mrs. Adedapo Toke Joy",
      title: "Immunization Nurse",
      image: "/Adedapo.jpeg",
      background:
        "Adedapo Toke Joy hails from Oyo State but was raised in Ondo State. She attended Winner's College in Owo, Ondo State, and later pursued further education at the School of Hygiene in Ibadan, Oyo State.",
      interests: "Joy enjoys reading, learning new things, and playing football.",
    },
  ],
  administration: [
    {
      name: "Mrs. Onifade Kehinde",
      title: "Administration Officer (AO)",
      image: "/Onifade.jpeg",
      background:
        "Onifade Kehinde hails from Ile-Ife in Osun State, Nigeria. She completed her secondary education at Ife Girls High School, also in Osun State. For her tertiary education, she attended The Polytechnic, Ibadan in Oyo State.",
      interests:
        "Kehinde is passionate about personal growth and enjoys activities such as reading, learning new things, sleeping, and traveling.",
    },
  ],
  finance: [
    {
      name: "Mrs. Sowande Adenike",
      title: "Accounting Officer (AC)",
      image: "/Sowande.jpeg",
      background:
        "Sowande Adenike hails from Abeokuta, Ogun State, where she was born and raised. She attended Abeokuta Grammar School and later pursued higher education at Tai Solarin University of Education in Ijebu Ode, Ogun State.",
      interests: "Sowande has a passion for dancing and enjoys traveling.",
    },
  ],
  laboratory: [
    {
      name: "Mrs. Adeyeye Oluwafemi Alimat",
      title: "Chief Laboratory Technician (CLT)",
      image: "/Adeyeye.jpeg",
      background:
        "Adeyeye Oluwafemi Alimat hails from Ibadan, Oyo State, though she was raised in Iseyin, a town within the same state. She began her education at N.Y.S.C Nursery and Primary School in Iseyin, and completed her secondary schooling at Oke-Aamu Community College, Oke-Aamu. She went on to pursue further education at the School of Medical Laboratory, Baptist Medical Center, Oyo State.",
      interests: "Alimat enjoys cooking, reading, and playing football in her leisure time.",
    },
  ],
  it: [
    {
      name: "Mr. Odukale Oluwajuwon Adedapo",
      title: "IT Department",
      image: "/Odukale.jpeg",
      background:
        "Odukale Oluwajuwon Adedapo hails from Ogun State, Nigeria, but was raised in Ibadan, Oyo State. He received his early education at FUNAAB International School in Abeokuta, Ogun State, and Maverick College in Ibadan, Oyo State. He later pursued higher education at the Catholic University College of Ghana in Sunyani, Ghana.",
      interests:
        "Oluwajuwon has a wide range of interests, including reading, exercising, and watching football, movies, and documentaries. He is passionate about learning new things and enjoys traveling to explore different cultures and experiences.",
    },
  ],
  dental: [
    {
      name: "Mrs. Hammed Temitope Hamonat",
      title: "Dental Technician",
      image: "/Temitope.jpeg",
      background:
        "Hammed Temitope Hamonat hails from Gbongan, Osun State, where she was born and raised. She attended Gbongan/Odeomu Anglican School of Science in Gbongan, Osun State. She later pursued further education at Ogun State College of Health Technology, Ilese-Ijebu, Ogun State.",
      interests: "Temitope enjoys reading, dancing, and listening to music in her leisure time.",
    },
  ],
  records: [
    {
      name: "Mr. Afolabi Taiwo Hassan",
      title: "Records Officer",
      image: "/Afolabi.jpeg",
      background:
        "Afolabi Taiwo Hassan hails from Iragbiji in Boripe Local Government Area of Osun State, Nigeria. He completed his secondary education at Oke-Iragbiji Grammar School, Iragbiji, and went on to pursue further studies at the College of Health Technology, Ilesha, also in Osun State.",
      interests:
        "Taiwo is an avid football enthusiast and a dedicated supporter of Arsenal FC. In his leisure time, he enjoys dancing and traveling.",
    },
  ],
  pharmacy: [
    {
      name: "Mrs. Aliu Adeola Rofiat",
      title: "Pharmacist",
      image: "/Adeola.jpeg",
      background:
        "Aliu Adeola Rofiat hails from Ibadan, Oyo State, Nigeria, where she was born and raised. She completed her secondary education at Community High School in Ibadan. Driven by a passion for healthcare, she pursued further training and earned a certificate at God's Hospital, also in Ibadan.",
      interests: "Aliu Adeola enjoys reading, dancing, watching movies, and embracing new learning opportunities.",
    },
    {
      name: "Mrs. Ale Kudirat Yetunde",
      title: "Pharmacist",
      image: "/Eniola.jpeg",
      background:
        "Ale Kudirat Yetunde is a native of Ekiti State, Nigeria, where she also grew up. She attended Ipoti Senior High School in Ipoti, Ekiti State, before advancing her education at the Kwara State College of Health Science and Technology in Offa, Kwara State.",
      interests:
        "Kudirat is passionate about personal growth and enjoys spending her leisure time reading and singing.",
    },
  ],
  auditor: [
    {
      name: "Mr. Adeyemi Michael Olusegun",
      title: "Auditor",
      image: "/Micheal.jpeg",
      background:
        "Adeyemi Michael Olusegun was raised in Ologuneru, a community in Ibadan, Oyo State, though he hails originally from Ogun State. He completed his secondary education at Eleyele High School in Ibadan and went on to further his studies at The Polytechnic, Ibadan, also located in Oyo State.",
      interests:
        "Adeyemi is passionate about evangelism and enjoys engaging in a variety of activities during his leisure time. These include watching football and action movies, reading, and playing football.",
    },
  ],
}


const departmentIcons = {
  doctors: Heart,
  nurses: Users,
  administration: Award,
  finance: BookOpen,
  laboratory: Award,
  it: Award,
  dental: Heart,
  records: BookOpen,
  pharmacy: Award,
  auditor: BookOpen,
}

const departmentColors = {
  doctors: "bg-red-100 text-red-800",
  nurses: "bg-blue-100 text-blue-800",
  administration: "bg-purple-100 text-purple-800",
  finance: "bg-green-100 text-green-800",
  laboratory: "bg-yellow-100 text-yellow-800",
  it: "bg-indigo-100 text-indigo-800",
  dental: "bg-pink-100 text-pink-800",
  records: "bg-orange-100 text-orange-800",
  pharmacy: "bg-teal-100 text-teal-800",
  auditor: "bg-gray-100 text-gray-800",
}

function TeamMemberCard({ member, department }) {
  const Icon = departmentIcons[department]
  const colorClass = departmentColors[department]

  return (    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-[380px] hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-200">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-3 relative">
            <img
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mx-auto border-3 border-green-100 shadow-md"
            />
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
              <Badge className={`${colorClass} text-xs px-2 py-1`}>
                <Icon className="w-3 h-3 mr-1" />
                {member.title}
              </Badge>
            </div>
          </div>
          <CardTitle className="text-lg font-bold text-green-900 leading-tight">{member.name}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 px-4 pb-4">
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-green-800 mb-1 text-sm">Background</h4>
              <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">{member.background}</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-800 mb-1 text-sm">Interests</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{member.interests}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function DepartmentSection({ title, members, department }) {
  const Icon = departmentIcons[department]

  return (
    <section className="mb-12 ">
      <motion.div className="text-center mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
        <div className="flex items-center justify-center mb-3">
          <Icon className="w-7 h-7 text-green-700 mr-3" />
          <h2 className="text-2xl font-bold text-green-900">{title}</h2>
        </div>
        <div className="w-20 h-1 bg-green-600 mx-auto"></div>
      </motion.div>      <div className="flex justify-center">
        <div className={`grid gap-6 place-items-center ${
          members.length === 1
            ? 'grid-cols-1 w-[380px]'
            : members.length === 2
            ? 'grid-cols-1 md:grid-cols-2 w-[800px]'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px]'
        }`}>
          {members.map((member, index) => (
            <TeamMemberCard key={index} member={member} department={department} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function TeamPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
              <p className="text-lg md:text-xl">
                Dedicated to excellence in healthcare, serving our community with compassion and innovation since 2014.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Our Team Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-6">About God's Knot Team</h2>
            <p className="text-lg text-gray-700 mb-8">
              At God's Knot Hospital (GKH), we value our personnel and treat them with dignity and pride—because they
              are the cornerstone of the compassionate, patient-centred care we provide. From nurses and doctors to
              specialists, every team member brings a wealth of training and competence that makes a lasting difference
              in the lives of our patients.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">Training & Development</h3>
                <p className="text-gray-600">
                  GKH is a recognized hub for medical education, accredited by the National Postgraduate Medical College
                  of Nigeria.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">Experienced Team</h3>
                <p className="text-gray-600">
                  Our medical staff boasts over a decade of experience in Family Medicine, Internal Medicine, Surgery,
                  and In-patient Management.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">Emergency Care</h3>
                <p className="text-gray-600">
                  Substantial experience in emergency medical care and proficiency in managed care practices including
                  NHIS operations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>      {/* Team Members Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
            {Object.entries(teamData).flatMap(([department, members]) =>
              members.map((member, index) => (
                <TeamMemberCard 
                  key={`${department}-${index}`} 
                  member={member} 
                  department={department} 
                />
              ))
            )}
          </div>
        </div>
      </section>

      {/* HR Services Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">HR/Administrative Services</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              The Human Resources (HR) and Administrative Services Department at God's Knot Hospital supports
              approximately 120 management and staff members across key areas including Management/Administration,
              Clinical/Health Services, and General Support/Ancillary Staff.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-900">Core Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Advisory services on employee relations</li>
                    <li>• Guidance on leave arrangements</li>
                    <li>• Contract renewals administration</li>
                    <li>• Recruitment and selection processes</li>
                    <li>• Staff training and development</li>
                    <li>• Performance appraisal management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-green-900">Staff Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Comprehensive Health Scheme</li>
                    <li>• Pension Scheme</li>
                    <li>• Subsidy Programs</li>
                    <li>• Professional development opportunities</li>
                    <li>• Recognition and rewards programs</li>
                    <li>• Employee welfare initiatives</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
