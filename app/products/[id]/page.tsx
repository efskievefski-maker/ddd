import { notFound } from 'next/navigation'
import { ProductDetail } from '@/components/product-detail'
import { getProductById } from '@/lib/products-data'

export const dynamicParams = true

export async function generateStaticParams() {
  const products = (await import('@/lib/products-data')).PRODUCTS
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}
