"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const validateEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setIsSubmitted(false)

        if (!email.trim()) {
            setError("Email is required.")
            return
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.")
            return
        }

        setIsLoading(true)
        try {
            // Simulate API call to send reset email
            await new Promise((resolve) => setTimeout(resolve, 2000))

            // In a real application, you would send an actual request here
            // const response = await fetch('/api/auth/reset-password', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({ email }),
            // });
            // if (!response.ok) {
            //   throw new Error('Failed to send reset email. Please try again.');
            // }

            setIsSubmitted(true)
            setEmail("") // Clear email input on success
        } catch (err: any) {
            setError(err.message || "An unexpected error occurred. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Card className="shadow-xl">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-serif font-bold text-stone-800">Forgot Your Password?</CardTitle>
                    <p className="text-stone-600">
                        Enter your email address below and we'll send you a link to reset your password.
                    </p>
                </CardHeader>
                <CardContent>
                    {isSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-center py-8"
                        >
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-stone-800 mb-2">Password Reset Email Sent!</h3>
                            <p className="text-stone-600">
                                Please check your inbox (and spam folder) for instructions on how to reset your password.
                            </p>
                            <Link href="/login">
                                <Button variant="link" className="mt-4 text-amber-600 hover:text-amber-700">
                                    Back to Login
                                </Button>
                            </Link>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
                                >
                                    {error}
                                </motion.div>
                            )}

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 h-4 w-4" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className={`pl-10 ${error ? "border-red-500" : ""}`}
                                    />
                                </div>
                            </div>

                            <motion.div whileTap={{ scale: 0.98 }}>
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Sending Link...
                                        </div>
                                    ) : (
                                        "Send Reset Link"
                                    )}
                                </Button>
                            </motion.div>

                            <p className="text-center text-sm text-stone-600">
                                Remember your password?{" "}
                                <Link href="/login" className="text-amber-600 hover:text-amber-700 font-medium">
                                    Sign in
                                </Link>
                            </p>
                        </form>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    )
}
