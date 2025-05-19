import { AnimatedBackground } from "@/components/animated-background"
import { AnimatedSection } from "@/components/animated-section"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata = {
  title: "Contact Us | Get in Touch with Our Web Development Team",
  description:
    "Contact our web development agency to discuss how we can help your business expand globally. Reach out via phone, email, or our contact form.",
  openGraph: {
    title: "Contact Expandly | Get in Touch",
    description:
      "Contact our web development agency to discuss how we can help your business expand globally. Reach out via phone, email, or our contact form.",
    url: "https://expandly.site/contact",
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
    title: "Contact Expandly | Get in Touch",
    description:
      "Contact our web development agency to discuss how we can help your business expand globally. Reach out via phone, email, or our contact form.",
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
    "contact",
    "talk",
    "i don't know",
    "help",
  ],
  metadataBase: new URL("https://expandly.site"),
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <AnimatedBackground />
        <div className="container px-4 md:px-6 relative z-10">
          <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Have questions about our services? Ready to start your global expansion? We're here to help.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Contact Information</h2>
                <p className="text-gray-500 md:text-lg">
                  Reach out to us through any of the following channels or fill out the contact form.
                </p>
              </div>
              <div className="grid gap-4 py-4">
                {/* <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-gray-500">123 Web Street, Digital City, WD 12345, United States</p>
                  </div>
                </div> */}
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-500">+91 99924-69408</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-500">expandly.site@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Business Hours</h3>
                    <p className="text-gray-500">Monday - Saturday: 9:00 AM - 5:00 PM IST</p>
                  </div>
                </div>
              </div>
              {/* <div className="space-y-2">
                <h3 className="text-xl font-bold">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://twitter.com" className="text-gray-500 hover:text-primary" aria-label="Twitter">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="https://facebook.com" className="text-gray-500 hover:text-primary" aria-label="Facebook">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://linkedin.com" className="text-gray-500 hover:text-primary" aria-label="LinkedIn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7V5H8v15h4v-8h4v8h4V14a6 6 0 0 0-6-6z"></path>
                    </svg>
                  </a>
                  <a href="https://instagram.com" className="text-gray-500 hover:text-primary" aria-label="Instagram">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div> */}
            </div>
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Send Us a Message</h2>
                <p className="text-gray-500 md:text-lg">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Location</h2>
              <p className="max-w-[600px] text-gray-500 md:text-lg">Visit our office or schedule a virtual meeting.</p>
            </div>
          </div>
          <div className="mt-8 rounded-lg overflow-hidden h-[400px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1619826381244!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>
      </section> */}
    </div>
  )
}
