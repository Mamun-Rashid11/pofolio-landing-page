import { motion } from "framer-motion"
import { fadeUpBlur, staggerContainerSlow, viewportConfig } from "../lib/motion"

const stats = [
  { value: "500+", label: "Invoices generated" },
  { value: "200+", label: "Freelancers using Pofolio" },
  { value: "12", label: "Currencies supported" },
  { value: "5", label: "Invoice templates" },
]

const testimonials = [
  {
    quote: "I used to bounce between three apps just to send one invoice. Pofolio cut that down to one step.",
    author: "Web designer, freelance",
  },
  {
    quote: "The Website Vault alone was worth it. I had client passwords spread across sticky notes and emails.",
    author: "Freelance developer",
  },
  {
    quote: "My portfolio used to be a static site I updated twice a year. Now it reflects my actual work automatically.",
    author: "Brand designer, freelance",
  },
]

export default function StatsTestimonials() {
  return (
    <section className="py-24 md:py-32" style={{ background: "#18181b" }}>
      <div className="section-shell">
        <motion.p
          variants={fadeUpBlur}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="eyebrow-hand pb-8"
          style={{ color: "#a1a1aa" }}
        >
          Built for the way freelancers actually work
        </motion.p>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 pb-16"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUpBlur}>
              <strong style={{ display: "block", fontSize: "3rem", fontWeight: 700, color: "#f4f4f5", lineHeight: 1 }}>
                {s.value}
              </strong>
              <span style={{ display: "block", marginTop: "0.5rem", fontSize: "0.875rem", fontWeight: 600, color: "#71717a" }}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="grid gap-5 md:grid-cols-3 mt-14"
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {testimonials.map((t) => (
            <motion.article
              key={t.author}
              variants={fadeUpBlur}
              whileHover={{ y: -4 }}
              className="p-7 rounded-[2rem]"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Quote mark */}
              <div style={{ fontSize: "2rem", color: "#87E64B", lineHeight: 1, marginBottom: "1rem" }}>"</div>
              <p style={{ lineHeight: 1.75, color: "rgba(255,255,255,0.7)", margin: 0, fontSize: "0.9375rem" }}>
                {t.quote}
              </p>
              <p style={{ marginTop: "1.25rem", fontSize: "0.875rem", fontWeight: 700, color: "#87E64B" }}>
                {t.author}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
