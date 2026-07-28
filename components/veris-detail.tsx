'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Zap, Leaf, Gauge, TrendingUp } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { siteConfig } from '@/lib/site-config'

export function VerisDetail() {
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
      title: 'Електропроводимост (EC)',
      description: 'Чрез дискови електроди се измерва съпротивлението на почвата като proxy за текстурата (глина/пясък), влагозадържането и катионния обменен капацитет (CEC).',
      icon: Zap,
    },
    {
      title: 'Органично вещество (OM)',
      description: 'Оптичен сензор (OpticMapper) сканира почвата на дълбочина 3–8 см за прецизно определяне нивата на хумус.',
      icon: Leaf,
    },
    {
      title: 'Киселинност (pH)',
      description: 'Специален механизъм (pH Manager) спуска електроди в почвата на интервали (около 15 пъти/ха) за измерване на pH в реално време.',
      icon: Gauge,
    },
    {
      title: 'Топография',
      description: 'Записва данни за надморската височина, помагайки за създаването на топографски карти за управление на оттичането на водата.',
      icon: TrendingUp,
    },
  ]

  const steps = [
    {
      number: 1,
        title: 'Сканиране в движение',
        description: 'Системата се тегли от трактор със скорост до 16 км/ч. Дисковите електроди постоянно измерват EC, оптичният сензор сканира за органично вещество, а pH Manager периодично спуска pH електроди.',
    },
    {
      number: 2,
      title: 'Автоматичен запис & Топография',
      description: 'Всички данни за EC, OM, pH и надморска височина се записват автоматично в геореферирани цифрови карти с висока плътност.',
    },
    {
      number: 3,
        title: 'Калибриране & Финални карти',
        description: 'Данните се анализират чрез софтуер и бързи лабораторни проби за калибрация, генерирайки финални карти за торене и варуване с променлива норма.',
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
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left: Product Image */}
            <div className="relative w-full h-auto min-h-96 rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-lg flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Veris-soil-testing-machine-c-no-credit-ZkdeqcsZtRLbl7ZRS7P3jbzaSW7tq2.jpg"
                alt="Veris MSP3"
                width={600}
                height={400}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
              />
            </div>

            {/* Right: Details */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl">
                  Veris MSP3
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-stone-700">
                Veris MSP3 е модулна система, която комбинира три ключови сензорни технологии в едно минаване. Тя се тегли от трактор и може да работи при скорост до 16 км/ч, което я прави изключително ефективна за големи стопанства, където ръчното вземане на проби би отнело седмици.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-stone-50 px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl">
              Какво измерва Veris MSP3
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Системата измерва четири основни параметъра, които са фундаментални за управлението на хранителните вещества
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon
              return (
                <div key={index} className="flex items-start gap-4 rounded-xl bg-white p-6 border border-stone-200 shadow-sm">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <IconComponent className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">{metric.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{metric.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-white px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl">
              Как работи?
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Бърз и ефективен 3-етапен процес за пълно почвено картографиране
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col rounded-xl bg-stone-50 p-8 border border-stone-200">
                <div className="mb-6 flex items-center justify-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-emerald-100 text-2xl font-bold text-emerald-700">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 text-center mb-4">{step.title}</h3>
                <p className="text-stone-700 leading-relaxed text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      {siteConfig.showQuoteButtons && (
      <section className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-white p-8 border border-stone-200 shadow-lg">
            <h2 className="text-3xl font-bold text-stone-900 text-center mb-2">
              Заяви оферта за Veris MSP3
            </h2>
            <p className="text-center text-stone-600 mb-8">
              Свържете се с нас за консултация и индивидуално предложение.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Имена"
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-lg border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder-stone-500 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={handleChange}
                  className="rounded-lg border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder-stone-500 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Имейл"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder-stone-500 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                required
              />

              <textarea
                name="notes"
                placeholder="Забележка / Запитване (незадължително)"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder-stone-500 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100 resize-none"
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-emerald-600 px-6 py-4 font-bold text-white transition-colors hover:bg-emerald-700 active:bg-emerald-800"
              >
                Заяви оферта / Поръчай
              </button>
            </form>
          </div>
        </div>
      </section>
      )}
    </div>
  )
}
