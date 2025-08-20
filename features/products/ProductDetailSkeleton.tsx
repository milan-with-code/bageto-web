"use client"

import React from "react"

export default function ProductDetailSkeleton() {
    return (
        <div className="min-h-screen bg-cream-50 pt-20">
            <div className="max-w-7xl mx-auto px-4 py-8 animate-pulse">
                {/* Breadcrumb Skeleton */}
                <div className="flex items-center space-x-2 text-sm text-stone-400 mb-8">
                    <div className="h-4 w-16 bg-stone-300 rounded" />
                    <span>/</span>
                    <div className="h-4 w-24 bg-stone-300 rounded" />
                    <span>/</span>
                    <div className="h-4 w-32 bg-stone-300 rounded" />
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left: Image Skeleton */}
                    <div className="space-y-4">
                        <div className="relative aspect-square bg-stone-200 rounded-lg" />
                        <div className="grid grid-cols-4 gap-4">
                            <div className="aspect-square bg-stone-200 rounded-lg" />
                            <div className="aspect-square bg-stone-200 rounded-lg" />
                            <div className="aspect-square bg-stone-200 rounded-lg" />
                            <div className="aspect-square bg-stone-200 rounded-lg" />
                        </div>
                    </div>

                    {/* Right: Info Skeleton */}
                    <div className="space-y-6">
                        <div className="h-6 w-24 bg-stone-300 rounded" />
                        <div className="h-10 w-full bg-stone-300 rounded" />
                        <div className="h-6 w-32 bg-stone-300 rounded" />
                        <div className="h-8 w-40 bg-stone-200 rounded" />
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            <div className="h-16 bg-stone-200 rounded-lg" />
                            <div className="h-16 bg-stone-200 rounded-lg" />
                            <div className="h-16 bg-stone-200 rounded-lg" />
                        </div>
                        <div className="flex gap-4 mt-4">
                            <div className="flex-1 h-12 bg-stone-300 rounded" />
                            <div className="h-12 w-12 bg-stone-300 rounded" />
                            <div className="h-12 w-12 bg-stone-300 rounded" />
                        </div>
                    </div>
                </div>

                {/* Tabs Skeleton */}
                <div className="mt-16 space-y-4">
                    <div className="flex gap-2 w-96">
                        <div className="h-10 w-32 bg-stone-200 rounded" />
                        <div className="h-10 w-32 bg-stone-200 rounded" />
                        <div className="h-10 w-32 bg-stone-200 rounded" />
                    </div>
                    <div className="mt-8 space-y-4">
                        <div className="h-6 w-48 bg-stone-200 rounded" />
                        <div className="h-4 w-full bg-stone-200 rounded" />
                        <div className="h-4 w-full bg-stone-200 rounded" />
                        <div className="h-4 w-full bg-stone-200 rounded" />
                    </div>
                </div>
            </div>
        </div>
    )
}
