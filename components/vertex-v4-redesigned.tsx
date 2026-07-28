'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Droplets, Thermometer, Zap, Gauge, Activity, TrendingUp, Sprout, Cpu, BarChart3 } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'

export function VertexV4Redesigned() {
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
      title: 'Влажност',
      description: 'Измерва влажността на почвата за прецизно управление на напояването.',
      icon: Droplets,
    },
    {
      title: 'Температура',
      description: 'Следи температурата на почвата за оптимален контрол върху вегетацията.',
      icon: Thermometer,
    },
    {
      title: 'Соленост',
      description: 'Мониторира електропроводимостта за навременното откритие на солеви стрес.',
      icon: Zap,
    },
    {
      title: 'pH',
      description: 'Измерва киселинността на почвата за оптимално управление на хранителните вещества.',
      icon: Gauge,
    },
    {
      title: 'Водна проводимост',
      description: 'Следи способността на почвата да задържа и преносит вода.',
      icon: Activity,
    },
    {
      title: 'Профилни данни',
      description: 'Събира хронологични данни за проследяване на промените в почвото.',
      icon: TrendingUp,
    },
  ]

  const steps = [
    {
      number: 1,
      title: 'Лесен монтаж',
      description: 'Vertex 4 се монтира директно в почвата без специална техника или сложна инсталация. Патентованата му спираловидна форма ограничава оттичането на вода по корпуса, осигурявайки максимална точност.',
    },
    {
      number: 2,
      title: 'Автономно измерване',
      description: 'Батерията, сензорите и мобилната свързаност са интегрирани в един херметизиран корпус. Устройството работи автономно и изпраща данните към облака на CropX — без кабели или външно захранване.',
    },
    {
      number: 3,
      title: 'Анализ и препоръки',
      description: 'Облачната платформа CropX визуализира и анализира информацията в реално време, превръщайки измерванията в практически препоръки за напояването и управлението на почвените условия.',
    },
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      <SiteHeader />
      
      {/* Back Navigation */}
      <section className="px-6 py-4 sm:px-8 bg-white border-b border-stone-200" style={{ marginTop: '4rem' }}>
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

      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left: Product Image */}
            <div className="relative w-full h-auto min-h-96 rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-lg flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v4-soil-senson-egylu3TSPOObTbxGOFYWnnlz01ZKr0.png"
                alt="Vertex V4 Soil Sensor"
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
                <span className="inline-flex w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 mb-4 block">
                  Мултисензорна почвена сонда
                </span>
                <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl">
                  Vertex V4 Soil Sensor
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-stone-700">
                Вземайте по-точни решения за напояването, използвайте водата по-ефективно и реагирайте навреме при риск от воден или солеви стрес. Vertex 4 следи влагата, температурата и солеността на почвата, а платформата CropX превръща данните в конкретни препоръки — без кабели, допълнително оборудване или сложен монтаж.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-white px-6 py-16 sm:px-8 border-t border-stone-200">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl">
              Какво измерва Vertex V4 Soil Sensor
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Комплетен мониторинг на почвото с шест критични параметра
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.title}
                className="flex items-start gap-4 rounded-xl bg-stone-50 p-6 transition-all hover:shadow-md"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <metric.icon className="size-6" />
                </span>
                <div>
                  <h3 className="font-semibold text-stone-900">{metric.title}</h3>
                  <p className="mt-1 text-sm text-stone-600">{metric.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-stone-50 px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl">
              Как работи?
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Прост и ефикасен 3-етапен процес за мониторинг на почвата
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-stone-100 shadow-sm">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <span className="text-3xl font-bold text-emerald-600">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-stone-700 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      {siteConfig.showQuoteButtons && (
      <section className="px-6 py-20 sm:px-8 bg-gradient-to-br from-emerald-50 to-stone-50">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-emerald-200 bg-white p-8 sm:p-12 shadow-lg">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-stone-900 mb-2">Заяви оферта за Vertex V4 Soil Sensor</h2>
              <p className="text-stone-600">Свържете се с нас за подробна информация и ценова оферта</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Име
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
                <div>
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
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Забележка / Запитване
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                    placeholder="Допълнителна информация..."
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-emerald-800 active:from-emerald-800 active:to-emerald-900 transition-all shadow-md hover:shadow-lg"
              >
                Заяви оферта
              </button>
            </form>
          </div>
        </div>
      </section>
      )}
    </div>
  )
}
