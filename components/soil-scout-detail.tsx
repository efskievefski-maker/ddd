'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Droplets, Thermometer, Zap, Wind } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { siteConfig } from '@/lib/site-config'

export function SoilScoutDetail() {
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
      title: 'Влага',
      description: 'Обемно водно съдържание чрез капацитивен метод за прецизен контрол на поливането.',
      icon: Droplets,
    },
    {
      title: 'Температура',
      description: 'Високопрецизно измерване, критично за кореновата активност и биологичните процеси.',
      icon: Thermometer,
    },
    {
      title: 'Соленост (EC)',
      description: 'Измерва нивото на разтворимите соли като индиректен индикатор за наличността на торове.',
      icon: Zap,
    },
    {
      title: 'Кислород',
      description: 'Специфичен модел за измерване на нивата на подпочвен кислород за оптимално здраве на корените.',
      icon: Wind,
    },
  ]

  const steps = [
    {
      number: 1,
      title: 'Заравяне на сензора',
      description: 'Сензорът се поставя на желаната дълбочина (от 10 см до 2 метра) чрез малък изкоп или тясна дупка, след което почвата се заравя отгоре за пълно интегриране.',
    },
    {
      number: 2,
      title: 'Подпочвен безжичен сигнал',
      description: 'Сензорът автоматично се свързва с приемната антена (Base Station) на повърхността (монтирана на стълб/сграда на разстояние до 1 км), която събира данни от стотици сензори.',
    },
    {
      number: 3,
      title: 'Облачен анализ & Аларми',
      description: 'Данните се изпращат към "Soil Scout Hub", където софтуерът ги конвертира в ясни графики за мобилното приложение или лаптопа с опция за персонализирани аларми.',
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Soil-Scout_Bernhard-1030x578-GpFK1gTdCWGlTMHj6Qma6vaOaVP8IM.png"
                alt="Soil Scout"
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
                  Soil Scout
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-stone-700">
                Вземайте по-точни решения за напояването с данни директно от кореновата зона. Сензорите Soil Scout остават невидими и защитени под земята, не пречат на земеделската техника и осигуряват дългосрочен мониторинг до 20 години с една батерия.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-white px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h3 className="text-3xl font-bold text-stone-900 mb-4">
              Какво измерва Soil Scout
            </h3>
            <p className="text-lg text-stone-600">
              Подпочвените сензори предоставят прецизни данни в реално време за здравето и състоянието на кореновата зона:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon
              return (
                <div key={idx} className="flex items-start gap-4 p-6 rounded-xl bg-stone-50 border border-stone-200 hover:border-stone-300 transition-colors">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-100">
                    <Icon className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-2">
                      {metric.title}
                    </h4>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-stone-50 px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h3 className="text-3xl font-bold text-stone-900 mb-4">
              Как работи?
            </h3>
            <p className="text-lg text-stone-600">
              Бърз и ефективен 3-етапен процес за подпочвен мониторинг
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-600 text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-stone-900">
                  {step.title}
                </h4>
                <p className="text-stone-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      {siteConfig.showQuoteButtons && (
      <section className="px-6 py-16 sm:px-8 bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h3 className="text-3xl font-bold text-stone-900 mb-3">
              Заяви оферта за Soil Scout
            </h3>
            <p className="text-lg text-stone-600">
              Свържете се с нас за консултация и индивидуално предложение.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Имена"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Имейл"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <textarea
              name="notes"
              placeholder="Забележка / Запитване (незадължително)"
              rows={5}
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <button
              type="submit"
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors"
            >
              Заяви оферта / Поръчай
            </button>
          </form>
        </div>
      </section>
      )}
    </div>
  )
}
