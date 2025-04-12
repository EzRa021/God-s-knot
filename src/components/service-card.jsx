"use client"

import { motion } from "framer-motion"
import { Heart, Brain, Baby, Bone, Stethoscope, FlaskConical } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import  { JSX } from "react"

export default function ServiceCard({ icon, title, description }) {
  const getIcon = () => {
    const iconProps = { className: "h-10 w-10 text-green-600 mb-4" }

    switch (icon) {
      case "Heart":
        return <Heart {...iconProps} />
      case "Brain":
        return <Brain {...iconProps} />
      case "Baby":
        return <Baby {...iconProps} />
      case "Bone":
        return <Bone {...iconProps} />
      case "Stethoscope":
        return <Stethoscope {...iconProps} />
      case "FlaskConical":
        return <FlaskConical {...iconProps} />
      default:
        return <Stethoscope {...iconProps} />
    }
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <Card className="border-green-100 hover:shadow-md transition-shadow h-full">
        <CardHeader className="pb-2">
          {getIcon()}
          <CardTitle className="text-xl text-green-800">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 text-base">{description}</CardDescription>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="text-green-700 hover:text-green-800 hover:bg-green-50 p-0">
            Learn more
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

