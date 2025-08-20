import { Product, ProductsTypes } from "@/types/products"
import { create } from "zustand"



interface ProductState {
    products: Product[]
    product: Product | null;
    isLoading: boolean
    error: string | null
    fetchProducts: () => Promise<void>
    fetchProductDetails: (id: string) => Promise<void>
    deleteProduct: (id: string) => Promise<void>;
    editProduct: (id: string, updatedData: Partial<ProductsTypes>) => Promise<void>;
}

const URL = process.env.NEXT_PUBLIC_BACKEND_URL

export const useProductStore = create<ProductState>((set, get) => ({
    products: [],
    product: null,
    isLoading: false,
    error: null,

    fetchProducts: async () => {
        set({ isLoading: true, error: null })
        try {
            const res = await fetch(`${URL}/api/products`);
            const data = await res.json();
            set({
                products: data?.data || []
                , isLoading: false
            })
        } catch (error: any) {
            set({ error: error.message || "Something went wrong", isLoading: false })
        }
    },

    fetchProductDetails: async (id) => {
        set({ error: null, isLoading: true });
        const state = get();
        const existing = state.products.find((p) => p._id === id);

        if (existing) {
            set({ product: existing, isLoading: false });
            return;
        }
        try {
            const res = await fetch(`${URL}/api/products/${id}`)
            const data = await res.json();
            set({ product: data, isLoading: false })
        } catch (error: any) {
            set({ error: error.message || "Something went wrong", isLoading: false })
        }
    },

    deleteProduct: async (id) => {
        try {
            await fetch(`${URL}/api/products/${id}`, {
                method: "DELETE",
            });

            set({
                products: get().products.filter((p) => p._id !== id),
                isLoading: false
            })

        } catch (error: any) {
            set({ error: error.message || "Something went wrong", isLoading: false })
        }
    },

    editProduct: async (id, updatedData: Partial<ProductsTypes>) => {
        set({ isLoading: true, error: null });
        try {
            const res = await fetch(`${URL}/api/product/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedData)
            })
            const data = await res.json();
            const editProductData = get().products.map((item) => item._id === id ? { ...item, ...data } : item)
            set({ products: editProductData, isLoading: false })
        } catch (error: any) {
            set({ error: error.message || "Something went wrong", isLoading: false })
        }
    }

}))
