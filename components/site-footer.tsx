import { Leaf } from "lucide-react"

const FOOTER_LINKS = [
  {
    heading: "Продукт",
    links: ["Особености", "За системата", "Поддръжка"],
  },
  {
    heading: "Компания",
    links: ["За нас", "Контакти", "Помощ", "Кариери"],
  },
  {
    heading: "Правни",
    links: ["Политика за поверителност", "Условия на услуга", "Гаранция"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="flex flex-col gap-3">
            <a href="#top" className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Leaf className="size-4" />
              </span>
              <span className="text-lg font-bold tracking-tight text-foreground">
                TerraScan<span className="text-primary"> Pro</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Анализ на почвата с лабораторна точност в дланта на вашата ръка.
            </p>
          </div>

          {FOOTER_LINKS.map((column) => (
            <div key={column.heading} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-foreground">
                {column.heading}
              </h3>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} TerraScan Pro. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  )
}
