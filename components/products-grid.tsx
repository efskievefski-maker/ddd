'use client'

import { useState } from 'react'
import { getAllProducts, iconMap } from '@/lib/products-data'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export function ProductsGrid() {
  const products = getAllProducts()
  const [activeProductId, setActiveProductId] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', location: '' })

  const activeProduct = activeProductId ? products.find((p) => p.id === activeProductId) : null

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', phone: '', email: '', location: '' })
  }

  // DETAIL VIEW
  if (activeProduct) {
    return (
      <div className="min-h-screen bg-stone-50">
        {/* Back Navigation */}
        <div className="sticky top-0 z-40 bg-white border-b border-stone-200 px-6 py-4 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <button
              onClick={() => setActiveProductId(null)}
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
            >
              <ArrowLeft className="size-5" />
              Назад към продуктите
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <section className="px-6 py-16 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2 items-start">
              {/* Left: Product Image */}
              <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-lg">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.title}
                  className="w-full h-full object-contain p-8"
                />
              </div>

              {/* Right: Product Info */}
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-stone-900 lg:text-5xl">
                  {activeProduct.title}
                </h1>
                <p className="text-lg leading-relaxed text-stone-700">
                  {activeProduct.longDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-stone-50 px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl">
                {activeProduct.workflowTitle}
              </h2>
            </div>

            {/* Steps Grid */}
            <div className="grid gap-8 md:grid-cols-3">
              {activeProduct.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-white transition-all hover:shadow-lg hover:translate-y-[-4px]"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-3xl font-bold text-emerald-600">{idx + 1}</span>
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

        {/* Specifications Section */}
        <section className="bg-white border-t border-stone-200 px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl">
                {activeProduct.measuresTitle}
              </h2>
              <p className="mt-4 text-lg text-stone-600">
                Комплетен анализ с критични параметри
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {activeProduct.measures.map((metric, idx) => {
                const IconComponent = iconMap[metric.icon]
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 rounded-xl bg-stone-50 p-6 transition-all hover:shadow-md"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                      <IconComponent className="size-6" />
                    </span>
                    <h3 className="font-semibold text-stone-900">{metric.name}</h3>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Order Form Section */}
        <section className="px-6 py-20 sm:px-8 bg-gradient-to-br from-emerald-50 to-stone-50">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border border-emerald-200 bg-white p-8 sm:p-12 shadow-lg">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-stone-900 mb-2">Заяви оферта</h2>
                <p className="text-stone-600">Свържете се с нас за подробна информация и ценова оферта</p>
              </div>
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">
                      Име
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
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
                      onChange={handleFormChange}
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
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">
                      Местоположение / Размер на ферма
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Град, хектари"
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
      </div>
    )
  }

  // CATALOG VIEW
  return (
    <div className="min-h-screen bg-stone-50 px-6 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-stone-900 lg:text-5xl mb-4">
            Нашите Продукти
          </h1>
          <p className="text-lg text-stone-600">
            Открийте най-новата агротехнология за вашето стопанство
          </p>
        </div>

        {/* 20-Product Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-md hover:shadow-lg transition-all hover:translate-y-[-2px]"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Left: Image */}
                <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0 overflow-hidden bg-stone-100 border-b md:border-b-0 md:border-r border-stone-200">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right: Content */}
                <div className="flex flex-col justify-between p-6 flex-grow">
                  <div>
                    {product.badge && (
                      <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 mb-3">
                        {product.badge}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-stone-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-stone-600 mb-4 line-clamp-2">
                      {product.shortDescription}
                    </p>

                    {/* Checklist */}
                    <ul className="space-y-2 mb-6">
                      {product.checklist.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-stone-700">
                          <CheckCircle2 className="size-4 text-emerald-600 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => setActiveProductId(product.id)}
                    className="w-full px-4 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 active:bg-emerald-800 transition-colors"
                  >
                    Научете повече →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
