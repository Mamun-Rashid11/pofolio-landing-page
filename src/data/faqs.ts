export interface FAQ {
  q: string
  a: string
}

export const faqs: FAQ[] = [
  {
    q: "Who is Pofolio built for?",
    a: "Freelance web designers, developers, graphic designers, brand designers, and small creative agencies (1–5 people). Anyone who sends invoices, manages a client roster, and wants a portfolio that reflects their actual work.",
  },
  {
    q: "Is the free plan actually free forever?",
    a: "Yes. The core features (invoicing, client management, vault, portfolio) are free with no time limit.",
  },
  {
    q: "Do I need a credit card to start?",
    a: "No. Sign up with email. No card required.",
  },
  {
    q: "Can my clients access their invoices without an account?",
    a: "Yes. Every invoice has a shareable link your client opens in their browser. No login, no Pofolio account needed.",
  },
  {
    q: "Does Pofolio support international invoicing?",
    a: "Yes. Pofolio supports 12 currencies and 12 optional international compliance fields, including IBAN, Incoterms® 2020, HS codes, Tax ID / VAT numbers, Governing Law, Retention of Title, and Country of Origin.",
  },
  {
    q: "Does Pofolio work offline?",
    a: "Yes. All data saves to your browser's local storage. When you go back online, it syncs to the cloud automatically.",
  },
  {
    q: "Is my data secure?",
    a: "All data is stored in Supabase PostgreSQL with Row Level Security enabled. Your data is strictly isolated. No other user can read or write your records.",
  },
  {
    q: "Is Pofolio accounting software?",
    a: "No. It is the operating layer around freelance work: clients, projects, invoices, credentials, testimonials, and portfolio content. Not adapted from accounting software.",
  },
]
