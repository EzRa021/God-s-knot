"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building,
  AlertCircle,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
    contactPreference: "email",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, department: value }));
  };

  const handleRadioChange = (value) => {
    setFormData((prev) => ({ ...prev, contactPreference: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setFormStatus("success");
        // Reset form after success
        setFormData({
          name: "",
          email: "",
          phone: "",
          department: "",
          message: "",
          contactPreference: "email",
        });
      } else {
        setFormStatus("error");
      }
    }, 1000);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const departments = [
    { id: "general", name: "General Inquiries" },
    { id: "appointments", name: "Appointments" },
    { id: "billing", name: "Billing & Insurance" },
    { id: "cardiology", name: "Cardiology Department" },
    { id: "neurology", name: "Neurology Department" },
    { id: "pediatrics", name: "Pediatrics Department" },
    { id: "orthopedics", name: "Orthopedics Department" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/80 z-10" />
        <div
          className="relative h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/contact-hero.jpg')" }}
        >
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <motion.div
              className="max-w-2xl text-white"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl">
                We're here to help. Reach out to us with any questions,
                concerns, or to schedule an appointment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Phone</h3>
                <p className="text-gray-700">Emergency: 08039297709, 08110014978,
                08157041274, 08071301058</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Mail className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Email</h3>
                <p className="text-gray-700">info@God's Knot.com</p>
                <p className="text-gray-700">appointments@God's Knot.com</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Clock className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Hours</h3>
                <p className="text-gray-700">Emergency: 24/7</p>
                <p className="text-gray-700">
                  Regular Services: Mon-Fri 8am-8pm
                </p>
                <p className="text-gray-700">Weekend Services: 9am-5pm</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-green-800 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              {formStatus === "success" && (
                <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>
                    Your message has been sent successfully. We'll get back to
                    you soon.
                  </AlertDescription>
                </Alert>
              )}

              {formStatus === "error" && (
                <Alert className="mb-6 bg-red-50 text-red-800 border-red-200">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Please fill out all required fields.
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="border-green-200"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className="border-green-200"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="border-green-200"
                    />
                  </div>
                  ow
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select
                      value={formData.department}
                      onValueChange={handleSelectChange}
                    >
                      <SelectTrigger className="border-green-200">
                        <SelectValue placeholder="Select a department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept.id} value={dept.id}>
                            {dept.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="min-h-[150px] border-green-200"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Preferred Contact Method</Label>
                  <RadioGroup
                    value={formData.contactPreference}
                    onValueChange={handleRadioChange}
                    className="flex space-x-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email-preference" />
                      <Label htmlFor="email-preference">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="phone-preference" />
                      <Label htmlFor="phone-preference">Phone</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 w-full md:w-auto"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Location and Department Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                {/* Map */}
                <div className="rounded-lg overflow-hidden shadow-lg h-[300px] bg-gray-200 flex items-center justify-center">
                  <div className="text-center p-4">
                    <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <p className="text-gray-600">
                      Interactive map would be displayed here
                    </p>
                  </div>
                </div>

                {/* Location */}
                <Card className="border-green-100">
                  <CardHeader>
                    <CardTitle className="text-green-800 flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      Our Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-2">
                      <strong>God's Knot Hospital</strong>
                      <br />
                      Opposite NIPCO Filling Station, Off Ido/Eruwa Road
                      <br />
                      lyana Ekerin, Ologuneru
                      <br />
                      Ibadan, Oyo State
                    </p>
                    <p className="text-gray-600">
                      Located in the heart of the Medical District, with easy
                      access to public transportation and ample parking
                      facilities.
                    </p>
                  </CardContent>
                </Card>

                {/* Department Contacts */}
                <Card className="border-green-100">
                  <CardHeader>
                    <CardTitle className="text-green-800 flex items-center">
                      <Building className="h-5 w-5 mr-2" />
                      Department Contacts
                    </CardTitle>
                    <CardDescription>
                      Direct contact information for our departments
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="medical">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="medical">Medical</TabsTrigger>
                        <TabsTrigger value="administrative">
                          Administrative
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="medical" className="space-y-4 mt-4">
                        <div className="border-b border-gray-200 pb-2">
                          <h4 className="font-semibold text-green-700">
                            Cardiology
                          </h4>
                          <p className="text-gray-600">Phone: (123) 456-7891</p>
                          <p className="text-gray-600">
                            Email: cardiology@God's Knot.com
                          </p>
                        </div>

                        <div className="border-b border-gray-200 pb-2">
                          <h4 className="font-semibold text-green-700">
                            Neurology
                          </h4>
                          <p className="text-gray-600">Phone: (123) 456-7892</p>
                          <p className="text-gray-600">
                            Email: neurology@God's Knot.com
                          </p>
                        </div>

                        <div className="border-b border-gray-200 pb-2">
                          <h4 className="font-semibold text-green-700">
                            Pediatrics
                          </h4>
                          <p className="text-gray-600">Phone: (123) 456-7893</p>
                          <p className="text-gray-600">
                            Email: pediatrics@God's Knot.com
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-green-700">
                            Orthopedics
                          </h4>
                          <p className="text-gray-600">Phone: (123) 456-7894</p>
                          <p className="text-gray-600">
                            Email: orthopedics@God's Knot.com
                          </p>
                        </div>
                      </TabsContent>

                      <TabsContent
                        value="administrative"
                        className="space-y-4 mt-4"
                      >
                        <div className="border-b border-gray-200 pb-2">
                          <h4 className="font-semibold text-green-700">
                            Appointments
                          </h4>
                          <p className="text-gray-600">Phone: (123) 456-7895</p>
                          <p className="text-gray-600">
                            Email: appointments@God's Knot.com
                          </p>
                        </div>

                        <div className="border-b border-gray-200 pb-2">
                          <h4 className="font-semibold text-green-700">
                            Billing & Insurance
                          </h4>
                          <p className="text-gray-600">Phone: (123) 456-7896</p>
                          <p className="text-gray-600">
                            Email: billing@God's Knot.com
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-green-700">
                            Administration
                          </h4>
                          <p className="text-gray-600">Phone: (123) 456-7897</p>
                          <p className="text-gray-600">
                            Email: admin@God's Knot.com
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visiting Information */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              Visiting Information
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Important information for patients and visitors to ensure a smooth
              and comfortable experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-green-100 h-full">
                <CardHeader>
                  <CardTitle className="text-green-800">
                    Visiting Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between">
                      <span>General Wards:</span>
                      <span>10:00 AM - 8:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Intensive Care Units:</span>
                      <span>12:00 PM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span></span>
                      <span>6:00 PM - 7:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Maternity Ward:</span>
                      <span>10:00 AM - 12:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span></span>
                      <span>3:00 PM - 8:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Pediatric Ward:</span>
                      <span>10:00 AM - 8:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Emergency Department:</span>
                      <span>24/7 (limited to 1 visitor)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-green-100 h-full">
                <CardHeader>
                  <CardTitle className="text-green-800">
                    Parking Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>
                    <strong>Main Parking Garage:</strong>
                    <br />
                    Located adjacent to the main entrance. Open 24/7.
                  </p>
                  <p>
                    <strong>Rates:</strong>
                    <br />
                    First hour: Free
                    <br />
                    1-3 hours: $5
                    <br />
                    3-6 hours: $10
                    <br />
                    6-24 hours: $15
                  </p>
                  <p>
                    <strong>Visitor Passes:</strong>
                    <br />
                    Weekly passes available at the information desk for $40.
                  </p>
                  <p>
                    <strong>Accessible Parking:</strong>
                    <br />
                    Available near all entrances for patients and visitors with
                    disabilities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-green-100 h-full">
                <CardHeader>
                  <CardTitle className="text-green-800">
                    Visitor Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-700">
                  <p>
                    For the comfort and safety of our patients, please observe
                    the following guidelines:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Limit of 2 visitors per patient at any time</li>
                    <li>Children under 12 must be accompanied by an adult</li>
                    <li>
                      Please do not visit if you have cold or flu symptoms
                    </li>
                    <li>Maintain quiet in patient areas</li>
                    <li>Turn mobile phones to silent mode</li>
                    <li>Respect patient privacy and confidentiality</li>
                    <li>Follow all instructions from hospital staff</li>
                    <li>Some units may have additional restrictions</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
