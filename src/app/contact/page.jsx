"use client";

import React from "react";
import { useState, useEffect } from "react";
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

// Google Maps component with user location
const GoogleMap = () => {
  // Loading script dynamically
  useEffect(() => {
    // Create the script element for Google Maps API
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBibWWEASRhywJHZEtYmi3C1U9c573iMhw&callback=initMap`;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    
    // Define the callback function
    window.initMap = function() {
      // Hospital location coordinates from the provided Google Maps link
      const hospitalLocation = { lat: 7.4655616, lng: 3.8364637 }; // Exact coordinates for God's Knot Hospital Limited  Limited 
      
      // Create the map centered at the hospital location
      const map = new google.maps.Map(document.getElementById("google-map"), {
        center: hospitalLocation,
        zoom: 15,
        mapTypeControl: true,
        fullscreenControl: true,
        streetViewControl: true,
        zoomControl: true,
      });
      
      // Add marker for hospital location
      const hospitalMarker = new google.maps.Marker({
        position: hospitalLocation,
        map: map,
        title: "God's Knot Hospital Limited ",
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: "#4ade80", // Green color
          fillOpacity: 0.7,
          strokeWeight: 2,
          strokeColor: "#166534", // Dark green border
        }
      });

      // Add info window for hospital marker
      const hospitalInfoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 8px; max-width: 200px;">
            <h3 style="margin: 0 0 8px 0; color: #166534; font-weight: bold;">God's Knot Hospital Limited </h3>
            <p style="margin: 0; font-size: 14px;">Opposite NIPCO Filling Station, Off Ido/Eruwa Road, lyana Ekerin, Ologuneru, Ibadan</p>
            <p style="margin: 8px 0 0 0;">
              <a href="https://maps.app.goo.gl/qtBrSWofvV5xKso58" target="_blank" style="color: #166534; text-decoration: none; font-weight: bold;">Get Directions</a>
            </p>
          </div>
        `
      });

      // Show info window when clicking on hospital marker
      hospitalMarker.addListener("click", () => {
        hospitalInfoWindow.open(map, hospitalMarker);
      });
      
      // Create a status message div for user location
      const statusDiv = document.createElement("div");
      statusDiv.id = "location-status";
      statusDiv.style.position = "absolute";
      statusDiv.style.bottom = "10px";
      statusDiv.style.left = "10px";
      statusDiv.style.backgroundColor = "white";
      statusDiv.style.padding = "5px 10px";
      statusDiv.style.borderRadius = "4px";
      statusDiv.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
      statusDiv.style.fontSize = "14px";
      statusDiv.style.zIndex = "5";
      statusDiv.style.display = "none";
      document.getElementById("google-map").appendChild(statusDiv);
      
      // Add user location button
      const locationButton = document.createElement("button");
      locationButton.textContent = "Show My Location";
      locationButton.style.backgroundColor = "#166534";
      locationButton.style.color = "white";
      locationButton.style.border = "none";
      locationButton.style.borderRadius = "4px";
      locationButton.style.padding = "10px 16px";
      locationButton.style.margin = "10px";
      locationButton.style.cursor = "pointer";
      locationButton.style.fontWeight = "bold";
      locationButton.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
      
      map.controls[google.maps.ControlPosition.TOP_RIGHT].push(locationButton);
      
      // Initialize user location marker
      let userMarker = null;
      let userInfoWindow = null;
      
      // Function to handle location errors
      function handleLocationError(error) {
        statusDiv.style.display = "block";
        switch(error.code) {
          case error.PERMISSION_DENIED:
            statusDiv.textContent = "Location permission denied. Please enable location services.";
            statusDiv.style.backgroundColor = "#fee2e2";
            statusDiv.style.color = "#b91c1c";
            break;
          case error.POSITION_UNAVAILABLE:
            statusDiv.textContent = "Location information is unavailable.";
            statusDiv.style.backgroundColor = "#fee2e2";
            statusDiv.style.color = "#b91c1c";
            break;
          case error.TIMEOUT:
            statusDiv.textContent = "Location request timed out.";
            statusDiv.style.backgroundColor = "#fee2e2";
            statusDiv.style.color = "#b91c1c";
            break;
          default:
            statusDiv.textContent = "An unknown error occurred.";
            statusDiv.style.backgroundColor = "#fee2e2";
            statusDiv.style.color = "#b91c1c";
            break;
        }
        
        // Hide status after 5 seconds
        setTimeout(() => {
          statusDiv.style.display = "none";
        }, 5000);
      }
      
      // Function to handle getting user location
      function getUserLocation() {
        statusDiv.style.display = "block";
        statusDiv.textContent = "Getting your location...";
        statusDiv.style.backgroundColor = "#ecfdf5";
        statusDiv.style.color = "#065f46";
        
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              
              // Add or update user marker
              if (userMarker) {
                userMarker.setPosition(userLocation);
              } else {
                userMarker = new google.maps.Marker({
                  position: userLocation,
                  map: map,
                  title: "Your Location",
                  animation: google.maps.Animation.DROP,
                  icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 8,
                    fillColor: "#3b82f6", // Blue color
                    fillOpacity: 0.8,
                    strokeWeight: 2,
                    strokeColor: "#1e40af", // Dark blue border
                  }
                });
                
                // Create info window for user location
                userInfoWindow = new google.maps.InfoWindow({
                  content: `<div style="padding: 5px; text-align: center;"><b>Your Location</b></div>`
                });
                
                // Show info window when clicking on user marker
                userMarker.addListener("click", () => {
                  userInfoWindow.open(map, userMarker);
                });
              }
              
              // Calculate the bounds to include both hospital and user location
              const bounds = new google.maps.LatLngBounds();
              bounds.extend(hospitalLocation);
              bounds.extend(userLocation);
              
              // Fit the map to these bounds
              map.fitBounds(bounds);
              
              // Calculate distance between user and hospital (in kilometers)
              const distanceInKm = google.maps.geometry.spherical.computeDistanceBetween(
                new google.maps.LatLng(userLocation),
                new google.maps.LatLng(hospitalLocation)
              ) / 1000; // Convert meters to kilometers
              
              // Update status message with distance
              statusDiv.textContent = `You are approximately ${distanceInKm.toFixed(2)} km from the hospital`;
              statusDiv.style.backgroundColor = "#ecfdf5";
              statusDiv.style.color = "#065f46";
              
              // Hide status after 10 seconds
              setTimeout(() => {
                statusDiv.style.display = "none";
              }, 10000);
              
              // Draw a line between user location and hospital
              const pathCoordinates = [
                userLocation,
                hospitalLocation
              ];
              
              const path = new google.maps.Polyline({
                path: pathCoordinates,
                geodesic: true,
                strokeColor: "#4ade80",
                strokeOpacity: 0.7,
                strokeWeight: 3
              });
              
              path.setMap(map);
            },
            (error) => {
              handleLocationError(error);
            },
            {
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
            }
          );
        } else {
          statusDiv.textContent = "Geolocation is not supported by this browser.";
          statusDiv.style.backgroundColor = "#fee2e2";
          statusDiv.style.color = "#b91c1c";
          
          // Hide status after 5 seconds
          setTimeout(() => {
            statusDiv.style.display = "none";
          }, 5000);
        }
      }
      
      // Add click event listener to location button
      locationButton.addEventListener("click", getUserLocation);
    };
    
    document.head.appendChild(googleMapScript);
    
    // Add geometry library for distance calculation
    const geometryScript = document.createElement("script");
    geometryScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBibWWEASRhywJHZEtYmi3C1U9c573iMhw&libraries=geometry";
    document.head.appendChild(geometryScript);
    
    // Cleanup function
    return () => {
      document.head.removeChild(googleMapScript);
      if (document.head.contains(geometryScript)) {
        document.head.removeChild(geometryScript);
      }
      window.initMap = null;
    };
  }, []);

  return (
    <div id="google-map" className="rounded-lg overflow-hidden shadow-lg h-[400px] w-full relative"></div>
  );
};

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

  const departments = [
    { id: "general", name: "General Inquiries" },
    { id: "appointments", name: "Appointments" },
    { id: "billing", name: "Billing & Insurance" },
    { id: "cardiology", name: "Cardiology Department" },
    { id: "neurology", name: "Neurology Department" },
    { id: "pediatrics", name: "Pediatrics Department" },
    { id: "orthopedics", name: "Orthopedics Department" },
  ];

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
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("error");
      return;
    }
    
    // Format the message for both WhatsApp and email
    const formattedMessage = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Department: ${formData.department ? departments.find(d => d.id === formData.department)?.name || formData.department : "Not selected"}
Message: ${formData.message}
    `.trim();
    
    // Handle based on contact preference
    if (formData.contactPreference === "phone") {
      // WhatsApp number - using the first emergency number
      const whatsappNumber = "08132815449"; // Nigerian format for the first emergency number
      
      // Create WhatsApp URL with pre-filled message
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
    } else {
      // Email option - use the hospital's email
      const emailAddress = "godsknothospital@gmail.com";
      const subject = `Contact Form: ${formData.department ? departments.find(d => d.id === formData.department)?.name : "General Inquiry"}`;
      
      // Create mailto URL
      const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedMessage)}`;
      
      // Open default email client
      window.location.href = mailtoUrl;
    }
    
    // Show success message and reset form
    setFormStatus("success");
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      message: "",
      contactPreference: "email",
    });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/80 z-10" />
        <div
          className="relative h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/DSC_2907.jpg')" }}
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
                <p className="text-gray-700">Emergency:08110014978,
                08157041274, 07032451916</p>
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
                <p className="text-gray-700">godsknothospital@gmail.com</p>
                <p className="text-gray-700">appointments@godsknot.com</p>
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
                      <Label htmlFor="phone-preference">WhatsApp</Label>
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
                {/* Google Map */}
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <GoogleMap />
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
                      <strong>God's Knot Hospital Limited </strong>
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
                    <p className="text-gray-600 mt-2">
                      <a 
                        href="https://maps.app.goo.gl/qtBrSWofvV5xKso58" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 font-medium flex items-center"
                      >
                        <MapPin className="h-4 w-4 mr-1" /> Get Directions
                      </a>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}