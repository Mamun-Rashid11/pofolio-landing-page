import type { Variants } from "framer-motion"

export const fadeUpBlur: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
}

export const premiumCardEntrance: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 24, mass: 1 },
  },
}

export const viewportConfig = { once: true, margin: "-100px" }
