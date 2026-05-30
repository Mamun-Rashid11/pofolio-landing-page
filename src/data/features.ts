import type { LucideIcon } from "lucide-react"
import { FileText, Users, Lock, Globe, ClipboardList, Wrench } from "lucide-react"

export interface Feature {
  title: string
  index: string
  icon: LucideIcon
  headline: string
  body: string
  desc: string
  callouts: string[]
  tags: string[]
  videoId: string
  videoTitle: string
  flip: boolean
}

export const features: Feature[] = [
  {
    title: "Invoice Generator",
    index: "01",
    icon: FileText,
    headline: "Professional invoices in seconds.",
    body: "Create professional PDF invoices in seconds. Choose from 5 designed templates: Classic, Modern, Minimal, Bold, or Elegant. Set your brand color, add your logo, select a bank account, and send. Need to bill an international client? Toggle on IBAN, Incoterms, HS codes, Tax ID, Governing Law, and Retention of Title, all per invoice.",
    desc: "Professional PDF invoices in seconds. 5 templates, 12 currencies, shareable links — no client login needed.",
    callouts: [
      "5 professional PDF templates",
      "12 optional international compliance fields",
      "Auto-fill line items from saved projects",
      "Shareable invoice link, no client login needed",
      "12 currency options (USD, EUR, GBP, BDT + more)",
    ],
    tags: ["5 PDF templates", "12 currencies", "International compliance"],
    videoId: "sBOVbHHJaFI",
    videoTitle: "Pofolio Invoice Generator Demo",
    flip: false,
  },
  {
    title: "Client & Project Management",
    index: "02",
    icon: Users,
    headline: "Every client. Every project. In view.",
    body: "Your full client directory in one place. See every client's total invoiced, total paid, outstanding balance, and monthly retainer at a glance. Projects track status, service lists with individual pricing, and connect directly to invoices.",
    desc: "Full client directory with financial history. Projects feed directly into invoice quick-fill.",
    callouts: [
      "Client profiles with full financial history",
      "Company records with logo upload",
      "Projects feed directly into invoice quick-fill",
      "4 project statuses with service-level pricing",
    ],
    tags: ["Client profiles", "Project statuses", "Financial overview"],
    videoId: "sBOVbHHJaFI",
    videoTitle: "Pofolio Client & Project Management Demo",
    flip: true,
  },
  {
    title: "Website Vault",
    index: "03",
    icon: Lock,
    headline: "Every credential. One click.",
    body: "Stop hunting through email threads for a client's WordPress password. The Website Vault stores every credential in one searchable list: admin URL, login email, username, password, and hosting provider. Passwords are masked by default.",
    desc: "Every client credential in one searchable list. Masked passwords, click-to-reveal, copy all at once.",
    callouts: [
      "Masked passwords, click-to-reveal",
      "Copy individual fields or everything at once",
      "Searchable by client, URL, email, or hosting provider",
      "No third-party password manager needed",
    ],
    tags: ["Masked passwords", "Click-to-copy", "Searchable"],
    videoId: "sBOVbHHJaFI",
    videoTitle: "Pofolio Website Vault Demo",
    flip: false,
  },
  {
    title: "Built-In Portfolio",
    index: "04",
    icon: Globe,
    headline: "Your portfolio updates itself.",
    body: "Pofolio generates a public portfolio page directly from your app data. Completed projects become your work showcase. Submitted client reviews become your testimonials. Visitors can browse your work and submit a project inquiry.",
    desc: "Auto-generated portfolio from your real project data. Live testimonials, client logos, inbound leads.",
    callouts: [
      "Auto-built from your real project data",
      "Live testimonials from client reviews",
      "Client logo carousel from company records",
      "Embedded Discovery Form for inbound leads",
    ],
    tags: ["Auto-updated", "Live testimonials", "Discovery Form"],
    videoId: "sBOVbHHJaFI",
    videoTitle: "Pofolio Portfolio Demo",
    flip: true,
  },
  {
    title: "Discovery Form + Estimator",
    index: "05",
    icon: ClipboardList,
    headline: "Leads that qualify themselves.",
    body: "Share your public Discovery Form before you even talk. They fill in project type, features, budget, location, and timeline. You get all of that in your Inquiries inbox the moment they submit.",
    desc: "Leads qualify themselves before you talk. Real-time price estimate shown as they fill it.",
    callouts: [
      "Public form, no login required for clients",
      "Real-time price estimate shown as they fill it",
      "Submissions appear instantly in your Inquiries inbox",
      "Internal estimator for quoting new projects",
    ],
    tags: ["Public form", "Live estimate", "Inquiries inbox"],
    videoId: "sBOVbHHJaFI",
    videoTitle: "Pofolio Discovery Form Demo",
    flip: false,
  },
  {
    title: "Maintenance Plans",
    index: "06",
    icon: Wrench,
    headline: "Recurring revenue. Zero spreadsheets.",
    body: "Track every website maintenance contract in one list. Set the client, price, currency, and billing status. Add a custom checklist per plan. When it's time to bill, hit Bill Now.",
    desc: "Track every website maintenance contract. Custom checklists, one-click invoice generation.",
    callouts: [
      "Active / Paused / Cancelled statuses",
      "Custom task checklist per plan",
      "One-click invoice generation",
      "Monthly retainer total on your Dashboard",
    ],
    tags: ["Active / Paused / Cancelled", "Custom checklists", "One-click billing"],
    videoId: "sBOVbHHJaFI",
    videoTitle: "Pofolio Maintenance Plans Demo",
    flip: true,
  },
]
