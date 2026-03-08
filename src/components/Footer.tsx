import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, ArrowUpRight, Heart } from "lucide-react"

export function Footer() {
    return (
        <footer className="relative bg-slate-950 text-white overflow-hidden">
            {/* Subtle gradient accent line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
                <div className="grid gap-12 lg:grid-cols-12">

                    {/* Brand Column */}
                    <div className="lg:col-span-5">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-slate-700">
                                <Image src="/images/logo.jpeg" alt="AmnaAman Logo" fill className="object-cover" />
                            </div>
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
                                AmnaAman
                            </span>
                        </div>
                        <p className="text-slate-400 max-w-sm leading-relaxed mb-8">
                            Empowering individuals with diverse abilities through technology, education, and community support. Building Pakistan&apos;s most inclusive tech ecosystem.
                        </p>
                        <div className="flex space-x-3">
                            {[
                                { icon: Facebook, href: "#", label: "Facebook", hoverColor: "hover:bg-blue-600" },
                                { icon: Twitter, href: "#", label: "Twitter", hoverColor: "hover:bg-sky-500" },
                                { icon: Instagram, href: "https://www.instagram.com/amnaaman.project?igsh=czZrNmhmZDVlOHMz&utm_source=qr", label: "Instagram", hoverColor: "hover:bg-pink-600" },
                                { icon: Linkedin, href: "https://www.linkedin.com/company/amna-aman-project/", label: "LinkedIn", hoverColor: "hover:bg-blue-700" },
                            ].map(({ icon: Icon, href, label, hoverColor }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    target={href !== "#" ? "_blank" : undefined}
                                    rel={href !== "#" ? "noopener noreferrer" : undefined}
                                    aria-label={label}
                                    className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white ${hoverColor} transition-all duration-300`}
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-3">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">Navigate</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'About Us', href: '/about' },
                                { name: 'Our Projects', href: '/projects' },
                                { name: 'Products', href: '/products' },
                                { name: 'Volunteer', href: '/volunteer' },
                                { name: 'Donate', href: '/donate' },
                                { name: 'Contact', href: '/contact' },
                            ].map(({ name, href }) => (
                                <li key={name}>
                                    <Link href={href} className="group flex items-center text-slate-400 hover:text-white transition-colors text-sm">
                                        {name}
                                        <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="lg:col-span-4">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">Stay Updated</h3>
                        <p className="text-sm text-slate-400 mb-4">Get the latest updates on our initiatives and how you can help.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                aria-label="Email for newsletter"
                                className="flex-1 rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                            />
                            <button
                                aria-label="Subscribe to newsletter"
                                className="rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white hover:bg-orange-500 transition-colors shrink-0"
                            >
                                Join
                            </button>
                        </div>

                        <div className="mt-8 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                                    <Heart size={16} className="text-orange-400" />
                                </div>
                                <span className="text-sm font-semibold text-white">5,000+ Lives Impacted</span>
                            </div>
                            <p className="text-xs text-slate-500">Across Pakistan through technology, education, and community workshops.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} AmnaAman Organization. All rights reserved.
                    </p>
                    <p className="text-xs text-slate-600">
                        Built with <span className="text-orange-500">♥</span> for inclusion.
                    </p>
                </div>
            </div>
        </footer>
    )
}
