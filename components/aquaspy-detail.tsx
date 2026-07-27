'use client'

import Link from 'next/link'
import { 
  Leaf, 
  ArrowLeft, 
  Activity, 
  Droplet, 
  Thermometer, 
  Zap, 
  Layers, 
  Sun,
  Sprout,
  Cpu,
  BarChart3,
  CheckCircle2
} from 'lucide-react'

export default function AquaSpyDetail() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      
      {/* GLOBAL HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-stone-200 px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="w-10 h-10 bg-[#065F46] rounded-lg flex items-center justify-center text-white">
              <Leaf className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-stone-900">
              TerraScan <span className="text-emerald-700">Pro</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-stone-600 font-medium">
            <a href="#" className="hover:text-emerald-700 transition">Особености</a>
            <a href="#" className="hover:text-emerald-700 transition">За системата</a>
            <Link href="/products" className="text-emerald-700 font-semibold">Продукти</Link>
            <a href="#" className="hover:text-emerald-700 transition">За нас</a>
          </nav>

          <button className="bg-[#F9A826] hover:bg-amber-500 text-stone-900 font-semibold px-5 py-2.5 rounded-lg transition shadow-sm">
            Поръчай сега
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Back Button */}
        <Link 
          href="/products"
          className="flex items-center text-emerald-700 hover:text-emerald-800 font-medium mb-8 transition"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Назад към продуктите
        </Link>

        {/* Hero Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images.jfif-lyF9Ptz4IEso35dlJgMth6vXTIHx5e.jpeg" 
              alt="AquaSpy Crophesy LS-N" 
              className="w-full h-[400px] object-cover rounded-2xl shadow-sm border border-stone-200"
            />
          </div>
          <div>
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Безжична система за интелигентно напояване
            </span>
            <h1 className="text-3xl font-bold text-stone-900 mb-4">AquaSpy Crophesy LS-N</h1>
            <p className="text-stone-600 mb-6 leading-relaxed">
              AquaSpy Crophesy LS-N е безжична подпочвена сонда, специално проектирана за следене на водното съдържание и азота в активната коренова зона на вашите посеви.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-stone-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2" /> Мониторинг на кореновата зона в реално време
              </li>
              <li className="flex items-center text-stone-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2" /> Оптимизация на напояването и подхранването
              </li>
              <li className="flex items-center text-stone-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2" /> 100% автономна безжична свързаност
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 1: КАКВО ИЗМЕРВА */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-6 text-center">Какво измерва AquaSpy Crophesy LS-N</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Droplet, title: 'Почвена влажност', desc: 'Измерва водното съдържание на различни дълбочини.' },
              { icon: Zap, title: 'Електропроводимост (EC)', desc: 'Подпомага по-прецизното торене и навременното откриване на повишена соленост в почвата.' },
              { icon: Thermometer, title: 'Температура на почвата', desc: 'За оптимален контрол върху вегетацията.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex items-start space-x-4">
                <div className="p-3 bg-emerald-50 text-emerald-700 rounded-lg">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900">{item.title}</h4>
                  <p className="text-xs text-stone-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: КАК РАБОТИ */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-2">Как работи?</h2>
          <p className="text-stone-500 mb-10">Прост и ефикасен 3-етапен процес за подпочвен мониторинг</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 font-bold text-lg rounded-full flex items-center justify-center mb-4">1</div>
              <div className="text-amber-600 mb-3"><Sprout className="w-7 h-7" /></div>
              <h3 className="font-bold text-xl text-emerald-900 mb-3">Инсталиране на полето</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Сондата Crophesy LS-N се поставя лесно в кореновата зона на посева без да смущава почвената структура или обработката.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 font-bold text-lg rounded-full flex items-center justify-center mb-4">2</div>
              <div className="text-amber-600 mb-3"><Cpu className="w-7 h-7" /></div>
              <h3 className="font-bold text-xl text-emerald-900 mb-3">Автоматичен пренос</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Сензорите проследяват влагата и азота 24/7 и изпращат данните безжично към мобилното приложение.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 font-bold text-lg rounded-full flex items-center justify-center mb-4">3</div>
              <div className="text-amber-600 mb-3"><BarChart3 className="w-7 h-7" /></div>
              <h3 className="font-bold text-xl text-emerald-900 mb-3">Точно поливане</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Получавате ясни анализи кога и колко да поливате, за да постигнете максимален добив с минимални разходи.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: ЗАЯВИ ОФЕРТА (AT THE BOTTOM) */}
        <section className="bg-white border border-stone-200 rounded-2xl p-8 md:p-12 shadow-sm max-w-3xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2">Заяви оферта за AquaSpy Crophesy LS-N</h2>
            <p className="text-stone-600">Свържете се с нас за консултация и индивидуално предложение.</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Имена</label>
                <input type="text" placeholder="Вашите имена" className="w-full border border-stone-300 p-3 rounded-lg focus:outline-emerald-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Телефон</label>
                <input type="text" placeholder="0888 123 456" className="w-full border border-stone-300 p-3 rounded-lg focus:outline-emerald-600" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Имейл</label>
              <input type="email" placeholder="example@farm.bg" className="w-full border border-stone-300 p-3 rounded-lg focus:outline-emerald-600" />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Забележка / Запитване (незадължително)</label>
              <textarea rows={3} placeholder="Напишете допълнителни детайли..." className="w-full border border-stone-300 p-3 rounded-lg focus:outline-emerald-600"></textarea>
            </div>

            <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-lg transition shadow-sm text-lg mt-4">
              Заяви оферта / Поръчай
            </button>
          </form>
        </section>

      </main>
    </div>
  )
}
