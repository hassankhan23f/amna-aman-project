"use client"

import { motion } from "framer-motion"
import { LucideIcon, X, ArrowRight, ExternalLink } from "lucide-react"
import React from "react"
import Image from "next/image"

interface ProjectCardProps {
    title: string
    description: string
    icon: LucideIcon
    index: number
}

export function ProjectCard({ title, description, icon: Icon, index, images, fullDescription, link }: ProjectCardProps & { images?: string[], fullDescription?: string, link?: string }) {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => fullDescription && setIsOpen(true)}
                className={`group relative flex flex-col rounded-3xl border border-white/20 bg-white/50 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all hover:border-orange-500/30 hover:shadow-[0_20px_40px_rgba(249,115,22,0.1)] dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-orange-500/50 h-full ${fullDescription ? 'cursor-pointer' : ''}`}
            >
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white dark:from-white/5 dark:to-white/5 dark:text-orange-400 dark:shadow-none dark:group-hover:from-orange-500 dark:group-hover:to-amber-500">
                    <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="mb-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {title}
                </h3>
                <p className="flex-1 text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
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

                            {link && (
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors"
                                >
                                    <ExternalLink size={20} className="mr-2" />
                                    View 3D Simulation
                                </a>
                            )}

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
