import { describe, it, expect } from "vitest"
import { readFileSync } from "fs"
import { fileURLToPath } from "url"
import { dirname, resolve } from "path"
import { comparison, highlightValues } from "../comparison"

const __dirname = dirname(fileURLToPath(import.meta.url))
const pageShell = readFileSync(resolve(__dirname, "../../pages/index.astro"), "utf-8")

describe("comparison", () => {
  it("exports a non-empty comparison array and a highlightValues set", () => {
    expect(comparison.length).toBeGreaterThan(0)
    expect(highlightValues instanceof Set).toBe(true)
  })

  it("every row has non-empty feature and pofolio fields", () => {
    for (const row of comparison) {
      expect(row.feature.trim().length).toBeGreaterThan(0)
      expect(row.pofolio.trim().length).toBeGreaterThan(0)
    }
  })

  it("highlightValues contains only values that appear in the pofolio column", () => {
    const pofolioValues = new Set(comparison.map((r) => r.pofolio))
    for (const v of highlightValues) {
      expect(pofolioValues.has(v), `"${v}" not found in pofolio column`).toBe(true)
    }
  })

  it("page shell imports from comparison.ts — no inline comparison array", () => {
    expect(pageShell).toContain('from "../data/comparison"')
    expect(pageShell).not.toMatch(/^const comparison\s*=/m)
    expect(pageShell).not.toMatch(/^const highlightValues\s*=/m)
  })
})
