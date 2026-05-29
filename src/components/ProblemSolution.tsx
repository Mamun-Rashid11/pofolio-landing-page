import { motion } from "framer-motion"
import { X, Check } from "lucide-react"
import { fadeUpBlur, staggerContainerSlow, viewportConfig } from "../lib/motion"

const problems = [
  { tool: "Spreadsheets", pain: "Client and project data scattered everywhere" },
  { tool: "Word / PDF invoices", pain: "No tracking, no status, no PDF design" },
  { tool: "Google Forms", pain: "Intake data doesn't connect to anything" },
  { tool: "Notion / docs", pain: "Testimonials sitting in a doc no one sees" },
  { tool: "Separate portfolio site", pain: "Manually updated, always out of date" },
  { tool: "Password managers", pain: "Not built for client website credentials" },
]

const solutions = [
  { feature: "Client and project management", benefit: "All clients, projects, and history in one place" },
  { feature: "Professional invoice generator", benefit: "5 templates, full tracking, shareable links" },
  { feature: "Discovery form and price estimator", benefit: "Submissions connect straight to your client record" },
  { feature: "Live testimonials and review links", benefit: "Published to your portfolio automatically" },
  { feature: "Auto-built public portfolio", benefit: "Always current — no manual updates needed" },
  { feature: "Website Vault for credentials", benefit: "Built specifically for client logins and passwords" },
]

export default function ProblemSolution() {
  return (
    <section className="py-24 md:py-32 bg-white">
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
            The problem
          </motion.p>
          <motion.h2 variants={fadeUpBlur}>
            Stop running your business across ten apps.
          </motion.h2>
          <motion.p variants={fadeUpBlur}>
            Most freelancers cobble together a stack of disconnected tools just to
            run their day-to-day. Every tool switch wastes time. Every gap causes mistakes.
          </motion.p>
        </motion.div>

        {/* 2-col split */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Before column */}
          <motion.div
            variants={fadeUpBlur}
            className="flex flex-col gap-5 p-8 md:p-10"
            style={{
              borderRadius: "2.5rem",
              background: "rgba(254,242,242,0.5)",
              border: "1px solid #fecaca",
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "#fee2e2", color: "#dc2626" }}
              >
                Before Pofolio
              </span>
            </div>
            <ul className="flex flex-col gap-4 list-none p-0 m-0">
              {problems.map((p) => (
                <li key={p.tool} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full"
                    style={{ background: "rgba(220,38,38,0.12)", color: "#dc2626" }}
                  >
                    <X size={12} strokeWidth={2.5} />
                  </span>
                  <div>
                    <p style={{ margin: 0, fontSize: "0.9375rem", fontWeight: 700, color: "#18181b" }}>{p.tool}</p>
                    <p style={{ margin: "0.25rem 0 0", fontSize: "0.875rem", lineHeight: 1.6, color: "#71717a" }}>{p.pain}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After column */}
          <motion.div
            variants={fadeUpBlur}
            className="flex flex-col gap-5 p-8 md:p-10"
            style={{
              borderRadius: "2.5rem",
              background: "rgba(135,230,75,0.05)",
              border: "1px solid rgba(135,230,75,0.2)",
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "rgba(135,230,75,0.2)", color: "#3f6212" }}
              >
                With Pofolio
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {solutions.map((s) => (
                <div
                  key={s.feature}
                  className="flex items-start gap-3 p-4 rounded-2xl"
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(135,230,75,0.2)",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  <span
                    className="mt-0.5 w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full"
                    style={{ background: "rgba(135,230,75,0.2)", color: "#3f6212" }}
                  >
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  <div>
                    <p style={{ margin: 0, fontSize: "0.9375rem", fontWeight: 700, color: "#18181b" }}>{s.feature}</p>
                    <p style={{ margin: "0.25rem 0 0", fontSize: "0.875rem", lineHeight: 1.6, color: "#71717a" }}>{s.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
        >
          <a href="https://trypofolio.com" className="btn-shimmer">Start for Free</a>
        </motion.div>
      </div>
    </section>
  )
}
