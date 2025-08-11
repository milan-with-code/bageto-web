"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search, Grid, List } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"
import { categories, products, sortOptions } from "@/mocks/api/products"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const { addItem } = useCart()

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products

    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        filtered.sort((a, b) => b.id - a.id)
        break
      default:
        // Featured - keep original order
        break
    }

    return filtered
  }, [selectedCategory, sortBy, searchQuery])

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    })
  }

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4">
            Our Collection
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Discover our complete range of premium leather goods, each piece crafted with care and attention to detail
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm py-0-4 sm:py-6 mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            {/* Search */}
            <div className="relative w-full sm:flex-1 sm:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>

            {/* Filters & View Modes */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto sm:justify-end">
              {/* Category */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all"
                        ? "All Categories"
                        : category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* View mode buttons */}
              <div className="flex border rounded-lg w-full sm:w-auto">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="flex-1 sm:flex-none rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="flex-1 sm:flex-none rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>


        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mb-6"
        >
          <p className="text-stone-600">
            Showing {filteredAndSortedProducts.length} of {products.length} products
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
          }
        >
          {filteredAndSortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {viewMode === "grid" ? (
                <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <Link href={`/products/${product.id}`}>
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </Link>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute bottom-4 left-4 right-4"
                    >
                      <Button
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-amber-700 hover:bg-amber-800 text-white"
                      >
                        Add to Cart
                      </Button>
                    </motion.div>
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-2 bg-stone-100 text-stone-700">
                      {product.category}
                    </Badge>
                    <Link href={`/products/${product.id}`}>
                      <h3 className="text-xl font-semibold text-stone-800 mb-2 hover:text-amber-700 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-stone-600 mb-3 text-sm">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-amber-700">
                        ${product.price}
                      </p>
                      <div className="flex items-center gap-1 text-sm text-stone-500">
                        <span>★</span>
                        <span>{product.rating}</span>
                        <span>({product.reviews})</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-64 h-64 md:h-48 overflow-hidden">
                      <Link href={`/products/${product.id}`}>
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </Link>
                    </div>
                    <CardContent className="flex-1 p-6">
                      <div className="flex flex-col h-full">
                        <Badge variant="secondary" className="mb-2 bg-stone-100 text-stone-700 w-fit">
                          {product.category}
                        </Badge>
                        <Link href={`/products/${product.id}`}>
                          <h3 className="text-xl font-semibold text-stone-800 mb-2 hover:text-amber-700 transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-stone-600 mb-4 flex-1">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <p className="text-2xl font-bold text-amber-700">
                              ${product.price}
                            </p>
                            <div className="flex items-center gap-1 text-sm text-stone-500">
                              <span>★</span>
                              <span>{product.rating}</span>
                              <span>({product.reviews})</span>
                            </div>
                          </div>
                          <Button
                            onClick={() => handleAddToCart(product)}
                            className="bg-amber-700 hover:bg-amber-800 text-white"
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredAndSortedProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <h3 className="text-2xl font-semibold text-stone-800 mb-4">
              No products found
            </h3>
            <p className="text-stone-600 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("all")
                setSortBy("featured")
              }}
              className="bg-amber-700 hover:bg-amber-800 text-white"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
