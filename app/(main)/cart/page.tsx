"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"
import { useCartStore } from "@/store/useCartStore"
import { useEffect } from "react"
import { useAuth } from "@/contexts/auth-context"

export default function CartPage() {
  const { user } = useAuth()
  const { items, total, updateQuantity, clearCart } = useCart()
  const { fetchCartItems, cart, removeFromCart } = useCartStore();

  useEffect(() => {
    if (user?._id) {
      fetchCartItems(user._id)
    }
  }, [fetchCartItems, user?._id])

  const shipping = total > 200 ? 0 : 15
  const tax = total * 0.08
  const finalTotal = total + shipping + tax

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-cream-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <ShoppingBag className="h-24 w-24 text-stone-400 mx-auto mb-6" />
            <h1 className="text-3xl font-serif font-bold text-stone-800 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-lg text-stone-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link href="/products">
              <Button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 text-lg">
                Continue Shopping
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <Link href="/products">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-stone-800">
              Shopping Cart
            </h1>
          </div>
          <p className="text-stone-600">
            {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <motion.div
                key={`${item.productId}-${item.color}-${item.size}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Product Image */}
                      <div className="relative w-full md:w-32 h-32 flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold text-stone-800 mb-2">
                              {item.name}
                            </h3>
                            <div className="flex flex-wrap gap-4 text-sm text-stone-600">
                              <span>Category: {item.category}</span>
                              {item.color && <span>Color: {item.color}</span>}
                              {item.size && <span>Size: {item.size}</span>}
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-amber-700">
                              ${item.price}
                            </p>
                            <p className="text-sm text-stone-500">each</p>
                          </div>
                        </div>

                        {/* Quantity and Actions */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-stone-700">Quantity:</span>
                            <div className="flex items-center gap-2">
                              <motion.div whileTap={{ scale: 0.9 }}>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                                  disabled={item.quantity <= 1}
                                  className="h-8 w-8"
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                              </motion.div>
                              <span className="w-12 text-center font-medium">
                                {item.quantity}
                              </span>
                              <motion.div whileTap={{ scale: 0.9 }}>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                                  className="h-8 w-8"
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </motion.div>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <p className="text-lg font-semibold text-stone-800">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <motion.div whileTap={{ scale: 0.9 }}>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeFromCart(item?.productId)}
                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Clear Cart */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-end pt-4"
            >
              <Button
                variant="outline"
                onClick={clearCart}
                className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Cart
              </Button>
            </motion.div>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-serif font-bold text-stone-800 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between text-stone-600">
                    <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-stone-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>

                  <div className="flex justify-between text-stone-600">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-semibold text-stone-800">
                    <span>Total</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>

                  {shipping > 0 && (
                    <p className="text-sm text-stone-500 bg-stone-50 p-3 rounded-lg">
                      💡 Add ${(200 - total).toFixed(2)} more to get free shipping!
                    </p>
                  )}
                </div>

                {/* Promo Code */}
                <div className="mt-6 space-y-3">
                  <label className="block text-sm font-medium text-stone-700">
                    Promo Code
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1"
                    />
                    <Button variant="outline" className="px-4">
                      Apply
                    </Button>
                  </div>
                </div>

                {/* Checkout Button */}
                <div className="mt-8 space-y-3">
                  <Link href="/checkout">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 text-lg font-semibold">
                      Proceed to Checkout
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>

                {/* Security Features */}
                <div className="mt-6 pt-6 border-t border-stone-200">
                  <div className="flex items-center gap-3 text-sm text-stone-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Secure checkout with SSL encryption</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-stone-600 mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>30-day return policy</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
