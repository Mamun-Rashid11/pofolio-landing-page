export interface Stat {
  value: string
  label: string
}

export interface Testimonial {
  quote: string
  author: string
}

export const stats: Stat[] = [
  { value: "500+", label: "Invoices generated" },
  { value: "200+", label: "Freelancers using Pofolio" },
  { value: "12", label: "Currencies supported" },
  { value: "5", label: "Invoice templates" },
]

export const testimonials: Testimonial[] = [
  {
    quote: "I used to bounce between three apps just to send one invoice. Pofolio cut that down to one step.",
    author: "Web designer, freelance",
  },
  {
    quote: "The Website Vault alone was worth it. I had client passwords spread across sticky notes and emails.",
    author: "Freelance developer",
  },
  {
    quote: "My portfolio used to be a static site I updated twice a year. Now it reflects my actual work automatically.",
    author: "Brand designer, freelance",
  },
]
