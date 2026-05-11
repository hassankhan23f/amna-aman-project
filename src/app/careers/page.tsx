import Image from "next/image"
import { Button } from "@/components/ui/button"
import { User, Mail, Phone, UploadCloud, Send } from "lucide-react"

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
                NATIVE APPLICATION FORM
                ========================================
            */}
            <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full relative z-10">
                <div className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-6 sm:p-12 shadow-2xl relative overflow-hidden">
                    {/* Decorative Top Accent */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-amber-500"></div>
                    
                    <div className="text-center mb-10 mt-2">
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Job Fair Application</h2>
                        <p className="text-slate-600 dark:text-slate-400 mt-3 text-lg">
                            Please fill out your details and attach your CV. We will get back to you shortly.
                        </p>
                    </div>

                    {/* 
                        Form configured with Getform.io endpoint provided by the user.
                        The 'enctype="multipart/form-data"' is required for file uploads to work!
                    */}
                    <form 
                        action="https://forminit.com/f/psrzeb34kh6" 
                        method="POST" 
                        encType="multipart/form-data"
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                    <User size={16} className="text-orange-500" />
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="fi-sender-fullName" 
                                    required 
                                    placeholder="John Doe"
                                    className="w-full bg-slate-50 dark:bg-[#030712] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all placeholder:text-slate-400"
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                    <Phone size={16} className="text-orange-500" />
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="fi-sender-phone" 
                                    required 
                                    placeholder="+92 300 1234567"
                                    className="w-full bg-slate-50 dark:bg-[#030712] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all placeholder:text-slate-400"
                                />
                            </div>
                        </div>

                        {/* Email Address */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                <Mail size={16} className="text-orange-500" />
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                name="fi-sender-email" 
                                required 
                                placeholder="john@example.com"
                                className="w-full bg-slate-50 dark:bg-[#030712] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all placeholder:text-slate-400"
                            />
                        </div>

                        {/* Cover Letter / Message */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                Cover Letter / Why do you want to join us?
                            </label>
                            <textarea 
                                id="message" 
                                name="fi-text-message" 
                                rows={4}
                                placeholder="Tell us briefly about your experience and motivation..."
                                className="w-full bg-slate-50 dark:bg-[#030712] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all placeholder:text-slate-400 resize-none"
                            ></textarea>
                        </div>

                        {/* File Upload (CV) */}
                        <div className="space-y-2 pt-2">
                            <label htmlFor="cv" className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                <UploadCloud size={16} className="text-orange-500" />
                                Upload CV (PDF or DOCX) <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input 
                                    type="file" 
                                    id="cv" 
                                    name="fi-file-cv" 
                                    accept=".pdf,.doc,.docx"
                                    required 
                                    className="w-full bg-slate-50 dark:bg-[#030712] border border-dashed border-slate-300 dark:border-slate-700 rounded-xl px-4 py-8 text-slate-600 dark:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all file:mr-4 file:py-2.5 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-orange-100 file:text-orange-700 dark:file:bg-orange-500/20 dark:file:text-orange-400 hover:file:bg-orange-200 cursor-pointer"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <Button 
                                type="submit" 
                                className="w-full sm:w-auto h-14 px-10 rounded-full bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold shadow-xl shadow-orange-500/20 transition-all hover:-translate-y-1"
                            >
                                Submit Application <Send size={18} className="ml-2" />
                            </Button>
                            <p className="text-xs text-center sm:text-left text-slate-500 mt-4">
                                By submitting this application, you agree to our privacy policy and terms of service.
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
