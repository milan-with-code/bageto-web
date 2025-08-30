"use client"

import { createContext, useContext, useReducer, type ReactNode } from "react"

export interface FavoriteItem {
    id: number
    name: string
    price: number
    image: string
    category: string
}

interface FavoritesState {
    favorites: FavoriteItem[]
}

type FavoritesAction =
    | { type: "ADD_FAVORITE"; payload: FavoriteItem }
    | { type: "REMOVE_FAVORITE"; payload: number }
    | { type: "CLEAR_FAVORITES" }

const FavoritesContext = createContext<{
    favorites: FavoriteItem[]
    addToFavorites: (item: FavoriteItem) => void
    removeFromFavorites: (id: string) => void
    clearFavorites: () => void
    isFavorite: (id: number) => boolean
} | null>(null)

function favoritesReducer(state: FavoritesState, action: FavoritesAction): FavoritesState {
    switch (action.type) {
        case "ADD_FAVORITE": {
            // Check if item already exists
            const exists = state.favorites.some((item) => item.id === action.payload.id)
            if (exists) return state

            return {
                favorites: [...state.favorites, action.payload],
            }
        }

        case "REMOVE_FAVORITE": {
            return {
                favorites: state.favorites.filter((item) => item.id !== action.payload),
            }
        }

        case "CLEAR_FAVORITES":
            return { favorites: [] }

        default:
            return state
    }
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(favoritesReducer, { favorites: [] })

    const addToFavorites = (item: FavoriteItem) => {
        dispatch({ type: "ADD_FAVORITE", payload: item })
    }

    const removeFromFavorites = (id: number) => {
        dispatch({ type: "REMOVE_FAVORITE", payload: id })
    }

    const clearFavorites = () => {
        dispatch({ type: "CLEAR_FAVORITES" })
    }

    const isFavorite = (id: number) => {
        return state.favorites.some((item) => item.id === id)
    }

    return (
        <FavoritesContext.Provider
            value={{
                favorites: state.favorites,
                addToFavorites,
                removeFromFavorites,
                clearFavorites,
                isFavorite,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavorites() {
    const context = useContext(FavoritesContext)
    if (!context) {
        throw new Error("useFavorites must be used within a FavoritesProvider")
    }
    return context
}
