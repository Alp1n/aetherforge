"use client"

import React from "react"
import { useEffect } from "react"
import { motion, useAnimation, type Variant } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Animation variants for different elements
export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

// Custom hook for scroll animations
export function useScrollAnimation(threshold = 0.1) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return { ref, controls, inView }
}

// Animated section component
interface AnimatedSectionProps {
  children: React.ReactNode
  variants?: {
    hidden: Variant
    visible: Variant
  }
  className?: string
  delay?: number
}

export function AnimatedSection({ children, variants = fadeIn, className = "", delay = 0 }: AnimatedSectionProps) {
  const { ref, controls } = useScrollAnimation()

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} custom={delay} className={className}>
      {children}
    </motion.div>
  )
}

// Staggered container for multiple animated children
interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  delayChildren?: number
  staggerDelay?: number
}

export function StaggerContainer({
  children,
  className = "",
  delayChildren = 0,
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const { ref, controls } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren,
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animated item for use within StaggerContainer
interface AnimatedItemProps {
  children: React.ReactNode
  variants?: {
    hidden: Variant
    visible: Variant
  }
  className?: string
  delay?: number
}

export function AnimatedItem({ children, variants = fadeIn, className = "", delay = 0 }: AnimatedItemProps) {
  return (
    <motion.div variants={variants} custom={delay} className={className}>
      {children}
    </motion.div>
  )
}

