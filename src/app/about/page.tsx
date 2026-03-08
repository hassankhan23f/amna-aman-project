import Image from "next/image"
import { ArrowRight, Globe, Target, Shield, Zap } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712] selection:bg-orange-500/30">
            {/* Minimalist Tech Hero */}
            <section className="pt-24 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
                    <div className="flex-1 max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-sm font-medium text-slate-900 dark:text-slate-300 mb-8 border border-slate-200 dark:border-slate-800">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                            Our Story
                        </div>
                        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
                            Bridging the gap <br className="hidden sm:block" />
                            <span className="text-slate-400 dark:text-slate-500">with technology.</span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                            AmnaAman is dedicated to creating an inclusive world where technology empowers every individual, regardless of ability.
                        </p>
                    </div>

                    <div className="flex-1 relative w-full aspect-[4/3] max-w-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 ml-auto">
                        <Image src="/images/about_hero_premium.png" alt="Bridging technology" fill className="object-cover hover:scale-105 transition-transform duration-700" priority />
                    </div>
                </div>
            </section>

            {/* Bento Box Grid Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

                    {/* Large Hero Graphic Box (Span 2) */}
                    <div className="md:col-span-2 relative rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group">
                        <Image
                            src="/images/mission.png"
                            alt="AmnaAman Mission"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 dark:opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8">
                            <h2 className="text-3xl font-bold text-white mb-2">Our Mission</h2>
                            <p className="text-slate-300 max-w-md">Empowering diverse abilities through accessible education and opportunities in the digital age.</p>
                        </div>
                    </div>

                    {/* Stat Box */}
                    <div className="rounded-3xl bg-orange-600 dark:bg-orange-500 p-8 flex flex-col justify-between text-white border border-orange-500 dark:border-orange-400">
                        <Globe size={32} className="opacity-80" />
                        <div>
                            <div className="text-5xl font-bold mb-2">500+</div>
                            <div className="text-orange-100 font-medium">Students empowered worldwide across multiple communities.</div>
                        </div>
                    </div>

                    {/* Feature Box 1 */}
                    <div className="rounded-3xl bg-white dark:bg-[#0A0E17] p-8 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-orange-200 dark:hover:border-orange-900 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-900 dark:text-white">
                            <Target size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Education First</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Providing accessible coding workshops and digital literacy programs tailored to diverse needs.</p>
                        </div>
                    </div>

                    {/* Feature Box 2 */}
                    <div className="md:col-span-2 rounded-3xl bg-slate-50 dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-8 items-start md:items-center">
                        <div className="flex-1">
                            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">A Safe, Inclusive Space</h3>
                            <p className="text-slate-600 dark:text-slate-400">We build supportive networks uniting students, incredible volunteer mentors, and families into a strong, resilient community ecosystem.</p>
                        </div>
                        <div className="hidden md:flex flex-shrink-0 w-48 h-48 relative rounded-2xl overflow-hidden">
                            {/* Abstract placeholder for tech graphic */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                                <Zap className="text-slate-400 dark:text-slate-600 w-16 h-16 opacity-50 absolute" />
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
