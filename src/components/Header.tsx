"use client"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { navLinks } from "../data/nav"

export default function Header() {
  const [hidden, setHidden] = useState(false)
  const [shrink, setShrink] = useState(false)
  const [active, setActive] = useState("")
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY.current && y > 80)
      setShrink(y > 20)
      lastY.current = y

      // highlight active section
      for (const link of [...navLinks].reverse()) {
        const el = document.getElementById(link.id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(link.id)
          return
        }
      }
      setActive("")
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: -120 } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-4 md:pt-6"
    >
      <div
        className={[
          "flex items-center justify-between pointer-events-auto",
          "bg-white/70 backdrop-blur-xl border border-white/20",
          "shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-full",
          "w-[95%] md:w-auto md:min-w-[600px] lg:min-w-[820px]",
          shrink ? "px-5 py-2 scale-[0.98]" : "px-6 py-3 scale-100",
          "transition-all duration-300",
        ].join(" ")}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline" aria-label="Pofolio home">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-foreground text-white font-black text-[0.9375rem]">P</span>
          <span className="text-base font-black text-foreground">Pofolio</span>
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollTo(e, link.id)}
              className="relative px-4 py-2 text-sm font-semibold no-underline"
              style={{ color: active === link.id ? "var(--color-foreground)" : "var(--color-muted-fg)" }}
            >
              {link.label}
              <AnimatePresence>
                {active === link.id && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-0.5 left-2 right-2 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </AnimatePresence>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://trypofolio.com"
          className="btn-shimmer"
          style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}
        >
          Start for Free
        </a>
      </div>
    </motion.header>
  )
}
