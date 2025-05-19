'use client';


import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/components/globals.css"
import { Toaster } from "sonner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Expandly",
              image: "https://expandly.site/images/assets/og-image.png",
              "@id": "https://expandly.site",
              url: "https://expandly.site",
              telephone: "+91 99924 69408",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "17:00",
              },
              // sameAs: [
              //   "https://www.facebook.com/expandly",
              //   "https://www.twitter.com/expandly",
              //   "https://www.linkedin.com/company/expandly",
              //   "https://www.instagram.com/expandly",
              // ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
          <div className="relative flex min-h-screen flex-col">
            <Toaster />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
      </body>
    </html>
  )
}
