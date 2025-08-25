import { create } from "zustand";

interface Category {
    id: string;
    name: string;
    slug: string;
    image: string;
    description: string;
    stock: number;
}

interface CategoryState {
    categories: Category[];
    category: Category | null;
    isLoading: boolean;
    error: string | null;
    getCategories: () => Promise<void>;
    getCategoryById: (id: string) => Promise<void>;
    getCategoryBySlug: (slug: string) => Promise<void>;
}

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const useCategoryStore = create<CategoryState>((set, get) => ({
    categories: [],
    category: null,
    isLoading: false,
    error: null,

    getCategories: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await fetch(`${API_URL}/api/categories`);
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Failed to fetch categories");
            }

            set({
                categories: result.data || [],
                isLoading: false,
            });
        } catch (error) {
            set({ error: (error as Error).message || "Something went wrong", isLoading: false })
        }
    },

    getCategoryById: async (id: string) => {
        set({ isLoading: true, error: null });
        try {
            const response = await fetch(`${API_URL}/api/categories/${id}`);
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Failed to fetch category");
            }

            set({
                category: result.data || null,
                isLoading: false,
            });
        } catch (error) {
            set({ error: (error as Error).message || "Something went wrong", isLoading: false })
        }
    },

    getCategoryBySlug: async (slug) => {
        set({ isLoading: true, error: null });
        const state = get();
        const existing = state.categories.find((p) => p.slug === slug);
        if (existing) {
            set({ category: existing, isLoading: false });
            return;
        }
        try {
            const response = await fetch(`${API_URL}/api/categories/${slug}`);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Failed to fetch category by slug");
            }
            set({ category: data.data || null, isLoading: false });
        } catch (error) {
            set({ error: (error as Error).message || "Something went wrong", isLoading: false })
        }
    }
}));
