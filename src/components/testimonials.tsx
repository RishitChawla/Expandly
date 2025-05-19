import { AnimatedTestimonial } from "@/components/animated-testimonial"
import { PlaceholderImage } from "@/components/placeholder-image"
import Link from "next/link"
import Image from "next/image"

export function Testimonials() {
  const testimonials = [
    {
      name: "TryAndHauls",
      role: "Founder, Online Fashion Retail Brand",
      quote:
        "They understood the aesthetics of fashion and combined it beautifully with powerful tech. From an elegant UI to fast-loading pages and integrated payment systems — everything was top-notch. Within 3 months of relaunching, our bounce rate dropped by 35%, and conversions increased by 60%.",
    },
   
  ]

  return (
    <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
      {testimonials.map((testimonial, index) => (
        <AnimatedTestimonial key={index} index={index}>
          <div className="flex items-center space-x-4">
            <a href="https://tryandhauls.shop" className="font-bold" target="_blank" rel="noopener noreferrer">
              <Image
                width={50}
                height={50}
                alt={`${testimonial.name} portrait`}
                src={`/images/testimonials/${testimonial.name}.png`}
                className="rounded-full object-cover"
              />
            </a>
            <div>
              <a href="https://tryandhauls.shop" className="font-bold" target="_blank" rel="noopener noreferrer">{testimonial.name}</a>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>
          <blockquote className="text-muted-foreground">"{testimonial.quote}"</blockquote>
        </AnimatedTestimonial>
      ))}
    </div>
  )
}
