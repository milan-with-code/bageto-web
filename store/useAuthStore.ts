import { toast } from "@/hooks/use-toast";
import { create } from "zustand";


interface UserDetails {
    email: string,
    password: string
}

interface AuthState {
    user: []
    loading: boolean
    error: string | null,
    loginUser: (credentials: UserDetails) => Promise<void>
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
    }

}))

