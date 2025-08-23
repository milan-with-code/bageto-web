"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingBag, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"
import { useFavorites } from "@/contexts/favorites-context"

export default function FavoritesPage() {
    const { favorites, removeFromFavorites, clearFavorites } = useFavorites()
    const { addItem } = useCart()

    const handleAddToCart = (product: (typeof favorites)[0]) => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: 1,
        })
    }

    if (favorites.length === 0) {
        return (
            <div className="min-h-screen bg-cream-50 pt-20">
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <Heart className="h-24 w-24 text-stone-400 mx-auto mb-6" />
                        <h1 className="text-3xl font-serif font-bold text-stone-800 mb-4">Your Favorites is Empty</h1>
                        <p className="text-lg text-stone-600 mb-8">Start adding products to your favorites to see them here.</p>
                        <Link href="/products">
                            <Button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 text-lg">Browse Products</Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-cream-50 pt-20">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-stone-800 mb-2">My Favorites</h1>
                            <p className="text-stone-600">
                                {favorites.length} {favorites.length === 1 ? "item" : "items"} in your favorites
                            </p>
                        </div>

                        {favorites.length > 0 && (
                            <Button
                                variant="outline"
                                onClick={clearFavorites}
                                className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 bg-transparent"
                            >
                                <Trash2 className="h-4 w-4 mr-2" />
                                Clear All
                            </Button>
                        )}
                    </div>
                </motion.div>

                {/* Favorites Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {favorites.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="relative overflow-hidden">
                                    <Link href={`/products/${product.id}`}>
                                        <Image
                                            src={product.image || "/placeholder.svg"}
                                            alt={product.name}
                                            width={400}
                                            height={400}
                                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </Link>

                                    {/* Remove from Favorites Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => removeFromFavorites(product.id)}
                                        className="absolute top-4 right-4 p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
                                    >
                                        <Heart className="h-4 w-4 fill-current" />
                                    </motion.button>

                                    {/* Hover Actions */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        className="absolute bottom-4 left-4 right-4"
                                    >
                                        <Button
                                            onClick={() => handleAddToCart(product)}
                                            className="w-full bg-amber-700 hover:bg-amber-800 text-white"
                                        >
                                            <ShoppingBag className="h-4 w-4 mr-2" />
                                            Add to Cart
                                        </Button>
                                    </motion.div>
                                </div>

                                <CardContent className="p-4">
                                    <Badge variant="secondary" className="mb-2 bg-stone-100 text-stone-700">
                                        {product.category}
                                    </Badge>

                                    <Link href={`/products/${product.id}`}>
                                        <h3 className="text-lg font-semibold text-stone-800 mb-2 hover:text-amber-700 transition-colors line-clamp-2">
                                            {product.name}
                                        </h3>
                                    </Link>

                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-amber-700">${product.price}</span>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => removeFromFavorites(product.id)}
                                            className="text-red-500 hover:text-red-600 p-1"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </motion.button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Continue Shopping */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Link href="/products">
                        <Button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3">Continue Shopping</Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}
