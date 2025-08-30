import { create } from "zustand";

export interface FavoriteItem {
    _id: string
    name: string
    price: number
    images: string[]
    category: string
}

interface FavoriteState {
    error: string | null;
    isLoading: boolean;
    favorites: FavoriteItem[];
    getFavorites: () => Promise<void>;
    addFavorite: (productId: string) => Promise<void>;
    removeFavorite: (productId: string) => Promise<void>;
    isFavorite: (productId: string) => boolean;
}

const URL = process.env.NEXT_PUBLIC_BACKEND_URL
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4OWEzMDk1NTFmMzdmZjUzN2VmYTU4YSIsImVtYWlsIjoiam9obmRvZUBleGFtcGxlLmNvbSIsImlhdCI6MTc1NjQ4MzQ5OCwiZXhwIjoxNzU3MDg4Mjk4fQ._etMv52NE4EHMp92fEnBf03AtxdD2ZL6h_d43gu_Bxw"

export const useFavorite = create<FavoriteState>((set, get) => ({
    error: null,
    isLoading: false,
    favorites: [],
    isFavorite(productId: string) {
        return get().favorites.some((item) => item._id === productId);
    },
    getFavorites: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await fetch(`${URL}/api/favorites`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            if (response.ok) {
                set({ favorites: data.data || [], isLoading: false });
            } else {
                set({ error: data.message || "Failed to fetch favorites", isLoading: false });
            }
        } catch (error) {
            set({ error: (error as Error).message || "Something went wrong", isLoading: false })
        }
    },
    addFavorite: async (productId: string) => {
        set({ isLoading: true, error: null });
        try {
            const response = await fetch(`${URL}/api/favorites/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ productId }),
            });
            const data = await response.json();
            if (!response.ok) {
                set({ error: data.message || "Failed to add favorite", isLoading: false });
                return;
            }
            set({ isLoading: false, favorites: data.data || [] });
        } catch (error) {
            set({ error: (error as Error).message || "Something went wrong", isLoading: false })
        }
    },
    removeFavorite: async (productId: string) => { },
}));
