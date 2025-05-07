import { Code, Globe, BarChart, Layers, Search, Languages } from "lucide-react"

export function FeatureCards() {
  return (
    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Code className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold">Custom Web Development</h3>
        <p className="text-muted-foreground">
          Tailored websites and web applications designed to meet the specific needs of your global business expansion.
        </p>
      </div>
      
      <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Search className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold">Global SEO Strategy</h3>
        <p className="text-muted-foreground">
          Comprehensive search engine optimization tailored for international markets.
        </p>
      </div>
      <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Languages className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold">Multilingual Content</h3>
        <p className="text-muted-foreground">
          Professional translation and localization services to ensure your message resonates in every market.
        </p>
      </div>
      <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <BarChart className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold">Global Analytics</h3>
        <p className="text-muted-foreground">
          Comprehensive tracking and reporting to understand performance across different international markets.
        </p>
      </div>
      <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Layers className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold">International Compliance</h3>
        <p className="text-muted-foreground">
          Ensuring your digital presence meets legal requirements across different countries and regions.
        </p>
      </div>
    </div>
  )
}
