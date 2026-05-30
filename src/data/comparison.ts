export interface ComparisonRow {
  feature: string
  pofolio: string
  freshbooks: string
  bonsai: string
  notion: string
}

export const comparison: ComparisonRow[] = [
  { feature: "Professional invoice PDFs", pofolio: "5 templates", freshbooks: "Basic", bonsai: "Limited", notion: "Manual" },
  { feature: "International compliance (IBAN, Incoterms, HS codes)", pofolio: "Built-in", freshbooks: "Partial", bonsai: "No", notion: "DIY" },
  { feature: "Website credential vault", pofolio: "Built-in", freshbooks: "No", bonsai: "No", notion: "No" },
  { feature: "Public portfolio page", pofolio: "Built-in", freshbooks: "No", bonsai: "No", notion: "No" },
  { feature: "Client Discovery Form", pofolio: "Built-in", freshbooks: "No", bonsai: "Basic", notion: "DIY" },
  { feature: "Shareable invoice link (no login)", pofolio: "Built-in", freshbooks: "No", bonsai: "No", notion: "No" },
  { feature: "Testimonial request links", pofolio: "Built-in", freshbooks: "No", bonsai: "No", notion: "No" },
  { feature: "Maintenance plan billing", pofolio: "Built-in", freshbooks: "No", bonsai: "Partial", notion: "DIY" },
  { feature: "Built for freelancers", pofolio: "Yes", freshbooks: "No", bonsai: "Partial", notion: "No" },
  { feature: "Setup required", pofolio: "None", freshbooks: "Moderate", bonsai: "Moderate", notion: "Extensive" },
  { feature: "Free tier available", pofolio: "Yes", freshbooks: "No", bonsai: "No", notion: "Yes" },
]

export const highlightValues = new Set(["Built-in", "Yes", "None", "5 templates"])
