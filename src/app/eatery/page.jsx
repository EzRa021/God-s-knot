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
import { Button } from "@/components/ui/button"
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
          style={{ backgroundImage: "url('/images/dining-hero.jpg')" }}
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

      {/* Quick Info Section */}
      <section className="py-8 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Clock className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Hours</h3>
                <p className="text-gray-700">Restaurant: 7am - 8pm daily</p>
                <p className="text-gray-700">Healing Lounge: 6am - 9pm daily</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Location</h3>
                <p className="text-gray-700">Restaurant: Main Building, 1st Floor</p>
                <p className="text-gray-700">Healing Lounge: East Wing, 2nd Floor</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Heart className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Dietary Options</h3>
                <p className="text-gray-700">Vegetarian, Vegan, Gluten-Free</p>
                <p className="text-gray-700">Allergen-Friendly Choices Available</p>
              </div>
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
              At God's Knot Hospital, we believe that nutritious, delicious food is an essential part of the healing
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
                src="/placeholder.svg?height=400&width=600"
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
                src="/placeholder.svg?height=400&width=600"
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
                <Button className="bg-green-600 hover:bg-green-700">View Full Menu</Button>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-700 hover:bg-green-50"
                >
                  Special Dietary Requests
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lounge Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-green-800 mb-6">The Healing Lounge</h2>
              <p className="text-gray-700 mb-6">
                Our café and lounge provides a tranquil space to relax, reflect, and recharge. Enjoy specialty coffees,
                teas, fresh juices, and light, nutritious snacks in a calming environment designed to promote wellbeing.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-700 mr-3" />
                  <span className="text-gray-700">Open daily from 6:00 AM to 9:00 PM</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-green-700 mr-3" />
                  <span className="text-gray-700">Located on the 2nd floor of the East Wing</span>
                </div>
                <div className="flex items-center">
                  <Coffee className="h-5 w-5 text-green-700 mr-3" />
                  <span className="text-gray-700">Specialty organic coffees and teas</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-green-700 mb-3">Lounge Features:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    Comfortable seating areas
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    Free Wi-Fi access
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    Indoor plants and natural light
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    Charging stations
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    Quiet reflection areas
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-600 mr-2" />
                    Outdoor terrace (seasonal)
                  </li>
                </ul>
              </div>

              <Button className="bg-green-600 hover:bg-green-700">View Lounge Menu</Button>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="The Healing Lounge café area"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">Menu Highlights</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our seasonal menus featuring nutritious, delicious options for every dietary preference and need.
            </p>
          </motion.div>

          <Tabs defaultValue="restaurant" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="restaurant">
                <Utensils className="h-4 w-4 mr-2" />
                Restaurant
              </TabsTrigger>
              <TabsTrigger value="lounge">
                <Coffee className="h-4 w-4 mr-2" />
                Healing Lounge
              </TabsTrigger>
            </TabsList>

            <TabsContent value="restaurant">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                {restaurantMenuItems.map((category, index) => (
                  <div key={index} className="mb-12 last:mb-0">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-green-800">{category.category}</h3>
                      <Separator className="flex-grow ml-4 bg-green-200" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.items.map((item, itemIndex) => (
                        <Card
                          key={itemIndex}
                          className="border-green-100 hover:shadow-md transition-shadow"
                        >
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-green-800">{item.name}</CardTitle>
                              <span className="font-bold text-green-700">{item.price}</span>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-gray-600 text-base mb-3">
                              {item.description}
                            </CardDescription>
                            {item.dietary && (
                              <div className="flex flex-wrap gap-2">
                                {item.dietary.map((diet) => (
                                  <Badge
                                    key={diet}
                                    variant="outline"
                                    className="bg-green-50 border-green-200 text-green-700 text-xs"
                                  >
                                    {dietaryIcons[diet]}
                                    <span className="ml-1">{dietaryLabels[diet]}</span>
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="text-center mt-12">
                  <p className="text-gray-600 mb-4">
                    This is just a sample of our offerings. Our menu changes seasonally to incorporate the freshest
                    ingredients.
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">Download Full Menu</Button>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="lounge">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                {loungeMenuItems.map((category, index) => (
                  <div key={index} className="mb-12 last:mb-0">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-green-800">{category.category}</h3>
                      <Separator className="flex-grow ml-4 bg-green-200" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.items.map((item, itemIndex) => (
                        <Card
                          key={itemIndex}
                          className="border-green-100 hover:shadow-md transition-shadow"
                        >
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-green-800">{item.name}</CardTitle>
                              <span className="font-bold text-green-700">{item.price}</span>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-gray-600 text-base">
                              {item.description}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="text-center mt-12">
                  <p className="text-gray-600 mb-4">
                    Our Healing Lounge menu changes regularly to incorporate seasonal ingredients and new specialty
                    beverages.
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">View Today's Specials</Button>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
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

              <Button className="bg-green-600 hover:bg-green-700">Request Special Accommodations</Button>
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

      {/* Private Dining & Catering */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-900 mb-4">Private Dining & Catering</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Special services for meetings, events, and private gatherings at God's Knot Hospital.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn}>
              <Card className="border-green-100 h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Private dining room"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-green-800">Private Dining Room</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base mb-4">
                    Our private dining room is available for family gatherings, small celebrations, or private meetings.
                    The space accommodates up to 20 people and offers a more intimate dining experience.
                  </CardDescription>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Users className="h-4 w-4 mr-2" />
                    Capacity: Up to 20 people
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CalendarClock className="h-4 w-4 mr-2" />
                    Reservation required: 48 hours in advance
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-green-600 text-green-700 hover:bg-green-50"
                  >
                    Reserve Private Dining
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-green-100 h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Catering services"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-green-800">Meeting & Event Catering</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base mb-4">
                    Our catering services are available for hospital meetings, conferences, and events. We offer a
                    variety of menu options from light refreshments to full-service meals.
                  </CardDescription>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Utensils className="h-4 w-4 mr-2" />
                    Full-service or drop-off options
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CalendarClock className="h-4 w-4 mr-2" />
                    Minimum 72 hours advance notice
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-green-600 text-green-700 hover:bg-green-50"
                  >
                    Request Catering
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-green-100 h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Patient room service"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-green-800">Patient Room Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base mb-4">
                    Inpatients can enjoy our room service dining program, allowing them to order meals from our
                    restaurant menu during extended hours, delivered directly to their room.
                  </CardDescription>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    Available: 7:00 AM - 7:00 PM
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Utensils className="h-4 w-4 mr-2" />
                    Customized to dietary restrictions
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-green-600 text-green-700 hover:bg-green-50"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}