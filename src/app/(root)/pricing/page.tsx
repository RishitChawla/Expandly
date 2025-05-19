import Link from "next/link"
import { Check, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AnimatedSection } from "@/components/animated-section"
import { CTA } from "@/components/CTA"
import { AnimatedBackground } from "@/components/animated-background"

export const metadata = {
  title: "Pricing Plans | Affordable Web Development Solutions",
  description:
    "Explore our affordable pricing plans for web development services. From basic landing pages to full e-commerce solutions, we have options for businesses of all sizes.",
  openGraph: {
    title: "Pricing Plans | Expandly",
    description:
      "Explore our affordable pricing plans for web development services. From basic landing pages to full e-commerce solutions, we have options for businesses of all sizes.",
    url: "https://expandly.site/pricing",
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
    title: "Pricing Plans | Expandly",
    description:
      "Explore our affordable pricing plans for web development services. From basic landing pages to full e-commerce solutions, we have options for businesses of all sizes.",
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
    "pricing",
    "affordable",
    "cheap",
    "quality",
  ],
  metadataBase: new URL("https://expandly.site"),
}

function FeatureItem({ feature, included = true, tooltip }: { feature: string; included?: boolean; tooltip?: string }) {
  return (
    <div className="flex items-center">
      {included ? (
        <Check className="mr-2 h-4 w-4 text-primary" />
      ) : (
        <div className="mr-2 h-4 w-4 rounded-full border border-gray-200" />
      )}
      <span className="text-sm text-gray-700">
        {feature}
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="ml-1 inline h-3.5 w-3.5 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="w-[200px] text-xs">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </span>
    </div>
  )
}

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <AnimatedBackground />
        <div className="container px-4 md:px-6">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Affordable Web Solutions</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Choose the perfect plan for your business needs. All plans include our expert support and commitment to
                quality.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {/* Basic Plan */}
            <Card className="flex flex-col border-2 border-gray-200 transition-all hover:border-primary/50 hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Basic</CardTitle>
                <CardDescription>Perfect for small businesses just starting out</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">₹2000</span>
                  <span className="text-gray-500"> one-time</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-2">
                  <FeatureItem feature="Single landing page" />
                  <FeatureItem feature="Mobile responsive design" />
                  <FeatureItem feature="Custom Design Template" />
                  <FeatureItem feature="Contact form" />
                  <FeatureItem feature="Basic SEO setup" />
                  <FeatureItem feature="Social media links" />
                  <FeatureItem feature="Custom domain setup" tooltip="Domain purchase not included" />
                  <FeatureItem feature="1 revision" />
                  {/* <FeatureItem feature="30 days support" /> */}
                  {/* <FeatureItem feature="Multiple pages" included={false} />
                  <FeatureItem feature="Content management" included={false} /> */}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/book-call" className="w-full">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Intermediate Plan */}
            <Card className="flex flex-col border-2 border-gray-200 transition-all hover:border-primary/50 hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Intermediate</CardTitle>
                <CardDescription>For growing businesses needing more features</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">₹5000</span>
                  <span className="text-gray-500"> one-time</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-2">
                  <FeatureItem feature="Up to 5 pages" />
                  <FeatureItem feature="Mobile responsive design" />
                  <FeatureItem feature="Contact form" />
                  <FeatureItem feature="Advanced SEO setup" />
                  <FeatureItem feature="Social media integration" />
                  <FeatureItem feature="Custom domain setup" tooltip="Domain purchase not included" />
                  <FeatureItem feature="Google Analytics" />
                  <FeatureItem feature="Basic content management" />
                  <FeatureItem feature="Google Maps integration" />
                  <FeatureItem feature="Blog functionality" />
                  <FeatureItem feature="2 revisions" />
                  <FeatureItem feature="30 days support" />
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/book-call" className="w-full">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Commercial Plan */}
            <Card className="flex flex-col border-2 border-primary transition-all hover:shadow-md relative">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Commercial</CardTitle>
                <CardDescription>Complete solution for established businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">₹10,000</span>
                  <span className="text-gray-500"> one-time</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-2">
                  <FeatureItem feature="Up to 10 pages" />
                  <FeatureItem feature="Premium responsive design" />
                  <FeatureItem feature="Custom UI/UX design" />
                  <FeatureItem feature="Booking/appointment system" />
                  <FeatureItem feature="Advanced contact forms" />
                  <FeatureItem feature="Comprehensive SEO package" />
                  <FeatureItem feature="Social media integration" />
                  <FeatureItem feature="Custom domain setup" tooltip="Domain purchase not included" />
                  <FeatureItem feature="Advanced analytics" />
                  <FeatureItem feature="Full content management" />
                  <FeatureItem feature="Newsletter integration" />
                  <FeatureItem feature="Google Maps integration" />
                  <FeatureItem feature="Advanced Admin panel" />
                  <FeatureItem feature="3 revisions" />
                  <FeatureItem feature="60 days support" />
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/book-call" className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* E-commerce Plan */}
            <Card className="flex flex-col border-2 border-gray-200 transition-all hover:border-primary/50 hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">E-commerce</CardTitle>
                <CardDescription>Full online store with global selling capabilities</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">₹18,000</span>
                  <span className="text-gray-500"> one-time</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-2">
                  <FeatureItem feature="Full e-commerce website" />
                  <FeatureItem feature="Unlimited products" />
                  <FeatureItem feature="Payment gateway integration" />
                  <FeatureItem feature="Inventory management" />
                  <FeatureItem feature="Admin panel for product management" />                  
                  <FeatureItem feature="Product reviews & ratings" />
                  <FeatureItem feature="Discount coupons" />
                  <FeatureItem feature="User account & order history" />
                  <FeatureItem feature="Email confirmations" />
                  <FeatureItem feature="Order tracking" />
                  <FeatureItem feature="International shipping options" />
                  <FeatureItem feature="SEO & social sharing" />
                  <FeatureItem feature="Basic performance/security optimization" />
                  <FeatureItem feature="3 revisions" />
                  <FeatureItem feature="3 months support" />
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/book-call" className="w-full">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Custom Plan */}
            <Card className="flex flex-col border-2 border-gray-200 transition-all hover:border-primary/50 hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Custom</CardTitle>
                <CardDescription>Tailored solution for unique business needs</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">Custom</span>
                  <span className="text-gray-500"> pricing</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-2">
                  <FeatureItem feature="Unlimited pages" />
                  <FeatureItem feature="Custom design & functionality" />
                  <FeatureItem feature="Advanced integrations" />
                  <FeatureItem feature="Enterprise-level solutions" />
                  <FeatureItem feature="Multi-language support" />
                  <FeatureItem feature="Custom API development" />
                  <FeatureItem feature="Dedicated project manager" />
                  <FeatureItem feature="Priority support" />
                  <FeatureItem feature="Ongoing maintenance options" />
                  <FeatureItem feature="Training & documentation" />
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/book-call" className="w-full">
                  <Button className="w-full">Book a Consultation</Button>
                </Link>
              </CardFooter>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
              <p className="max-w-[600px] text-gray-500 md:text-lg">Common questions about our pricing and services.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection className="mx-auto max-w-3xl space-y-4 py-8">
            <AnimatedSection className="rounded-lg border p-4">
              <h3 className="text-lg font-bold">Are there any hidden costs?</h3>
              <p className="text-gray-500 mt-2">
                No, our pricing is transparent. The price you see is what you pay. However, third-party services like
                domain registration, hosting, premium plugins, or stock photos may incur additional costs, which we'll clearly
                communicate before any purchase.
              </p>
            </AnimatedSection>
            <AnimatedSection className="rounded-lg border p-4">
              <h3 className="text-lg font-bold">Do you offer payment plans?</h3>
              <p className="text-gray-500 mt-2">
                Yes, we offer flexible payment plans for all our packages. Typically, we require a 50% deposit to begin
                work, with the remaining balance due upon completion. For larger projects, we can arrange
                milestone-based payments.
              </p>
            </AnimatedSection>
            <AnimatedSection className="rounded-lg border p-4">
              <h3 className="text-lg font-bold">What's included in the support period?</h3>
              <p className="text-gray-500 mt-2">
                During the support period, we'll address any bugs, make minor content updates, and provide guidance on
                using your website. Major feature additions or redesigns are not included but can be arranged at
                discounted rates for existing clients.
              </p>
            </AnimatedSection>
            <AnimatedSection className="rounded-lg border p-4">
              <h3 className="text-lg font-bold">How long does it take to build my website?</h3>
              <p className="text-gray-500 mt-2">
                Timeframes vary by project complexity. Basic sites typically take 1-2 week, Intermediate 2-3 weeks,
                Commercial 5-8 weeks, and E-commerce 6-10 weeks. Custom projects will have timelines established during
                the consultation phase.
              </p>
            </AnimatedSection>
            <AnimatedSection className="rounded-lg border p-4">
              <h3 className="text-lg font-bold">Can I upgrade my plan later?</h3>
              <p className="text-gray-500 mt-2">
                We've designed our packages to be scalable. You can start with a basic package and upgrade as your
                business grows. We'll apply a portion of your initial investment toward the upgrade.
              </p>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  )
}
