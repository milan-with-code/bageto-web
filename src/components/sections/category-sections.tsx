"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { categories } from "@/mocks/api/categories";
import Image from "next/image";

const CategorySections = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold mt-4 mb-6">
                        Shop By Category
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Discover timeless craftsmanship with our exclusive leather
                        collection. From bags to accessories, explore categories that define
                        elegance and durability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4">
                    {categories.map((category, index) => (
                        <Link href={`/category/${category.slug}`} key={index}>
                            <Image
                                src={category.image}
                                alt={category.name}
                                width={300}
                                height={300}
                                className="object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-foreground mb-1">
                                    {category.name}
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    {category.productCount} Products Available
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/products" className="text-center">
                        <Button
                            size="lg"
                            className="bg-leather-brown hover:bg-leather-dark text-white px-8 py-4"
                        >
                            Explore All Category
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CategorySections;
