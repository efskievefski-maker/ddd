import Image from "next/image"
import { CtaButton } from "@/components/cta-button"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        {/* Left: copy */}
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl xl:text-6xl">
            Анализ на почвата с лабораторна точност
          </h1>

          <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            TerraScan Pro поставя професионалния анализ на почвата в дланта на ръката ви. Сканирайте и получете препоръки за минути как да подобрите вашата почва.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <CtaButton source="hero-primary" size="lg" showArrow>
              Вземи TerraScan Pro
            </CtaButton>
          </div>
        </div>

        {/* Right: product image */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 -z-10 mx-auto h-72 w-72 self-center rounded-full bg-primary/5 blur-2xl lg:h-96 lg:w-96" />
          <Image
            src="/images/scanner-hero.png"
            alt="TerraScan Pro handheld soil scanner"
            width={520}
            height={520}
            priority
            className="h-auto w-full max-w-md drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
