import { create } from "zustand";



export interface CartItem {
    productId: string
    name: string
    price: number
    image: string
    category: string
    quantity: number
    size?: string
    color?: string
}

interface CartState {
    cart: CartItem[];
    isLoading: boolean;
    error: string | null;
    addToCart: (item: CartItem) => Promise<void>;
    removeFromCart: (itemId: string) => Promise<void>;
    fetchCartItems: (userId: string) => Promise<void>;
    clearCart: () => Promise<void>;
}

const URL = process.env.NEXT_PUBLIC_BACKEND_URL

export const useCartStore = create<CartState>((set, get) => ({
    cart: [],
    isLoading: false,
    error: null,

    addToCart: async (item) => {
        set({ error: null, isLoading: true })
        try {
            const response = await fetch(`${URL}/api/cart`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(item)
            })

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Failed to add item to cart");

            set({ cart: data?.cart?.items, error: null, isLoading: false })
        } catch (error: any) {
            set({ error: error.message || "Something went wrong", isLoading: false })
        }
    },
    removeFromCart: async (id) => {
        try {
            const response = await fetch(`${URL}/api/cart/${id}`, {
                method: "DELETE",
                credentials: "include"
            })
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Failed to remove item from cart");
            console.log('data :>> ', data);
            set({ cart: data?.cart?.items, error: null, isLoading: false })
        } catch (error: any) {
            set({ error: error.message || "Failed to remove item from cart", isLoading: false })
        }
    },
    fetchCartItems: async (userId: string) => {
        set({ isLoading: true, error: null });
        try {
            const response = await fetch(`${URL}/api/cart/${userId}`, {
                method: "GET",
                credentials: "include",
            });
            if (!response.ok) throw new Error("Failed to fetch cart items");

            const data = await response.json();
            set({ cart: data.items, isLoading: false });
        } catch (error: any) {
            set({ error: error.message || "Failed to fetch cart items", isLoading: false });
        }
    },

    clearCart: async () => { }
}));
