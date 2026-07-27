'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Droplets, Cloud, Sun, Leaf } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'

export function LibeliumDetail() {
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
    console.log('Form submitted:', { ...formData, product: 'Libelium Smart Agriculture Xtreme' })
  }

  const metrics = [
    {
      title: 'Почва и напояване',
      description: 'Следете влагата, температурата, електропроводимостта, кислородните нива и водния потенциал на почвата. Така можете да определите по-точно кога и колко да напоявате, вместо да действате по фиксиран график или по предположение.',
      icon: Droplets,
    },
    {
      title: 'Микроклимат и време',
      description: 'Наблюдавайте температурата и влажността на въздуха, атмосферното налягане, валежите, скоростта и посоката на вятъра. Данните помагат за по-ранна реакция при горещини, застудяване, бури и резки промени в условията.',
      icon: Cloud,
    },
    {
      title: 'Светлина и радиация',
      description: 'Измервайте фотосинтетично активната, ултравиолетовата и късовълновата радиация. Получавате по-добра представа за условията за фотосинтеза, развитието на растенията и необходимостта от корекции в управлението на културата.',
      icon: Sun,
    },
    {
      title: 'Състояние на растенията',
      description: 'Следете листната влага, температурата на листната повърхност и промените в диаметъра на стъбла или плодове. Това помага да разпознаете по-рано воден стрес, риск от измръзване и неблагоприятни условия за развитие.',
      icon: Leaf,
    },
  ]

  const steps = [
    {
      number: 1,
      title: 'Конфигуриране според вашето стопанство',
      description: 'Към централния възел се свързват необходимите сензори за почва, климат и растения. Конфигурацията се избира според културата, терена и показателите, които са най-важни за вашата работа.',
    },
    {
      number: 2,
      title: 'Автоматично събиране и предаване',
      description: 'Системата обработва сигналите от сензорите и ги преобразува в цифрови данни. Информацията се предава автоматично чрез LoRaWAN, Sigfox, 4G или WiFi, без да е необходимо постоянно физическо присъствие на полето.',
    },
    {
      number: 3,
      title: 'Анализ, графики и навременни известия',
      description: 'Данните се визуализират в платформата на Libelium или във външна IoT система. Получавате ясни графики, исторически справки и автоматизирани известия, които ви помагат да реагирате преди критичните условия да причинят по-сериозен проблем.',
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
                src="/images/placeholder.png"
                alt="Libelium Smart Agriculture Xtreme"
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
                  Libelium Smart Agriculture Xtreme
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-stone-700">
                Вижте какво се случва в почвата, микроклимата и растенията, преди проблемът да се превърне в загуба.
              </p>
              <p className="text-lg leading-relaxed text-stone-700">
                Libelium Smart Agriculture Xtreme е професионална IoT платформа за прецизно земеделие, която събира данни от различни сензори и ги превръща в ясна информация за вземане на решения. Следете от едно място условията в лозя, овощни градини, оранжерии и отдалечени земеделски площи — без да разчитате единствено на периодични проверки и предположения.
              </p>
              <p className="text-lg leading-relaxed text-stone-700">
                Системата ви помага да определите кога е необходимо напояване, да разпознаете ранни признаци на стрес и да реагирате по-бързо при критични промени в условията.
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
              Какво ви помага да контролирате системата
            </h3>
            <p className="text-lg text-stone-600">
              Получавате цялостна картина на условията около культурите — от влагата в почвата до първите признаци на растителен стрес.
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
                Гъвкава конфигурация за всяка култура
              </h4>
              <p className="text-stone-700 leading-relaxed">
                Една система може да бъде конфигурирана според конкретната култура, терен и бизнес цел. Вместо да инвестирате в напълно ново решение при всяка промяна, можете да добавяте или заменяте сензори чрез защитени конектори.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-stone-900 mb-4">
                Надежда за отдалечени полета
              </h4>
              <p className="text-stone-700 leading-relaxed">
                Вградената акумулаторна батерия позволява продължителна работа на терен, а при необходимост системата може да бъде допълнена със соларен панел. Централният възел Waspmote Plug & Sense! се намира в подсилен водоустойчив корпус с клас IP65, проектиран за продължителна работа на открито в условия на прах, влага, слънчева радиация, корозия и механични въздействия.
              </p>
            </div>
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
              От полето до ясното решение в три стъпки
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
      <section className="px-6 py-16 sm:px-8 bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h3 className="text-3xl font-bold text-stone-900 mb-3">
              Заяви конфигурация за твоето стопанство
            </h3>
            <p className="text-lg text-stone-600">
              Разкажете ни какви култури отглеждате и кои показатели искате да наблюдавате. Ще ви предложим подходяща конфигурация на сензори, комуникация и захранване.
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
              Получи индивидуална оферта
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
