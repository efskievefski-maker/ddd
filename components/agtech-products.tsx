'use client'

import { useState } from 'react'
import { ArrowLeft, Leaf, Droplets, Zap, Gauge, Wind, BarChart3 } from 'lucide-react'

export function AgtechProducts() {
  const [activeProduct, setActiveProduct] = useState<'catalog' | 'vertex' | 'aquaspy'>('catalog')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', phone: '', email: '' })
  }

  // Global Header Component
  const GlobalHeader = () => (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#065F46] rounded-md flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <div className="font-bold text-lg">
            <span className="text-slate-800">TerraScan</span>
            <span className="text-[#065F46]"> Pro</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-slate-700 hover:text-slate-900 font-medium">
            Особености
          </a>
          <a href="#" className="text-slate-700 hover:text-slate-900 font-medium">
            За системата
          </a>
          <a href="#" className="text-slate-700 hover:text-slate-900 font-medium">
            Продукти
          </a>
          <a href="#" className="text-slate-700 hover:text-slate-900 font-medium">
            За нас
          </a>
        </nav>

        {/* CTA Button */}
        <button className="bg-[#F9A826] hover:bg-amber-600 text-slate-900 font-semibold px-6 py-2 rounded-full transition-colors">
          Поръчай сега
        </button>
      </div>
    </header>
  )

  // Catalog View
  if (activeProduct === 'catalog') {
    return (
      <div className="min-h-screen bg-stone-50">
        <GlobalHeader />
        <main className="flex flex-col">
          <section id="product-3" className="w-full bg-stone-50 py-20">
            <div className="w-full mx-auto max-w-6xl px-6">
              <div className="grid gap-12 md:grid-cols-2 items-center">
                <div className="rounded-lg overflow-hidden h-64 md:h-80">
                  <img
                    src="https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=600&h=400&fit=crop"
                    alt="Vertex V4 Soil Sensor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl">Vertex V4 Soil Sensor</h2>
                  </div>
                  <p className="text-lg leading-relaxed text-stone-700">
                    Вземайте по-точни решения за напояването, използвайте водата по-ефективно и реагирайте навреме при риск от воден или солеви стрес. Vertex 4 следи влагата, температурата и солеността на почвата, а платформата CropX превръща данните в конкретни препоръки — без кабели, допълнително оборудване или сложен монтаж.
                  </p>
                  <button
                    onClick={() => setActiveProduct('vertex')}
                    className="w-fit bg-[#065F46] hover:bg-[#054d38] text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                  >
                    Научете повече →
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section id="product-4" className="w-full bg-white py-20">
            <div className="w-full mx-auto max-w-6xl px-6">
              <div className="grid gap-12 md:grid-cols-2 items-center">
                <div className="rounded-lg overflow-hidden h-64 md:h-80">
                  <img
                    src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop"
                    alt="AquaSpy Crophesy LS-N"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl">AquaSpy Crophesy LS-N</h2>
                  </div>
                  <p className="text-lg leading-relaxed text-stone-700">
                    Вижте докъде достига водата и кога да спрете напояването, за да използвате ресурсите по-ефективно. AquaSpy Crophesy LS-N проследява влагата, температурата и електропроводимостта по целия почвен профил и показва движението на водата в кореновата зона — напълно автономно, без кабели, външни устройства или сложен монтаж.
                  </p>
                  <button
                    onClick={() => setActiveProduct('aquaspy')}
                    className="w-fit bg-[#065F46] hover:bg-[#054d38] text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                  >
                    Научете повече →
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }

  // Detail Page Template
  const DetailPage = ({
    productName,
    subtitle,
    imageSrc,
    description,
  }: {
    productName: string
    subtitle: string
    imageSrc: string
    description: string
  }) => (
    <div className="min-h-screen bg-stone-50">
      <GlobalHeader />

      {/* Back Button */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={() => setActiveProduct('catalog')}
            className="flex items-center gap-2 text-[#065F46] hover:text-[#054d38] font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Назад към продуктите
          </button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Hero Section */}
        <section className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left: Image */}
          <div className="rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-lg">
            <img src={imageSrc} alt={productName} className="w-full h-96 object-cover" />
          </div>

          {/* Right: Info & Form */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-[#065F46] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {subtitle}
              </span>
              <h1 className="text-4xl font-bold text-stone-900 mb-4">{productName}</h1>
              <p className="text-lg text-stone-600 leading-relaxed">{description}</p>
            </div>

            {/* Order Form */}
            <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-md">
              <h3 className="text-xl font-bold text-stone-900 mb-4">Заяви оферта</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Име</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Вашето име"
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#065F46] transition-all"
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
                    placeholder="+359 XXX XXX XXX"
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#065F46] transition-all"
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
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#065F46] transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#065F46] hover:bg-[#054d38] text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Заяви оферта
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Specifications Grid */}
        <section className="bg-white rounded-2xl border border-stone-200 p-12 shadow-md">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Какво измерва {productName}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Droplets, label: 'Влажност на почвата' },
              { icon: Gauge, label: 'pH Ниво' },
              { icon: Zap, label: 'Електропроводимост' },
              { icon: Wind, label: 'Температура' },
              { icon: BarChart3, label: 'Нива на хранилища' },
              { icon: Leaf, label: 'Органично вещество' },
            ].map((spec, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-stone-50 rounded-lg">
                <spec.icon className="w-8 h-8 text-[#065F46] flex-shrink-0" />
                <span className="text-stone-900 font-semibold">{spec.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow Section */}
        <section className="bg-white rounded-2xl border border-stone-200 p-12 shadow-md">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Как работи</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: '1',
                title: 'Инсталация',
                description: 'Поставете сензора на желаното място в полето.',
              },
              {
                step: '2',
                title: 'Синхронизация',
                description: 'Устройството автоматично се свързва с облачната платформа.',
              },
              {
                step: '3',
                title: 'Анализ и препоръки',
                description: 'Получавайте реално време данни и интелигентни препоръки.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-[#065F46] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )

  // VertexV4 Detail Page
  if (activeProduct === 'vertex') {
    return (
      <DetailPage
        productName="CropX Apex Soil Sensor"
        subtitle="Мултисензорна почвена сонда"
        imageSrc="https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=800"
        description="Вземайте по-точни решения за напояването, използвайте водата по-ефективно и реагирайте навреме при риск от воден или солеви стрес. Vertex 4 следи влагата, температурата и солеността на почвата, а платформата CropX превръща данните в конкретни препоръки — без кабели, допълнително оборудване или сложен монтаж."
      />
    )
  }

  // AquaSpy Detail Page
  if (activeProduct === 'aquaspy') {
    return (
      <DetailPage
        productName="AquaSpy Crophesy LS-N"
        subtitle="Безжична система за интелигентно напояване"
        imageSrc="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800"
        description="Вижте докъде достига водата и кога да спрете напояването, за да използвате ресурсите по-ефективно. AquaSpy Crophesy LS-N проследява влагата, температурата и електропроводимостта по целия почвен профил и показва движението на водата в кореновата зона — напълно автономно, без кабели, външни устройства или сложен монтаж."
      />
    )
  }

  return null
}
