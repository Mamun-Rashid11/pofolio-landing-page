import { motion } from "framer-motion"
import { fadeUpBlur, staggerContainerSlow, viewportConfig } from "../lib/motion"

const steps = [
  {
    step: "01",
    title: "A lead finds your portfolio",
    desc: "Your public portfolio page showcases your work, reviews, and services. They browse and fill out your Discovery Form.",
    rotate: "-2deg",
  },
  {
    step: "02",
    title: "You convert the inquiry",
    desc: "The inquiry lands in your inbox with project type, budget, timeline, and contact info. Convert to a client with one click.",
    rotate: "2deg",
  },
  {
    step: "03",
    title: "You run the project",
    desc: "Create a project, add services with pricing, track status, and store website credentials in the Vault.",
    rotate: "-1deg",
  },
  {
    step: "04",
    title: "You send the invoice",
    desc: "Select the project and line items fill automatically. Choose a template, hit share. Client gets a link — no login required.",
    rotate: "2.5deg",
  },
  {
    step: "05",
    title: "You get paid, they leave a review",
    desc: "Mark the invoice Paid. Send a review link. The testimonial appears on your portfolio. The cycle closes.",
    rotate: "-1.5deg",
  },
]

export default function ProcessSteps() {
  return (
    <section id="workflow" className="py-24 md:py-32 bg-white">
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
            How it works
          </motion.p>
          <motion.h2 variants={fadeUpBlur}>
            From inquiry to invoice. Five steps.
          </motion.h2>
          <motion.p variants={fadeUpBlur}>
            One continuous loop from first contact to paid invoice and published testimonial.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {steps.map((step) => (
            <motion.div
              key={step.step}
              variants={fadeUpBlur}
              whileHover={{ y: -10, rotate: "0deg", scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col justify-between p-7 bg-white border"
              style={{
                rotate: step.rotate,
                minHeight: "280px",
                borderRadius: "2rem",
                borderColor: "var(--color-border)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "4rem",
                  fontWeight: 500,
                  lineHeight: 1,
                  color: "rgba(0,0,0,0.10)",
                  transition: "color 0.3s",
                }}
                className="group-hover:text-[#87E64B]/40"
              >
                {step.step}
              </span>
              <div>
                <h3 className="text-foreground" style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>
                  {step.title}
                </h3>
                <p className="text-muted-fg" style={{ fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Connector line (decorative, desktop) */}
        <div className="hidden lg:flex justify-center mt-8">
          <svg width="100%" height="2" viewBox="0 0 100 2" preserveAspectRatio="none" style={{ maxWidth: "900px" }}>
            <line x1="0" y1="1" x2="100" y2="1" stroke="#87E64B" strokeWidth="1.5" strokeDasharray="6 4" />
          </svg>
        </div>
      </div>
    </section>
  )
}
