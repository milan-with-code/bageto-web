"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Gift, Bell, Sparkles } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubscribed(true)
    setEmail("")

    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-leather-gold/5 to-leather-brown/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-background to-muted/30 overflow-hidden">
              <CardContent className="p-12 lg:p-16 text-center relative">
                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-8 right-8 w-16 h-16 bg-leather-gold/10 rounded-full flex items-center justify-center"
                >
                  <Sparkles className="h-8 w-8 text-leather-gold" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 left-8 w-12 h-12 bg-leather-brown/10 rounded-full flex items-center justify-center"
                >
                  <Gift className="h-6 w-6 text-leather-brown" />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-leather-gold/10 rounded-full mb-8"
                >
                  <Mail className="h-10 w-10 text-leather-gold" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-3xl lg:text-4xl font-serif font-bold mb-6"
                >
                  Stay in the Loop
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
                >
                  Subscribe to our newsletter and be the first to know about new arrivals,
                  exclusive offers, and leather care tips from our master craftsmen.
                </motion.p>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-3 gap-6 mb-10"
                >
                  {[
                    { icon: Gift, text: "Exclusive Offers" },
                    { icon: Bell, text: "New Arrivals" },
                    { icon: Sparkles, text: "Care Tips" },
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center justify-center gap-3 p-4 bg-muted/30 rounded-lg"
                    >
                      <benefit.icon className="h-5 w-5 text-leather-gold" />
                      <span className="text-sm font-medium">{benefit.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Newsletter Form */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {isSubscribed ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-green-600 mb-2">
                        Thank you for subscribing!
                      </h3>
                      <p className="text-muted-foreground">
                        Welcome to the Bageto family. Check your email for a special welcome offer.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="flex-1 h-12 text-center sm:text-left"
                          required
                        />
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            type="submit"
                            disabled={isLoading}
                            className="h-12 px-8 bg-leather-gold hover:bg-leather-brown text-white font-semibold"
                          >
                            {isLoading ? (
                              <div className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Subscribing...
                              </div>
                            ) : (
                              "Subscribe"
                            )}
                          </Button>
                        </motion.div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-4">
                        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                      </p>
                    </form>
                  )}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
