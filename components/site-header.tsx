"use client"

import { useEffect, useState } from "react"
import { Leaf } from "lucide-react"
import { cn } from "@/lib/utils"
import { CtaButton } from "@/components/cta-button"
import { siteConfig } from "@/lib/site-config"

const NAV_LINKS = [
  { label: "Особености", href: "#features" },
  { label: "За системата", href: "#about" },
  { label: "Продукти", href: "/products" },
  { label: "За нас", href: "/about" },
]

export function SiteHeader() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY

    function onScroll() {
      const currentY = window.scrollY
      setScrolled(currentY > 8)
      // Hide on scroll-down (past a small threshold), show on scroll-up.
      if (currentY > lastY && currentY > 120) {
        setHidden(true)
      } else if (currentY < lastY) {
        setHidden(false)
      }
      lastY = currentY
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-transform duration-300",
        hidden ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <div
        className={cn(
          "border-b transition-colors",
          scrolled
            ? "border-border bg-background/90 backdrop-blur-md"
            : "border-transparent bg-background/60 backdrop-blur-sm",
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Leaf className="size-4" />
            </span>
            <span className="text-lg font-bold tracking-tight text-foreground">
              TerraScan<span className="text-primary"> Pro</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href === "/about" ? "_blank" : undefined}
                rel={link.href === "/about" ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {siteConfig.showQuoteButtons && (
            <CtaButton source="header" className="h-9 px-5">
              Поръчай сега
            </CtaButton>
          )}
        </div>
      </div>
    </header>
  )
}
