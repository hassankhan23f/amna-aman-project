"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface ProjectCardProps {
    title: string
    description: string
    icon: LucideIcon
    index: number
}

export function ProjectCard({ title, description, icon: Icon, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-all hover:border-orange-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-orange-800"
        >
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white dark:bg-orange-900/20 dark:text-orange-400 dark:group-hover:bg-orange-600 dark:group-hover:text-white">
                <Icon size={28} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                {title}
            </h3>
            <p className="flex-1 text-gray-600 dark:text-gray-400 leading-relaxed">
                {description}
            </p>
        </motion.div>
    )
}
