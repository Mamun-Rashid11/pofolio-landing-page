import { describe, it, expect } from "vitest"
import { readFileSync } from "fs"
import { fileURLToPath } from "url"
import { dirname, resolve } from "path"
import { navLinks } from "../nav"

const __dirname = dirname(fileURLToPath(import.meta.url))
const pageShell = readFileSync(
  resolve(__dirname, "../../pages/index.astro"),
  "utf-8"
)

describe("navLinks", () => {
  it("exports a non-empty array", () => {
    expect(Array.isArray(navLinks)).toBe(true)
    expect(navLinks.length).toBeGreaterThan(0)
  })

  it("every item has a non-empty label", () => {
    for (const link of navLinks) {
      expect(typeof link.label).toBe("string")
      expect(link.label.trim().length).toBeGreaterThan(0)
    }
  })

  it("every item has a valid id — non-empty, no leading #, no spaces", () => {
    for (const link of navLinks) {
      expect(typeof link.id).toBe("string")
      expect(link.id.trim().length).toBeGreaterThan(0)
      expect(link.id).not.toMatch(/^#/)
      expect(link.id).not.toMatch(/\s/)
    }
  })

  it("ids are unique — no two links share the same id", () => {
    const ids = navLinks.map((l) => l.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it("every id has a matching section id in the page shell", () => {
    for (const link of navLinks) {
      expect(pageShell).toContain(`id="${link.id}"`)
    }
  })
})
