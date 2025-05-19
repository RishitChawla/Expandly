import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TeamMembers } from "@/components/team-members"
import { CTA } from "@/components/CTA"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedBackground } from "@/components/animated-background"

export const metadata = {
  title: "About Us | Our Web Development Agency Story",
  description:
    "Learn about our web development agency's mission to help small and medium businesses expand globally through innovative digital solutions.",
  openGraph: {
    title: "About Expandly | Our Story and Mission",
    description:
      "Learn about our web development agency's mission to help small and medium businesses expand globally through innovative digital solutions.",
    url: "https://expandly.site/about",
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
    title: "About Expandly | Our Story and Mission",
    description:
      "Learn about our web development agency's mission to help small and medium businesses expand globally through innovative digital solutions.",
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
    "about",
  ],
  metadataBase: new URL("https://expandly.site"),
}


export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <AnimatedBackground />
        <div className="container px-4 md:px-6">
          <AnimatedSection className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Us</h1>
                <h4 className="font-bold tracking-tighter">Our Story</h4>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  At Expandly, we believe that every small business deserves a global stage. Founded in 2024, Expandly 
                  began with one clear vision: To empower small and medium businesses (SMBs) to break digital barriers 
                  and grow beyond borders. What started as a personal mission has grown into a full-fledged digital 
                  service dedicated to building powerful websites, scalable ecommerce platforms, and global-ready digital
                  strategies.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">  
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/images/test-hero.png"
                    width={550}
                    height={550}
                    alt="A collection of abstract doodle elements representing creativity and the genesis of ideas,
                    symbolizing the inception of Expandly."
                    className="relative rounded-lg object-cover"
                    priority
                  />
                </div>
              </div>  
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center order-2 lg:order-1">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/images/about/mission.png"
                    width={550}
                    height={550}
                    alt="A set of creative doodle icons illustrating various tools and symbols, reflecting Expandly's mission 
                    to empower businesses through digital solutions."
                    className="relative rounded-lg object-cover shadow-xl"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Our Mission</div>
                <h2 className="text-3xl font-bold tracking-tighter">From Local to Global</h2>
                <p className="text-gray-500 md:text-lg">
                  Our mission is simple:
                </p>
                <p className="text-gray-500 md:text-lg">
                  To make global growth accessible to local businesses.
                </p>
                <p className="text-gray-500 md:text-lg">
                  We do this by offering tailored web development services, multilingual support, cross-border ecommerce 
                  setups, and digital strategies that make your business discoverable and relevant in any market.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Our Values</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Drives Us</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our core values shape everything we do and how we serve our clients.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Global Perspective</h3>
              <p className="text-gray-500">
                We design with the world in mind—from language localization to international compliance.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Technical Excellence</h3>
              <p className="text-gray-500">
                We maintain the highest standards of web development, constantly evolving our skills to deliver
                cutting-edge solutions.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Client Partnership</h3>
              <p className="text-gray-500">
                We see ourselves as growth partners, not just service providers, committed to your long-term
                international success.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm"></div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Impact</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Since our inception, we've helped businesses from various industries—retail, education, health, and 
                more—establish their digital footprint across countries. We’re proud to see local products 
                now reaching international customers through platforms we’ve helped build.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      

      {/* Team Section */}
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Our Team</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet the Experts</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our diverse team brings together expertise from around the world to help your business succeed globally.
              </p>
            </div>
          </div>
          <TeamMembers />
        </div>
      </section> */}

      {/* CTA Section */}
      <CTA />
    </div>
  )
}
