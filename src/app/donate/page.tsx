"use client"

import { motion } from "framer-motion"
import { CreditCard, Smartphone, Copy, Check } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function DonatePage() {
    const [copied, setCopied] = useState<string | null>(null)

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text)
        setCopied(id)
        setTimeout(() => setCopied(null), 2000)
    }

    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative bg-slate-50 py-20 dark:bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/donate.png"
                        alt="Donate Background"
                        fill
                        className="object-cover opacity-10"
                    />
                </div>
                <div className="container relative mx-auto px-4 text-center sm:px-6 lg:px-8 z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
                    >
                        Support Our <span className="text-orange-600 dark:text-orange-400">Mission</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400"
                    >
                        Your contribution helps us provide free education and resources to those who need it most.
                    </motion.p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                        {/* Bank Details Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-950"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400">
                                    <CreditCard size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Bank Transfer</h3>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Bank Name</p>
                                    <p className="font-medium text-slate-900 dark:text-white">Faysal Bank</p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Account Title</p>
                                    <p className="font-medium text-slate-900 dark:text-white">Donation Account</p>
                                </div>
                                <div className="group relative">
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Account Number</p>
                                    <div className="flex items-center justify-between mt-1 p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                        <code className="font-mono font-medium text-slate-900 dark:text-white">PK18FAYS3077383000005640</code>
                                        <button
                                            onClick={() => copyToClipboard("PK18FAYS3077383000005640", "bank")}
                                            className="text-slate-400 hover:text-orange-600 transition-colors"
                                        >
                                            {copied === "bank" ? <Check size={18} /> : <Copy size={18} />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Microfinance Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-950"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400">
                                    <Smartphone size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Easypaisa / JazzCash</h3>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Service</p>
                                    <p className="font-medium text-slate-900 dark:text-white">Easypaisa</p>
                                </div>
                                <div className="group relative">
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Account Number</p>
                                    <div className="flex items-center justify-between mt-1 p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                        <code className="font-mono font-medium text-slate-900 dark:text-white">03085105000</code>
                                        <button
                                            onClick={() => copyToClipboard("03085105000", "easy")}
                                            className="text-slate-400 hover:text-amber-600 transition-colors"
                                        >
                                            {copied === "easy" ? <Check size={18} /> : <Copy size={18} />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
