import Link from "next/link"
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:to-amber-400">
                                AmnaAman
                            </span>
                        </div>
                        <p className="mt-4 max-w-sm text-slate-600 dark:text-slate-400" suppressHydrationWarning>
                            Empowering individuals with diverse abilities through technology, education, and community support.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {['About', 'Projects', 'Volunteer', 'Donate'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase()}`} className="text-slate-600 hover:text-orange-600 dark:text-slate-400 dark:hover:text-orange-400 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                            Connect
                        </h3>
                        <div className="flex space-x-4 mb-6">
                            <Link href="#" className="text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-orange-400 dark:hover:text-orange-400 transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-orange-700 dark:hover:text-orange-500 transition-colors">
                                <Linkedin size={20} />
                            </Link>
                        </div>

                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                            Newsletter
                        </h3>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                            />
                            <button className="rounded-lg bg-orange-600 px-3 py-2 text-sm font-medium text-white hover:bg-orange-700 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-100 pt-8 dark:border-slate-800">
                    <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                        © {new Date().getFullYear()} AmnaAman Organization. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
