import Image from "next/image"
import { Button } from "@/components/ui/button"
import { User, Mail, Phone, UploadCloud, Send, Zap } from "lucide-react"

export const metadata = {
    title: "Careers & Job Fair | AmnaAman",
    description: "Join the AmnaAman mission. Apply for our upcoming Job Fair and help us build an inclusive ecosystem.",
}

export default function CareersPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712] selection:bg-orange-500/30 overflow-hidden">
            {/* 
                ========================================
                HERO SECTION
                ========================================
            */}
            <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 px-4 sm:px-6 lg:px-8 w-full max-w-[1400px] mx-auto flex flex-col justify-center">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-orange-400/20 via-amber-300/10 to-transparent rounded-full blur-[120px] -z-10 opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-[100px] -z-10"></div>

                <div className="text-center max-w-4xl mx-auto z-10">
                    <div className="inline-flex items-center justify-center mb-6 px-5 py-2 rounded-full border border-orange-200 dark:border-orange-500/30 bg-orange-50/50 dark:bg-orange-500/10 backdrop-blur-md text-orange-600 dark:text-orange-400 font-semibold text-sm shadow-sm">
                        🚀 Upcoming Event: National Job Fair
                    </div>
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1] mb-6">
                        Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Inclusion</span> With Us.
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
                        We are hiring! Join Pakistan's first skill institute for special persons. Upload your CV below to register for our upcoming Job Fair.
                    </p>
                </div>
            </section>

            {/* 
                ========================================
                NATIVE APPLICATION FORM (ULTRA PREMIUM)
                ========================================
            */}
            <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full relative z-10">
                <div className="bg-white dark:bg-[#0A0E17] border border-slate-200 dark:border-slate-800/60 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-none flex flex-col lg:flex-row overflow-hidden relative group">
                    
                    {/* Subtle animated border gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[2.5rem] pointer-events-none"></div>

                    {/* Left Sidebar (Info) */}
                    <div className="lg:w-2/5 bg-slate-900 text-white p-10 sm:p-14 flex flex-col justify-between relative overflow-hidden">
                        {/* Background abstract shape */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 translate-x-1/3 -translate-y-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 -translate-x-1/3 translate-y-1/3"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                                Join the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                                    Movement.
                                </span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-10">
                                We're always looking for passionate individuals ready to empower communities and build an inclusive future.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <User size={20} className="text-orange-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Equal Opportunity</h3>
                                        <p className="text-sm text-slate-400 mt-1">We strongly encourage candidates with diverse abilities to apply.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <Zap size={20} className="text-orange-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Fast-Paced Growth</h3>
                                        <p className="text-sm text-slate-400 mt-1">Work directly with cutting-edge tech like SafeBand and AI modules.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                            <p className="text-sm text-slate-400">
                                Need help? Contact us at<br/>
                                <a href="mailto:careers@amnaaman.org" className="text-orange-400 hover:text-orange-300 font-medium transition-colors">careers@amnaaman.org</a>
                            </p>
                        </div>
                    </div>

                    {/* Right Side (Form) */}
                    <div className="lg:w-3/5 p-10 sm:p-14 relative z-10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-3xl">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Submit your application</h3>
                            <p className="text-slate-500 dark:text-slate-400 mt-2">Fill out the details below and attach your latest CV.</p>
                        </div>

                        {/* Form configured with Getform.io endpoint provided by the user. */}
                        <form 
                            action="https://forminit.com/f/psrzeb34kh6" 
                            method="POST" 
                            encType="multipart/form-data"
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Full Name */}
                                <div className="space-y-2 group">
                                    <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                        <User size={16} className="text-slate-400 group-focus-within:text-orange-500 transition-colors" />
                                        Full Name <span className="text-orange-500">*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="fi-sender-fullName" 
                                        required 
                                        placeholder="John Doe"
                                        className="w-full bg-slate-50 dark:bg-[#030712] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all placeholder:text-slate-400 shadow-inner"
                                    />
                                </div>

                                {/* Phone Number */}
                                <div className="space-y-2 group">
                                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                        <Phone size={16} className="text-slate-400 group-focus-within:text-orange-500 transition-colors" />
                                        Phone Number <span className="text-orange-500">*</span>
                                    </label>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        name="fi-sender-phone" 
                                        required 
                                        pattern="^\+[1-9]\d{10,14}$"
                                        title="Please use international format starting with +, e.g. +923001234567"
                                        placeholder="+92 300 1234567"
                                        className="w-full bg-slate-50 dark:bg-[#030712] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all placeholder:text-slate-400 shadow-inner"
                                    />
                                    <p className="text-[11px] text-slate-500 mt-1">Must include country code (e.g. +92)</p>
                                </div>
                            </div>

                            {/* Email Address */}
                            <div className="space-y-2 group">
                                <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                    <Mail size={16} className="text-slate-400 group-focus-within:text-orange-500 transition-colors" />
                                    Email Address <span className="text-orange-500">*</span>
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="fi-sender-email" 
                                    required 
                                    placeholder="john@example.com"
                                    className="w-full bg-slate-50 dark:bg-[#030712] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all placeholder:text-slate-400 shadow-inner"
                                />
                            </div>

                            {/* Cover Letter / Message */}
                            <div className="space-y-2 group">
                                <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                    Why do you want to join us?
                                </label>
                                <textarea 
                                    id="message" 
                                    name="fi-text-message" 
                                    rows={3}
                                    placeholder="Briefly tell us about your experience..."
                                    className="w-full bg-slate-50 dark:bg-[#030712] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all placeholder:text-slate-400 resize-none shadow-inner"
                                ></textarea>
                            </div>

                            {/* File Upload (CV) - Premium UI */}
                            <div className="space-y-2 pt-2">
                                <label htmlFor="cv" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                    Upload CV / Resume <span className="text-orange-500">*</span>
                                </label>
                                <div className="relative group/file">
                                    <div className="absolute inset-0 bg-orange-500/5 dark:bg-orange-500/10 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 group-hover/file:border-orange-500 transition-colors pointer-events-none flex flex-col items-center justify-center">
                                        <UploadCloud size={32} className="text-slate-400 group-hover/file:text-orange-500 mb-2 transition-colors" />
                                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Click or drag file to upload</span>
                                        <span className="text-xs text-slate-400 mt-1">PDF, DOCX (Max. 5MB)</span>
                                    </div>
                                    <input 
                                        type="file" 
                                        id="cv" 
                                        name="fi-file-cv" 
                                        accept=".pdf,.doc,.docx"
                                        required 
                                        className="w-full h-32 opacity-0 cursor-pointer"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6 flex items-center justify-between">
                                <Button 
                                    type="submit" 
                                    className="h-12 px-8 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-orange-600 dark:hover:bg-orange-500 text-base font-bold shadow-lg shadow-slate-900/20 dark:shadow-white/10 transition-all hover:-translate-y-0.5"
                                >
                                    Send Application <Send size={16} className="ml-2" />
                                </Button>
                                <p className="text-xs text-slate-500 max-w-[200px] text-right">
                                    Secure & encrypted via Forminit.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
