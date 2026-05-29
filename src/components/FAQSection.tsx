import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { fadeUpBlur, staggerContainerSlow, viewportConfig } from "../lib/motion"

const faqs = [
  {
    q: "Who is Pofolio built for?",
    a: "Freelance web designers, developers, graphic designers, brand designers, and small creative agencies (1–5 people). Anyone who sends invoices, manages a client roster, and wants a portfolio that reflects their actual work.",
  },
  {
    q: "Is the free plan actually free forever?",
    a: "Yes. The core features (invoicing, client management, vault, portfolio) are free with no time limit.",
  },
  {
    q: "Do I need a credit card to start?",
    a: "No. Sign up with email. No card required.",
  },
  {
    q: "Can my clients access their invoices without an account?",
    a: "Yes. Every invoice has a shareable link your client opens in their browser. No login, no Pofolio account needed.",
  },
  {
    q: "Does Pofolio support international invoicing?",
    a: "Yes. Pofolio supports 12 currencies and 12 optional international compliance fields, including IBAN, Incoterms® 2020, HS codes, Tax ID / VAT numbers, Governing Law, Retention of Title, and Country of Origin.",
  },
  {
    q: "Does Pofolio work offline?",
    a: "Yes. All data saves to your browser's local storage. When you go back online, it syncs to the cloud automatically.",
  },
  {
    q: "Is my data secure?",
    a: "All data is stored in Supabase PostgreSQL with Row Level Security enabled. Your data is strictly isolated. No other user can read or write your records.",
  },
  {
    q: "Is Pofolio accounting software?",
    a: "No. It is the operating layer around freelance work: clients, projects, invoices, credentials, testimonials, and portfolio content. Not adapted from accounting software.",
  },
]

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      variants={fadeUpBlur}
      className="rounded-[1.5rem] overflow-hidden"
      style={{
        border: `1px solid ${open ? "rgba(135,230,75,0.35)" : "#e4e4e7"}`,
        background: open ? "rgba(135,230,75,0.03)" : "#fafafa",
        transition: "border-color 0.3s, background 0.3s",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left"
        style={{ padding: "1.375rem 1.5rem", cursor: "pointer", background: "transparent", border: "none" }}
        aria-expanded={open}
      >
        <span style={{ fontSize: "1rem", fontWeight: 700, color: "#18181b", lineHeight: 1.4 }}>
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          style={{
            flexShrink: 0,
            width: "1.75rem", height: "1.75rem",
            borderRadius: "9999px",
            background: open ? "#87E64B" : "#f4f4f5",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.25s",
          }}
        >
          <Plus size={14} color={open ? "#18181b" : "#71717a"} strokeWidth={2.5} />
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
            <p style={{
              padding: "0 1.5rem 1.375rem",
              margin: 0,
              fontSize: "0.9375rem",
              lineHeight: 1.75,
              color: "#71717a",
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
    <section id="faq" className="py-24 md:py-32" style={{ background: "oklch(0.97 0 0)", borderTop: "1px solid #e4e4e7" }}>
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
            style={{
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              fontWeight: 700,
              color: "#18181b",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              paddingBottom: "1rem",
            }}
          >
            Got questions?<br />We've got answers.
          </motion.h2>
          <motion.p variants={fadeUpBlur} style={{ fontSize: "1.125rem", color: "#71717a", lineHeight: 1.75 }}>
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
