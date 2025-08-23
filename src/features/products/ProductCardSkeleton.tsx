import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
    return (
        <div className="flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden">
            <Skeleton className="h-80 w-full" />
            <div className="py-4 space-y-3">
                <Skeleton className="h-6 w-2/3" />
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-8 w-full" />
            </div>
        </div>
    );
}
