"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlaceholderImage } from "@/components/placeholder-image"

export function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Initialize transform values with default values
  const [scale, setScale] = useState(1.5)
  const [opacity, setOpacity] = useState(0)
  const [contentOpacity, setContentOpacity] = useState(0)
  const [contentY, setContentY] = useState(100)
  const [globeY, setGlobeY] = useState(0)
  const [globeRotate, setGlobeRotate] = useState(0)
  const [backgroundOpacity, setBackgroundOpacity] = useState(0)

  useEffect(() => {
    setIsMounted(true)

    // Update transform values when scrollYProgress changes
    scrollYProgress.onChange((value) => {
      setScale(1.5 + (1 - 1.5) * Math.min(value * 2, 1)) // Map 0-0.5 to 1.5-1
      setOpacity(Math.min(value * 5, 0.5)) // Map 0-0.2 to 0-0.5
      if (value > 0.2) {
        setOpacity(Math.min((value - 0.2) * (1 / 0.1) + 0.5, 1)) // Map 0.2-0.3 to 0.5-1
      }
      setContentOpacity(Math.min((value - 0.1) * 10, 1)) // Map 0.1-0.3 to 0-1
      setContentY(100 - Math.min((value - 0.1) * 500, 100)) // Map 0.1-0.3 to 100-0
      setGlobeY(0 - Math.min(value * 100, 50)) // Map 0-0.5 to 0--50
      setGlobeRotate(Math.min(value * 720, 360)) // Map 0-0.5 to 0-360
      setBackgroundOpacity(Math.min(value * 0.4, 0.2)) // Map 0-0.5 to 0-0.2
    })
  }, [scrollYProgress])

  if (!isMounted) {
    return <div className="h-screen bg-gradient-to-b from-primary/5 to-primary/10" />
  }

  return (
    <div
      ref={containerRef}
      className="relative h-[200vh] overflow-hidden bg-gradient-to-b from-primary/5 via-primary/10 to-white"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background elements */}
        <motion.div className="absolute inset-0 bg-grid-pattern opacity-20" style={{ opacity: backgroundOpacity }} />

        {/* Globe animation */}
        <motion.div
          className="absolute"
          style={{
            scale,
            y: globeY,
            rotate: globeRotate,
            opacity: (() => {
              if (scrollYProgress.get() <= 0.1) return 1 - scrollYProgress.get() * 2
              if (scrollYProgress.get() <= 0.3) return 0.8 - (scrollYProgress.get() - 0.1) * 4
              return 0
            })(),
          }}
        >
          <div className="relative flex items-center justify-center">
            <PlaceholderImage
              width={800}
              height={800}
              text="Global Web"
              isCircle={true}
              bgColor="rgba(89, 193, 189, 0.2)"
              textColor="rgba(89, 193, 189, 0.8)"
              className="flex items-center justify-center"
            >
              <Globe className="h-32 w-32 text-primary/60" />
            </PlaceholderImage>
          </div>
        </motion.div>

        {/* Overlay gradient */}
        <motion.div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" style={{ opacity }} />

        {/* Content that fades in */}
        <div className="container relative z-10 px-4 md:px-6">
          <motion.div
            className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"
            style={{ opacity: contentOpacity, y: contentY }}
          >
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-2"
                >
                  Web Development Agency
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                >
                  Take Your Business Global with Expert Web Development
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
                >
                  We help small and medium businesses expand globally through custom web solutions, SEO optimization,
                  and digital strategy - all at affordable prices that scale with your business.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-col gap-2 min-[400px]:flex-row"
              >
                <Link href="/book-call">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                    Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    View Pricing Plans
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-wrap items-center gap-4 text-sm mt-2"
              >
                <div className="flex items-center">
                  <CheckCircle className="mr-1 h-4 w-4 text-primary" />
                  <span>SEO Optimized</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-1 h-4 w-4 text-primary" />
                  <span>Mobile Responsive</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-1 h-4 w-4 text-primary" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-1 h-4 w-4 text-primary" />
                  <span>Affordable Pricing</span>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary to-primary/50 opacity-30 blur-lg"></div>
                <PlaceholderImage
                  width={550}
                  height={550}
                  text="Web Development Team"
                  className="relative rounded-lg shadow-xl"
                  bgColor="#f8f9fa"
                  textColor="#6c757d"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
