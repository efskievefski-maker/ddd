'use client'

import { useState } from 'react'
import { Leaf, ArrowLeft, Droplets, Zap, Gauge, TrendingUp, Activity, Wind } from 'lucide-react'

export function AgtechDetailSystem() {
  const [activeProduct, setActiveProduct] = useState<'catalog' | 'vertex' | 'aquaspy'>('catalog')
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Order submitted:', formData)
    setFormData({ name: '', phone: '', email: '' })
  }

  // Global Header Component
  const Header = () => (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-[#065F46] rounded-lg p-2">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-stone-900">TerraScan</span>
            <span className="text-xl font-bold text-[#065F46]">Pro</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button className="text-stone-700 hover:text-emerald-700 font-medium transition">
            Особености
          </button>
          <button className="text-stone-700 hover:text-emerald-700 font-medium transition">
            За системата
          </button>
          <button
            onClick={() => setActiveProduct('catalog')}
            className="text-stone-700 hover:text-emerald-700 font-medium transition"
          >
            Продукти
          </button>
          <button className="text-stone-700 hover:text-emerald-700 font-medium transition">
            За нас
          </button>
        </nav>

        {/* CTA Button */}
        <button className="bg-[#F9A826] hover:bg-amber-600 text-stone-900 font-medium px-5 py-2 rounded-lg transition">
          Поръчай сега
        </button>
      </div>
    </header>
  )

  // Catalog View
  if (activeProduct === 'catalog') {
    return (
      <div className="min-h-screen bg-white">
        <Header />

        <main className="max-w-7xl mx-auto px-6 py-20">
          {/* Section 1: Vertex V4 */}
          <section className="mb-20 pb-20 border-b border-stone-200">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              {/* Left: Image */}
              <div className="rounded-lg overflow-hidden h-64 md:h-80 bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=600&h=400&fit=crop"
                  alt="Vertex V4 Soil Sensor"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right: Content */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-stone-900 mb-2">Vertex V4 Soil Sensor</h2>
                  <p className="text-sm font-medium text-emerald-700 bg-emerald-50 w-fit px-3 py-1 rounded-full">
                    Мултисензорна почвена сонда
                  </p>
                </div>
                <p className="text-lg text-stone-700 leading-relaxed">
                  Вземайте по-точни решения за напояването, използвайте водата по-ефективно и реагирайте навреме при риск от воден или солеви стрес.
                </p>
                <button
                  onClick={() => setActiveProduct('vertex')}
                  className="w-fit bg-[#065F46] hover:bg-[#054d38] text-white font-semibold py-3 px-8 rounded-lg transition"
                >
                  Научете повече →
                </button>
              </div>
            </div>
          </section>

          {/* Section 2: AquaSpy */}
          <section>
            <div className="grid gap-12 md:grid-cols-2 items-center">
              {/* Left: Image */}
              <div className="rounded-lg overflow-hidden h-64 md:h-80 bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop"
                  alt="AquaSpy Crophesy LS-N"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right: Content */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-stone-900 mb-2">AquaSpy Crophesy LS-N</h2>
                  <p className="text-sm font-medium text-emerald-700 bg-emerald-50 w-fit px-3 py-1 rounded-full">
                    Безжична система за интелигентно напояване
                  </p>
                </div>
                <p className="text-lg text-stone-700 leading-relaxed">
                  Вижте докъде достига водата и кога да спрете напояването, за да използвате ресурсите по-ефективно.
                </p>
                <button
                  onClick={() => setActiveProduct('aquaspy')}
                  className="w-fit bg-[#065F46] hover:bg-[#054d38] text-white font-semibold py-3 px-8 rounded-lg transition"
                >
                  Научете повече →
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }

  // Detail Page Template
  const renderDetailPage = (productName: string, subtitle: string, description: string) => (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <button
          onClick={() => setActiveProduct('catalog')}
          className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Назад към продуктите
        </button>
      </div>

      <main className="max-w-7xl mx-auto px-6 pb-20">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left: Image */}
            <div className="rounded-lg overflow-hidden h-80 md:h-96 bg-stone-100">
              <img
                src={
                  activeProduct === 'vertex'
                    ? 'https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=600&h=400&fit=crop'
                    : 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop'
                }
                alt={productName}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Info & Form */}
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl font-bold text-stone-900 mb-3">{productName}</h1>
                <p className="text-lg font-medium text-emerald-700">{subtitle}</p>
              </div>

              <p className="text-lg text-stone-700 leading-relaxed">{description}</p>

              {/* Order Form */}
              <form
                onSubmit={handleFormSubmit}
                className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6 space-y-4"
              >
                <h3 className="text-xl font-bold text-emerald-900">Заяви оферта</h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Вашето име"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Имейл"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition"
                >
                  Поръчай
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-stone-900 mb-10">Какво измерва {productName}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: 'Влажност', icon: Droplets },
              { name: 'Температура', icon: Zap },
              { name: 'Соленост', icon: Gauge },
              { name: 'pH', icon: Activity },
              { name: 'Водна проводимост', icon: TrendingUp },
              { name: 'Профилни данни', icon: Wind },
            ].map((metric, idx) => {
              const Icon = metric.icon
              return (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
                  <Icon className="w-8 h-8 text-emerald-600 mb-3" />
                  <p className="text-lg font-semibold text-stone-900">{metric.name}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Workflow Section */}
        <section>
          <h2 className="text-3xl font-bold text-stone-900 mb-10">Как работи</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { step: 1, title: 'Инсталация', desc: 'Поставете устройството в почвата' },
              { step: 2, title: 'Измерване', desc: 'Събиране на данни в реално време' },
              { step: 3, title: 'Анализ', desc: 'Получаване на препоръки' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )

  // Vertex Detail Page
  if (activeProduct === 'vertex') {
    return renderDetailPage(
      'Vertex V4 Soil Sensor',
      'Мултисензорна почвена сонда',
      'Вземайте по-точни решения за напояването, използвайте водата по-ефективно и реагирайте навреме при риск от воден или солеви стрес. Vertex 4 следи влагата, температурата и солеността на почвата, а платформата CropX превръща データните в конкретни препоръки — без кабели, допълнително оборудване или сложен монтаж.'
    )
  }

  // AquaSpy Detail Page
  if (activeProduct === 'aquaspy') {
    return renderDetailPage(
      'AquaSpy Crophesy LS-N',
      'Безжична система за интелигентно напояване',
      'Вижте докъде достига водата и кога да спрете напояването, за да използвате ресурсите по-ефективно. AquaSpy Crophesy LS-N проследява влагата, температурата и електропроводимостта по целия почвен профил и показва движението на водата в кореновата зона — напълно автономно, без кабели, външни устройства или сложен монтаж.'
    )
  }

  return null
}
