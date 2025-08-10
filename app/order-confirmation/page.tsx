"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Package, Truck, Mail } from 'lucide-react'
import Link from "next/link"

export default function OrderConfirmationPage() {
  const orderNumber = "BG" + Math.random().toString(36).substr(2, 9).toUpperCase()
  const estimatedDelivery = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="h-12 w-12" />
          </div>
          
          <h1 className="text-4xl font-serif font-bold text-stone-800 mb-4">
            Order Confirmed!
          </h1>
          
          <p className="text-xl text-stone-600 mb-8">
            Thank you for your purchase. Your order has been successfully placed.
          </p>

          <Card className="max-w-2xl mx-auto mb-8">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-stone-600">Order Number:</span>
                  <span className="font-semibold text-stone-800">{orderNumber}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-600">Estimated Delivery:</span>
                  <span className="font-semibold text-stone-800">{estimatedDelivery}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-600">Shipping Method:</span>
                  <span className="font-semibold text-stone-800">Standard Shipping</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-stone-800 mb-2">Confirmation Email</h3>
              <p className="text-sm text-stone-600">
                A confirmation email has been sent to your email address with order details.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-stone-800 mb-2">Processing</h3>
              <p className="text-sm text-stone-600">
                Your order is being prepared by our skilled craftsmen with care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-stone-800 mb-2">Shipping</h3>
              <p className="text-sm text-stone-600">
                You'll receive tracking information once your order ships.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3">
                Continue Shopping
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="px-8 py-3">
                Back to Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
