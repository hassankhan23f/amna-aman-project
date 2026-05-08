import Image from "next/image"

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
                APPLICATION FORM EMBED
                ========================================
            */}
            <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full relative z-10">
                <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-4 sm:p-8 shadow-2xl overflow-hidden relative">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-amber-400"></div>
                    
                    <div className="text-center mb-10 mt-4">
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Job Fair Application</h2>
                        <p className="text-slate-600 dark:text-slate-400 mt-2">Please fill out the form below and attach your CV (PDF preferred).</p>
                    </div>

                    {/* Google Form Embed */}
                    <div className="relative w-full rounded-2xl overflow-hidden bg-white dark:bg-slate-950 flex justify-center items-center min-h-[800px]">
                        {/* Replace the src URL with the actual Google Form URL */}
                        <iframe 
                            src="https://docs.google.com/forms/d/e/1FAIpQLSeIbxmCRT8DALf50PmpOwdB-FMmaZzsgkcmNo0wsafD_l11_Q/viewform?embedded=true" 
                            width="100%" 
                            height="900" 
                            className="border-0 bg-transparent w-full"
                            title="Job Fair Application Form"
                        >
                            Loading form...
                        </iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}
