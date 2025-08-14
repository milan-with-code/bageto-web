"use client"

import { useState, useMemo, useCallback, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { products } from "@/mocks/api/products"
import ProductFiltersBar from "@/features/products/ProductFiltersBar"
import ProductList from "@/features/products/ProductList"
import ProductListSkeleton from "@/features/products/ProductListSkeleton"
import { useProductStore } from "@/store/useProductStore"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const { addItem } = useCart()
  const isLoading = false
  const { fetchProducts } = useProductStore()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

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
        break
    }

    return filtered
  }, [selectedCategory, sortBy, searchQuery])


  const handleAddToCart = useCallback((product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    })
  }, [])

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
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

        <ProductFiltersBar
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          setSearchQuery={setSearchQuery}
          setSelectedCategory={setSelectedCategory}
          setSortBy={setSortBy}
          setViewMode={setViewMode}
          sortBy={sortBy}
          viewMode={viewMode}
        />

        {
          isLoading ?
            <ProductListSkeleton viewMode={viewMode} count={viewMode === "grid" ? 9 : 6} /> :

            <ProductList
              filteredAndSortedProducts={filteredAndSortedProducts}
              handleAddToCart={handleAddToCart}
              viewMode={viewMode}
            />
        }


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
