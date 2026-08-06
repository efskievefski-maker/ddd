'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Droplets, Thermometer, Zap, Gauge, TrendingUp } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { siteConfig } from '@/lib/site-config'

export function DrillAndDropDetail() {
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
    console.log('Form submitted:', { ...formData, product: 'Drill & Drop' })
  }

  const metrics = [
    {
      title: 'Почвена влага по дълбочина',
      description: 'Сензорите са разположени през 10 см и показват количеството вода на всяко ниво. Така можете да напоявате според реалните нужди на кореновата зона, вместо по фиксиран график.',
      icon: Droplets,
    },
    {
      title: 'Движение и загуби на вода',
      description: 'Проследявайте докъде достига водата след напояване и дали част от нея преминава под активната коренова зона, без да бъде използвана от растенията.',
      icon: TrendingUp,
    },
    {
      title: 'Температура и соленост',
      description: 'Наблюдавайте температурата в различните части на почвения профил и по избор промените в концентрацията на разтворени соли. Системата не идентифицира конкретни торове или хранителни елементи.',
      icon: Thermometer,
    },
    {
      title: 'Конфигурация според културата',
      description: 'Drill & Drop се предлага с дължина 30, 60, 90 и 120 см, което позволява избор според вида на культура и дълбочината на кореновата система.',
      icon: Gauge,
    },
  ]

  const steps = [
    {
      number: 1,
      title: 'Прецизен монтаж',
      description: 'Със специален конусовиден свредел се подготвя отвор, съответстващ на формата на сондата. Drill & Drop се поставя внимателно и не се забива директно в почвата. За максимална точност се препоръчва монтаж от обучен специалист.',
    },
    {
      number: 2,
      title: 'Автоматично събиране на данни',
      description: 'Сондата се свързва към телеметрично устройство на Sentek или съвместим външен логер чрез RS232, RS485, SDI-12 или Modbus. Предлага се и Bluetooth версия за изтегляне на данните чрез мобилен телефон.',
    },
    {
      number: 3,
      title: 'Анализ и известия',
      description: 'При съвместима телеметрия данните се изпращат към IrriMAX Live. Там можете да следите всяка дълбочина, да настройвате известия, да анализирате дневното използване на вода и да разпознавате тенденции в кореновата активност.',
    },
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
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left: Product Image */}
            <div className="relative w-full h-auto min-h-96 rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-lg flex items-center justify-center">
              <Image
                src="/images/drill-and-drop.png"
                alt="Drill & Drop"
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
                <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl">
                  Drill & Drop
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-stone-700">
                Вижте как водата се движи през цялата коренова зона, а не само какво се случва на повърхността.
              </p>
              <p className="text-lg leading-relaxed text-stone-700">
                Drill & Drop е профилна почвена сонда, която измерва влагата, температурата и по избор солеността на различни дълбочини. Така можете по-точно да определите кога и колко да напоявате, да проверите дали водата достига активните корени и да ограничите загубите под тях.
              </p>
              <p className="text-lg leading-relaxed text-stone-700">
                Напълно капсулованата конструкция позволява сондата да бъде изцяло заровена, което намалява риска от повреди от земеделска техника и я прави подходяща за дългосрочно наблюдение.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-white px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h3 className="text-3xl font-bold text-stone-900 mb-4">
              Какво измерва
            </h3>
            <p className="text-lg text-stone-600">
              Получавате ясна картина на влагата, температурата и солеността по целия почвен профил.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon
              return (
                <div key={idx} className="flex items-start gap-4 p-6 rounded-xl bg-stone-50 border border-stone-200 hover:border-stone-300 transition-colors">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-100">
                    <Icon className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-2">
                      {metric.title}
                    </h4>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="bg-stone-50 px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-bold text-stone-900 mb-4">
                Надежни измервания
              </h4>
              <p className="text-stone-700 leading-relaxed">
                Конусовидната форма и специалният монтажен свредел осигуряват плътен контакт с почвата без използване на почвена суспензия. Това ограничава въздушните кухини около сензорите и подобрява надеждността на данните.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-stone-900 mb-4">
                Защитена работа на терен
              </h4>
              <p className="text-stone-700 leading-relaxed">
                Сондата не изисква защитна тръба и може да бъде изцяло заровена. Това намалява риска от механични повреди и позволява краткосрочно или дългосрочно наблюдение.
              </p>
            </div>
          </div>
          <div className="mt-8 p-6 rounded-xl bg-white border border-stone-200">
            <p className="text-sm text-stone-600 leading-relaxed">
              <span className="font-semibold text-stone-900">Забележка:</span> Системата не измерва директно дълбочината на корените. Кореновата активност се оценява косвено чрез промените във влагата на различните нива.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-white px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h3 className="text-3xl font-bold text-stone-900 mb-4">
              Как работи?
            </h3>
            <p className="text-lg text-stone-600">
              От почвения профил до по-точно решение за напояване в три стъпки
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-600 text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-stone-900">
                  {step.title}
                </h4>
                <p className="text-stone-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      {siteConfig.showQuoteButtons && (
      <section className="px-6 py-16 sm:px-8 bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h3 className="text-3xl font-bold text-stone-900 mb-3">
              Получи информация за Drill & Drop™
            </h3>
            <p className="text-lg text-stone-600">
              Разкажете ни за вашите потребности и ние ще ви предложим подходяща конфигурация.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Имена"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Имейл"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <textarea
              name="notes"
              placeholder="Култури, площ, местоположение и показатели, които искате да наблюдавате"
              rows={5}
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <button
              type="submit"
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors"
            >
              Изпрати запитване
            </button>
          </form>
        </div>
      </section>
      )}
    </div>
  )
}
