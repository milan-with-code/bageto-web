import { toast } from "@/hooks/use-toast";
import { create } from "zustand";

interface UserDetails {
    email: string,
    password: string
}

interface RegisterType {
    name: string
    email: string
    password: string
    confirmPassword: string

}

interface AuthState {
    user: []
    loading: boolean
    error: string | null,
    loginUser: (credentials: UserDetails) => Promise<void>
    logoutUser: () => Promise<void>;
    fetchUser: () => Promise<void>;
    registerUser: (credentials: RegisterType) => Promise<void>
}

const URL = process.env.NEXT_PUBLIC_BACKEND_URL

export const useAuthStore = create<AuthState>((set, get) => ({
    user: [],
    loading: false,
    error: null,

    loginUser: async (credentials: UserDetails) => {
        set({ error: null, loading: true })
        try {
            const res = await fetch(`${URL}/api/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(credentials)
            });

            const data = await res.json();

            if (!res.ok) {
                set({ error: data.error || "Login failed", loading: false });
                toast({
                    title: "Login Failed",
                    description: data.error || "Invalid credentials",
                });
                return;
            }

            if (data.status === 200) {
                toast({
                    title: "Login Successful",
                    description: "Welcome back!",
                });
            }

            set({ error: null, loading: false })

        } catch (error: any) {
            set({ error: error.message || "Something went wrong", loading: false })
        }
    },

    logoutUser: async () => {
        set({ error: null, loading: true })
        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
                method: "POST",
                credentials: "include",
            });
            set({ user: [], loading: false, error: null });
        } catch (error: any) {
            set({ loading: false, error: error.message });
        }
    },

    fetchUser: async () => {
        set({ loading: true, error: null });
        try {
            const res = await fetch(`${URL}/api/users/me`, {
                credentials: "include",
            });
            const data = await res.json()
            console.log('data :>> ', data);
            set({ user: data, loading: false, error: null });
        } catch (error: any) {
            set({ loading: false, error: error.message });

        }
    },

    registerUser: async (credentials: RegisterType) => {
        set({ loading: true, error: null })
        try {
            const res = await fetch(`${URL}/api/users/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            })
            const data = await res.json();
            set({ user: data, loading: false, error: null })
        } catch (error: any) {
            set({ loading: false, error: error.message })
        }
    }

}))

