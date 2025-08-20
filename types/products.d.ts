export type Specification = {
    dimensions: string;
    weight: string;
    material: string;
    lining: string;
    hardware: string;
    closure: string;
};

export type Product = {
    _id: string;
    name: string;
    price: number;
    originalPrice: number;
    images: string[];
    category: string;
    description: string;
    features: string[];
    specifications: Specification;
    rating: number;
    reviews: any[];
    inStock: boolean;
    colors: string[];
    sizes: string[];
};

export interface AllProduct {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    description: string;
    rating: number;
    reviews: number;
    tags: string[];
}

export interface ProductReview {
    id: number;
    name: string;
    rating: number;
    date: string;
    title: string;
    comment: string;
    verified: boolean;
}

export type ProductsTypes = {
    _id: string;
    name: string;
    price: number;
    image: string;
    category: string,
    description: string,
    rating: number,
    reviews: number

}

export interface ProductSpecification {
    dimensions: string;
    weight: string;
    material: string;
    lining: string;
    hardware: string;
    closure: string;
}

export type Category = "all" | "bags" | "wallets" | "belts" | "jackets" | "accessories";

export interface SortOption {
    value: "featured" | "price-low" | "price-high" | "rating" | "newest";
    label: string;
}

export type ProductItem = {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    isNew?: boolean;
    isBestseller?: boolean;
    rating: number;
    badge?: string;
    reviews: number;
};
