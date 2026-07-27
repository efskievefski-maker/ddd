'use client'

import { Leaf } from 'lucide-react'

export function AgTechLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#065F46]">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-stone-900">TerraScan</span>
              <span className="text-xl font-bold text-emerald-700">Pro</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-stone-700 transition-colors hover:text-emerald-700">
              Особености
            </a>
            <a href="#system" className="text-sm font-medium text-stone-700 transition-colors hover:text-emerald-700">
              За системата
            </a>
            <a href="#products" className="text-sm font-medium text-stone-700 transition-colors hover:text-emerald-700">
              Продукти
            </a>
            <a href="#about" className="text-sm font-medium text-stone-700 transition-colors hover:text-emerald-700">
              За нас
            </a>
          </div>

          {/* CTA Button */}
          <button className="rounded-lg bg-[#F9A826] px-5 py-2 font-medium text-stone-900 transition-colors hover:bg-amber-600">
            Поръчай сега
          </button>
        </nav>
      </header>

      {/* Products Section */}
      <section id="products" className="bg-stone-50 px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-stone-900 lg:text-4xl">Нашите продукти</h2>
            <p className="mt-4 text-lg text-stone-600">Модерни решения за прецизното земеделие</p>
          </div>

          <div className="space-y-8">
            {/* Card 1: VertexV4 */}
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8 items-center">
                {/* Image */}
                <div className="order-2 md:order-1">
                  <img
                    src="https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?w=600&h=400&fit=crop"
                    alt="VertexV4"
                    className="rounded-lg object-cover w-full h-48 md:h-64"
                  />
                </div>

                {/* Content */}
                <div className="order-1 md:order-2 space-y-4">
                  <div>
                    <span className="inline-flex rounded-full bg-emerald-50 px-4 py-1 text-sm font-semibold text-emerald-700">
                      Мултисензорна почвена сонда
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-stone-900 lg:text-3xl">
                      VertexV4 Soil Sensor
                    </h3>
                  </div>
                  <p className="text-stone-600 leading-relaxed">
                    Вземайте по-точни решения за напояването, използвайте водата по-ефективно и реагирайте навреме при риск от воден или солеви стрес. Vertex 4 следи влагата, температурата и солеността на почвата.
                  </p>
                  <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 active:bg-emerald-800">
                    Научете повече
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: AquaSpy */}
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg transition-all hover:shadow-xl">
              <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8 items-center">
                {/* Image */}
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?w=600&h=400&fit=crop"
                    alt="AquaSpy"
                    className="rounded-lg object-cover w-full h-48 md:h-64"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <span className="inline-flex rounded-full bg-emerald-50 px-4 py-1 text-sm font-semibold text-emerald-700">
                      Безжична система за интелигентно напояване
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-stone-900 lg:text-3xl">
                      AquaSpy Crophesy LS-N
                    </h3>
                  </div>
                  <p className="text-stone-600 leading-relaxed">
                    Вижте докъде достига водата и кога да спрете напояването, за да използвате ресурсите по-ефективно. AquaSpy Crophesy LS-N проследява влагата, температурата и електропроводимостта по целия почвен профил.
                  </p>
                  <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 active:bg-emerald-800">
                    Научете повече
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
