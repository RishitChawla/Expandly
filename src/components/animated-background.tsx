"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!theme || !canvasRef.current) return // Wait for the theme and canvas to be set
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return // Early return if ctx is null

    // Set canvas dimensions
    const resizeCanvas = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 0.8 // 80% of viewport height
    }

    // Initialize canvas size
    resizeCanvas()

    // Add resize listener
    window.addEventListener("resize", resizeCanvas)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor(x: number, y: number, size: number, speedX: number, speedY: number, color: string) {
        this.x = x
        this.y = y
        this.size = size
        this.speedX = speedX
        this.speedY = speedY
        this.color = color
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Create particles
    const particleCount = Math.min(50, Math.floor(window.innerWidth / 20)) // Responsive particle count
    const particles: Particle[] = []

    // Determine colors based on theme
    const isDark = theme === "dark"
    const primaryColor = isDark ? "rgba(89, 193, 189, 0.7)" : "rgba(89, 193, 189, 0.5)"
    const secondaryColor = isDark ? "rgba(89, 193, 189, 0.4)" : "rgba(89, 193, 189, 0.3)"
    const tertiaryColor = isDark ? "rgba(89, 193, 189, 0.2)" : "rgba(89, 193, 189, 0.15)"

    const colors = [primaryColor, secondaryColor, tertiaryColor]

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 5 + 1
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const speedX = (Math.random() - 0.5) * 0.5
      const speedY = (Math.random() - 0.5) * 0.5
      const color = colors[Math.floor(Math.random() * colors.length)]

      particles.push(new Particle(x, y, size, speedX, speedY, color))
    }

    // Connect particles with lines if they're close enough
    function connectParticles() {
      if (!ctx) return

      const maxDistance = canvas.width > 768 ? 150 : 100

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(89, 193, 189, ${0.1 * (1 - distance / maxDistance)})`
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, isDark ? "#111" : "#ffffff")
      gradient.addColorStop(1, isDark ? "#1a1a1a" : "#f8f9fa")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      connectParticles()
      requestAnimationFrame(animate)
    }

    animate()

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme])

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-[80vh] -z-10" style={{ pointerEvents: "none" }} />
  )
}
