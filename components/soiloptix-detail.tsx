'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Droplets, Leaf, Gauge, Activity, Zap } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'

export function SoilOptixDetail() {
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

  const steps = [
    {
      number: 1,
      title: 'Неинвазивно заснемане',
      description: 'Сензорният блок се монтира на АТВ или трактор и заснема естествените гама-сигнали по зададен мрежов план, без да се влияе от камъни, влажност или растителни остатъци.',
    },
    {
      number: 2,
      title: 'Калибриране с проби',
      description: 'Взимат се няколко стратегически почвени проби за лабораторен анализ, чиито резултати се въвеждат в софтуера за прецизно калибриране на гама-данните.',
    },
    {
      number: 3,
      title: 'Генериране на GPS карти',
      description: 'Алгоритмите създават високодетайлни дигитални карти за над 30 почвени параметъра, готови за директно зареждане в GPS системите на вашата техника.',
    },
  ]

  const measures = [
    { name: 'Текстура', description: 'Процентно съдържание на пясък, тиня и глина.', icon: Droplets },
    { name: 'Хранителни вещества', description: 'Нива на фосфор, калий, магнезий, калций и други макро- и микроелементи.', icon: Leaf },
    { name: 'Капацитет на обмен (CEC)', description: 'Точен катионен обменен капацитет на почвения профил.', icon: Gauge },
    { name: 'Органично вещество', description: 'Прецизни нива на хумус в почвата.', icon: Activity },
    { name: 'Киселинност (pH)', description: 'Индиректно измерване чрез корелация с минералните данни.', icon: Zap },
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/001_265_IMG_SoilOptix63x2-scaled-GrzQDUdlfKdN2kLQNsaH8jVSaDjbFC.jpg"
                alt="SoilOptix"
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
                  SoilOptix
                </h2>
              </div>

              <p className="text-lg leading-relaxed text-stone-700">
                За разлика от системи, разчитащи на физически контакт с почвата, SoilOptix е пасивна технология. Тя използва сензорен блок, монтиран на АТВ или трактор, който „улавя" естественото ниско ниво на гама-лъчение, излъчвано от почвените минерали (изотопи на калий, уран и торий). Чрез измерване на тези специфични енергийни нива, системата дедуцира химическия и физическия състав на почвата с висока прецизност.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-white px-6 py-16 sm:px-8 border-t border-stone-200">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl mb-4">
              Какво измерва SoilOptix
            </h2>
            <p className="text-lg text-stone-600">
              Чрез обработка на данните в облачна платформа, SoilOptix генерира карти за над 30 различни почвени параметри, включително:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {measures.map((measure) => {
              const Icon = measure.icon
              return (
                <div key={measure.name} className="flex items-start gap-4 rounded-xl bg-stone-50 p-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">{measure.name}</h3>
                    <p className="text-sm text-stone-600">{measure.description}</p>
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
            <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl mb-4">
              Как работи?
            </h2>
            <p className="text-lg text-stone-600">
              Прост 3-етапен процес от полевото заснемане до прецизните GPS карти
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col rounded-xl bg-white p-8 border border-stone-200 shadow-sm">
                <div className="mb-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700 text-lg">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-4">{step.title}</h3>
                <p className="text-stone-700 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-white border border-stone-200 p-8 shadow-lg">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-stone-900 mb-2">
                Заяви оферта за SoilOptix
              </h2>
              <p className="text-stone-600">
                Свържете се с нас за консултация и индивидуално предложение.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Имена
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Вашите имена"
                    className="w-full rounded-lg border border-stone-300 px-4 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Вашият телефон"
                    className="w-full rounded-lg border border-stone-300 px-4 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Имейл
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Вашият имейл"
                  className="w-full rounded-lg border border-stone-300 px-4 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Забележка / Запитване (незадължително)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Напишете вашето запитване..."
                  rows={4}
                  className="w-full rounded-lg border border-stone-300 px-4 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold py-4 rounded-lg transition-colors"
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
