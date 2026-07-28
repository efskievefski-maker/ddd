'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CtaButton } from '@/components/cta-button'
import { getAllProducts } from '@/lib/products-data'

export function ProductsCatalog() {
  const products = getAllProducts()

  return (
    <>
      {/* Fullscreen Product Sections */}
      {products.map((product) => (
        <section
          key={product.id}
          id={product.id}
          className="relative min-h-screen w-full bg-stone-50 px-6 py-20 sm:px-8 flex items-center"
        >
          <div className="w-full mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              {/* Left: Image */}
              <div className="relative flex items-center justify-center h-96 md:h-96 lg:h-96 rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-lg">
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    loading="eager"
                    priority={product.id === 'scanner-f'}
                  />
                </div>
              </div>

              {/* Right: Details */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  {product.badge && (
                    <span className="inline-flex w-fit rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 mb-4 block">
                      {product.badge}
                    </span>
                  )}
                  <h2 className="text-4xl font-bold text-stone-900 lg:text-5xl">
                    {product.title}
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-stone-700">
                  {product.shortDescription}
                </p>
                <div className="flex gap-4 pt-6">
                  <Link
                    href={
                      product.id === 'product-3' ? '/vertex-v4' : 
                      product.id === 'product-4' ? '/aquaspy' :
                      product.id === 'product-5' ? '/products/dragino' :
                      product.id === 'product-6' ? '/products/macsync' :
                      product.id === 'product-7' ? '/products/soiloptix' :
                      product.id === 'product-8' ? '/products/veris' :
                      product.id === 'product-9' ? '/products/soil-scout' :
                      product.id === 'product-10' ? '/products/libelium-smart-agriculture-xtreme' :
                      `/products/${product.id}`
                    }
                    className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 active:bg-emerald-800"
                  >
                    Научи повече
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
