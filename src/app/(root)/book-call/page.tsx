import { AnimatedSection } from "@/components/animated-section"
import { BookingForm } from "@/components/booking-form"
import { CalendarDays, Clock, Users, CheckCircle } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import Image from "next/image"

export const metadata = {
  title: "Book a Call | Schedule a Free Consultation",
  description:
    "Book a free consultation call with our web development experts to discuss how we can help your business expand globally.",
  openGraph: {
    title: "Book a Call with GlobalWeb Agency | Free Consultation",
    description:
      "Book a free consultation call with our web development experts to discuss how we can help your business expand globally.",
  },
}

export default function BookCallPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <AnimatedBackground />
        <AnimatedSection className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Book a Free Consultation</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Schedule a call with our experts to discuss your global expansion needs and how we can help.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Booking Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Why Book a Call?</h2>
                <p className="text-gray-500 md:text-lg">
                  Our free consultation calls are designed to understand your business needs and provide tailored advice
                  for your global expansion.
                </p>
              </div>
              <div className="grid gap-4 py-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Personalized Strategy</h3>
                    <p className="text-gray-500">
                      Get expert advice tailored to your specific business and target markets.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">No Obligation</h3>
                    <p className="text-gray-500">Our consultation is completely free with no pressure to commit.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Expert Insights</h3>
                    <p className="text-gray-500">
                      Learn from our experienced team who have helped numerous businesses go global.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Clear Next Steps</h3>
                    <p className="text-gray-500">
                      Walk away with actionable steps to move forward with your global expansion.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <span className="text-gray-500">Available all days of the week</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-gray-500">30-minute consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-gray-500">Meet with our senior web strategists</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Schedule Your Call</h2>
                <p className="text-gray-500 md:text-lg">
                  Select a date and time that works for you, and we'll confirm your booking via email.
                </p>
              </div>
              <BookingForm />
            </div>
          </AnimatedSection>
        </div>
    </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">What Clients Say About Our Consultations</h2>
              <p className="max-w-[600px] text-gray-500 md:text-lg">
                Hear from businesses who started their global journey with a free consultation call.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full">
                  <a href="https://tryandhauls.shop" className="font-bold" target="_blank" rel="noopener noreferrer">
                    <Image
                      width={50}
                      height={50}
                      alt={`tryandhauls portrait`}
                      src={`/images/testimonials/TryAndHauls.png`}
                      className="rounded-full object-cover"
                    />
                  </a>
                </div>
                <div>
                  <a href="https://tryandhauls.shop" target="_blank">
                  <h3 className="font-bold">Vansh Arora</h3>
                  <p className="text-sm text-gray-500">Founder, TryAndHauls</p>
                  </a>
                </div>
              </div>
              <p className="text-gray-500 italic">
                "The consultation call was incredibly valuable. The team took the time to understand our business and
                provided clear, actionable advice for our fashion retail brand. We're now successfully operating all
                over the India and planning to expand further."
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-bold">K</span>
                </div>
                <div>
                  <h3 className="font-bold">Karan Singh</h3>
                  <p className="text-sm text-gray-500">Founder, SEPL</p>
                </div>
              </div>
              <p className="text-gray-500 italic">
                "I was hesitant about expanding my small craft business internationally, but after the consultation
                call, I felt confident taking the next steps. Their expertise in e-commerce and international shipping
                was exactly what I needed."
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
              <p className="max-w-[600px] text-gray-500 md:text-lg">Common questions about our consultation calls.</p>
            </div>
          </AnimatedSection>
          <div className="mx-auto max-w-3xl space-y-4 py-8">
            <AnimatedSection className="rounded-lg border p-4">
              <h3 className="text-lg font-bold">How long is the consultation call?</h3>
              <p className="text-gray-500 mt-2">
                Our standard consultation calls are 30 minutes long. If we need more time, we can schedule a follow-up
                call.
              </p>
            </AnimatedSection>
            <AnimatedSection className="rounded-lg border p-4">
              <h3 className="text-lg font-bold">Is there any cost or obligation?</h3>
              <p className="text-gray-500 mt-2">
                No, our consultation calls are completely free with no obligation to purchase any services.
              </p>
            </AnimatedSection>
            <AnimatedSection className="rounded-lg border p-4">
              <h3 className="text-lg font-bold">Who will I be speaking with?</h3>
              <p className="text-gray-500 mt-2">
                You'll speak with one of our senior web strategists who specializes in international business expansion.
              </p>
            </AnimatedSection>
            <AnimatedSection className="rounded-lg border p-4">
              <h3 className="text-lg font-bold">What should I prepare for the call?</h3>
              <p className="text-gray-500 mt-2">
                It's helpful to have a basic understanding of your business goals, target markets, and any specific
                challenges you're facing. But don't worry if you're not sure - we're here to help you figure it out.
              </p>
            </AnimatedSection>
            <AnimatedSection className="rounded-lg border p-4">
              <h3 className="text-lg font-bold">What happens after the call?</h3>
              <p className="text-gray-500 mt-2">
                After the call, we'll send you a summary of our discussion and recommendations. If you'd like to proceed
                with our services, we'll provide a detailed proposal.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
