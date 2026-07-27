'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Leaf, Droplets, Zap, Gauge, Activity, TrendingUp } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'

export function AgrocaresDetail() {
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
      title: 'Органично вещество',
      description: 'Инфрачервена спектроскопия за точно определяне на нивата на хумус в почвата.',
      icon: Leaf,
    },
    {
      title: 'pH на почвата',
      description: 'Бързо измерване на киселинността за оптимизиране на торенето и управлението на хранителните вещества.',
      icon: Gauge,
    },
    {
      title: 'Азот (N), Фосфор (P), Калий (K)',
      description: 'Трите основни макроелемента за растежа - измервани директно на терен без лабораторни забавяния.',
      icon: Zap,
    },
    {
      title: 'Магнезий (Mg) и Калций (Ca)',
      description: 'Критични вторични елементи, които влияят на растежа и развитието на культурите.',
      icon: Activity,
    },
    {
      title: 'Текстура на почвата',
      description: 'Определяне на съотношението глина/пясък/тиня за разбиране на водозадържащата способност.',
      icon: Droplets,
    },
    {
      title: 'Катионен обменен капацитет (CEC)',
      description: 'Способност на почвата да задържа и обменя хранителни вещества, критична за управлението на торенето.',
      icon: TrendingUp,
    },
  ]

  const steps = [
    {
      number: 1,
      title: 'Вземете проба',
      description: 'Вземете малко количество почва или фураж и го поставете в измервателната тавичка на устройството.',
    },
    {
      number: 2,
      title: 'Сканирайте',
      description: 'AgroCares Scanner F използва инфрачервена спектроскопия, за да анализира спектралните характеристики на пробата. Получените данни се обработват в облачната платформа на AgroCares и се сравняват с обширна база агрономически данни.',
    },
    {
      number: 3,
      title: 'Получете резултатите',
      description: 'Само след няколко минути резултатите са достъпни в мобилното приложение. Освен измерените стойности получавате практически препоръки за торене и управление на хранителните вещества според състоянието на почвата.',
    },
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      <SiteHeader />

      {/* Back Button */}
      <section className="px-6 py-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Link href="/products" className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-colors">
            <ArrowLeft className="size-4" />
            Назад към продуктите
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-8" id="agrocares-hero">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left: Product Image */}
            <div className="relative w-full h-auto min-h-96 rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-lg flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slider-1-a-ekru9a5wceNr089HyqQcf6wPSS9hmi.webp"
                alt="AgroCares Scanner F"
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
                  AgroCares Scanner F
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-stone-700">
                AgroCares Scanner F е интелигентно устройство за анализ на почвата и фуражите в реално време. Чрез инфрачервена спектроскопия то предоставя точни резултати директно на терен, без необходимост от лабораторни изследвания. Това спестява време, намалява разходите и дава на земеделските производители възможност да вземат бързи и информирани решения за управлението на своите култури.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-white px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl mb-4">
              Какво измерва AgroCares Scanner F
            </h2>
            <p className="text-lg text-stone-600">
              Деветчленен анализ с девет критични почвени параметра за точни агрономически решения
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.title}
                className="flex flex-col items-start space-x-4 rounded-xl bg-white p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <metric.icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-2">{metric.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{metric.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-stone-50 px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl mb-4">
              Как работи?
            </h2>
            <p className="text-lg text-stone-600">
              3-етапен процес за анализ и получаване на резултатите
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-stone-100 shadow-sm"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <span className="text-2xl font-bold text-emerald-700">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{step.title}</h3>
                <p className="text-stone-700 leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-emerald-200 bg-white p-8 sm:p-12 shadow-lg">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-stone-900 mb-2">Заяви оферта за AgroCares Scanner F</h2>
              <p className="text-stone-600">Свържете се с нас за подробна информация и ценова оферта</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">��ме</label>
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
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Телефон</label>
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
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Имейл</label>
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
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Забележка</label>
                  <input
                    type="text"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="Допълнителни запитвания..."
                  />
                </div>
              </div>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="Забележка / Запитване"
                rows={4}
              />
              <button
                type="submit"
                className="w-full px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-all active:bg-emerald-800"
              >
                Заяви оферта
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
