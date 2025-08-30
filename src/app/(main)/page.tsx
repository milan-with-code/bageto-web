"use client"

import CategorySections from "@/components/sections/category-sections"
import FeatureHighlights from "@/components/sections/feature-highlights"
import HeroSection from "@/components/sections/hero-section"
import NewArrivals from "@/components/sections/new-arrivals"
import NewsletterSection from "@/components/sections/newsletter-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import { motion, Transition } from "framer-motion"

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
}

const pageTransition: Transition = {
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
      <CategorySections />
      <NewArrivals />
      {/* <ProductShowcase /> */}
      <FeatureHighlights />
      <TestimonialsSection />
      <NewsletterSection />
    </motion.div>
  )
}
