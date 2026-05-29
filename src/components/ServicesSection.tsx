import { motion } from "framer-motion"
import { FileText, Users, Lock, Globe, ClipboardList, Wrench } from "lucide-react"
import { fadeUpBlur, staggerContainerSlow, viewportConfig } from "../lib/motion"

const services = [
  {
    icon: FileText,
    eyebrow: "01",
    title: "Invoice Generator",
    desc: "Professional PDF invoices in seconds. 5 templates, 12 currencies, shareable links — no client login needed.",
    tags: ["5 PDF templates", "12 currencies", "International compliance"],
  },
  {
    icon: Users,
    eyebrow: "02",
    title: "Client & Project Management",
    desc: "Full client directory with financial history. Projects feed directly into invoice quick-fill.",
    tags: ["Client profiles", "Project statuses", "Financial overview"],
  },
  {
    icon: Lock,
    eyebrow: "03",
    title: "Website Vault",
    desc: "Every client credential in one searchable list. Masked passwords, click-to-reveal, copy all at once.",
    tags: ["Masked passwords", "Click-to-copy", "Searchable"],
  },
  {
    icon: Globe,
    eyebrow: "04",
    title: "Built-In Portfolio",
    desc: "Auto-generated portfolio from your real project data. Live testimonials, client logos, inbound leads.",
    tags: ["Auto-updated", "Live testimonials", "Discovery Form"],
  },
  {
    icon: ClipboardList,
    eyebrow: "05",
    title: "Discovery Form + Estimator",
    desc: "Leads qualify themselves before you talk. Real-time price estimate shown as they fill it.",
    tags: ["Public form", "Live estimate", "Inquiries inbox"],
  },
  {
    icon: Wrench,
    eyebrow: "06",
    title: "Maintenance Plans",
    desc: "Track every website maintenance contract. Custom checklists, one-click invoice generation.",
    tags: ["Active / Paused / Cancelled", "Custom checklists", "One-click billing"],
  },
]

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
          {services.map((svc) => {
            const Icon = svc.icon
            return (
              <motion.article
                key={svc.eyebrow}
                variants={fadeUpBlur}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col justify-between h-full p-8 card-base"
                style={{ borderRadius: "2rem" }}
              >
                <div className="flex items-start justify-between mb-6">
                  {/* Icon box */}
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-2xl transition-transform duration-500 group-hover:rotate-12"
                    style={{ background: "#87E64B", color: "#18181b" }}
                  >
                    <Icon size={20} />
                  </div>
                  {/* Index badge */}
                  <span
                    className="px-3 py-1 border rounded-lg text-xs font-mono"
                    style={{ borderColor: "#e4e4e7", color: "#a1a1aa" }}
                  >
                    {svc.eyebrow}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#18181b", marginBottom: "0.75rem" }}>
                    {svc.title}
                  </h3>
                  <p style={{ fontSize: "0.9375rem", color: "#71717a", lineHeight: 1.65 }}>
                    {svc.desc}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border rounded-full text-xs font-semibold transition-colors duration-200 group-hover:border-[#87E64B]"
                      style={{ borderColor: "#e4e4e7", color: "#71717a" }}
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
