"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  Clock,
  MapPin,
  Utensils,
  Coffee,
  CalendarClock,
  Users,
  Leaf,
  Heart,
  Apple,
  Wheat,
  Milk,
  Fish,
  Egg,
  ChevronRight,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function DiningPage() {
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

  const restaurantMenuItems = [
    {
      category: "Breakfast",
      items: [
        {
          name: "Avocado Toast",
          description: "Whole grain toast with smashed avocado, cherry tomatoes, and microgreens",
          price: "₦8.95",
          dietary: ["vegetarian", "dairy-free"],
        },
        {
          name: "Greek Yogurt Parfait",
          description: "Greek yogurt with fresh berries, honey, and house-made granola",
          price: "₦6.95",
          dietary: ["vegetarian", "gluten-free"],
        },
        {
          name: "Veggie Omelette",
          description: "Three-egg omelette with spinach, bell peppers, onions, and feta cheese",
          price: "₦9.95",
          dietary: ["vegetarian", "gluten-free"],
        },
        {
          name: "Steel-Cut Oatmeal",
          description: "Organic steel-cut oats with brown sugar, dried fruits, and nuts",
          price: "₦5.95",
          dietary: ["vegan", "dairy-free"],
        },
      ],
    },
    {
      category: "Lunch & Dinner",
      items: [
        {
          name: "Harvest Bowl",
          description: "Quinoa, roasted sweet potatoes, kale, chickpeas, and tahini dressing",
          price: "₦12.95",
          dietary: ["vegan", "gluten-free"],
        },
        {
          name: "Grilled Salmon",
          description: "Wild-caught salmon with lemon herb sauce, brown rice, and seasonal vegetables",
          price: "₦16.95",
          dietary: ["gluten-free", "dairy-free"],
        },
        {
          name: "Mediterranean Wrap",
          description: "Hummus, falafel, cucumber, tomato, and tzatziki in a whole wheat wrap",
          price: "₦10.95",
          dietary: ["vegetarian"],
        },
        {
          name: "Hearty Vegetable Soup",
          description: "Seasonal vegetables in a rich vegetable broth with herbs",
          price: "₦5.95",
          dietary: ["vegan", "gluten-free"],
        },
      ],
    },
    {
      category: "Sides & Snacks",
      items: [
        {
          name: "Fresh Fruit Cup",
          description: "Seasonal fresh fruits",
          price: "₦4.95",
          dietary: ["vegan", "gluten-free"],
        },
        {
          name: "Sweet Potato Fries",
          description: "Crispy sweet potato fries with chipotle aioli",
          price: "₦4.95",
          dietary: ["vegetarian", "gluten-free"],
        },
        {
          name: "Garden Salad",
          description: "Mixed greens, cucumber, tomato, carrot with balsamic vinaigrette",
          price: "₦5.95",
          dietary: ["vegan", "gluten-free"],
        },
        {
          name: "Hummus & Vegetables",
          description: "House-made hummus with fresh vegetable crudités",
          price: "₦6.95",
          dietary: ["vegan", "gluten-free"],
        },
      ],
    },
  ]

  const loungeMenuItems = [
    {
      category: "Coffee & Tea",
      items: [
        { name: "Espresso", description: "Double shot of our signature organic espresso blend", price: "₦3.50" },
        { name: "Cappuccino", description: "Espresso with steamed milk and foam", price: "₦4.50" },
        { name: "Herbal Tea", description: "Selection of organic herbal teas", price: "₦3.95" },
        { name: "Matcha Latte", description: "Ceremonial grade matcha with steamed milk of choice", price: "₦5.50" },
      ],
    },
    {
      category: "Cold Beverages",
      items: [
        { name: "Fresh Pressed Juice", description: "Daily selection of fresh fruits and vegetables", price: "₦6.95" },
        { name: "Iced Green Tea", description: "Organic green tea over ice with optional honey", price: "₦3.95" },
        { name: "Smoothie", description: "Blended fruits with yogurt or plant-based milk", price: "₦7.95" },
        {
          name: "Sparkling Water",
          description: "Still or sparkling water with optional fruit infusion",
          price: "₦2.95",
        },
      ],
    },
    {
      category: "Light Bites",
      items: [
        { name: "Artisan Pastries", description: "Daily selection of freshly baked pastries", price: "₦3.95" },
        { name: "Avocado Toast", description: "Whole grain toast with avocado and toppings", price: "₦7.95" },
        {
          name: "Fruit & Cheese Plate",
          description: "Selection of cheeses with fresh and dried fruits",
          price: "₦9.95",
        },
        { name: "Energy Bites", description: "House-made protein-rich snacks with nuts and seeds", price: "₦4.95" },
      ],
    },
  ]

  const dietaryIcons = {
    vegetarian: <Leaf className="h-4 w-4 text-green-600" />,
    vegan: <Apple className="h-4 w-4 text-green-600" />,
    "gluten-free": <Wheat className="h-4 w-4 text-amber-600" />,
    "dairy-free": <Milk className="h-4 w-4 text-blue-600" />,
  }

  const dietaryLabels = {
    vegetarian: "Vegetarian",
    vegan: "Vegan",
    "gluten-free": "Gluten-Free",
    "dairy-free": "Dairy-Free",
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/80 z-10" />
        <div
          className="relative h-[400px] bg-cover bg-center"
          style={{ backgroundImage: "url('/DSC_6087.jpg')" }}
        >
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <motion.div className="max-w-2xl text-white" initial="hidden" animate="visible" variants={fadeIn}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Dining at God's Knot</h1>
              <p className="text-lg md:text-xl">
                Nourishing food and relaxing spaces to restore and rejuvenate during your hospital visit.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dining Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              Nourishment for Healing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At God's Knot Hospital Limited  , we believe that nutritious, delicious food is an essential part of the healing
              process. Our dining options are designed to provide comfort and nourishment for patients, visitors, and
              staff.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-green-800 mb-6">Our Culinary Philosophy</h3>
              <p className="text-gray-700 mb-6">
                Our culinary team is dedicated to creating meals that not only taste delicious but also support health
                and wellbeing. We source local, seasonal ingredients whenever possible and prepare foods that are
                nutrient-dense and satisfying.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Leaf className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Fresh & Local</h4>
                    <p className="text-gray-600 text-sm">
                      Ingredients sourced from local farms and suppliers
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Heart className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Nutrition-Focused</h4>
                    <p className="text-gray-600 text-sm">
                      Meals designed with health and healing in mind
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Users className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Inclusive Options</h4>
                    <p className="text-gray-600 text-sm">
                      Accommodating diverse dietary needs and preferences
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Utensils className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">Culinary Excellence</h4>
                    <p className="text-gray-600 text-sm">
                      Prepared by professional chefs with healthcare expertise
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/eatery1.jpg"
                alt="Fresh, nutritious food prepared by our culinary team"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/eatery2.jpg"
                alt="God's Knot Restaurant interior"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="text-3xl font-bold text-green-800 mb-6">The Garden Restaurant</h2>
              <p className="text-gray-700 mb-6">
                Our main dining facility offers a diverse menu of nutritious, delicious meals in a bright, welcoming
                environment. The Garden Restaurant serves breakfast, lunch, and dinner with options to satisfy every
                palate.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-700 mr-3" />
                  <span className="text-gray-700">Open daily from 7:00 AM to 8:00 PM</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-green-700 mr-3" />
                  <span className="text-gray-700">
                    Located on the 1st floor of the Main Building
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-green-700 mr-3" />
                  <span className="text-gray-700">Seating capacity: 120 people</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200"
                >
                  <Leaf className="h-3.5 w-3.5 mr-1" />
                  Vegetarian
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200"
                >
                  <Apple className="h-3.5 w-3.5 mr-1" />
                  Vegan
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200"
                >
                  <Wheat className="h-3.5 w-3.5 mr-1" />
                  Gluten-Free
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200"
                >
                  <Milk className="h-3.5 w-3.5 mr-1" />
                  Dairy-Free
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200"
                >
                  <Fish className="h-3.5 w-3.5 mr-1" />
                  Seafood
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200"
                >
                  <Egg className="h-3.5 w-3.5 mr-1" />
                  Egg-Free
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
               
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Dietary Accommodations */}
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
                Special Dietary Accommodations
              </h2>
              <p className="text-gray-700 mb-6">
                We understand that many of our patients and visitors have specific dietary needs. Our culinary team is
                committed to accommodating these requirements while still providing delicious, satisfying meals.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-semibold text-green-700 mb-2 flex items-center">
                    <Leaf className="h-5 w-5 mr-2" />
                    Medical Dietary Restrictions
                  </h3>
                  <p className="text-gray-600">
                    Our team works closely with hospital dietitians to ensure that all medically-necessary dietary
                    restrictions are accommodated, including low-sodium, renal, diabetic, and texture-modified diets.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-green-700 mb-2 flex items-center">
                    <Apple className="h-5 w-5 mr-2" />
                    Plant-Based Options
                  </h3>
                  <p className="text-gray-600">
                    We offer a variety of vegetarian and vegan options that are creative, nutritious, and satisfying.
                    Our plant-based menu items are clearly marked and available at every meal.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-green-700 mb-2 flex items-center">
                    <Wheat className="h-5 w-5 mr-2" />
                    Allergen-Free Choices
                  </h3>
                  <p className="text-gray-600">
                    We take food allergies seriously and offer options free from common allergens including gluten,
                    dairy, nuts, and shellfish. Our kitchen staff is trained in allergen-safe food preparation.
                  </p>
                </div>
              </div>

            </motion.div>

            <motion.div variants={fadeIn} className="grid grid-cols-2 gap-4">
              <div className="relative h-[200px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Plant-based meal option"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Gluten-free meal option"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Allergen-free meal preparation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Nutritionist consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      <Footer />
    </div>
  )
}