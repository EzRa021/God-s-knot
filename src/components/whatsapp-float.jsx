"use client"

import  React from "react"

import { useState } from "react"
import { MessageSquare, Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"



export default function WhatsAppFloat({
  phoneNumber,
  welcomeMessage = "Hello! How can we help you today?",
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!message.trim()) return

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")

    setMessage("")
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 left-6 z-[9999]">
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
        aria-label="Contact us on WhatsApp"
      >
        <MessageSquare className="h-6 w-6 text-white" />
      </Button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 w-[300px]">
          <Card className="border-green-200 shadow-xl">
            <CardHeader className="bg-green-500 text-white rounded-t-lg pb-3 pt-3">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-medium flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  WhatsApp Chat
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 rounded-full hover:bg-green-600/50 text-white"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-600 mb-4">{welcomeMessage}</p>
              <form onSubmit={handleSubmit}>
                <Textarea
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[100px] border-green-200 focus:ring-green-500"
                  required
                />
              </form>
            </CardContent>
            <CardFooter className="border-t border-green-100 pt-3">
              <Button
                onClick={handleSubmit}
                className="w-full bg-green-500 hover:bg-green-600 flex items-center justify-center"
                disabled={!message.trim()}
              >
                <Send className="h-4 w-4 mr-2" />
                Send via WhatsApp
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  )
}
