"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, X, ShoppingBag, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"
import { useFavorites } from "@/contexts/favorites-context"
import { categories, sortOptions } from "@/mocks/api/products"

// Mock products data (in a real app, this would come from an API)
const allProducts = [
    {
        id: 1,
        name: "Executive Leather Briefcase",
        price: 299,
        originalPrice: 399,
        image: "/placeholder.svg?height=400&width=400&text=Leather+Briefcase",
        category: "bags",
        description: "Professional briefcase crafted from premium Italian leather",
        rating: 4.8,
        reviews: 124,
        tags: ["briefcase", "executive", "professional", "italian", "leather"],
    },
    {
        id: 2,
        name: "Premium Leather Wallet",
        price: 89,
        image: "/placeholder.svg?height=400&width=400&text=Leather+Wallet",
        category: "wallets",
        description: "Slim profile wallet with RFID protection",
        rating: 4.9,
        reviews: 89,
        tags: ["wallet", "slim", "rfid", "premium", "leather"],
    },
    {
        id: 3,
        name: "Classic Leather Belt",
        price: 59,
        image: "/placeholder.svg?height=400&width=400&text=Leather+Belt",
        category: "belts",
        description: "Timeless design with solid brass buckle",
        rating: 4.7,
        reviews: 156,
        tags: ["belt", "classic", "brass", "buckle", "timeless"],
    },
    {
        id: 4,
        name: "Vintage Leather Backpack",
        price: 199,
        image: "/placeholder.svg?height=400&width=400&text=Leather+Backpack",
        category: "bags",
        description: "Spacious backpack perfect for daily commute",
        rating: 4.6,
        reviews: 78,
        tags: ["backpack", "vintage", "spacious", "commute", "daily"],
    },
    {
        id: 5,
        name: "Luxury Card Holder",
        price: 45,
        image: "/placeholder.svg?height=400&width=400&text=Card+Holder",
        category: "wallets",
        description: "Minimalist card holder for the modern professional",
        rating: 4.8,
        reviews: 92,
        tags: ["card", "holder", "minimalist", "modern", "professional"],
    },
    {
        id: 6,
        name: "Designer Leather Jacket",
        price: 399,
        image: "/placeholder.svg?height=400&width=400&text=Leather+Jacket",
        category: "jackets",
        description: "Classic motorcycle jacket with modern styling",
        rating: 4.9,
        reviews: 67,
        tags: ["jacket", "designer", "motorcycle", "classic", "modern"],
    },
    {
        id: 7,
        name: "Travel Leather Duffel",
        price: 249,
        image: "/placeholder.svg?height=400&width=400&text=Leather+Duffel",
        category: "bags",
        description: "Weekend travel bag with vintage appeal",
        rating: 4.7,
        reviews: 43,
        tags: ["duffel", "travel", "weekend", "vintage", "bag"],
    },
    {
        id: 8,
        name: "Leather Phone Case",
        price: 29,
        image: "/placeholder.svg?height=400&width=400&text=Phone+Case",
        category: "accessories",
        description: "Protective case with card slots",
        rating: 4.5,
        reviews: 201,
        tags: ["phone", "case", "protective", "cards", "slots"],
    },
]


export default function SearchPage() {
    const searchParams = useSearchParams()
    const initialQuery = searchParams.get("q") || ""

    const [searchQuery, setSearchQuery] = useState(initialQuery)
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [sortBy, setSortBy] = useState("relevance")
    const [priceRange, setPriceRange] = useState({ min: 0, max: 500 })
    const [showFilters, setShowFilters] = useState(false)

    const { addItem } = useCart()
    const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

    // Search and filter logic
    const filteredProducts = useMemo(() => {
        let filtered = allProducts

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase()
            filtered = filtered.filter(
                (product) =>
                    product.name.toLowerCase().includes(query) ||
                    product.description.toLowerCase().includes(query) ||
                    product.tags.some((tag) => tag.toLowerCase().includes(query)) ||
                    product.category.toLowerCase().includes(query),
            )
        }

        // Filter by category
        if (selectedCategory !== "all") {
            filtered = filtered.filter((product) => product.category === selectedCategory)
        }

        // Filter by price range
        filtered = filtered.filter((product) => product.price >= priceRange.min && product.price <= priceRange.max)

        // Sort products
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
                // Relevance - keep original order for search results
                break
        }

        return filtered
    }, [searchQuery, selectedCategory, sortBy, priceRange])

    const handleAddToCart = (product: (typeof allProducts)[0]) => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: 1,
        })
    }

    const handleToggleFavorite = (product: (typeof allProducts)[0]) => {
        if (isFavorite(product.id)) {
            removeFromFavorites(product.id)
        } else {
            addToFavorites({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                category: product.category,
            })
        }
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
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">
                        {searchQuery ? `Search Results for "${searchQuery}"` : "Search Products"}
                    </h1>
                    <p className="text-stone-600">
                        {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"} found
                    </p>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-lg shadow-sm p-6 mb-8"
                >
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Search Input */}
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 h-5 w-5" />
                            <Input
                                type="text"
                                placeholder="Search for products, categories, or keywords..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 h-12 text-lg"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-stone-600"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            )}
                        </div>

                        {/* Filter Toggle */}
                        <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="h-12 px-6">
                            <Filter className="h-5 w-5 mr-2" />
                            Filters
                        </Button>
                    </div>

                    {/* Filters */}
                    {showFilters && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-6 pt-6 border-t grid md:grid-cols-3 gap-4"
                        >
                            {/* Category Filter */}
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-2">Category</label>
                                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories.map((category) => (
                                            <SelectItem key={category} value={category}>
                                                {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Sort Filter */}
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-2">Sort By</label>
                                <Select value={sortBy} onValueChange={setSortBy}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {sortOptions.map((option) => (
                                            <SelectItem key={option.value} value={option.value}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Price Range */}
                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-2">Price Range</label>
                                <div className="flex gap-2">
                                    <Input
                                        type="number"
                                        placeholder="Min"
                                        value={priceRange.min}
                                        onChange={(e) => setPriceRange((prev) => ({ ...prev, min: Number(e.target.value) }))}
                                        className="w-20"
                                    />
                                    <span className="self-center">-</span>
                                    <Input
                                        type="number"
                                        placeholder="Max"
                                        value={priceRange.max}
                                        onChange={(e) => setPriceRange((prev) => ({ ...prev, max: Number(e.target.value) }))}
                                        className="w-20"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </motion.div>

                {/* Results */}
                {filteredProducts.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center py-16"
                    >
                        <Search className="h-16 w-16 text-stone-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-stone-800 mb-4">No products found</h3>
                        <p className="text-stone-600 mb-6">Try adjusting your search terms or filters</p>
                        <Button
                            onClick={() => {
                                setSearchQuery("")
                                setSelectedCategory("all")
                                setSortBy("relevance")
                                setPriceRange({ min: 0, max: 500 })
                            }}
                            className="bg-amber-700 hover:bg-amber-800 text-white"
                        >
                            Clear All Filters
                        </Button>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((product, index) => (
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

                                        {/* Favorite Button */}
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => handleToggleFavorite(product)}
                                            className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${isFavorite(product.id) ? "bg-red-500 text-white" : "bg-white/80 text-stone-600 hover:bg-white"
                                                }`}
                                        >
                                            <Heart className={`h-4 w-4 ${isFavorite(product.id) ? "fill-current" : ""}`} />
                                        </motion.button>

                                        {/* Price Badge */}
                                        {product.originalPrice && (
                                            <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                                                Save ${product.originalPrice - product.price}
                                            </Badge>
                                        )}

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

                                        <p className="text-stone-600 mb-3 text-sm line-clamp-2">{product.description}</p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl font-bold text-amber-700">${product.price}</span>
                                                {product.originalPrice && (
                                                    <span className="text-sm text-stone-500 line-through">${product.originalPrice}</span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-1 text-sm text-stone-500">
                                                <span>★</span>
                                                <span>{product.rating}</span>
                                                <span>({product.reviews})</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
