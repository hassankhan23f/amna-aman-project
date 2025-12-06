"use client"

import { motion } from "framer-motion"
import { ShoppingBag, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
    const products = [
        {
            id: 1,
            name: "AmnaAman Hoodie",
            price: "PKR 3500",
            category: "Merchandise",
            image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80",
            rating: 4.8
        },
        {
            id: 2,
            name: "Coding Starter Kit",
            price: "PKR 5000",
            category: "Education",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
            rating: 4.9
        },
        {
            id: 3,
            name: "Accessibility Keyboard",
            price: "PKR 4500",
            category: "Tech",
            image: "https://images.unsplash.com/photo-1587829741301-dc798b91a603?w=800&q=80",
            rating: 5.0
        },
        {
            id: 4,
            name: "Tote Bag",
            price: "PKR 1200",
            category: "Merchandise",
            image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80",
            rating: 4.5
        },
        {
            id: 5,
            name: "Notebook Set",
            price: "PKR 850",
            category: "Stationery",
            image: "https://images.unsplash.com/photo-1531346878377-a513bc95ba0d?w=800&q=80",
            rating: 4.7
        },
        {
            id: 6,
            name: "Tech Backpack",
            price: "PKR 6500",
            category: "Accessories",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
            rating: 4.9
        }
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
                <div className="container relative mx-auto px-4 text-center sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-6">
                            Shop for a <span className="text-orange-600 dark:text-orange-400">Cause</span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400 mb-8">
                            Every purchase supports our mission to empower individuals with diverse abilities.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map((product, i) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 overflow-hidden"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                                    {/* Placeholder image since we don't have local images, using pure CSS placeholder if external fails or just use the div */}
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform hover:scale-105 duration-500"
                                        style={{ backgroundImage: `url(${product.image})` }}
                                    />
                                    <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur-sm dark:bg-slate-900/90 dark:text-white">
                                        {product.category}
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-orange-600 transition-colors">
                                                {product.name}
                                            </h3>
                                            <div className="flex items-center text-amber-500">
                                                <Star size={16} fill="currentColor" />
                                                <span className="ml-1 text-sm font-medium text-slate-600 dark:text-slate-400">{product.rating}</span>
                                            </div>
                                        </div>
                                        <p className="text-2xl font-bold text-slate-900 dark:text-white">
                                            {product.price}
                                        </p>
                                    </div>
                                    <Button className="mt-auto w-full bg-orange-600 hover:bg-orange-700 text-white rounded-xl">
                                        <ShoppingBag size={18} className="mr-2" />
                                        Add to Cart
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
