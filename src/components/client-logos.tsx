import Image from "next/image"

export function ClientLogos() {
  return (
    <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 items-center gap-8 md:grid-cols-4 lg:grid-cols-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex items-center justify-center p-4">
          <Image
            src="/placeholder.svg?height=60&width=120"
            width={120}
            height={60}
            alt={`Client logo ${i + 1}`}
            className="max-h-12 w-auto grayscale transition-all hover:grayscale-0"
          />
        </div>
      ))}
    </div>
  )
}
