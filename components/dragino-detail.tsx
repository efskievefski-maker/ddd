'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Sprout, Cpu, BarChart3, TestTubes } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { siteConfig } from '@/lib/site-config'

export function DraginoDetail() {
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

  const stepIcons = [Sprout, Cpu, BarChart3]

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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dragino-lse01-lorawan-soil-moisture-ec-sensor-915-mhz-img1_1200x1200-wVTFsiLQmJnMH8vUTukpwvJZeBo9Hz.webp"
                alt="Dragino IoT Sensors"
                width={500}
                height={600}
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                priority
              />
            </div>

            {/* Right: Product Info */}
            <div className="space-y-4">
              <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                Полу-професионално LoRaWAN IoT Решение
              </span>
              <h1 className="text-4xl font-bold text-stone-900 lg:text-5xl">
                Dragino IoT Почвени Сензори
              </h1>
              <p className="text-lg leading-relaxed text-stone-700">
                Изградете гъвкава система за почвен мониторинг според нуждите и бюджета на стопанството си. Dragino ви позволява да изберете необходимите сензори, да разширявате мрежата постепенно и да предавате данните на голямо разстояние чрез енергийно ефективната LoRaWAN технология.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-white border-t border-stone-200 px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl">
              Какво измерва Dragino
            </h2>
          </div>

          {/* Metrics Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-4 rounded-xl bg-stone-50 p-6">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <span className="text-xl">🌱</span>
              </span>
              <div>
                <h3 className="font-semibold text-stone-900 mb-1">Хранителни вещества (NPK)</h3>
                <p className="text-sm text-stone-600">Измерва нивата на Азот (N), Фосфор (P) и Калий (K) в мг/кг.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl bg-stone-50 p-6">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <TestTubes className="size-6" />
              </span>
              <div>
                <h3 className="font-semibold text-stone-900 mb-1">Киселинност (pH)</h3>
                <p className="text-sm text-stone-600">Измерва pH стойности на почвата в диапазона 0-14.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl bg-stone-50 p-6">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <span className="text-xl">💧</span>
              </span>
              <div>
                <h3 className="font-semibold text-stone-900 mb-1">Почвена влага</h3>
                <p className="text-sm text-stone-600">Измерва обемното водно съдържание (VWC) в проценти.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl bg-stone-50 p-6">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <span className="text-xl">⚡</span>
              </span>
              <div>
                <h3 className="font-semibold text-stone-900 mb-1">Електропроводимост (EC)</h3>
                <p className="text-sm text-stone-600">Оценка на солеността и наличието на минерални торове.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl bg-stone-50 p-6">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <span className="text-xl">🌡️</span>
              </span>
              <div>
                <h3 className="font-semibold text-stone-900 mb-1">Температура</h3>
                <p className="text-sm text-stone-600">Проследява топлинното състояние на почвата за оптимален растеж.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-stone-50 px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl">
              Как работи?
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Прост и автоматизиран 3-етапен процес с LoRaWAN технология
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Свързване на сондите',
                description: 'Всеки сензор (за NPK, pH, влага или EC) се свързва чрез кабел към своя Dragino LoRaWAN предавател (Node) и се поставя в почвата.',
              },
              {
                title: 'Безжичен пренос',
                description: 'Предавателят събира данните от сондите, обработва ги и ги изпраща безжично през LoRaWAN протокол до най-близкия шлюз (Gateway).',
              },
              {
                title: 'Визуализация в облака',
                description: 'Шлюзът препраща данните към интернет, където ги следите в среди като The Things Network (TTN), Datacake или личен сървър.',
              },
            ].map((step, idx) => {
              const StepIcon = stepIcons[idx] || Sprout
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-white transition-all hover:shadow-lg hover:translate-y-[-4px]"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-3xl font-bold text-emerald-600">{idx + 1}</span>
                  </div>
                  <StepIcon className="mb-4 size-8 text-amber-700" />
                  <h3 className="text-xl font-bold text-emerald-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-stone-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      {siteConfig.showQuoteButtons && (
      <section className="px-6 py-20 sm:px-8 bg-gradient-to-br from-emerald-50 to-stone-50">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-emerald-200 bg-white p-8 sm:p-12 shadow-lg">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-stone-900 mb-2">Заяви оферта за Dragino</h2>
              <p className="text-stone-600">��вържете се с нас за подробна информация и ценова оферта</p>
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
                  Забележка / Запитване
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  placeholder="Опишете вашите нужди и в��проси..."
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
      )}
    </div>
  )
}
