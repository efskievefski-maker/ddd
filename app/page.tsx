import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ValueGrid } from "@/components/value-grid"
import { ProductFeatures } from "@/components/product-features"
import { ClosingCta } from "@/components/closing-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <ValueGrid />
        <ProductFeatures />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
