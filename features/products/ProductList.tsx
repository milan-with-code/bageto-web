import React from 'react'
import { motion } from "framer-motion"
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/products';


interface ProductListType {
    filteredAndSortedProducts: any[]
    viewMode: "grid" | "list";
    handleAddToCart: (product: Product) => void
    productLength: number
}

const ProductList: React.FC<ProductListType> = ({ filteredAndSortedProducts, viewMode, handleAddToCart, productLength }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mb-6"
            >
                <p className="text-stone-600">
                    Showing {filteredAndSortedProducts.length} of {productLength} products
                </p>
            </motion.div>

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
                        key={product._id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        {viewMode === "grid" ? (
                            <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="relative overflow-hidden">
                                    <Link href={`/products/${product._id}`}>
                                        <Image
                                            src={product?.images[0] || "/placeholder.svg"}
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
                                    <Link href={`/products/${product._id}`}>
                                        <h3 className="text-xl font-semibold text-stone-800 mb-2 hover:text-amber-700 transition-colors">
                                            {product.name}
                                        </h3>
                                    </Link>
                                    <p className="text-stone-600 mb-3 text-sm">
                                        {product.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-2xl font-bold text-amber-700">
                                            {product.price.toLocaleString("en-IN", {
                                                style: "currency",
                                                currency: "INR"
                                            })}
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
                                                        {product.price.toLocaleString("en-IN", {
                                                            style: "currency",
                                                            currency: "INR"
                                                        })}
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
                )
                )}
            </motion.div>
        </>

    )
}

export default ProductList
