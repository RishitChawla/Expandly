import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatedSection } from "./animated-section"

export function CTA() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
        <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Work Together?</h2>
                <p className="max-w-[600px] text-primary-foreground md:text-xl">
                    Let's discuss how we can help your business expand globally.
                </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/book-call">
                    <Button size="lg" variant="secondary" className="bg-white text-primary hover:primary-foreground/10">
                    Book a Free Consultation
                    </Button>
                </Link>
                <Link href="/contact">
                    <Button size="lg" variant="outline" className="border-white text-primary hover:bg-primary-foreground/10">
                    Contact Our Team
                    </Button>
                </Link>
                </div>
            </AnimatedSection>
        </div>
      </section>
    )
}