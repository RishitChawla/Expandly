import Link from "next/link"
import { Expand, Globe, Globe2, Map, Network, Rocket, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Testimonials } from "@/components/testimonials"
import { ClientLogos } from "@/components/client-logos"
import { FeatureCards } from "@/components/feature-cards"
import { AnimatedSection } from "@/components/animated-section"
import { FloatingElements } from "@/components/floating-elements"
import { ParallaxBackground } from "@/components/parallax-background"
import { AnimatedBackground } from "@/components/animated-background"
import { ArrowRight } from "lucide-react"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { HeroAnimation } from "@/components/hero-animation"

import dynamic from 'next/dynamic'
import { CTA } from "@/components/CTA"


export const metadata = {
  title: "Expandly | From Local to Global",
  description:
    "Expandly helps small businesses establish a powerful digital presence and scale globally with stunning websites and smart strategies.",
  openGraph: {
    title: "Expandly | Empowering Small Businesses to Go Global",
    description:
      "We craft fast, beautiful websites and digital tools to help small and medium businesses break barriers and reach international markets.",
    url: "https://expandly.site",
    siteName: "Expandly",
    images: [
      {
        url: "https://expandly.site/images/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Expandly — From Local to Global",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expandly | From Local to Global",
    description:
      "Helping small businesses build stunning websites and grow globally through smart digital strategies.",
    images: ["https://expandly.site/images/assets/og-image.png"],
    creator: "@expandly",
  },
  keywords: [
    "Expandly",
    "web development",
    "business website",
    "digital strategy",
    "global web agency",
    "SMB websites",
    "affordable websites",
    "web development agency",
    "expand business",
    "make website",
    "global expand",
    "agency",
    "affordable",
    "cheap",
    "quality"
  ],
  metadataBase: new URL("https://expandly.site"),
}


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-6 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
        <AnimatedBackground />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-2">
                  Web Development Agency
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Take Your Business Global with Expert Web Development
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  We help small and medium businesses expand globally through custom web solutions, SEO optimization,
                  and digital strategy - all at affordable prices that scale with your business.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
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
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm mt-2">
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
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary to-primary/50 opacity-30 blur-lg "></div>
                <Image
                  src="/images/hero.png"
                  width={550}
                  height={550}
                  alt="Web development team working on global solutions"
                  className="relative rounded-lg object-cover shadow-xl"
                  priority
                />
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <ParallaxBackground />
        <FloatingElements />
        <div className="container px-4 md:px-6 relative z-10">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Services</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Web Solutions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer end-to-end web development services to help your business establish a powerful online presence
                and reach global markets.
              </p>
            </div>
          </AnimatedSection>
          <FeatureCards />
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <FloatingElements />
        <div className="container px-4 md:px-6 relative z-10">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Process</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How We Take You Global</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our proven methodology ensures your business successfully expands into international markets with a
                strong digital foundation.
              </p>
            </div>
          </AnimatedSection>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <AnimatedSection
              delay={0.1}
              className="flex flex-col justify-center space-y-4 rounded-lg border bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">1. Discovery & Strategy</h3>
              <p className="text-gray-500">
                We analyze your business needs, target markets, and competition to develop a tailored global expansion
                strategy.
              </p>
            </AnimatedSection>
            <AnimatedSection
              delay={0.2}
              className="flex flex-col justify-center space-y-4 rounded-lg border bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">2. Design & Development</h3>
              <p className="text-gray-500">
                Our team creates a culturally-appropriate, SEO-optimized website with multilingual support and localized
                SEO-optimized website with multilingual support and localized content.
              </p>
            </AnimatedSection>
            <AnimatedSection
              delay={0.3}
              className="flex flex-col justify-center space-y-4 rounded-lg border bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">3. Launch & Growth</h3>
              <p className="text-gray-500">
                We deploy your solution with ongoing support, analytics, and optimization to ensure continuous
                international growth.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <FloatingElements />
        <div className="container px-4 md:px-6 relative z-10">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from businesses we've helped expand globally through our web development services.
              </p>
            </div>
          </AnimatedSection>
          <Testimonials />
        </div>
      </section>

      {/* Client Logos */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <FloatingElements />
        <div className="container px-4 md:px-6 relative z-10">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Technologies We Use</h2>
            </div>
          </AnimatedSection>
          <ClientLogos />
        </div>
      </section>
    
      {/* CTA Section */}
      <CTA />
    </div>
  )
}
