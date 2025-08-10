"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Business Executive",
    image: "/placeholder.svg?height=80&width=80&text=Sarah",
    content: "The quality of their leather goods is unmatched. My briefcase has been with me for 3 years and still looks brand new. Exceptional craftsmanship!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Creative Director",
    image: "/placeholder.svg?height=80&width=80&text=Michael",
    content: "I've purchased multiple items from Bageto and each piece exceeds expectations. The attention to detail is remarkable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Fashion Blogger",
    image: "/placeholder.svg?height=80&width=80&text=Emma",
    content: "Not only are their products beautiful, but the customer service is outstanding. They truly care about their customers' satisfaction.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Entrepreneur",
    image: "/placeholder.svg?height=80&width=80&text=David",
    content: "The wallet I bought has become my favorite accessory. The leather ages beautifully and the craftsmanship is evident in every detail.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-leather-gold font-medium text-sm uppercase tracking-wider">
            Customer Stories
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mt-4 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Card className="border-0 shadow-xl bg-gradient-to-br from-background to-muted/30">
                  <CardContent className="p-12 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-leather-gold/10 rounded-full mb-8"
                    >
                      <Quote className="h-8 w-8 text-leather-gold" />
                    </motion.div>

                    <motion.blockquote
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl lg:text-2xl font-medium text-foreground mb-8 leading-relaxed italic"
                    >
                      "{testimonials[currentIndex].content}"
                    </motion.blockquote>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center justify-center gap-4"
                    >
                      <Image
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-muted-foreground">
                          {testimonials[currentIndex].role}
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center justify-center gap-1 mt-6"
                    >
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          className="text-leather-gold text-xl"
                        >
                          ★
                        </motion.span>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full w-12 h-12"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </motion.div>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                        ? 'bg-leather-gold scale-125'
                        : 'bg-muted hover:bg-muted-foreground/50'
                      }`}
                  />
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full w-12 h-12"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t"
        >
          {[
            { metric: "4.9/5", label: "Average Rating" },
            { metric: "50K+", label: "Happy Customers" },
            { metric: "99%", label: "Satisfaction Rate" },
            { metric: "24/7", label: "Customer Support" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-leather-gold mb-2">
                {item.metric}
              </div>
              <div className="text-muted-foreground text-sm">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
