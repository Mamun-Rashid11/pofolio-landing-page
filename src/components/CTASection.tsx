import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { fadeUpBlur, staggerContainerSlow, viewportConfig } from "../lib/motion"

const floatingPills = [
  { text: "10 apps to manage", type: "pain", style: { top: "18%", left: "6%" } },
  { text: "Manual invoices", type: "pain", style: { top: "42%", left: "3%" } },
  { text: "Scattered passwords", type: "pain", style: { bottom: "22%", left: "7%" } },
  { text: "One workspace", type: "brand", style: { top: "15%", right: "6%" } },
  { text: "Free to start", type: "brand", style: { top: "45%", right: "4%" } },
  { text: "No credit card", type: "brand", style: { bottom: "20%", right: "7%" } },
]

export default function CTASection() {
  return (
    <section id="waitlist" className="py-16 md:py-24 px-4 bg-white">
      <div className="section-shell">
        <div
          className="relative overflow-hidden px-6 py-20 md:px-16 md:py-28 text-center rounded-[3rem]"
          style={{ background: "oklch(0.04 0 0)" }}
        >
          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, rgba(135,230,75,0.12) 0%, transparent 55%)",
            }}
          />

          {/* Floating pills — desktop only */}
          {floatingPills.map((pill) => (
            <motion.div
              key={pill.text}
              className="absolute hidden lg:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                ...pill.style,
                background: pill.type === "brand" ? "var(--color-primary)" : "rgba(255,255,255,0.07)",
                color: pill.type === "brand" ? "var(--color-foreground)" : "rgba(255,255,255,0.5)",
                border: pill.type === "brand" ? "none" : "1px solid rgba(255,255,255,0.06)",
              }}
              animate={{ y: [-8, 8, -8] }}
              transition={{
                repeat: Infinity,
                duration: 4 + Math.random() * 2,
                ease: "easeInOut",
              }}
            >
              {pill.text}
            </motion.div>
          ))}

          {/* Content */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-7 max-w-2xl mx-auto"
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.p variants={fadeUpBlur} className="eyebrow-hand text-zinc-400">
              Early access
            </motion.p>
            <motion.h2
              variants={fadeUpBlur}
              className="text-zinc-100"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Everything you need.{" "}
              <span className="text-primary">Free to start.</span>
            </motion.h2>
            <motion.p
              variants={fadeUpBlur}
              style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75 }}
            >
              Pofolio is free to start. Takes 2 minutes to set up. No credit card required.
            </motion.p>

            {/* Email form */}
            <motion.form
              variants={fadeUpBlur}
              name="waitlist"
              method="post"
              className="w-full max-w-md flex flex-col gap-3"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "1.5rem",
                padding: "1.25rem",
              }}
            >
              <label className="sr-only" htmlFor="cta-email">Email address</label>
              <input
                id="cta-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@studio.com"
                className="text-zinc-100"
                style={{
                  minHeight: "3.25rem",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.06)",
                  padding: "0 1.25rem",
                  outline: "none",
                  fontSize: "0.9375rem",
                }}
              />
              <button
                type="submit"
                className="flex items-center justify-between text-foreground"
                style={{
                  minHeight: "3.25rem",
                  borderRadius: "9999px",
                  background: "var(--color-background)",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  border: "none",
                  cursor: "pointer",
                  padding: "0.5rem 0.5rem 0.5rem 1.5rem",
                  transition: "background 0.18s",
                }}
              >
                <span>Create Your Free Account</span>
                <span
                  className="text-foreground"
                  style={{
                    width: "2.25rem", height: "2.25rem",
                    borderRadius: "9999px",
                    background: "var(--color-primary)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <ArrowRight size={16} />
                </span>
              </button>
              <p style={{ textAlign: "center", fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.3)", margin: 0 }}>
                No credit card required · Free plan available
              </p>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
