"use client"

import { motion } from "framer-motion"
import { ShoppingBag, Star, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
    const products = [
        {
            id: 1,
            name: "SafeBand Mini",
            price: "PKR 9,000",
            category: "Safety",
            image: "/images/safeband-mini.png",
            rating: 5.0,
            description: "SafeBand Mini™ is a soft, sensory-friendly wearable safety band designed to help protect autistic children from wandering while providing parents with real-time location tracking.",
            link: "https://safeband-one.vercel.app/"
        },
        {
            id: 2,
            name: "MindBridge",
            price: "PKR 10,000",
            category: "AI Mental Health",
            image: "/images/mindbridge.png",
            rating: 4.9,
            description: "Privacy-first AI-based mental health support using emotion & voice analysis. Features risk scoring, personalized support, and caregiver alerts to bridge the gap in mental health detection.",
            link: "https://mindbridge-lyart.vercel.app/"
        },
        {
            id: 3,
            name: "Accessibility Chrome Extension",
            price: "Free for Members",
            category: "Software",
            image: "/images/accessibility-extension.png",
            rating: 4.8,
            description: "Browser extension for people with visual impairment, dyslexia, and color blindness. Features text readability enhancements, color contrast adjustment, and simplified visual layouts."
        },
        {
            id: 4,
            name: "Cortex",
            price: "PKR 15,000",
            category: "Assistive Tech",
            image: "/images/cortex.png",
            rating: 4.9,
            description: "This system can be used for people with limited mobility, allowing them to access multiple services and activities from the comfort of their sitting position. It is designed to support and empower people with disabilities by reducing physical barriers and increasing independence."
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
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                                            {product.description}
                                        </p>
                                        <p className="text-2xl font-bold text-slate-900 dark:text-white">
                                            {product.price}
                                        </p>
                                    </div>
                                    <div className="mt-auto space-y-3">
                                        <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-xl">
                                            <ShoppingBag size={18} className="mr-2" />
                                            Add to Cart
                                        </Button>
                                        {/* @ts-ignore */}
                                        {product.link && (
                                            <a
                                                // @ts-ignore
                                                href={product.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors dark:bg-orange-900/20 dark:text-orange-400 dark:hover:bg-orange-900/30"
                                            >
                                                <ExternalLink size={16} className="mr-2" />
                                                View 3D Simulation
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
