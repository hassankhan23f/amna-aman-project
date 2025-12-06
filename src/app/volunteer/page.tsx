"use client"

import { motion } from "framer-motion"
import { Heart, Users, Award, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function VolunteerPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/volunteer.png"
                        alt="Volunteer Community"
                        fill
                        className="object-cover opacity-10"
                    />
                </div>
                <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
                <div className="container relative mx-auto px-4 text-center sm:px-6 lg:px-8 z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
                    >
                        Join Our <span className="text-orange-600 dark:text-orange-400">Volunteer</span> Community
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400"
                    >
                        Make a difference in the lives of students across Pakistan. Teach, mentor, and inspire.
                    </motion.p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-3 mb-16">
                        {[
                            { icon: Users, title: "Mentorship", desc: "Guide students through their learning journey." },
                            { icon: Heart, title: "Impact", desc: "Directly contribute to empowering diverse abilities." },
                            { icon: Award, title: "Recognition", desc: "Receive a verified certificate of volunteer service." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-sm"
                            >
                                <div className="p-3 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 mb-4">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mx-auto max-w-2xl rounded-3xl bg-gradient-to-br from-orange-600 to-amber-500 p-8 text-center text-white shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute inset-0 z-0 opacity-10">
                            <Image
                                src="/images/volunteer.png"
                                alt="Volunteer Background"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold mb-4">Ready to Start?</h2>
                            <p className="mb-8 text-orange-50">
                                Fill out our simple registration form and we'll get in touch with you shortly.
                            </p>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSeIbxmCRT8DALf50PmpOwdB-FMmaZzsgkcmNo0wsafD_l11_Q/viewform?usp=publish-editor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-bold text-orange-600 transition-all hover:bg-orange-50 hover:scale-105 shadow-lg"
                            >
                                Fill Volunteer Form
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
