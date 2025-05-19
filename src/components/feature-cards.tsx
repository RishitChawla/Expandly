import { Code, Globe, BarChart, Layers, Search, Languages, Rocket, Smartphone } from "lucide-react"
import { AnimatedFeatureCard } from "@/components/animated-feature-card"

export function FeatureCards() {
  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Web Development",
      description:
        "Tailored websites and web applications designed to meet the specific needs of your global business expansion.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "International E-commerce",
      description: "Multi-currency, multi-language online stores with international shipping and payment solutions.",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Global SEO Strategy",
      description:
        "Comprehensive search engine optimization tailored for international markets and multiple languages.",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Fast Loading Performance",
      description:
        "Optimized assets, caching strategies, and code splitting for lightning-fast load times across all regions.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile-First Design",
      description:
        "Seamless, intuitive experiences crafted for every screen size.",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "International Compliance",
      description: "Ensuring your digital presence meets legal requirements across different countries and regions.",
    },
  ]

  return (
    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <AnimatedFeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          index={index}
        />
      ))}
    </div>
  )
}
