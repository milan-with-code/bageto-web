"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Award, Shield, Truck } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: "Handcrafted Excellence",
    description: "Each piece is meticulously crafted by skilled artisans with decades of experience",
    color: "text-leather-gold",
    bgColor: "bg-leather-gold/10",
  },
  {
    icon: Leaf,
    title: "Sustainable Materials",
    description: "We source only the finest eco-friendly leather from responsible suppliers",
    color: "text-green-600",
    bgColor: "bg-green-100 dark:bg-green-900/20",
  },
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "We stand behind our craftsmanship with comprehensive lifetime warranty",
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary worldwide shipping on all orders over $200",
    color: "text-leather-brown",
    bgColor: "bg-leather-brown/10",
  },
]

export default function FeatureHighlights() {
  return (
    <section className="py-20 bg-muted/30">
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
            Why Choose Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mt-4 mb-6">
            Crafted with Care
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every detail matters in our pursuit of creating the perfect leather goods
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${feature.bgColor}`}
                  >
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-leather-gold transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-leather-gold/10 to-leather-brown/10 rounded-2xl">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Experience the Difference
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Join thousands of satisfied customers who trust our craftsmanship
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="text-center">
                <div className="text-2xl font-bold text-leather-gold">50K+</div>
                <div>Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-leather-gold">4.9</div>
                <div>Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-leather-gold">38+</div>
                <div>Years Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
