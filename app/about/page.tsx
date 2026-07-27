import Image from "next/image"
import { Cpu, Cloud, Brain } from "lucide-react"

const PILLARS = [
  {
    icon: Cpu,
    title: "Сензори",
    description:
      "Прецизни сензори измерват състоянието на почвата в реално време директно на полето.",
  },
  {
    icon: Cloud,
    title: "Облачна платформа",
    description:
      "Всички данни се синхронизират и съхраняват сигурно в облака за достъп по всяко време.",
  },
  {
    icon: Brain,
    title: "Изкуствен интелект",
    description:
      "AI анализира показателите и генерира практични препоръки за вашите площи.",
  },
]

export const metadata = {
  title: "За нас — TerraScan Pro",
  description: "Узнайте повече за TerraScan Pro и нашата мисия да трансформираме земеделието.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Content */}
      <div className="grid min-h-screen items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-0 mx-auto max-w-6xl">
        {/* Left: visual */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-stone-200">
          <Image
            src="/images/about-field.png"
            alt="Интелигентно устройство анализира почвата на полето"
            width={720}
            height={720}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right: text content */}
        <div className="flex flex-col">
          <span className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Кои сме ние
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight text-emerald-800 lg:text-4xl">
            Променяме бъдещето на земеделието с интелигентни технологии и анализ на почвата.
          </h2>

          <div className="mt-6 space-y-4 text-lg leading-relaxed text-stone-600">
            <p>
              Ние разработваме иновативни решения за прецизното земеделие. Нашата
              цел е да подпомогнем фермерите чрез съвременни технологии, които
              анализират състоянието на почвата в реално време и предоставят
              полезни препоръки за по-ефективно управление на земеделските площи.
            </p>
            <p>
              Чрез комбинация от сензори, облачна платформа и изкуствен интелект,
              нашата система помага за увеличаване на добивите, намаляване на
              разходите и устойчиво използване на природните ресурси.
            </p>
          </div>

          {/* Core pillars */}
          <div className="mt-10 flex flex-col gap-4">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="flex items-start gap-4"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-amber-700">
                  <pillar.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-emerald-800">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
