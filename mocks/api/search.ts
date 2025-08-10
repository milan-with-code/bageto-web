import { QuickResult, RecentSearch, TrendingSearch } from "@/types/search";


export const recentSearches: RecentSearch[] = [
    "leather wallet",
    "briefcase",
    "vintage bag",
];

export const trendingSearches: TrendingSearch[] = [
    "executive briefcase",
    "minimalist wallet",
    "leather jacket",
    "travel duffel",
];

export const quickResults: QuickResult[] = [
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
];
