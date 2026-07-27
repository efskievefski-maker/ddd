"use client"

import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { trackConversion } from "@/lib/track"

const CHECKOUT_URL = "/checkout"

type CtaButtonProps = {
  /** Identifies where the click originated, for conversion tracking. */
  source: string
  children: React.ReactNode
  className?: string
  size?: "default" | "lg"
  showArrow?: boolean
}

export function CtaButton({
  source,
  children,
  className,
  size = "default",
  showArrow = false,
}: CtaButtonProps) {
  function handleClick() {
    trackConversion(source)
    window.location.href = CHECKOUT_URL
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-lg bg-accent font-semibold text-accent-foreground shadow-sm transition-all hover:bg-accent/90 hover:shadow-md active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        size === "lg" ? "h-13 px-8 text-base" : "h-11 px-6 text-sm",
        className,
      )}
    >
      {children}
      {showArrow && (
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </button>
  )
}
