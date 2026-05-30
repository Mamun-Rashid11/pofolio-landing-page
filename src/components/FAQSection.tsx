import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { fadeUpBlur, staggerContainerSlow, viewportConfig } from "../lib/motion"
import { faqs, type FAQ } from "../data/faqs"

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      variants={fadeUpBlur}
      className="rounded-[1.5rem] overflow-hidden"
      style={{
        border: `1px solid ${open ? "rgba(135,230,75,0.35)" : "var(--color-border)"}`,
        background: open ? "rgba(135,230,75,0.03)" : "var(--color-muted)",
        transition: "border-color 0.3s, background 0.3s",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left"
        style={{ padding: "1.375rem 1.5rem", cursor: "pointer", background: "transparent", border: "none" }}
        aria-expanded={open}
      >
        <span className="text-foreground" style={{ fontSize: "1rem", fontWeight: 700, lineHeight: 1.4 }}>
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          style={{
            flexShrink: 0,
            width: "1.75rem", height: "1.75rem",
            borderRadius: "9999px",
            background: open ? "var(--color-primary)" : "var(--color-muted)",
            color: open ? "var(--color-foreground)" : "var(--color-muted-fg)",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.25s",
          }}
        >
          <Plus size={14} strokeWidth={2.5} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="text-muted-fg" style={{
              padding: "0 1.5rem 1.375rem",
              margin: 0,
              fontSize: "0.9375rem",
              lineHeight: 1.75,
            }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-32" style={{ background: "var(--color-muted)", borderTop: "1px solid var(--color-border)" }}>
      <div className="section-shell">
        {/* Heading */}
        <motion.div
          className="section-heading"
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.p variants={fadeUpBlur} className="eyebrow-hand pb-2">
            Common questions
          </motion.p>
          <motion.h2
            variants={fadeUpBlur}
            className="text-foreground"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              paddingBottom: "1rem",
            }}
          >
            Got questions?<br />We've got answers.
          </motion.h2>
          <motion.p variants={fadeUpBlur} className="text-muted-fg" style={{ fontSize: "1.125rem", lineHeight: 1.75 }}>
            Everything you need to know before getting started.
          </motion.p>
        </motion.div>

        {/* FAQ list */}
        <motion.div
          className="flex flex-col gap-3 max-w-3xl mx-auto"
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.q} faq={faq} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
