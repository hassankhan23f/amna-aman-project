"use client"

import { ShoppingBag, Star, ExternalLink, ShieldCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProductsPage() {
    const products = [
        {
            id: 1,
            name: "SafeBand Mini",
            price: "PKR 9,000",
            category: "Safety Wearable",
            image: "/images/safeband-mini.png",
            rating: 5.0,
            description: "A soft, sensory-friendly wearable safety band protecting autistic children from wandering while providing real-time tracking.",
            link: "https://safeband-one.vercel.app/"
        },
        {
            id: 2,
            name: "MindBridge",
            price: "PKR 10,000",
            category: "AI Mental Health",
            image: "/images/mindbridge.png",
            rating: 4.9,
            description: "Privacy-first AI mental health support using emotion & voice analysis. Features risk scoring and caregiver alerts.",
            link: "https://mindbridge-lyart.vercel.app/"
        },
        {
            id: 3,
            name: "Accessibility Extension",
            price: "Free",
            category: "Software",
            image: "/images/accessibility-extension.png",
            rating: 4.8,
            description: "Browser extension for visual impairment and dyslexia. Features readability enhancements and color contrast adjustment."
        },
        {
            id: 4,
            name: "Cortex System",
            price: "PKR 15,000",
            category: "Assistive Tech",
            image: "/images/cortex.png",
            rating: 4.9,
            description: "Empowers people with limited mobility to access services and activities directly, reducing physical barriers."
        }
    ]

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712] selection:bg-orange-500/30">
            {/* Premium Shop Hero */}
            <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full overflow-hidden rounded-[3rem] mt-6 border border-slate-200 dark:border-slate-800">
                <Image
                    src="/images/shop_hero_premium.png"
                    alt="Abstract Accessibility Tech"
                    fill
                    className="object-cover opacity-90 dark:opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#030712] dark:via-[#030712]/80 dark:to-transparent"></div>

                <div className="relative z-10 text-center max-w-3xl mx-auto pt-20">
                    <div className="inline-flex items-center justify-center mb-6 px-4 py-1.5 rounded-full bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 font-medium text-sm backdrop-blur-md">
                        <ShoppingBag size={16} className="mr-2" />
                        Purchase with Purpose
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
                        Innovation for <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Everyone.</span>
                    </h1>
                    <p className="text-xl text-slate-700 dark:text-slate-300">
                        100% of the proceeds from our assistive technologies go directly to funding free educational programs and supporting the community.
                    </p>
                </div>
            </section>

            {/* Asymmetric Product Grid */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Hardware & Software</h2>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <ShieldCheck size={18} className="text-green-500" />
                        Quality Verified
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative flex flex-col bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            {/* Product Image Window */}
                            <div className="relative h-72 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider border border-white/20 dark:border-slate-700">
                                    {product.category}
                                </div>
                                <div className="absolute top-4 right-4 flex items-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-2.5 py-1.5 rounded-full text-xs font-bold text-slate-900 dark:text-white border border-white/20 dark:border-slate-700">
                                    <Star size={14} className="text-amber-500 mr-1" fill="currentColor" />
                                    {product.rating}
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                                        {product.name}
                                    </h3>
                                    <span className="text-xl font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">
                                        {product.price}
                                    </span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-1">
                                    {product.description}
                                </p>

                                <div className="flex gap-4 mt-auto">
                                    <button className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-4 rounded-2xl hover:bg-orange-600 dark:hover:bg-orange-500 dark:hover:text-white transition-colors flex items-center justify-center">
                                        <ShoppingBag size={18} className="mr-2" />
                                        Buy Now
                                    </button>
                                    {product.link && (
                                        <a href={product.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-6 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

