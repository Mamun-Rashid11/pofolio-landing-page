import { describe, it, expect } from "vitest"
import { readFileSync } from "fs"
import { fileURLToPath } from "url"
import { dirname, resolve } from "path"
import { features } from "../features"

const __dirname = dirname(fileURLToPath(import.meta.url))
const servicesSection = readFileSync(
  resolve(__dirname, "../../components/ServicesSection.tsx"),
  "utf-8"
)
const pageShell = readFileSync(
  resolve(__dirname, "../../pages/index.astro"),
  "utf-8"
)

describe("features", () => {
  it("exports exactly 6 items", () => {
    expect(Array.isArray(features)).toBe(true)
    expect(features.length).toBe(6)
  })

  it("every feature has a boolean flip and a non-null renderable icon", () => {
    for (const f of features) {
      expect(typeof f.flip, `${f.title}.flip`).toBe("boolean")
      // Lucide icons are forwardRef objects (not plain functions) — check non-null and renderable
      expect(f.icon, `${f.title}.icon`).toBeTruthy()
      expect(typeof f.icon, `${f.title}.icon`).toMatch(/^(function|object)$/)
    }
  })

  it("every feature has non-empty callouts and tags arrays", () => {
    for (const f of features) {
      expect(Array.isArray(f.callouts), `${f.title}.callouts`).toBe(true)
      expect(f.callouts.length, `${f.title}.callouts`).toBeGreaterThan(0)
      expect(Array.isArray(f.tags), `${f.title}.tags`).toBe(true)
      expect(f.tags.length, `${f.title}.tags`).toBeGreaterThan(0)
    }
  })

  it("ServicesSection imports from features.ts — no inline services array", () => {
    expect(servicesSection).toContain("from \"../data/features\"")
    expect(servicesSection).not.toMatch(/^const services\s*=/m)
  })

  it("page shell imports from features.ts — no inline features array", () => {
    expect(pageShell).toContain("from \"../data/features\"")
    expect(pageShell).not.toMatch(/^const features\s*=/m)
  })

  it("title values are unique across all features", () => {
    const titles = features.map((f) => f.title)
    expect(new Set(titles).size).toBe(titles.length)
  })

  it("every feature has non-empty string fields: title, headline, desc, body, videoId", () => {
    for (const f of features) {
      for (const field of ["title", "headline", "desc", "body", "videoId"] as const) {
        expect(typeof f[field], `${f.title}.${field}`).toBe("string")
        expect(f[field].trim().length, `${f.title}.${field}`).toBeGreaterThan(0)
      }
    }
  })
})
