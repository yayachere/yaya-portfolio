"use client"

import { type ReactNode, useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

interface MotionWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function MotionWrapper({ children, className, delay = 0, direction = "up" }: MotionWrapperProps) {
  const [isMounted, setIsMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className={className}>{children}</div>
  }

  // If user prefers reduced motion, we'll just fade in without any direction
  const shouldReduceMotion = prefersReducedMotion || direction === "none"

  const getDirectionOffset = () => {
    if (shouldReduceMotion) return 0
    switch (direction) {
      case "up":
        return 50
      case "down":
        return -50
      case "left":
        return 50
      case "right":
        return -50
      default:
        return 0
    }
  }

  const getXOffset = () => {
    if (shouldReduceMotion) return 0
    return ["left", "right"].includes(direction) ? getDirectionOffset() : 0
  }

  const getYOffset = () => {
    if (shouldReduceMotion) return 0
    return ["up", "down"].includes(direction) ? getDirectionOffset() : 0
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: getXOffset(), y: getYOffset() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.21, 0.45, 0.46, 0.99],
      }}
    >
      {children}
    </motion.div>
  )
}
