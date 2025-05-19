"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface AnimatedTestimonialProps {
  children: ReactNode
  index: number
}

export function AnimatedTestimonial({ children, index }: AnimatedTestimonialProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.15 * index,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
    >
      {children}
    </motion.div>
  )
}
