"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import { useTheme } from "next-themes"
import { createClient } from "@/utils/supabase/client"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [user, setUser] = useState<any>(null)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        setMounted(true)
        const supabase = createClient()
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            setUser(user)
        }
        getUser()
    }, [])

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 20)
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [handleScroll])

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Products", href: "/products" },
        { name: "Volunteer", href: "/volunteer" },
        { name: "Donate", href: "/donate" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <nav
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
                    ? "bg-white/80 backdrop-blur-2xl shadow-sm border-b border-slate-200/50 dark:bg-slate-950/80 dark:border-slate-800/50 dark:shadow-slate-900/20"
                    : "bg-transparent border-b border-transparent"
                }`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-3 group" aria-label="AmnaAman Home">
                            <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-slate-100 dark:ring-slate-800 transition-transform group-hover:scale-105">
                                <Image
                                    src="/images/logo.jpeg"
                                    alt="AmnaAman Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:to-amber-400">
                                AmnaAman
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    aria-current={pathname === link.href ? "page" : undefined}
                                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${pathname === link.href
                                        ? "bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-200"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6 space-x-4">
                            {mounted && (
                                <button
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                                    className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
                                >
                                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                                </button>
                            )}

                            {user ? (
                                <Link
                                    href="/dashboard"
                                    className="rounded-full bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-orange-700 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <Link
                                    href="/login"
                                    className="rounded-full bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-orange-700 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isOpen}
                            className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 dark:hover:bg-slate-800 dark:hover:text-white"
                        >
                            <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu with animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl"
                    >
                        <div className="space-y-1 px-4 pb-3 pt-2">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2, delay: index * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        aria-current={pathname === link.href ? "page" : undefined}
                                        className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${pathname === link.href
                                            ? "bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-200"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="mt-4 flex items-center justify-between px-3 py-2">
                                {mounted && (
                                    <button
                                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                                        className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg px-2 py-1"
                                    >
                                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                                        <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                                    </button>
                                )}
                            </div>
                            <div className="mt-4 px-3 pb-4">
                                {user ? (
                                    <Link
                                        href="/dashboard"
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full rounded-full bg-orange-600 px-4 py-3 text-center text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <Link
                                        href="/login"
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full rounded-full bg-orange-600 px-4 py-3 text-center text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    >
                                        Login
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
