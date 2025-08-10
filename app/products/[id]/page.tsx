"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Heart, Share2, Truck, Shield, RotateCcw, Plus, Minus, ZoomIn } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"
import { useFavorites } from "@/contexts/favorites-context"
import { product, reviews } from "@/mocks/api/products"

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [isZoomed, setIsZoomed] = useState(false)
  const { addItem } = useCart()
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      category: product.category,
      color: selectedColor,
      size: selectedSize,
      quantity
    })
  }

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1))


  const handleToggleFavorite = (product: any) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id)
    } else {
      addToFavorites({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        category: product.category,
      })
    }
  }

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-2 text-sm text-stone-600">
            <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-amber-600 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-stone-800">{product.name}</span>
          </div>
        </motion.nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-white shadow-lg">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className={`object-cover transition-transform duration-300 ${isZoomed ? "scale-150" : "scale-100"
                  }`}
                priority
              />
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === index ? "border-amber-600" : "border-stone-200"
                    }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Header */}
            <div>
              <Badge variant="secondary" className="mb-2 bg-stone-100 text-stone-700">
                {product.category}
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-serif font-bold text-stone-800 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-stone-300"
                        }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-stone-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-amber-700">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-stone-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
                {product.originalPrice && (
                  <Badge variant="destructive" className="bg-red-100 text-red-700">
                    Save ${product.originalPrice - product.price}
                  </Badge>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-stone-600 leading-relaxed">
              {product.description}
            </p>

            {/* Options */}
            <div className="space-y-4">
              {/* Color Selection */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Color: {selectedColor}
                </label>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-full border-2 transition-colors ${selectedColor === color ? "border-amber-600" : "border-stone-300"
                        }`}
                      style={{
                        backgroundColor: color.toLowerCase() === "brown" ? "#8B4513" :
                          color.toLowerCase() === "black" ? "#000000" :
                            color.toLowerCase() === "tan" ? "#D2B48C" : color
                      }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Size
                </label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={incrementQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-amber-700 hover:bg-amber-800 text-white py-3 text-lg font-semibold"
                  disabled={!product.inStock}
                >
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
                <Button onClick={() => handleToggleFavorite(product)} variant="outline" size="icon" className="p-3">
                  <Heart className="h-5 w-5" />

                </Button>
                <Button variant="outline" size="icon" className="p-3">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <Button
                variant="outline"
                className="w-full py-3 text-lg font-semibold border-amber-700 text-amber-700 hover:bg-amber-50"
              >
                Buy Now
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-stone-200">
              <div className="text-center">
                <Truck className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-stone-700">Free Shipping</p>
                <p className="text-xs text-stone-500">On orders over $200</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-stone-700">Lifetime Warranty</p>
                <p className="text-xs text-stone-500">Quality guaranteed</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-stone-700">30-Day Returns</p>
                <p className="text-xs text-stone-500">Easy returns</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:w-96">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-stone-800 mb-6">
                    Product Description
                  </h3>
                  <div className="prose prose-stone max-w-none">
                    <p className="text-stone-600 leading-relaxed mb-6">
                      {product.description}
                    </p>
                    <h4 className="text-lg font-semibold text-stone-800 mb-4">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-stone-600">
                          <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-stone-800 mb-6">
                    Specifications
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-stone-200">
                        <span className="font-medium text-stone-700 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className="text-stone-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-serif font-bold text-stone-800">
                      Customer Reviews
                    </h3>
                    <Button variant="outline" className="border-amber-700 text-amber-700">
                      Write a Review
                    </Button>
                  </div>

                  {/* Review Summary */}
                  <div className="flex items-center gap-8 mb-8 p-6 bg-stone-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-amber-700 mb-2">
                        {product.rating}
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(product.rating)
                              ? "fill-amber-400 text-amber-400"
                              : "text-stone-300"
                              }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-stone-600">
                        Based on {product.reviews} reviews
                      </div>
                    </div>
                  </div>

                  {/* Individual Reviews */}
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-stone-200 pb-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-stone-800">{review.name}</span>
                              {review.verified && (
                                <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                                  Verified Purchase
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < review.rating
                                      ? "fill-amber-400 text-amber-400"
                                      : "text-stone-300"
                                      }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-stone-500">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <h4 className="font-medium text-stone-800 mb-2">{review.title}</h4>
                        <p className="text-stone-600 leading-relaxed">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
