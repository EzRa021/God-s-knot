import  React from "react"
import  { Metadata } from "next"
import "./globals.css"
import WhatsAppFloat from "@/components/whatsapp-float"

export const metadata = {
  title: "GreenHealth Hospital - Compassionate Care for a Healthier Tomorrow",
  description:
    "GreenHealth Hospital provides high-quality healthcare services with a focus on patient comfort and advanced medical technology.",
  keywords: "hospital, healthcare, medical services, doctors, emergency care, patient care",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body >
        {children}
        <WhatsAppFloat
          phoneNumber="1234567890"
          welcomeMessage="Hello! How can we assist you with your healthcare needs today?"
        />
      </body>
    </html>
  )
}
