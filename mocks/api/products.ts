import { Category, Product, ProductItem, ProductReview, ProductsTypes, SortOption } from "@/types/products";

export const products: ProductsTypes[] = [
    {
        id: 1,
        name: "Executive Leather Briefcase",
        price: 299,
        image: "/placeholder.svg?height=400&width=400&text=Leather+Briefcase",
        category: "bags",
        description: "Professional briefcase crafted from premium Italian leather",
        rating: 4.8,
        reviews: 124
    },
    {
        id: 2,
        name: "Premium Leather Wallet",
        price: 89,
        image: "/placeholder.svg?height=400&width=400&text=Leather+Wallet",
        category: "wallets",
        description: "Slim profile wallet with RFID protection",
        rating: 4.9,
        reviews: 89
    },
    {
        id: 3,
        name: "Classic Leather Belt",
        price: 59,
        image: "/placeholder.svg?height=400&width=400&text=Leather+Belt",
        category: "belts",
        description: "Timeless design with solid brass buckle",
        rating: 4.7,
        reviews: 156
    },
    {
        id: 4,
        name: "Vintage Leather Backpack",
        price: 199,
        image: "/placeholder.svg?height=400&width=400&text=Leather+Backpack",
        category: "bags",
        description: "Spacious backpack perfect for daily commute",
        rating: 4.6,
        reviews: 78
    },
    {
        id: 5,
        name: "Luxury Card Holder",
        price: 45,
        image: "/placeholder.svg?height=400&width=400&text=Card+Holder",
        category: "wallets",
        description: "Minimalist card holder for the modern professional",
        rating: 4.8,
        reviews: 92
    },
    {
        id: 6,
        name: "Designer Leather Jacket",
        price: 399,
        image: "/placeholder.svg?height=400&width=400&text=Leather+Jacket",
        category: "jackets",
        description: "Classic motorcycle jacket with modern styling",
        rating: 4.9,
        reviews: 67
    },
    {
        id: 7,
        name: "Travel Leather Duffel",
        price: 249,
        image: "/placeholder.svg?height=400&width=400&text=Leather+Duffel",
        category: "bags",
        description: "Weekend travel bag with vintage appeal",
        rating: 4.7,
        reviews: 43
    },
    {
        id: 8,
        name: "Leather Phone Case",
        price: 29,
        image: "/placeholder.svg?height=400&width=400&text=Phone+Case",
        category: "accessories",
        description: "Protective case with card slots",
        rating: 4.5,
        reviews: 201
    },
    {
        id: 9,
        name: "Handcrafted Leather Gloves",
        price: 79,
        image: "/placeholder.svg?height=400&width=400&text=Leather+Gloves",
        category: "accessories",
        description: "Warm and stylish winter gloves",
        rating: 4.6,
        reviews: 134
    }
]

export const product: Product = {
    id: 1,
    name: "Executive Leather Briefcase",
    price: 299,
    originalPrice: 399,
    images: [
        "/placeholder.svg?height=600&width=600&text=Briefcase+Front",
        "/placeholder.svg?height=600&width=600&text=Briefcase+Side",
        "/placeholder.svg?height=600&width=600&text=Briefcase+Interior",
        "/placeholder.svg?height=600&width=600&text=Briefcase+Detail",
    ],
    category: "bags",
    description:
        "This executive leather briefcase is crafted from premium Italian leather and features a sophisticated design perfect for the modern professional. With multiple compartments and a padded laptop section, it combines style with functionality.",
    features: [
        "Premium Italian leather construction",
        "Padded laptop compartment fits up to 15-inch laptops",
        "Multiple interior pockets for organization",
        "Solid brass hardware",
        "Adjustable shoulder strap included",
        "Lifetime warranty",
    ],
    specifications: {
        dimensions: '16" x 12" x 4"',
        weight: "3.2 lbs",
        material: "Full-grain Italian leather",
        lining: "Cotton canvas",
        hardware: "Solid brass",
        closure: "Dual zipper",
    },
    rating: 4.8,
    reviews: 124,
    inStock: true,
    colors: ["Brown", "Black", "Tan"],
    sizes: ["Standard"],
};

export const reviews: ProductReview[] = [
    {
        id: 1,
        name: "John Smith",
        rating: 5,
        date: "2024-01-15",
        title: "Excellent quality and craftsmanship",
        comment:
            "This briefcase exceeded my expectations. The leather is beautiful and the construction is top-notch. Perfect for daily use.",
        verified: true,
    },
    {
        id: 2,
        name: "Sarah Johnson",
        rating: 5,
        date: "2024-01-10",
        title: "Perfect for business travel",
        comment:
            "Love the organization and the professional look. Gets compliments everywhere I go. Worth every penny.",
        verified: true,
    },
    {
        id: 3,
        name: "Michael Chen",
        rating: 4,
        date: "2024-01-05",
        title: "Great briefcase, minor issue with strap",
        comment:
            "Overall fantastic product. The only minor issue is the shoulder strap could be a bit more comfortable for long carries.",
        verified: true,
    },
];

export const categories: Category[] = [
    "all",
    "bags",
    "wallets",
    "belts",
    "jackets",
    "accessories",
];

export const sortOptions: SortOption[] = [
    { value: "featured", label: "Featured" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
    { value: "newest", label: "Newest" },
];


export const productList: ProductItem[] = [
    {
        id: 1,
        name: "Executive Briefcase",
        price: 299,
        originalPrice: 399,
        image: "/placeholder.svg?height=400&width=400&text=Executive+Briefcase",
        category: "Bags",
        isNew: true,
        rating: 4.9,
        badge: "Best Seller",
        reviews: 124,
    },
    {
        id: 2,
        name: "Minimalist Wallet",
        price: 89,
        image: "/placeholder.svg?height=400&width=400&text=Minimalist+Wallet",
        category: "Wallets",
        isBestseller: true,
        rating: 4.8,
        badge: "Best Seller",
        reviews: 124,
    },
    {
        id: 3,
        name: "Vintage Backpack",
        price: 199,
        image: "/placeholder.svg?height=400&width=400&text=Vintage+Backpack",
        category: "Bags",
        rating: 4.7,
        badge: "Best Seller",
        reviews: 124,
    },
    {
        id: 4,
        name: "Classic Belt",
        price: 59,
        image: "/placeholder.svg?height=400&width=400&text=Classic+Belt",
        category: "Accessories",
        rating: 4.6,
        badge: "Best Seller",
        reviews: 124,
    },
    {
        id: 5,
        name: "Travel Duffel",
        price: 249,
        image: "/placeholder.svg?height=400&width=400&text=Travel+Duffel",
        category: "Bags",
        isNew: true,
        rating: 4.8,
        badge: "Best Seller",
        reviews: 124,
    },
];
