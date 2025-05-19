import { PlaceholderImage } from "@/components/placeholder-image"
import Image from "next/image"

export function ClientLogos() {
  const logoNames = ["React", "NextJs", "Django", "HTML", "JavaScript", "TailwindCSS", "AWS", "Vercel", "PostgreSQL", "ShadCN", "Razorpay", "NextAuth"]

  return (
    <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 items-center gap-8 md:grid-cols-4 lg:grid-cols-6">
      {logoNames.map((name, index) => (
        <div key={index} className="flex items-center justify-center p-4">
          <Image
            src={`/images/technologies-icon/${name}.png`}
            width={120}
            height={60}
            alt={`${name} logo`}
            className="max-h-12 w-auto grayscale transition-all hover:grayscale-0"
          />
        </div>
      ))}
    </div>
  )
}
