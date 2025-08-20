"use client"

import { useAuthStore } from "@/store/useAuthStore"
import { createContext, useContext, useState, ReactNode, useEffect } from "react"

interface User {
  email: string
  name: string,
  _id: string
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const { loginUser, loading, fetchUser, user, logoutUser } = useAuthStore();


  useEffect(() => {
    fetchUser()
  }, [fetchUser]);

  const login = async (email: string, password: string) => {
    await loginUser({
      email,
      password
    })
  }

  const register = async (email: string, password: string, name: string) => {
    console.log('email,password :>> ', email, password);
  }

  const logout = () => {
    logoutUser()
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading: loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
