import { motion } from "framer-motion"
import { fadeUpBlur, staggerContainerSlow, viewportConfig } from "../lib/motion"
import { features } from "../data/features"

export default function ServicesSection() {
  return (
    <section id="features" className="py-24 md:py-32 relative" style={{ background: "oklch(0.97 0 0)" }}>
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right,#80808012 1px,transparent 1px),linear-gradient(to bottom,#80808012 1px,transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%,#000 70%,transparent 100%)",
        }}
      />

      <div className="section-shell relative z-10">
        {/* Heading */}
        <motion.div
          className="section-heading"
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.p variants={fadeUpBlur} className="eyebrow-hand pb-2">
            Everything you need
          </motion.p>
          <motion.h2 variants={fadeUpBlur}>
            All your tools. One workspace.
          </motion.h2>
          <motion.p variants={fadeUpBlur}>
            Invoicing, client management, credentials, portfolio, and leads — built
            specifically for freelance web designers and developers.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {features.map((f) => {
            const Icon = f.icon
            return (
              <motion.article
                key={f.index}
                variants={fadeUpBlur}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col justify-between h-full p-8 card-base"
                style={{ borderRadius: "2rem" }}
              >
                <div className="flex items-start justify-between mb-6">
                  {/* Icon box */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl transition-transform duration-500 group-hover:rotate-12 bg-primary text-primary-fg">
                    <Icon size={20} />
                  </div>
                  {/* Index badge */}
                  <span className="px-3 py-1 border rounded-lg text-xs font-mono border-border text-zinc-400">
                    {f.index}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-foreground" style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                    {f.title}
                  </h3>
                  <p className="text-muted-fg" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                    {f.desc}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {f.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border rounded-full text-xs font-semibold transition-colors duration-200 text-muted-fg border-border group-hover:border-[#87E64B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
