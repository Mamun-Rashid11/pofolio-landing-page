import { motion } from "framer-motion"
import { fadeUpBlur, staggerContainerSlow } from "../lib/motion"

const HERO_VIDEO_ID = "sBOVbHHJaFI"

const stats = [
  { value: "6–10", label: "tools replaced" },
  { value: "12", label: "currencies" },
  { value: "5", label: "PDF templates" },
]

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden flex flex-col justify-between pb-0"
      style={{ minHeight: "100dvh" }}
    >
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(135,230,75,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="flex-1 flex flex-col items-center justify-center text-center pt-32 pb-12 px-4 relative z-10">
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.p variants={fadeUpBlur} className="eyebrow-hand">
            Freelance ops, in one workspace
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={fadeUpBlur}
            className="text-foreground"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginTop: "0.75rem",
            }}
          >
            Run your freelance business{" "}
            <span className="text-primary">from one tab.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUpBlur}
            className="text-muted-fg"
            style={{
              maxWidth: "38rem",
              margin: "1.25rem auto 0",
              fontSize: "1.125rem",
              lineHeight: 1.75,
            }}
          >
            Clients, invoices, credentials, and portfolio. All in one workspace
            built for freelancers. Free to start, no credit card required.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUpBlur}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ marginTop: "2.5rem" }}
          >
            <a href="https://trypofolio.com" className="btn-shimmer">
              Start for Free
            </a>
            <a
              href="#features"
              className="btn-outline"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              See How It Works
            </a>
          </motion.div>

          {/* Trust line — tight under buttons */}
          <motion.p variants={fadeUpBlur} className="text-zinc-400" style={{ fontSize: "0.8125rem", fontWeight: 600, marginTop: "0.875rem" }}>
            No credit card required · Free plan available
          </motion.p>

          {/* Stats — clear gap below trust line */}
          <motion.div
            variants={fadeUpBlur}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "1.5rem",
              maxWidth: "28rem",
              margin: "2.5rem auto 0",
              borderTop: "1px solid var(--color-border)",
              paddingTop: "2rem",
            }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <strong className="text-foreground" style={{ display: "block", fontSize: "2.25rem", fontWeight: 700, lineHeight: 1 }}>
                  {s.value}
                </strong>
                <span className="text-muted-fg" style={{ display: "block", marginTop: "0.25rem", fontSize: "0.8125rem", fontWeight: 600 }}>
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero video */}
        <motion.div
          variants={fadeUpBlur}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mt-14 w-full"
          style={{ maxWidth: "1075px" }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              aspectRatio: "16/9",
              borderRadius: "1.25rem",
              border: "1px solid var(--color-border)",
              boxShadow: "0 2px 32px rgba(0,0,0,0.10), 0 24px 64px rgba(0,0,0,0.08)",
              background: "var(--color-muted)",
            }}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${HERO_VIDEO_ID}?rel=0&modestbranding=1`}
              title="Pofolio: See how it works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center pb-8 relative z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{
            width: "1.5rem", height: "2.5rem",
            borderRadius: "9999px",
            border: "2px solid var(--color-border)",
            display: "flex", alignItems: "flex-start", justifyContent: "center",
            padding: "0.25rem",
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{ width: "0.25rem", height: "0.5rem", borderRadius: "9999px", background: "var(--color-primary)" }}
          />
        </motion.div>
      </div>
    </section>
  )
}
