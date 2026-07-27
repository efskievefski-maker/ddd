import { Zap, Cpu } from "lucide-react"

const VALUES = [
  {
    icon: Zap,
    title: "Резултати за 10 минути",
    description:
      "Избегнете 3-седмичното чакане в лаборатория. Получете показания за азот, фосфор, калий, pH и органично вещество на място, докато все още стоите на полето.",
  },
  {
    icon: Cpu,
    title: "Лабораторна точност",
    description:
      "Сензор и калибрирани модели дават показания, на които можете да разчитате, без съмнения относно стойностите.",
  },

]

export function ValueGrid() {
  return (
    <section id="features" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Всичко, от което един независим агроном има нужда
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Скорост и точност в едно преносимо устройство.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="flex flex-col items-center gap-4 text-center"
            >
              <span className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <value.icon className="size-6" />
              </span>
              <h3 className="text-xl font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
