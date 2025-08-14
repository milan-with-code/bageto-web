import React from 'react'
import { motion } from "framer-motion"
import { Grid, List, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { categories, sortOptions } from '@/mocks/api/products'

interface ProductFiltersBarProps {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    sortBy: string;
    setSortBy: React.Dispatch<React.SetStateAction<string>>;
    selectedCategory: string;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
    viewMode: "grid" | "list";
    setViewMode: React.Dispatch<React.SetStateAction<"grid" | "list">>;
}

const VIEW_MODES = [
    { key: "grid", icon: Grid },
    { key: "list", icon: List }
] as const

const ProductFiltersBar: React.FC<ProductFiltersBarProps> = ({
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    viewMode,
    setViewMode
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg py-0-4 sm:py-6 mb-8"
        >
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
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

                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto sm:justify-end">
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

                    <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-full sm:w-48">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            {sortOptions.map(({ value, label }) => (
                                <SelectItem key={value} value={value}>
                                    {label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <div className="flex border rounded-lg w-full sm:w-auto">
                        {VIEW_MODES.map(({ key, icon: Icon }, idx) => (
                            <Button
                                key={key}
                                variant={viewMode === key ? "default" : "ghost"}
                                size="sm"
                                onClick={() => setViewMode(key)}
                                className={`flex-1 sm:flex-none ${idx === 0 ? "rounded-r-none" : "rounded-l-none"}`}
                            >
                                <Icon className="h-4 w-4" />
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProductFiltersBar
