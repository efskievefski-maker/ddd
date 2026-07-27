'use client'

import Link from 'next/link'
import { Leaf, Droplets, Thermometer, Zap, Gauge, TrendingUp, Sprout, Cpu, BarChart3 } from 'lucide-react'

export function VertexV4Detail() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Global Navigation Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-[#065F46] rounded">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div className="flex gap-1">
              <span className="text-xl font-bold text-stone-900">TerraScan</span>
              <span className="text-xl font-bold text-[#065F46]">Pro</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#" className="text-stone-700 hover:text-stone-900 font-medium">Особености</a>
            <a href="#" className="text-stone-700 hover:text-stone-900 font-medium">За системата</a>
            <a href="#" className="text-stone-700 hover:text-stone-900 font-medium">Продукти</a>
            <a href="#" className="text-stone-700 hover:text-stone-900 font-medium">За нас</a>
          </nav>

          {/* CTA Button */}
          <button className="bg-[#F9A826] hover:bg-amber-600 text-stone-900 font-medium px-5 py-2 rounded-lg transition-colors">
            Поръчай сега
          </button>
        </div>
      </header>

      {/* Back Navigation Sub-Bar */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <Link href="/products" className="text-emerald-700 hover:underline font-medium text-sm inline-block">
            ← Назад към продуктите
          </Link>
        </div>
      </div>

      {/* Hero Overview Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v4-soil-senson-egylu3TSPOObTbxGOFYWnnlz01ZKr0.png"
              alt="Vertex V4 Soil Sensor"
              className="w-full max-w-sm h-auto object-contain"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-bold text-stone-900 mb-4">Vertex V4 Soil Sensor</h1>
              <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                Мултисензорна почвена сонда
              </span>
            </div>

            <p className="text-lg leading-relaxed text-stone-700">
              Вземайте по-точни решения за напояването, използвайте водата по-ефективно и реагирайте навреме при риск от воден или солеви стрес. Vertex 4 следи влагата, температурата и солеността на почвата, а платформата CropX превръща данните в конкретни препоръки — без кабели, допълнително оборудване или сложен монтаж.
            </p>
          </div>
        </div>
      </section>

      {/* Specifications Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-stone-900">Какво измерва</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Metric 1 - Влажност */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-stone-200 text-center">
            <div className="flex justify-center mb-4">
              <Droplets className="w-12 h-12 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">Влажност</h3>
          </div>

          {/* Metric 2 - Температура */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-stone-200 text-center">
            <div className="flex justify-center mb-4">
              <Thermometer className="w-12 h-12 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">Температура</h3>
          </div>

          {/* Metric 3 - Соленост */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-stone-200 text-center">
            <div className="flex justify-center mb-4">
              <Zap className="w-12 h-12 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">Соленост</h3>
          </div>
        </div>
      </section>

      {/* How It Works - Vertex V4 */}
      <section className="max-w-7xl mx-auto px-6 py-20 mb-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-2">Как работи?</h2>
          <p className="text-stone-500">Прост и ефикасен 3-етапен процес за мониторинг на почвата</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 font-bold text-lg rounded-full flex items-center justify-center mb-4">
              1
            </div>
            <div className="text-amber-600 mb-3">
              <Sprout className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-xl text-emerald-900 mb-3">Лесен монтаж</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Vertex 4 се монтира директно в почвата без специална техника или сложна инсталация. Патентованата му спираловидна форма ограничава оттичането на вода по корпуса, осигурявайки максимална точност.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 font-bold text-lg rounded-full flex items-center justify-center mb-4">
              2
            </div>
            <div className="text-amber-600 mb-3">
              <Cpu className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-xl text-emerald-900 mb-3">Автономно измерване</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Батерията, сензорите и мобилната свързаност са интегрирани в един херметизиран корпус. Устройството работи автономно и изпраща данните към облака на CropX — без кабели или външно захранване.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 font-bold text-lg rounded-full flex items-center justify-center mb-4">
              3
            </div>
            <div className="text-amber-600 mb-3">
              <BarChart3 className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-xl text-emerald-900 mb-3">Анализ и препоръки</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Облачната платформа CropX визуализира и анализира информацията в реално време, превръщайки измерванията в практически препоръки за напояването и управлението на почвените условия.
            </p>
          </div>
        </div>
      </section>

      {/* Request Offer Section - Bottom */}
      <section className="bg-gradient-to-r from-emerald-50 to-emerald-100/50 py-20 border-t border-emerald-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-emerald-100">
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold text-stone-900 mb-3">Заяви оферта</h2>
              <p className="text-stone-600 text-lg">Свържете се с нас днес и получете персонализирана оферта за Vertex V4 Soil Sensor</p>
            </div>

            <form className="space-y-5">
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Ваше име"
                  className="px-5 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="px-5 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                />
              </div>

              <input
                type="email"
                placeholder="Имейл"
                className="w-full px-5 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
              />

              <textarea
                placeholder="Допълнителна информация (опционално)"
                rows={4}
                className="w-full px-5 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all resize-none"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
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
