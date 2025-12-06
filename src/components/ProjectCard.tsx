"use client"

import { motion } from "framer-motion"
import { LucideIcon, X, ArrowRight } from "lucide-react"
import React from "react"
import Image from "next/image"

interface ProjectCardProps {
    title: string
    description: string
    icon: LucideIcon
    index: number
}

export function ProjectCard({ title, description, icon: Icon, index, images, fullDescription }: ProjectCardProps & { images?: string[], fullDescription?: string }) {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => fullDescription && setIsOpen(true)}
                className={`group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-all hover:border-orange-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-orange-800 h-full ${fullDescription ? 'cursor-pointer' : ''}`}
            >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white dark:bg-orange-900/20 dark:text-orange-400 dark:group-hover:bg-orange-600 dark:group-hover:text-white">
                    <Icon size={28} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                    {title}
                </h3>
                <p className="flex-1 text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
                    {description}
                </p>
                {fullDescription && (
                    <button 
                        onClick={(e) => {
                            e.stopPropagation()
                            setIsOpen(true)
                        }}
                        className="mt-auto inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 dark:text-orange-400"
                    >
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                )}
            </motion.div>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                            <X size={24} />
                        </button>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/30">
                                    <Icon size={32} />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{title}</h2>
                            </div>

                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                                {fullDescription}
                            </p>

                            {images && images.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                                    {images.map((img, i) => (
                                        <div key={i} className="relative aspect-video rounded-xl overflow-hidden shadow-md">
                                            <Image
                                                src={img}
                                                alt={`${title} image ${i + 1}`}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    )
}
