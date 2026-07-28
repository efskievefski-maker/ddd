'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Sprout, Cpu, BarChart3, MapPin, Cloud, FileText } from 'lucide-react'
import { Product, iconMap } from '@/lib/products-data'
import { siteConfig } from '@/lib/site-config'

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  // Map step titles to icons for "Как работи" section
  const stepIcons = [Sprout, Cpu, BarChart3]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Back Navigation */}
      <div className="border-b border-stone-200 bg-white px-6 py-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors font-medium"
          >
            <ArrowLeft className="size-4" />
            Назад към продуктите
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            {/* Left: Product Image */}
            <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-lg">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-8"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                priority
              />
            </div>

            {/* Right: Product Info */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-stone-900 lg:text-5xl">
                {product.title}
              </h1>
              <p className="text-lg leading-relaxed text-stone-700">
                {product.longDescription}
              </p>
              {product.checklist.length > 0 && (
                <ul className="space-y-2 pt-4">
                  {product.checklist.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-stone-700">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                        <span className="text-xs font-bold text-emerald-700">✓</span>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-stone-50 px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl">
              {product.workflowTitle}
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Прост и ефикасен процес за анализ
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {product.steps.map((step, idx) => {
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

      {/* Specifications Section */}
      <section className="bg-white border-t border-stone-200 px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl">
              {product.measuresTitle}
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Комплетен анализ на почвата
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {product.measures.map((metric, idx) => {
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

      {/* Order Form Section - At Bottom */}
      {siteConfig.showQuoteButtons && (
      <section className="px-6 py-20 sm:px-8 bg-gradient-to-br from-emerald-50 to-stone-50">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-emerald-200 bg-white p-8 sm:p-12 shadow-lg">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-stone-900 mb-2">Заяви оферта</h2>
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
                    Местоположение / Размер на ферма
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
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
      )}
    </div>
  )
}
