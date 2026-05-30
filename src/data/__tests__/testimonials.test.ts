import { describe, it, expect } from "vitest"
import { readFileSync } from "fs"
import { fileURLToPath } from "url"
import { dirname, resolve } from "path"
import { stats, testimonials } from "../testimonials"

const __dirname = dirname(fileURLToPath(import.meta.url))
const statsTestimonials = readFileSync(
  resolve(__dirname, "../../components/StatsTestimonials.tsx"),
  "utf-8"
)

describe("testimonials", () => {
  it("exports non-empty stats and testimonials arrays", () => {
    expect(stats.length).toBeGreaterThan(0)
    expect(testimonials.length).toBeGreaterThan(0)
  })

  it("every stat has non-empty value and label", () => {
    for (const s of stats) {
      expect(s.value.trim().length).toBeGreaterThan(0)
      expect(s.label.trim().length).toBeGreaterThan(0)
    }
  })

  it("every testimonial has non-empty quote and author", () => {
    for (const t of testimonials) {
      expect(t.quote.trim().length).toBeGreaterThan(0)
      expect(t.author.trim().length).toBeGreaterThan(0)
    }
  })

  it("StatsTestimonials imports from testimonials.ts — no inline arrays", () => {
    expect(statsTestimonials).toContain('from "../data/testimonials"')
    expect(statsTestimonials).not.toMatch(/^const stats\s*=/m)
    expect(statsTestimonials).not.toMatch(/^const testimonials\s*=/m)
  })
})
