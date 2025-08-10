"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Globe, Heart } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const stats = [
  { label: "Years of Excellence", value: "39", icon: Award },
  { label: "Happy Customers", value: "50K+", icon: Users },
  { label: "Countries Served", value: "25", icon: Globe },
  { label: "Products Crafted", value: "100K+", icon: Heart }
]

const team = [
  {
    name: "Marco Bageto",
    role: "Founder & Master Craftsman",
    image: "/placeholder.svg?height=300&width=300&text=Marco+Bageto",
    bio: "With over 40 years of experience, Marco founded Bageto with a vision to create timeless leather goods."
  },
  {
    name: "Sofia Bageto",
    role: "Creative Director",
    image: "/placeholder.svg?height=300&width=300&text=Sofia+Bageto",
    bio: "Sofia brings modern design sensibilities while honoring traditional craftsmanship techniques."
  },
  {
    name: "Alessandro Romano",
    role: "Head of Production",
    image: "/placeholder.svg?height=300&width=300&text=Alessandro+Romano",
    bio: "Alessandro ensures every piece meets our exacting standards of quality and durability."
  }
]

const values = [
  {
    title: "Craftsmanship",
    description: "Every piece is meticulously handcrafted by skilled artisans using time-honored techniques passed down through generations."
  },
  {
    title: "Quality",
    description: "We source only the finest materials from trusted suppliers, ensuring each product meets our exacting standards."
  },
  {
    title: "Sustainability",
    description: "We're committed to responsible sourcing and sustainable practices that respect both people and the environment."
  },
  {
    title: "Heritage",
    description: "Our designs honor traditional leatherworking while incorporating modern functionality for today's lifestyle."
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-stone-800 text-white">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=600&width=1200&text=Leather+Workshop"
            alt="Bageto Workshop"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-4 bg-amber-700 text-white">
              Since 1985
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto">
              Four decades of passion, craftsmanship, and dedication to creating
              the world's finest leather goods.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-700 rounded-full mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-stone-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-stone-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-6">
                The Bageto Legacy
              </h2>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>
                  Founded in 1985 by master craftsman Marco Bageto in the heart of Florence,
                  Italy, Bageto began as a small family workshop dedicated to preserving the
                  ancient art of leather craftsmanship.
                </p>
                <p>
                  What started as a passion project has grown into a globally recognized brand,
                  yet we've never lost sight of our core values: exceptional quality,
                  meticulous attention to detail, and respect for traditional techniques.
                </p>
                <p>
                  Today, each Bageto piece is still handcrafted using the same time-honored
                  methods Marco learned from his grandfather, ensuring that every product
                  carries forward our legacy of excellence.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/placeholder.svg?height=500&width=600&text=Marco+at+Work"
                alt="Marco Bageto at work"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              The principles that guide everything we do, from design to delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-stone-800 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              The passionate individuals behind every Bageto creation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-amber-600 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-stone-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Experience the Bageto Difference
            </h2>
            <p className="text-xl text-stone-300 mb-8">
              Discover why thousands of customers trust us for their leather goods
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/products"
                className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Shop Our Collection
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
