'use client';


import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/components/globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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
              name: "GlobalWeb Agency",
              image: "https://yourdomain.com/logo.png",
              "@id": "https://yourdomain.com",
              url: "https://yourdomain.com",
              telephone: "+1-555-123-4567",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Web Street",
                addressLocality: "Digital City",
                addressRegion: "WD",
                postalCode: "12345",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.7128,
                longitude: -74.006,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "17:00",
              },
              sameAs: [
                "https://www.facebook.com/globalwebagency",
                "https://www.twitter.com/globalwebagency",
                "https://www.linkedin.com/company/globalwebagency",
                "https://www.instagram.com/globalwebagency",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
      </body>
    </html>
  )
}
