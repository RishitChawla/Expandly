"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function FloatingElements() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const elements = [
    { id: 1, x: "10%", y: "20%", size: 40, delay: 0, duration: 8 },
    { id: 2, x: "85%", y: "15%", size: 25, delay: 1, duration: 10 },
    { id: 3, x: "70%", y: "70%", size: 35, delay: 2, duration: 9 },
    { id: 4, x: "20%", y: "80%", size: 30, delay: 3, duration: 11 },
    { id: 5, x: "40%", y: "30%", size: 20, delay: 4, duration: 7 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full bg-primary/10 backdrop-blur-md"
          style={{
            left: element.x,
            top: element.y,
            width: element.size,
            height: element.size,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: element.duration,
            delay: element.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
