"use client"

import { ArrowRight, Heart, Users, Award, ExternalLink } from "lucide-react"

import Image from "next/image"

export default function VolunteerPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712] selection:bg-orange-500/30">
            {/* Split Screen Hero */}
            <section className="pt-12 lg:pt-16 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Sticky Left: Typography & Intro */}
                    <div className="lg:w-1/2 lg:sticky lg:top-32 h-fit flex flex-col pt-4">
                        <div className="inline-flex items-center w-fit gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-500/10 text-sm font-medium text-orange-600 dark:text-orange-400 mb-8 border border-orange-200 dark:border-orange-500/20">
                            Join the movement
                        </div>
                        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
                            Make a <br />
                            <span className="text-orange-500">real impact.</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-lg">
                            We are looking for passionate individuals to teach, mentor, and inspire students across Pakistan.
                        </p>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeIbxmCRT8DALf50PmpOwdB-FMmaZzsgkcmNo0wsafD_l11_Q/viewform?usp=publish-editor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-xl bg-slate-900 dark:bg-white px-8 py-4 text-sm font-bold text-white dark:text-slate-900 transition-transform hover:scale-105 w-fit"
                        >
                            Apply to Volunteer
                            <ExternalLink size={16} className="ml-2" />
                        </a>

                        <div className="mt-16 relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 hidden lg:block">
                            <Image src="/images/volunteer_hero_premium.png" alt="Community impact" fill className="object-cover" priority />
                        </div>
                    </div>

                    {/* Scrolling Right: Values & Steps */}
                    <div className="lg:w-1/2 space-y-6">
                        {/* Value Cards designed like clean geometric blocks */}
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:border-orange-500/30 transition-colors">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#0A0E17] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-900 dark:text-white shadow-sm">
                                    <Users size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Mentorship</h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300">
                                Guide students through their learning journey. Your expertise can shape someone's entire career path and build their confidence.
                            </p>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:border-orange-500/30 transition-colors">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#0A0E17] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-orange-500 shadow-sm">
                                    <Heart size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Direct Impact</h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300">
                                Directly contribute to empowering individuals with diverse abilities. See the immediate results of your dedication in real time.
                            </p>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:border-orange-500/30 transition-colors">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#0A0E17] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-amber-500 shadow-sm">
                                    <Award size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Recognition</h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300">
                                Receive a verified certificate of volunteer service acknowledging your hours and specific contributions to the community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
