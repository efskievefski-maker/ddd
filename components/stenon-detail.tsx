'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Leaf, Droplets, Zap, Gauge, Activity, Thermometer } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { siteConfig } from '@/lib/site-config'

export function StenonDetail() {
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
      title: 'pH на почвата',
      description: 'Киселинност на почвата - критична за наличност на хранителни вещества и оптимизиране на торенето.',
      icon: Activity,
    },
    {
      title: 'Азот (N), Фосфор (P), Калий (K)',
      description: 'Макроелементите, необходими за растежа на растенията - измервани директно с висока точност.',
      icon: Leaf,
    },
    {
      title: 'Магнезий (Mg) и Калций (Ca)',
      description: 'Вторични елементи, които влияят на здравето на растенията и структурата на почвата.',
      icon: Droplets,
    },
    {
      title: 'Съдържание на хумус / въглерод',
      description: 'Органичното вещество влияе на структурата, водозадържането и биологичната активност на почвата.',
      icon: Leaf,
    },
    {
      title: 'Електропроводимост (EC)',
      description: 'Показател за солеността на почвата и наличност на разтворени хранителни вещества.',
      icon: Zap,
    },
    {
      title: 'Температура и влага на почвата',
      description: 'Микроклиматични условия, които влияят на биологичната активност и наличност на хранителни вещества.',
      icon: Thermometer,
    },
  ]

  const steps = [
    {
      number: 1,
      title: 'Измерване',
      description: 'Поставете сондата в почвата. Устройството събира хиляди измервания само за няколко секунди със висока точност.',
    },
    {
      number: 2,
      title: 'Облачен анализ',
      description: 'Данните се обработват в облачната платформа на Stenon чрез интелигентни модели за анализ, сравнени с базови данни за вашия регион.',
    },
    {
      number: 3,
      title: 'Резултати & Препоръки',
      description: 'Получавате подробен отчет, VRA карти за вариативна норма и препоръки за торене директно на дисплея и в приложението.',
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
      <section className="px-6 py-16 sm:px-8" id="stenon-hero">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left: Product Image */}
            <div className="relative w-full h-auto min-h-96 rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-lg flex items-center justify-center">
              <Image
                src="/images/stenon-farmlab.png"
                alt="Stenon FarmLab"
                width={600}
                height={400}
                className="object-contain p-8"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
              />
            </div>

            {/* Right: Details */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <span className="inline-flex w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 mb-4 block">
                  Лабораторен анализ на терена
                </span>
                <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl">
                  Stenon FarmLab
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-stone-700">
                Stenon FarmLab е професионално преносимо устройство за почвен анализ, създадено за нуждите на прецизното земеделие. То предоставя надеждни резултати директно на терен, без необходимост от изпращане на проби в лаборатория.
              </p>
              <p className="text-lg leading-relaxed text-stone-700">
                Устройството използва комбинация от EIS (Electrochemical Impedance Spectroscopy), оптични сензори и GPS технология, за да анализира физичните и химичните характеристики на почвата в реално време. Получените данни се обработват в облачната платформа на Stenon, където се преобразуват в подробен анализ и практически препоръки за управление на земеделските площи.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-3 text-stone-700">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-xs font-bold text-emerald-700">✓</span>
                  </span>
                  VRA карти за вариативна норма на торене
                </li>
                <li className="flex items-center gap-3 text-stone-700">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-xs font-bold text-emerald-700">✓</span>
                  </span>
                  Облачна платформа с интелигентен анализ
                </li>
                <li className="flex items-center gap-3 text-stone-700">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-xs font-bold text-emerald-700">✓</span>
                  </span>
                  Мобилно приложение с резултати и препоръки
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-white px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl mb-4">
              Какво измерва Stenon FarmLab
            </h2>
            <p className="text-lg text-stone-600">
              Комплетен анализ на почвата с деветчленен пакет от критични параметри
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
              3-етапен процес за прецизен почвен анализ
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
      {siteConfig.showQuoteButtons && (
      <section className="px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-emerald-200 bg-white p-8 sm:p-12 shadow-lg">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-stone-900 mb-2">Заяви оферта за Stenon FarmLab</h2>
              <p className="text-stone-600">Свържете се с нас за подробна информация и ценова оферта</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Име</label>
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
      )}
    </div>
  )
}
