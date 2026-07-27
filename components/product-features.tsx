import {
  TrendingUp,
  Leaf,
  AlertCircle,
  Droplets,
  Zap,
  Gauge,
} from "lucide-react"

export function ProductFeatures() {
  return (
    <section id="about" className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Main intro text */}
        <div className="mb-16 max-w-3xl">
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Интелигентен анализ и мониторинг на почвата
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Устройството осигурява интелигентен анализ и мониторинг на почвата за нуждите на прецизното земеделие. Съчетавайки иновативен хардуер и софтуерна платформа, системата използва изкуствен интелект (AI), за да предостави на производителите точни данни и препоръки за оптимизиране на добива.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* AI Recommendations */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-primary">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Gauge className="size-5" />
                </div>
                AI препоръки
              </h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Въз основа на събраните показатели, изкуственият интелект предоставя:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <TrendingUp className="size-4" />
                  </span>
                  <span className="text-base leading-relaxed text-foreground">
                    Прогноза за очакван добив
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Leaf className="size-4" />
                  </span>
                  <span className="text-base leading-relaxed text-foreground">
                    Препоръки за подходящи торове и добавки
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <AlertCircle className="size-4" />
                  </span>
                  <span className="text-base leading-relaxed text-foreground">
                    Предупреждения при недостиг на ключови минерали
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Droplets className="size-4" />
                  </span>
                  <span className="text-base leading-relaxed text-foreground">
                    Насоки за оптимално напояване
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Farmer Benefits */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-primary">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="size-5" />
                </div>
                Ползи за фермерите
              </h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Основната цел на системата е да помогне на фермерите да вземат информирани решения за:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <TrendingUp className="size-4" />
                  </span>
                  <span className="text-base leading-relaxed text-foreground">
                    По-висока продуктивност
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Gauge className="size-4" />
                  </span>
                  <span className="text-base leading-relaxed text-foreground">
                    Намаляване на разходите за торове и вода
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Leaf className="size-4" />
                  </span>
                  <span className="text-base leading-relaxed text-foreground">
                    По-устойчиво управление на ресурсите
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <AlertCircle className="size-4" />
                  </span>
                  <span className="text-base leading-relaxed text-foreground">
                    Минимизиране на риска от слаба реколта
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
