"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Department",
    href: "#",
    submenu: [
      { name: "GOSAM Clinic", href: "/gosam-clinic" },
      {
        name: "Diagnostics Center",
        href: "#",
        submenu: [
          { name: "Lab", href: "/laboratory" },
          { name: "Xray", href: "/xray" },
        ],
      },
      { name: "Dentist", href: "/dental" },
      { name: "Ambulance", href: "/ambulance" },
      { name: "Fertility Center", href: "/fertility-center" },
    ],
  },
  {
    name: "Ventures",
    href: "#",
    submenu: [
      { name: "Ruffshall Supermarket", href: "supermarket" },
      { name: "Eatery", href: "/eatery" },
      { name: "Lodge", href: "/lodge" },
      { name: "Conference Center", href: "conference-center" },
    ],
  },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openMenus, setOpenMenus] = useState({})

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleSubmenu = (name, event) => {
    // Prevent event bubbling to parent menus
    if (event) {
      event.stopPropagation()
    }
    
    setOpenMenus(prev => ({
      ...prev,
      [name]: !prev[name]
    }))
  }

  // Function to check if a submenu is open
  const isSubmenuOpen = (name) => {
    return !!openMenus[name]
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className={cn("font-bold text-2xl transition-colors", scrolled ? "text-green-800" : "text-white")}>
              <Image height={50} width={50} src="/logo.png" alt="Logo"/>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <button
                    className={cn(
                      "flex items-center font-medium transition-colors",
                      scrolled ? "text-gray-700 hover:text-green-700" : "text-white hover:text-green-200",
                    )}
                    onClick={(e) => toggleSubmenu(link.name, e)}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "font-medium transition-colors",
                      scrolled ? "text-gray-700 hover:text-green-700" : "text-white hover:text-green-200",
                    )}
                  >
                    {link.name}
                  </Link>
                )}

                {link.submenu && (
                  <div className="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {link.submenu.map((subItem) => (
                        <div key={subItem.name} className="relative group/submenu">
                          {subItem.submenu ? (
                            <div className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">
                              {subItem.name}
                              <ChevronRight className="ml-1 h-4 w-4" />
                              
                              {/* Nested submenu */}
                              <div className="absolute left-full top-0 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200">
                                <div className="py-1">
                                  {subItem.submenu.map((subSubItem) => (
                                    <Link
                                      key={subSubItem.name}
                                      href={subSubItem.href}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                                    >
                                      {subSubItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-green-600 hover:bg-green-700">Book Appointment</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={cn("h-6 w-6", scrolled ? "text-gray-900" : "text-white")} />
            ) : (
              <Menu className={cn("h-6 w-6", scrolled ? "text-gray-900" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.submenu ? (
                      <>
                        <button
                          className="flex items-center justify-between w-full text-gray-700 hover:text-green-700 font-medium"
                          onClick={(e) => toggleSubmenu(link.name, e)}
                        >
                          {link.name}
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              isSubmenuOpen(link.name) ? "rotate-180" : "",
                            )}
                          />
                        </button>

                        <AnimatePresence>
                          {isSubmenuOpen(link.name) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 ml-4 space-y-2"
                            >
                              {link.submenu.map((subItem) => (
                                <div key={subItem.name}>
                                  {subItem.submenu ? (
                                    <>
                                      <button
                                        className="flex items-center justify-between w-full text-gray-600 hover:text-green-700"
                                        onClick={(e) => toggleSubmenu(subItem.name, e)}
                                      >
                                        {subItem.name}
                                        <ChevronDown
                                          className={cn(
                                            "h-4 w-4 transition-transform",
                                            isSubmenuOpen(subItem.name) ? "rotate-180" : "",
                                          )}
                                        />
                                      </button>

                                      <AnimatePresence>
                                        {isSubmenuOpen(subItem.name) && (
                                          <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="mt-2 ml-4 space-y-2"
                                          >
                                            {subItem.submenu.map((subSubItem) => (
                                              <Link
                                                key={subSubItem.name}
                                                href={subSubItem.href}
                                                className="block text-gray-500 hover:text-green-700"
                                                onClick={() => setIsOpen(false)}
                                              >
                                                {subSubItem.name}
                                              </Link>
                                            ))}
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </>
                                  ) : (
                                    <Link
                                      href={subItem.href}
                                      className="block text-gray-600 hover:text-green-700"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {subItem.name}
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-700 hover:text-green-700 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}

                <Button className="bg-green-600 hover:bg-green-700 w-full mt-4">Book Appointment</Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}