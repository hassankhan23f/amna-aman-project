"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
    quote: string
    author: string
    role: string
    index: number
}

export function TestimonialCard({ quote, author, role, index }: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="relative rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
        >
            <Quote className="absolute right-6 top-6 h-8 w-8 text-orange-100 dark:text-orange-900/30" />
            <p className="relative z-10 mb-6 text-lg italic text-gray-700 dark:text-gray-300">
                "{quote}"
            </p>
            <div>
                <h4 className="font-bold text-gray-900 dark:text-white">{author}</h4>
                <p className="text-sm text-orange-600 dark:text-orange-400">{role}</p>
            </div>
        </motion.div>
    )
}
