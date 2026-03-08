import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712] selection:bg-orange-500/30">
            <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">

                {/* Editorial Header */}
                <div className="mb-20">
                    <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter text-slate-900 dark:text-white mb-6">
                        Say Hello.
                    </h1>
                    <p className="max-w-xl text-xl text-slate-600 dark:text-slate-400">
                        Whether you want to partner with us, volunteer, or just learn more about our mission, our doors are always open.
                    </p>
                </div>

                {/* Minimalist Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 border-t border-slate-200 dark:border-slate-800 pt-12">

                    {/* Contact Block 1 */}
                    <a href="tel:03085105000" className="group block">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                                <Phone size={18} />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Phone</h3>
                        </div>
                        <div className="flex items-center justify-between border-b border-transparent group-hover:border-slate-200 dark:group-hover:border-slate-700 pb-2 transition-all">
                            <p className="text-lg text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">0308 5105000</p>
                            <ArrowUpRight size={16} className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0" />
                        </div>
                    </a>

                    {/* Contact Block 2 */}
                    <a href="mailto:amnaaman.org@gmail.com" className="group block">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                                <Mail size={18} />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Email</h3>
                        </div>
                        <div className="flex items-center justify-between border-b border-transparent group-hover:border-slate-200 dark:group-hover:border-slate-700 pb-2 transition-all">
                            <p className="text-lg text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">amnaaman.org@gmail.com</p>
                            <ArrowUpRight size={16} className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0" />
                        </div>
                    </a>

                    {/* Contact Block 3 */}
                    <div className="group block cursor-default">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                                <MapPin size={18} />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Location</h3>
                        </div>
                        <div className="flex items-center justify-between border-b border-transparent group-hover:border-slate-200 dark:group-hover:border-slate-700 pb-2 transition-all">
                            <p className="text-lg text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Islamabad, Pakistan</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
