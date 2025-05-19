"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxBackground() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <motion.div ref={ref} className="absolute inset-0 z-0" style={{ y: backgroundY }}>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-white to-white" />
      <div className="absolute inset-0 opacity-10 bg-grid-pattern" />
    </motion.div>
  )
}
