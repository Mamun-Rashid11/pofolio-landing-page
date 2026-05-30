import { motion } from "framer-motion"
import { fadeUpBlur, staggerContainerSlow, viewportConfig } from "../lib/motion"
import { stats, testimonials } from "../data/testimonials"

export default function StatsTestimonials() {
  return (
    <section className="py-24 md:py-32" style={{ background: "var(--color-foreground)" }}>
      <div className="section-shell">
        <motion.p
          variants={fadeUpBlur}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="eyebrow-hand pb-8"
          className="text-zinc-400"
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
              <strong className="text-zinc-100" style={{ display: "block", fontSize: "3rem", fontWeight: 700, lineHeight: 1 }}>
                {s.value}
              </strong>
              <span className="text-muted-fg" style={{ display: "block", marginTop: "0.5rem", fontSize: "0.875rem", fontWeight: 600 }}>
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
              <div className="text-primary" style={{ fontSize: "2rem", lineHeight: 1, marginBottom: "1rem" }}>"</div>
              <p style={{ lineHeight: 1.75, color: "rgba(255,255,255,0.7)", margin: 0, fontSize: "0.9375rem" }}>
                {t.quote}
              </p>
              <p className="text-primary" style={{ marginTop: "1.25rem", fontSize: "0.875rem", fontWeight: 700 }}>
                {t.author}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
