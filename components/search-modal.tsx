"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, X, Clock, TrendingUp } from "lucide-react"
import Image from "next/image"

interface SearchModalProps {
    isOpen: boolean
    onClose: () => void
}

// Mock recent searches and trending searches
const recentSearches = ["leather wallet", "briefcase", "vintage bag"]
const trendingSearches = ["executive briefcase", "minimalist wallet", "leather jacket", "travel duffel"]
const quickResults = [
    {
        id: 1,
        name: "Executive Leather Briefcase",
        price: 299,
        image: "/placeholder.svg?height=60&width=60&text=Briefcase",
        category: "bags",
    },
    {
        id: 2,
        name: "Premium Leather Wallet",
        price: 89,
        image: "/placeholder.svg?height=60&width=60&text=Wallet",
        category: "wallets",
    },
    {
        id: 3,
        name: "Classic Leather Belt",
        price: 59,
        image: "/placeholder.svg?height=60&width=60&text=Belt",
        category: "belts",
    },
]

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const [showResults, setShowResults] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }

        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    const handleSearch = (query: string) => {
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`)
            onClose()
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSearch(searchQuery)
        }
    }

    useEffect(() => {
        setShowResults(searchQuery.length > 0)
    }, [searchQuery])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-4 bg-white rounded-lg shadow-2xl z-50 overflow-hidden"
                    >
                        {/* Search Input */}
                        <div className="p-6 border-b">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400 h-5 w-5" />
                                <Input
                                    type="text"
                                    placeholder="Search for products, categories, or keywords..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    className="pl-12 pr-12 h-14 text-lg border-0 focus:ring-0 focus:border-0"
                                    autoFocus
                                />
                                <button
                                    onClick={onClose}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-stone-600"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Search Content */}
                        <div className="max-h-96 overflow-y-auto">
                            {!showResults ? (
                                <div className="p-6 space-y-6">
                                    {/* Recent Searches */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <Clock className="h-4 w-4 text-stone-500" />
                                            <span className="text-sm font-medium text-stone-700">Recent Searches</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {recentSearches.map((search, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleSearch(search)}
                                                    className="px-3 py-1 bg-stone-100 hover:bg-stone-200 rounded-full text-sm text-stone-700 transition-colors"
                                                >
                                                    {search}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Trending Searches */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <TrendingUp className="h-4 w-4 text-stone-500" />
                                            <span className="text-sm font-medium text-stone-700">Trending</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {trendingSearches.map((search, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleSearch(search)}
                                                    className="px-3 py-1 bg-amber-100 hover:bg-amber-200 rounded-full text-sm text-amber-800 transition-colors"
                                                >
                                                    {search}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="p-6">
                                    <div className="space-y-3">
                                        {quickResults
                                            .filter(
                                                (product) =>
                                                    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                                    product.category.toLowerCase().includes(searchQuery.toLowerCase()),
                                            )
                                            .map((product) => (
                                                <button
                                                    key={product.id}
                                                    onClick={() => {
                                                        router.push(`/products/${product.id}`)
                                                        onClose()
                                                    }}
                                                    className="w-full flex items-center gap-4 p-3 hover:bg-stone-50 rounded-lg transition-colors text-left"
                                                >
                                                    <Image
                                                        src={product.image || "/placeholder.svg"}
                                                        alt={product.name}
                                                        width={48}
                                                        height={48}
                                                        className="rounded-lg"
                                                    />
                                                    <div className="flex-1">
                                                        <h4 className="font-medium text-stone-800">{product.name}</h4>
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <Badge variant="secondary" className="text-xs">
                                                                {product.category}
                                                            </Badge>
                                                            <span className="text-sm font-semibold text-amber-700">${product.price}</span>
                                                        </div>
                                                    </div>
                                                </button>
                                            ))}
                                    </div>

                                    {/* View All Results */}
                                    <div className="mt-4 pt-4 border-t">
                                        <Button
                                            onClick={() => handleSearch(searchQuery)}
                                            className="w-full bg-amber-700 hover:bg-amber-800 text-white"
                                        >
                                            View all results for "{searchQuery}"
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
