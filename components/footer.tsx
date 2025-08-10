"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react'

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Story", href: "/about#story" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
  ],
  products: [
    { name: "Bags", href: "/products?category=bags" },
    { name: "Wallets", href: "/products?category=wallets" },
    { name: "Belts", href: "/products?category=belts" },
    { name: "Accessories", href: "/products?category=accessories" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "Care Instructions", href: "/care" },
    { name: "Returns", href: "/returns" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Shipping Policy", href: "/shipping" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com", color: "hover:text-blue-600" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com", color: "hover:text-pink-600" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com", color: "hover:text-blue-400" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com", color: "hover:text-red-600" },
]

export default function Footer() {
  return (
    <footer className="bg-leather-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-leather-gold to-leather-brown rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">AL</span>
                </div>
                <span className="text-2xl font-serif font-bold">
                  Bageto
                </span>
              </Link>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Crafting premium leather goods since 1985. Each piece tells a story of
                exceptional craftsmanship and timeless elegance.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="h-4 w-4 text-leather-gold" />
                  <span className="text-sm">123 Craft Street, Artisan City, AC 12345</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="h-4 w-4 text-leather-gold" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="h-4 w-4 text-leather-gold" />
                  <span className="text-sm">hello@artisanleather.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 capitalize text-white">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-leather-gold transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Bottom Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} Bageto Co. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`text-gray-400 ${social.color} transition-colors duration-300`}
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
