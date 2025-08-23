"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type ViewMode = "grid" | "list";

interface ProductListSkeletonProps {
    viewMode?: ViewMode;
    count?: number;
    className?: string;
}

export default function ProductListSkeleton({
    viewMode = "grid",
    count = 9,
    className,
}: ProductListSkeletonProps) {
    const items = React.useMemo(() => Array.from({ length: count }), [count]);

    if (viewMode === "list") {
        return (
            <div
                aria-busy="true"
                aria-live="polite"
                className={cn("space-y-6", className)}
            >
                {items.map((_, i) => (
                    <Card
                        key={i}
                        className="overflow-hidden border-0 shadow-lg"
                    >
                        <div className="flex flex-col md:flex-row">
                            <div className="relative md:w-64 h-64 md:h-48">
                                <Skeleton className="h-full w-full" />
                            </div>
                            <CardContent className="flex-1 p-6">
                                <div className="flex flex-col h-full">
                                    <Skeleton className="h-5 w-24 mb-3" />
                                    <Skeleton className="h-6 w-1/2 mb-3" />
                                    <Skeleton className="h-4 w-full mb-2" />
                                    <Skeleton className="h-4 w-5/6 mb-4" />
                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <Skeleton className="h-7 w-24" />
                                            <Skeleton className="h-5 w-16" />
                                        </div>
                                        <Skeleton className="h-9 w-32" />
                                    </div>
                                </div>
                            </CardContent>
                        </div>
                    </Card>
                ))}
            </div>
        );
    }

    return (
        <div
            aria-busy="true"
            aria-live="polite"
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                className
            )}
        >
            {items.map((_, i) => (
                <Card
                    key={i}
                    className="overflow-hidden border-0 shadow-lg"
                >
                    <div className="relative">
                        <Skeleton className="w-full h-80" />
                    </div>
                    <CardContent className="p-6">
                        <Skeleton className="h-5 w-24 mb-3" />
                        <Skeleton className="h-6 w-2/3 mb-3" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-5/6 mb-4" />
                        <div className="flex items-center justify-between">
                            <Skeleton className="h-7 w-20" />
                            <Skeleton className="h-5 w-16" />
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
