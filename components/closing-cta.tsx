import { CtaButton } from "@/components/cta-button"

export function ClosingCta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-20 text-center lg:py-24">
        <h2 className="text-balance text-3xl font-bold tracking-tight lg:text-4xl">
          Спрете да чакате лабораторията. Сканирайте сега.
        </h2>

        <CtaButton source="closing-banner" size="lg" showArrow>
          Вземи TerraScan Pro
        </CtaButton>
      </div>
    </section>
  )
}
