'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Check, Leaf, Droplets, Zap, Gauge, Sprout, Cpu, BarChart3 } from 'lucide-react'

export function ProductsUnified() {
  const [currentPage, setCurrentPage] = useState<'catalog' | 'vertex' | 'aquaspy' | 'dragino'>('catalog')
  const [isHydrated, setIsHydrated] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
  })

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', phone: '', email: '', location: '' })
  }

  if (!isHydrated) {
    return null
  }

  if (currentPage === 'dragino') {
    return (
      <div className="min-h-screen bg-stone-50">
        {/* Back Button */}
        <div className="px-6 py-8 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <button
              onClick={() => setCurrentPage('catalog')}
              className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-semibold transition-colors"
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
                  src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500&h=500&fit=crop"
                  alt="Dragino Soil Moisture Sensor"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right: Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-stone-900 lg:text-5xl mb-2">
                    Dragino Soil Moisture Sensor
                  </h1>
                  <p className="text-sm font-semibold text-emerald-700 mb-4">
                    Сензор за почвена влажност
                  </p>
                  <p className="text-lg leading-relaxed text-stone-700">
                    Dragino е надежден и точен сензор за измерване на влажност на почвата. Позволява на земеделските производители да оптимизират напояването и да максимизират приноса на урожая чрез непрекъснен мониторинг на почвените условия.
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="size-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-stone-700">Висока точност на измерванията</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="size-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-stone-700">Дълга жизнен цикъл на батерията</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="size-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-stone-700">Лесна инсталация и използване</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="bg-white border-t border-stone-200 px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl">
                Какво измерва?
              </h2>
              <p className="mt-4 text-lg text-stone-600">
                Комплетен анализ на почвената влажност
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Metric 1 */}
              <div className="flex items-center gap-4 rounded-xl bg-stone-50 p-6 transition-all hover:shadow-md">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Droplets className="size-6" />
                </span>
                <h3 className="font-semibold text-stone-900">Влажност на почвата</h3>
              </div>

              {/* Metric 2 */}
              <div className="flex items-center gap-4 rounded-xl bg-stone-50 p-6 transition-all hover:shadow-md">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Zap className="size-6" />
                </span>
                <h3 className="font-semibold text-stone-900">Съдържание на воду</h3>
              </div>

              {/* Metric 3 */}
              <div className="flex items-center gap-4 rounded-xl bg-stone-50 p-6 transition-all hover:shadow-md">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Gauge className="size-6" />
                </span>
                <h3 className="font-semibold text-stone-900">Диэлектрична константа</h3>
              </div>

              {/* Metric 4 */}
              <div className="flex items-center gap-4 rounded-xl bg-stone-50 p-6 transition-all hover:shadow-md">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Leaf className="size-6" />
                </span>
                <h3 className="font-semibold text-stone-900">Температура</h3>
              </div>

              {/* Metric 5 */}
              <div className="flex items-center gap-4 rounded-xl bg-stone-50 p-6 transition-all hover:shadow-md">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Gauge className="size-6" />
                </span>
                <h3 className="font-semibold text-stone-900">Дълбочина на сензора</h3>
              </div>

              {/* Metric 6 */}
              <div className="flex items-center gap-4 rounded-xl bg-stone-50 p-6 transition-all hover:shadow-md">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Droplets className="size-6" />
                </span>
                <h3 className="font-semibold text-stone-900">Калибриране</h3>
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
                Трибетапен процес за максимална ефективност
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid gap-8 md:grid-cols-3">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white transition-all hover:shadow-lg hover:translate-y-[-4px]">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <span className="text-3xl font-bold text-emerald-600">1</span>
                </div>
                <Sprout className="mb-4 size-8 text-amber-700" />
                <h3 className="text-xl font-bold text-emerald-800 mb-3">
                  Инсталация
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  Поставете сензора в почвата на желаната дълбочина за оптимално измерване.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white transition-all hover:shadow-lg hover:translate-y-[-4px]">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <span className="text-3xl font-bold text-emerald-600">2</span>
                </div>
                <Cpu className="mb-4 size-8 text-amber-700" />
                <h3 className="text-xl font-bold text-emerald-800 mb-3">
                  Събиране на данни
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  Сензорът непрекъснато следи влажността и температурата на почвата.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white transition-all hover:shadow-lg hover:translate-y-[-4px]">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <span className="text-3xl font-bold text-emerald-600">3</span>
                </div>
                <BarChart3 className="mb-4 size-8 text-amber-700" />
                <h3 className="text-xl font-bold text-emerald-800 mb-3">
                  Анализ и препоръки
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  Получавате препоръки за оптимално управление на напояването.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Order Form Section - At Bottom */}
        <section className="px-6 py-20 sm:px-8 bg-gradient-to-br from-emerald-50 to-stone-50">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border border-emerald-200 bg-white p-8 sm:p-12 shadow-lg">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-stone-900 mb-2">Заяви оферта за Dragino</h2>
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
      </div>
    )
  }

  if (currentPage === 'detail') {
    return (
      <div className="min-h-screen bg-stone-50">
        {/* Back Button */}
        <div className="px-6 py-8 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <button
              onClick={() => setCurrentPage('catalog')}
              className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-semibold transition-colors"
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
                  src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500&h=500&fit=crop"
                  alt="Product image"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right: Product Info & Form */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-stone-900 lg:text-5xl mb-4">
                    Производна Технология
                  </h1>
                  <p className="text-lg leading-relaxed text-stone-700">
                    Това е наше дълго и подробно описание на продукта. Той включва всички важни технически характеристики, преимущества и как той решава нужди на земеделските производители. Описанието може да бъде толкова дълго, колкото е необходимо за да обясни всички аспекти на продукта.
                  </p>
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
                Трибетапен процес за максимална ефективност
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid gap-8 md:grid-cols-3">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white transition-all hover:shadow-lg hover:translate-y-[-4px]">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <span className="text-3xl font-bold text-emerald-600">1</span>
                </div>
                <Sprout className="mb-4 size-8 text-amber-700" />
                <h3 className="text-xl font-bold text-emerald-800 mb-3">
                  Първи етап
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  Описание на първия етап от процеса, което обяснява какво се случва на начало.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white transition-all hover:shadow-lg hover:translate-y-[-4px]">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <span className="text-3xl font-bold text-emerald-600">2</span>
                </div>
                <Cpu className="mb-4 size-8 text-amber-700" />
                <h3 className="text-xl font-bold text-emerald-800 mb-3">
                  Втори етап
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  Описание на втория етап от процеса с детайли за обработката на информацията.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white transition-all hover:shadow-lg hover:translate-y-[-4px]">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <span className="text-3xl font-bold text-emerald-600">3</span>
                </div>
                <BarChart3 className="mb-4 size-8 text-amber-700" />
                <h3 className="text-xl font-bold text-emerald-800 mb-3">
                  Трети етап
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  Описание на третия етап с финални резултати и препоръки.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="bg-white border-t border-stone-200 px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl">
                Какво измерва?
              </h2>
              <p className="mt-4 text-lg text-stone-600">
                Комплетен анализ с шест критични параметра
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Metric 1 */}
              <div className="flex items-center gap-4 rounded-xl bg-stone-50 p-6 transition-all hover:shadow-md">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Leaf className="size-6" />
                </span>
                <h3 className="font-semibold text-stone-900">pH на почвата</h3>
              </div>

              {/* Metric 2 */}
              <div className="flex items-center gap-4 rounded-xl bg-stone-50 p-6 transition-all hover:shadow-md">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Droplets className="size-6" />
                </span>
                <h3 className="font-semibold text-stone-900">Влажност</h3>
              </div>

              {/* Metric 3 */}
              <div className="flex items-center gap-4 rounded-xl bg-stone-50 p-6 transition-all hover:shadow-md">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Zap className="size-6" />
                </span>
                <h3 className="font-semibold text-stone-900">Азот (N)</h3>
              </div>

              {/* Metric 4 */}
              <div className="flex items-center gap-4 rounded-xl bg-stone-50 p-6 transition-all hover:shadow-md">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Gauge className="size-6" />
                </span>
                <h3 className="font-semibold text-stone-900">Фосфор (P)</h3>
              </div>

              {/* Metric 5 */}
              <div className="flex items-center gap-4 rounded-xl bg-stone-50 p-6 transition-all hover:shadow-md">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Leaf className="size-6" />
                </span>
                <h3 className="font-semibold text-stone-900">Калий (K)</h3>
              </div>

              {/* Metric 6 */}
              <div className="flex items-center gap-4 rounded-xl bg-stone-50 p-6 transition-all hover:shadow-md">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Droplets className="size-6" />
                </span>
                <h3 className="font-semibold text-stone-900">Органика</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Order Form Section - At Bottom */}
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
      </div>
    )
  }

  // Catalog View
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Product 1 */}
      <section className="w-full px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left: Image */}
            <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500&h=500&fit=crop"
                alt="Product 1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-stone-900 mb-2">
                  Име на първия продукт
                </h2>
                <p className="text-sm font-semibold text-emerald-700 mb-4">
                  Категория / Тип 1
                </p>
                <p className="text-lg text-stone-700 leading-relaxed">
                  Кратко описание на първия продукт за основната страница с ключови преимущества и характеристики.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="size-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-stone-700">Преимущество първо</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="size-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-stone-700">Преимущество второ</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="size-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-stone-700">Преимущество трето</span>
                </li>
              </ul>
              <button
                onClick={() => setCurrentPage('detail')}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 active:bg-emerald-800"
              >
                Научете повече
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product 2 */}
      <section className="w-full px-6 py-20 sm:px-8 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left: Image */}
            <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=500&fit=crop"
                alt="Product 2"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-stone-900 mb-2">
                  Име на втория продукт
                </h2>
                <p className="text-sm font-semibold text-emerald-700 mb-4">
                  Категория / Тип 2
                </p>
                <p className="text-lg text-stone-700 leading-relaxed">
                  Кратко описание на втория продукт за основната страница с ключови преимущества и характеристики.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="size-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-stone-700">Преимущество първо</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="size-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-stone-700">Преимущество второ</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="size-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-stone-700">Преимущество трето</span>
                </li>
              </ul>
              <button
                onClick={() => setCurrentPage('detail')}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 active:bg-emerald-800"
              >
                Научете повече
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product 3 */}
      <section className="w-full px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left: Image */}
            <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1573536234723-a054bb029099?w=500&h=500&fit=crop"
                alt="Product 3"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-stone-900 mb-2">
                  Име на третия продукт
                </h2>
                <p className="text-sm font-semibold text-emerald-700 mb-4">
                  Категория / Тип 3
                </p>
                <p className="text-lg text-stone-700 leading-relaxed">
                  Кратко описание на третия продукт за основната страница с ключови преимущества и характеристики.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="size-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-stone-700">Преимущество първо</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="size-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-stone-700">Преимущество второ</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="size-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-stone-700">Преимущество трето</span>
                </li>
              </ul>
              <button
                onClick={() => setCurrentPage('detail')}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 active:bg-emerald-800"
              >
                Научете повече
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product 4 */}
      <section className="w-full px-6 py-20 sm:px-8 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left: Image */}
            <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=500&h=500&fit=crop"
                alt="Product 4"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-stone-900 mb-2">
                  Име на четвъртия продукт
                </h2>
                <p className="text-sm font-semibold text-emerald-700 mb-4">
                  Категория / Тип 4
                </p>
                <p className="text-lg text-stone-700 leading-relaxed">
                  Кратко описание на четвъртия продукт за основната страница с ключови преимущества и характеристики.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="size-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-stone-700">Преимущество първо</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="size-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-stone-700">Преимущество второ</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="size-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-stone-700">Преимущество трето</span>
                </li>
              </ul>
              <button
                onClick={() => setCurrentPage('detail')}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 active:bg-emerald-800"
              >
                Научете повече
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product 5 */}
      <section className="w-full px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left: Image */}
            <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop"
                alt="Product 5"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-stone-900 mb-2">
                  Име на петия продукт
                </h2>
                <p className="text-sm font-semibold text-emerald-700 mb-4">
                  Категория / Тип 5
                </p>
                <p className="text-lg text-stone-700 leading-relaxed">
                  Кратко описание на петия продукт за основната страница с ключови преимущества и характеристики.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="size-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-stone-700">Преимущество първо</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="size-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-stone-700">Преимущество второ</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="size-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-stone-700">Преимущество трето</span>
                </li>
              </ul>
              <button
                onClick={() => setCurrentPage('detail')}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 active:bg-emerald-800"
              >
                Научете повече
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dragino Product */}
      <section className="w-full px-6 py-20 sm:px-8 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left: Image */}
            <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop"
                alt="Dragino Soil Moisture Sensor"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-stone-900 mb-2">
                  Dragino Soil Moisture Sensor
                </h2>
                <p className="text-sm font-semibold text-emerald-700 mb-4">
                  Сензор за почвена влажност
                </p>
                <p className="text-lg text-stone-700 leading-relaxed">
                  Dragino е надежден и точен сензор за измерване на влажност на почвата. Позволява на земеделските производители да оптимизират напояването и да максимизират приноса на урожая чрез непрекъснат мониторинг на почвените условия.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="size-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-stone-700">Висока точност на измерванията</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="size-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-stone-700">Дълга жизнен цикъл на батерията</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="size-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-stone-700">Лесна инсталация и използване</span>
                </li>
              </ul>
              <button
                onClick={() => setCurrentPage('dragino')}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 active:bg-emerald-800"
              >
                Научете повече
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
