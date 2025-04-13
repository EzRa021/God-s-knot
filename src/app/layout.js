import  React from "react"
import "./globals.css"
import WhatsAppFloat from "@/components/whatsapp-float"

export const metadata = {
  title: "God's Knot Hospital - Compassionate Care for a Healthier Tomorrow",
  description:
    "God's Knot Hospital provides high-quality healthcare services with a focus on patient comfort and advanced medical technology.",
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
          phoneNumber="2348130000000"
          welcomeMessage="Hello! How can we assist you with your healthcare needs today?"
        />
      </body>
    </html>
  )
}
