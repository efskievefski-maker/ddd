'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Droplets, Zap, Activity, Gauge, Leaf } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'

export function MacSyncDetail() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const metrics = [
    {
      title: 'Обемно водно съдържание (VWC)',
      description: 'Данни за нивата на влага, които са критични за графиците на поливане.',
      icon: Droplets,
    },
    {
      title: 'Електропроводимост (EC)',
      description: 'Мониторинг на концентрацията на разтворени соли и хранителни вещества.',
      icon: Zap,
    },
    {
      title: 'Температура на почвата',
      description: 'Важен параметър за анализ на биологичната активност и етапите на развитие на културите.',
      icon: Activity,
    },
    {
      title: 'Киселинност (pH)',
      description: 'Прецизен контрол върху киселинността на почвената среда.',
      icon: Gauge,
    },
    {
      title: 'Хранителни елементи (NPK)',
      description: 'Измерване нивата на Азот (N), Фосфор (P) и Калий (K).',
      icon: Leaf,
    },
  ]

  const steps = [
    {
      number: 1,
      title: 'Диелектричен анализ',
      description: 'Капацитивните сонди се вкарват директно в почвата и излъчват високочестотно електромагнитно поле, което анализира диелектричните свойства за точно определяне на водното съдържание и проводимостта.',
    },
    {
      number: 2,
      title: 'Микропроцесорна обработка & LoRaWAN',
      description: 'Вътрешен микропроцесор превръща суровите данни в приложими показатели и ги предава безжично през LoRaWAN протокол до централен шлюз.',
    },
    {
      number: 3,
      title: 'Облачна платформа OmniWOT',
      description: 'Шлюзът изпраща данните към облачната платформа OmniWOT, където достъпвате табло за управление, настройвате сигналите и следите тенденции без нужда от технически познания.',
    },
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      <SiteHeader />
      {/* Back Navigation */}
      <div className="border-b transition-colors border-transparent bg-background/60 backdrop-blur-sm" style={{ marginTop: '4rem' }}>
        <section className="px-6 py-8 sm:px-8 bg-white border-b border-stone-200">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors font-medium"
            >
              <ArrowLeft className="size-4" />
              Назад към продуктите
            </Link>
          </div>
        </section>
      </div>

      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            {/* Left: Product Image */}
            <div className="relative w-full h-auto min-h-96 rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-lg flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MacSync-LS7-BI75IZn9FQ2DxA46eLUFZDUOsLGbuv.png"
                alt="OmniWOT MacSync LS7"
                width={400}
                height={600}
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                priority
              />
            </div>

            {/* Right: Product Info */}
            <div className="space-y-4">
              <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                Високоустойчив LoRaWAN Почвен Сензор
              </span>
              <h1 className="text-4xl font-bold text-stone-900 lg:text-5xl">
                OmniWOT MacSync LS7
              </h1>
              <p className="text-lg leading-relaxed text-stone-700">
                Това е сензор, изграден с фокус върху издръжливостта и дългосрочната работа на открито. Корпусът му е проектиран със защита срещу атмосферни влияния (клас IP66/67), което го прави подходящ за инсталация в тежки полеви условия. Устройството е оптимизирано за безжична LoRaWAN комуникация, което му позволява да предава данни на големи разстояния, без необходимост от сложна инфраструктура от кабели, пресичащи земеделските масиви.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-white border-t border-stone-200 px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl mb-4">
              Какво измерва OmniWOT MacSync LS7
            </h2>
            <p className="text-lg text-stone-600">
              Устройството предоставя комплексна картина за състоянието на кореновата зона чрез измерване на:
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric, idx) => {
              const IconComponent = metric.icon
              return (
                <div key={idx} className="flex items-start gap-4 rounded-xl bg-stone-50 p-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <IconComponent className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">{metric.title}</h3>
                    <p className="text-sm text-stone-600">{metric.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-stone-50 px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl mb-4">
              Как работи?
            </h2>
            <p className="text-lg text-stone-600">
              Автоматизиран процес от почвеното измерване до облачната платформа
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white transition-all hover:shadow-lg hover:translate-y-[-4px]"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <span className="text-3xl font-bold text-emerald-600">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="px-6 py-20 sm:px-8 bg-gradient-to-br from-emerald-50 to-stone-50">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-emerald-200 bg-white p-8 sm:p-12 shadow-lg">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-stone-900 mb-2">Заяви оферта за OmniWOT MacSync LS7</h2>
              <p className="text-stone-600">Свържете се с нас за консултация и индивидуално предложение.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Имена
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="Вашето име"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="+359 XXX XXX XXX"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Имейл
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Забележка / Запитване (незадължително)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  placeholder="Опишете вашите нужди и въпроси..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-emerald-800 active:from-emerald-800 active:to-emerald-900 transition-all shadow-md hover:shadow-lg"
              >
                Заяви оферта / Поръчай
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
