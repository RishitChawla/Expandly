import Image from "next/image"

export function Testimonials() {
  return (
    <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
      <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
        <div className="flex items-center space-x-4">
          <Image
            src="/placeholder.svg?height=50&width=50"
            width={50}
            height={50}
            alt="Client portrait"
            className="rounded-full"
          />
          <div>
            <h3 className="font-bold">Sarah Johnson</h3>
            <p className="text-sm text-muted-foreground">CEO, EcoGoods</p>
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
        <blockquote className="text-muted-foreground">
          "GlobalWeb Agency transformed our small eco-friendly product line into an international brand. Their
          multilingual e-commerce solution helped us expand to 5 European countries in just 8 months."
        </blockquote>
      </div>
      <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
        <div className="flex items-center space-x-4">
          <Image
            src="/placeholder.svg?height=50&width=50"
            width={50}
            height={50}
            alt="Client portrait"
            className="rounded-full"
          />
          <div>
            <h3 className="font-bold">David Chen</h3>
            <p className="text-sm text-muted-foreground">Founder, TechSolutions</p>
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
        <blockquote className="text-muted-foreground">
          "The SEO optimization GlobalWeb implemented for our SaaS platform increased our international organic traffic
          by 215% in just 6 months. Their understanding of global markets is unmatched."
        </blockquote>
      </div>
      <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
        <div className="flex items-center space-x-4">
          <Image
            src="/placeholder.svg?height=50&width=50"
            width={50}
            height={50}
            alt="Client portrait"
            className="rounded-full"
          />
          <div>
            <h3 className="font-bold">Maria Rodriguez</h3>
            <p className="text-sm text-muted-foreground">Director, Artisan Crafts</p>
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
        <blockquote className="text-muted-foreground">
          "As a small handmade goods business, I never thought global expansion was possible. GlobalWeb created a
          beautiful, culturally-sensitive website that now sells our products to customers in 12 countries."
        </blockquote>
      </div>
    </div>
  )
}
