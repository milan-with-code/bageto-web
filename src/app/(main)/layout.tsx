import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { AuthProvider } from '@/contexts/auth-context'
import { CartProvider } from '@/contexts/cart-context'
import { FavoritesProvider } from '@/contexts/favorites-context'
import React from 'react'

const Layout = (
  { children }: {
    children: React.ReactNode;
  }
) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange={false}
    >
      <AuthProvider>
        <FavoritesProvider>
          <CartProvider>
            <Navigation />
            <main className='min-h-screen'>{children}</main>
            <Footer />
            <Toaster />
          </CartProvider>
        </FavoritesProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default Layout
