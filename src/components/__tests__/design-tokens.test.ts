import { describe, it, expect } from "vitest"
import { readFileSync } from "fs"
import { fileURLToPath } from "url"
import { dirname, resolve } from "path"

const __dirname = dirname(fileURLToPath(import.meta.url))

function readComponent(name: string): string {
  return readFileSync(resolve(__dirname, `../${name}`), "utf-8")
}

// Detects a hex colour value assigned to a CSS property inside a style attribute:
//   color: "#87E64B"   background: '#18181b'   borderColor: "#e4e4e7"
// Does NOT match Tailwind arbitrary values in className like border-[#87E64B].
const HEX_AS_CSS_VALUE = /:\s*["']#[0-9a-fA-F]{3,8}["']/

describe("design token enforcement — no hardcoded hex in style={{}}", () => {
  it("Header.tsx has no hardcoded hex colour", () => {
    expect(HEX_AS_CSS_VALUE.test(readComponent("Header.tsx"))).toBe(false)
  })

  it("Hero.tsx has no hardcoded hex colour", () => {
    expect(HEX_AS_CSS_VALUE.test(readComponent("Hero.tsx"))).toBe(false)
  })

  it("ProblemSolution.tsx has no hardcoded hex colour", () => {
    expect(HEX_AS_CSS_VALUE.test(readComponent("ProblemSolution.tsx"))).toBe(false)
  })

  it("FAQSection.tsx has no hardcoded hex colour", () => {
    expect(HEX_AS_CSS_VALUE.test(readComponent("FAQSection.tsx"))).toBe(false)
  })

  it("StatsTestimonials.tsx has no hardcoded hex colour", () => {
    expect(HEX_AS_CSS_VALUE.test(readComponent("StatsTestimonials.tsx"))).toBe(false)
  })

  it("ServicesSection.tsx has no hardcoded hex colour", () => {
    expect(HEX_AS_CSS_VALUE.test(readComponent("ServicesSection.tsx"))).toBe(false)
  })

  it("ProcessSteps.tsx has no hardcoded hex colour", () => {
    expect(HEX_AS_CSS_VALUE.test(readComponent("ProcessSteps.tsx"))).toBe(false)
  })

  it("CTASection.tsx has no hardcoded hex colour", () => {
    expect(HEX_AS_CSS_VALUE.test(readComponent("CTASection.tsx"))).toBe(false)
  })
})
