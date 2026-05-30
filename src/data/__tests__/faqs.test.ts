import { describe, it, expect } from "vitest"
import { readFileSync } from "fs"
import { fileURLToPath } from "url"
import { dirname, resolve } from "path"
import { faqs } from "../faqs"

const __dirname = dirname(fileURLToPath(import.meta.url))
const faqSection = readFileSync(resolve(__dirname, "../../components/FAQSection.tsx"), "utf-8")

describe("faqs", () => {
  it("exports a non-empty array", () => {
    expect(Array.isArray(faqs)).toBe(true)
    expect(faqs.length).toBeGreaterThan(0)
  })

  it("every FAQ has non-empty q and a strings", () => {
    for (const faq of faqs) {
      expect(faq.q.trim().length).toBeGreaterThan(0)
      expect(faq.a.trim().length).toBeGreaterThan(0)
    }
  })

  it("questions are unique", () => {
    const qs = faqs.map((f) => f.q)
    expect(new Set(qs).size).toBe(qs.length)
  })

  it("FAQSection imports from faqs.ts — no inline faqs array", () => {
    expect(faqSection).toContain('from "../data/faqs"')
    expect(faqSection).not.toMatch(/^const faqs\s*=/m)
  })
})
