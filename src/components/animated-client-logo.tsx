"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

interface AnimatedClientLogoProps {
  src: string
  alt: string
  index: number
}

export function AnimatedClientLogo({ src, alt, index }: AnimatedClientLogoProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.1 * index,
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
      className="flex items-center justify-center p-4"
    >
      <Image
        src={src || "/placeholder.svg"}
        width={120}
        height={60}
        alt={alt}
        className="max-h-12 w-auto grayscale transition-all hover:grayscale-0"
      />
    </motion.div>
  )
}
