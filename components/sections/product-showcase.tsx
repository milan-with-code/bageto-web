"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Eye,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/contexts/cart-context";
import { productList } from "@/mocks/api/products";

export default function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addItem } = useCart();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, productList.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.max(1, productList.length - 2)) %
        Math.max(1, productList.length - 2)
    );
  };

  const handleAddToCart = (product: (typeof productList)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: 1,
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-leather-gold font-medium text-sm uppercase tracking-wider">
            Featured Collection
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mt-4 mb-6">
            Handpicked for You
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our most popular pieces, each crafted with precision and
            passion
          </p>
        </motion.div>

        {/* Carousel Controls */}
        <div className="flex justify-between items-center mb-8">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </motion.div>

          <div className="flex space-x-2">
            {Array.from({ length: Math.max(1, productList.length - 2) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-leather-gold" : "bg-muted"
                    }`}
                />
              )
            )}
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        {/* Product Carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: -currentIndex * 400 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {productList.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80"
              >
                <div
                  key={`overlay-${product.id}`}
                  className="group relative bg-white rounded-2xl  overflow-hidden cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-80 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-amber-600 hover:bg-amber-700">
                      {product.badge}
                    </Badge>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="font-semibold text-xl mb-2">
                          {product.name}
                        </h3>
                        <div className="flex items-center mb-4">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(product.rating)
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-gray-400"
                                  }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm ml-2">
                            ({product.reviews})
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-bold">
                              ${product.price}
                            </span>
                            <span className="text-sm text-gray-300 line-through ml-2">
                              ${product.originalPrice}
                            </span>
                          </div>
                          <div className="flex space-x-2">
                            <Link href={`products/${product.id}`}>
                              <Button size="sm" variant="secondary">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </Link>
                            <Button
                              onClick={() => handleAddToCart(product)}
                              size="sm"
                              className="bg-amber-600 hover:bg-amber-700"
                            >
                              <ShoppingBag className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/products">
            <Button
              size="lg"
              className="bg-leather-brown hover:bg-leather-dark text-white px-8 py-4"
            >
              View All Products
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
