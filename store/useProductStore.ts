import { create } from "zustand"


interface Product {
    id: number
    title: string
    email: string
}

interface ProductState {
    product: Product[]
    loading: boolean
    error: string | null
    fetchProducts: () => Promise<void>
    fetchProductDetails: (id: number) => Promise<void>
    deleteProduct: (id: number) => Promise<void>;
    editProduct: (id: number, updatedData: Partial<Product>) => Promise<void>;
}

export const useProductStore = create<ProductState>((set, get) => ({
    product: [],
    loading: false,
    error: null,

    fetchProducts: async () => {
        set({ loading: true, error: null })
        try {
            const res = await fetch('https://dummyjson.com/products');
            const data = await res.json();
            set({
                product: data?.products
                , loading: false
            })
        } catch (error: any) {
            set({ error: error.message || "Something went wrong", loading: false })
        }
    },

    fetchProductDetails: async (id) => {
        set({ error: null, loading: true });
        try {
            const res = await fetch(`https://dummyjson.com/products/${id}`)
            const data = await res.json();
            set({ product: [data], loading: false })
        } catch (error: any) {
            set({ error: error.message || "Something went wrong", loading: false })
        }
    },

    deleteProduct: async (id) => {
        try {
            await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: "DELETE",
            });

            set({
                product: get().product.filter((p) => p.id !== id),
                loading: false
            })

        } catch (error: any) {
            set({ error: error.message || "Something went wrong", loading: false })
        }
    },

    editProduct: async (id, updatedData: Partial<Product>) => {
        set({ loading: true, error: null });
        try {
            const res = await fetch("", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedData)
            })
            const data = await res.json();
            const editProductData = get().product.map((item) => item.id === id ? { ...item, ...data } : item)
            set({ product: editProductData, loading: false })
        } catch (error: any) {
            set({ error: error.message || "Something went wrong", loading: false })
        }
    }

}))
