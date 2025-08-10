"use client"

import { motion } from "framer-motion"
import HeroSection from "@/components/sections/hero-section"
import ProductShowcase from "@/components/sections/product-showcase"
import FeatureHighlights from "@/components/sections/feature-highlights"
import TestimonialsSection from "@/components/sections/testimonials-section"
import NewsletterSection from "@/components/sections/newsletter-section"

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
}

export default function HomePage() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <HeroSection />
      <ProductShowcase />
      <FeatureHighlights />
      <TestimonialsSection />
      <NewsletterSection />
    </motion.div>
  )
}
