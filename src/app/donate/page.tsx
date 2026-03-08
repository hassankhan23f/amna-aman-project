"use client"

import { CreditCard, Smartphone, Check, Copy } from "lucide-react"
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
        <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712] selection:bg-orange-500/30">
            {/* Impact Hero */}
            <section className="pt-24 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 text-white min-h-[400px] flex items-center mb-16 border border-slate-800 shadow-2xl">
                    <Image src="/images/donate_hero_premium.png" alt="Support growth" fill className="object-cover opacity-60 mix-blend-screen" priority />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
                    <div className="relative z-10 p-8 sm:p-16 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-sm font-medium text-white mb-8 border border-white/20">
                            Your Impact
                        </div>
                        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                            Fuel the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">future.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
                            100% of your donation directly funds educational resources, accessible tech, and community workshops for our students.
                        </p>
                    </div>
                </div>
            </section>

            {/* Premium Payment Cards Section */}
            <section className="pb-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Bank Card - Designed like a sleek credit card */}
                    <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 text-white p-10 border border-slate-800 shadow-2xl group hover:border-orange-500/50 transition-colors">
                        {/* Abstract Card Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-50"></div>

                        <div className="relative z-10 flex flex-col h-full justify-between min-h-[280px]">
                            <div className="flex justify-between items-start mb-12">
                                <CreditCard size={32} className="opacity-80" />
                                <span className="text-sm font-medium tracking-widest opacity-60 uppercase">Bank Transfer</span>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs uppercase tracking-wider opacity-60 mb-1">Account Title</p>
                                    <p className="font-semibold text-lg tracking-wide">Donation Account</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-xs uppercase tracking-wider opacity-60 mb-1">Bank Name</p>
                                        <p className="font-medium">Faysal Bank</p>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-white/10 flex items-end justify-between">
                                    <div>
                                        <p className="text-xs uppercase tracking-wider opacity-60 mb-2">IBAN / Account Number</p>
                                        <code className="text-xl sm:text-2xl font-mono tracking-widest text-orange-400">PK18FAYS3077383000005640</code>
                                    </div>
                                    <button
                                        onClick={() => copyToClipboard("PK18FAYS3077383000005640", "bank")}
                                        className="mb-1 p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors backdrop-blur-md"
                                        title="Copy Account Number"
                                    >
                                        {copied === "bank" ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Easypaisa Card - Designed like a modern fintech app card */}
                    <div className="relative overflow-hidden rounded-[2rem] bg-slate-50 dark:bg-[#0A0E17] text-slate-900 dark:text-white p-10 border border-slate-200 dark:border-slate-800 shadow-xl hover:border-amber-500/50 transition-colors">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                        <div className="relative z-10 flex flex-col h-full justify-between min-h-[280px]">
                            <div className="flex justify-between items-start mb-12">
                                <div className="p-3 bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-500 rounded-2xl">
                                    <Smartphone size={24} />
                                </div>
                                <span className="text-sm font-bold tracking-widest text-slate-400 uppercase">Easypaisa</span>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Account Title</p>
                                    <p className="font-semibold text-lg tracking-wide">Amna Aman Project</p>
                                </div>

                                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex items-end justify-between">
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">Mobile Number</p>
                                        <code className="text-2xl sm:text-3xl font-mono tracking-widest text-slate-900 dark:text-white font-bold">0308 5105000</code>
                                    </div>
                                    <button
                                        onClick={() => copyToClipboard("03085105000", "easy")}
                                        className="mb-1 p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500 rounded-xl transition-all shadow-sm"
                                        title="Copy Mobile Number"
                                    >
                                        {copied === "easy" ? <Check size={20} className="text-green-500" /> : <Copy size={20} className="text-slate-500" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
