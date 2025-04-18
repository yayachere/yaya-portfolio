"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Briefcase, Code, Mail } from "lucide-react"

interface NavItem {
  href: string
  label: string
  icon: React.ElementType
}

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState<string>("home")
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const navItems: NavItem[] = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#projects", label: "Projects", icon: Briefcase },
    { href: "#skills", label: "Skills", icon: Code },
    { href: "#contact", label: "Contact", icon: Mail },
  ]

  const resetTimer = () => {
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Set new timeout to hide nav after 5 seconds
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false)
    }, 5000)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show nav when scrolling up
      if (currentScrollY < lastScrollY.current) {
        setIsVisible(true)
        resetTimer()
      }

      lastScrollY.current = currentScrollY

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // If the top of the element is near the top of the viewport
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Show nav initially and start timer
    setIsVisible(true)
    resetTimer()

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-4 left-0 right-0 mx-auto w-fit z-50"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex items-center gap-1 bg-background/80 backdrop-blur-md border rounded-full p-1.5 shadow-lg">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.href.substring(1)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center justify-center h-10 px-4 rounded-full transition-all ${
                    isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label={item.label}
                  onClick={resetTimer}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </div>

                  {isActive && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-primary"
                      layoutId="navIndicator"
                      transition={{ type: "spring", duration: 0.5 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
