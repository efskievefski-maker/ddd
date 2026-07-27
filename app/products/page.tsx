import { SiteHeader } from '@/components/site-header'
import { ProductsCatalog } from '@/components/products-catalog'
import { SiteFooter } from '@/components/site-footer'

export const metadata = {
  title: 'Нашите Продукти — TerraScan Pro',
  description: 'Откройте премиум решения за прецизното земеделие — сканери, софтуер и аксесоари.',
}

export default function ProductsPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <main>
        <ProductsCatalog />
      </main>
      <SiteFooter />
    </div>
  )
}
