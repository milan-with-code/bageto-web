"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart, Menu, User, Search, Heart, ShoppingBag } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useFavorites } from "@/contexts/favorites-context"
import { useAuth } from "@/contexts/auth-context"
import SearchModal from "@/components/search-modal"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { items } = useCart()
  const { favorites } = useFavorites()
  const { user } = useAuth()

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-leather-gold to-leather-brown rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">BL</span>
                </div>
                <span className="text-xl lg:text-2xl font-serif font-bold text-gradient">
                  Bageto
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <motion.div key={item.name} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-300 hover:text-amber-600 ${isScrolled ? "text-stone-700" : "text-white"
                      }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className={`transition-colors duration-300 ${isScrolled ? "text-stone-700 hover:text-amber-600" : "text-white hover:text-amber-300"
                    }`}
                >
                  <Search className="h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href="/favorites">
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`relative transition-colors duration-300 ${isScrolled ? "text-stone-700 hover:text-amber-600" : "text-white hover:text-amber-300"
                      }`}
                  >
                    <Heart className="h-5 w-5" />
                    {favorites.length > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-600 text-white text-xs">
                        {favorites.length}
                      </Badge>
                    )}
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href="/auth/login">
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`transition-colors duration-300 ${isScrolled ? "text-stone-700 hover:text-amber-600" : "text-white hover:text-amber-300"
                      }`}
                  >
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href="/cart">
                  <Button variant="ghost" size="icon" className="relative">
                    <ShoppingBag className="h-5 w-5" />
                    <AnimatePresence>
                      {totalItems > 0 && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="absolute -top-2 -right-2"
                        >
                          <Badge className="h-5 w-5 flex items-center justify-center p-0 bg-leather-gold text-white text-xs">
                            {totalItems}
                          </Badge>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Button>
                </Link>
              </motion.div>

            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`transition-colors duration-300 ${isScrolled ? "text-stone-700" : "text-white"}`}
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-white">
                  <div className="flex flex-col space-y-6 mt-8">
                    <Link href="/" className="text-2xl font-serif font-bold text-stone-800">
                      BAGETO
                    </Link>

                    <nav className="flex flex-col space-y-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-lg font-medium text-stone-700 hover:text-amber-600 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </nav>

                    <div className="flex items-center space-x-4 pt-6 border-t">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setIsSearchOpen(true)
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        <Search className="h-5 w-5" />
                      </Button>
                      <Link href="/favorites">
                        <Button variant="ghost" size="icon" className="relative">
                          <Heart className="h-5 w-5" />
                          {favorites.length > 0 && (
                            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-600 text-white text-xs">
                              {favorites.length}
                            </Badge>
                          )}
                        </Button>
                      </Link>
                      <Link href="/auth/login">
                        <Button variant="ghost" size="icon">
                          <User className="h-5 w-5" />
                        </Button>
                      </Link>
                      <Link href="/cart">
                        <Button variant="ghost" size="icon" className="relative">
                          <ShoppingCart className="h-5 w-5" />
                          {totalItems > 0 && (
                            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-amber-600 text-white text-xs">
                              {totalItems}
                            </Badge>
                          )}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
