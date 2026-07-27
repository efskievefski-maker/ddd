import { SiteHeader } from '@/components/site-header'
import { DraginoDetail } from '@/components/dragino-detail'
import { SiteFooter } from '@/components/site-footer'

export const metadata = {
  title: 'Dragino IoT Почвени Сензори — TerraScan Pro',
  description: 'Модулна IoT екосистема за полу-професионален мониторинг на почвата с LoRaWAN технология. Полу-професионално решение с отличното съотношение цена-качество.',
}

export default function DragineDetailPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <main>
        <DraginoDetail />
      </main>
      <SiteFooter />
    </div>
  )
}
