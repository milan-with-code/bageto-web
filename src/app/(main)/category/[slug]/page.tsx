"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Heart, ShoppingCart, Star, Filter, SortAsc } from "lucide-react"
import { use, useEffect } from "react"
import { useCategoryStore } from "@/store/useCategory"

const categoryData = {
    accessories: {
        name: "Accessories",
        description: "Premium watches, jewelry, and fashion accessories to complete your style",
        products: [
            {
                id: 1,
                name: "Luxury Leather Watch",
                price: 299,
                rating: 4.8,
                image: "/luxury-leather-watch.png",
                badge: "Best Seller",
            },
            {
                id: 2,
                name: "Classic Gold Watch",
                price: 459,
                rating: 4.9,
                image: "/luxury-leather-watch.png",
                badge: "Premium",
            },
            { id: 3, name: "Sport Chronograph", price: 199, rating: 4.6, image: "/luxury-leather-watch.png", badge: "New" },
            { id: 4, name: "Minimalist Watch", price: 149, rating: 4.7, image: "/luxury-leather-watch.png", badge: "" },
            { id: 5, name: "Smart Watch Pro", price: 399, rating: 4.5, image: "/luxury-leather-watch.png", badge: "Tech" },
            {
                id: 6,
                name: "Vintage Timepiece",
                price: 329,
                rating: 4.8,
                image: "/luxury-leather-watch.png",
                badge: "Limited",
            },
        ],
    },
    bags: {
        name: "Bags",
        description: "Stylish backpacks, handbags, and travel accessories for every occasion",
        products: [
            {
                id: 1,
                name: "Navy Blue Backpack",
                price: 89,
                rating: 4.7,
                image: "/navy-blue-backpack-with-minimal-design.png",
                badge: "Popular",
            },
            {
                id: 2,
                name: "Leather Travel Bag",
                price: 159,
                rating: 4.8,
                image: "/navy-blue-backpack-with-minimal-design.png",
                badge: "Premium",
            },
            {
                id: 3,
                name: "Urban Messenger",
                price: 79,
                rating: 4.6,
                image: "/navy-blue-backpack-with-minimal-design.png",
                badge: "New",
            },
            {
                id: 4,
                name: "Hiking Backpack",
                price: 129,
                rating: 4.9,
                image: "/navy-blue-backpack-with-minimal-design.png",
                badge: "Outdoor",
            },
        ],
    },
    electronics: {
        name: "Electronics",
        description: "Latest gadgets, headphones, and tech accessories for the modern lifestyle",
        products: [
            {
                id: 1,
                name: "Wireless Headphones",
                price: 199,
                rating: 4.8,
                image: "/modern-headphones-and-smartphone-on-white-surface.png",
                badge: "Best Seller",
            },
            {
                id: 2,
                name: "Smartphone Pro",
                price: 899,
                rating: 4.9,
                image: "/modern-headphones-and-smartphone-on-white-surface.png",
                badge: "Flagship",
            },
            {
                id: 3,
                name: "Bluetooth Speaker",
                price: 79,
                rating: 4.6,
                image: "/modern-headphones-and-smartphone-on-white-surface.png",
                badge: "Portable",
            },
            {
                id: 4,
                name: "Gaming Headset",
                price: 149,
                rating: 4.7,
                image: "/modern-headphones-and-smartphone-on-white-surface.png",
                badge: "Gaming",
            },
            {
                id: 5,
                name: "Wireless Earbuds",
                price: 129,
                rating: 4.5,
                image: "/modern-headphones-and-smartphone-on-white-surface.png",
                badge: "Compact",
            },
            {
                id: 6,
                name: "Smart Watch",
                price: 299,
                rating: 4.8,
                image: "/modern-headphones-and-smartphone-on-white-surface.png",
                badge: "Health",
            },
        ],
    },
    shoes: {
        name: "Shoes",
        description: "Comfortable sneakers, boots, and athletic footwear for every activity",
        products: [
            {
                id: 1,
                name: "Black Nike Sneakers",
                price: 129,
                rating: 4.8,
                image: "/black-nike-sneakers-on-white-background.png",
                badge: "Athletic",
            },
            {
                id: 2,
                name: "Running Shoes Pro",
                price: 159,
                rating: 4.9,
                image: "/black-nike-sneakers-on-white-background.png",
                badge: "Performance",
            },
            {
                id: 3,
                name: "Casual Sneakers",
                price: 89,
                rating: 4.6,
                image: "/black-nike-sneakers-on-white-background.png",
                badge: "Comfort",
            },
            {
                id: 4,
                name: "High-Top Sneakers",
                price: 119,
                rating: 4.7,
                image: "/black-nike-sneakers-on-white-background.png",
                badge: "Style",
            },
            {
                id: 5,
                name: "Basketball Shoes",
                price: 179,
                rating: 4.8,
                image: "/black-nike-sneakers-on-white-background.png",
                badge: "Sport",
            },
            {
                id: 6,
                name: "Walking Shoes",
                price: 99,
                rating: 4.5,
                image: "/black-nike-sneakers-on-white-background.png",
                badge: "Daily",
            },
        ],
    },
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
}

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const category = categoryData[slug as keyof typeof categoryData]

    const { getCategoryBySlug, error } = useCategoryStore();

    useEffect(() => {
        if (!slug) return;
        getCategoryBySlug(slug);
    }, [slug, getCategoryBySlug])

    if (!category) {
        return (
            <main className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold  mb-4">{error || "Category Not Found"}</h1>
                    <Link href="/">
                        <Button>Back to Home</Button>
                    </Link>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8">
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <Link href="/explore">
                            <Button variant="ghost" size="sm" className="gap-2">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Categories
                            </Button>
                        </Link>
                    </div>

                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-foreground mb-4">{category.name}</h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">{category.description}</p>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-muted-foreground">{category.products.length} products found</p>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                                <Filter className="w-4 h-4" />
                                Filter
                            </Button>
                            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                                <SortAsc className="w-4 h-4" />
                                Sort
                            </Button>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {category.products.map((product) => (
                        <motion.div key={product.id} variants={itemVariants}>
                            <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-4">
                                    <div className="relative bg-gray-100 rounded-lg p-6 mb-4 aspect-square flex items-center justify-center overflow-hidden">
                                        {product.badge && (
                                            <Badge className="absolute top-2 left-2 z-10" variant="secondary">
                                                {product.badge}
                                            </Badge>
                                        )}
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <Heart className="w-4 h-4" />
                                        </Button>
                                        <motion.img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="font-semibold text-foreground line-clamp-2">{product.name}</h3>

                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            <span className="text-sm text-muted-foreground">{product.rating}</span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-bold text-foreground">${product.price}</span>
                                            <Button size="sm" className="gap-2">
                                                <ShoppingCart className="w-4 h-4" />
                                                Add
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </main>
    )
}
