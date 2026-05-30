import { describe, it, expect } from "vitest"
import { readFileSync } from "fs"
import { fileURLToPath } from "url"
import { dirname, resolve } from "path"
import { pricingFree, pricingPro } from "../pricing"

const __dirname = dirname(fileURLToPath(import.meta.url))
const pageShell = readFileSync(resolve(__dirname, "../../pages/index.astro"), "utf-8")

describe("pricing", () => {
  it("exports non-empty pricingFree and pricingPro arrays", () => {
    expect(pricingFree.length).toBeGreaterThan(0)
    expect(pricingPro.length).toBeGreaterThan(0)
  })

  it("every pricing item is a non-empty string", () => {
    for (const item of [...pricingFree, ...pricingPro]) {
      expect(typeof item).toBe("string")
      expect(item.trim().length).toBeGreaterThan(0)
    }
  })

  it("page shell imports from pricing.ts — no inline pricingFree or pricingPro arrays", () => {
    expect(pageShell).toContain('from "../data/pricing"')
    expect(pageShell).not.toMatch(/^const pricingFree\s*=/m)
    expect(pageShell).not.toMatch(/^const pricingPro\s*=/m)
  })
})
