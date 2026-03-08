"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Shield, Heart, Zap, PlayCircle, Star, Users, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TestimonialCard } from "@/components/TestimonialCard"
import { useRef } from "react"

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712] selection:bg-orange-500/30 overflow-hidden">

      {/* 
        ========================================
        HERO SECTION - Authentic & Premium
        ========================================
      */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 px-4 sm:px-6 lg:px-8 w-full max-w-[1400px] mx-auto flex flex-col justify-center">

        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-orange-400/20 via-amber-300/10 to-transparent rounded-full blur-[120px] -z-10 opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-[100px] -z-10"></div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center justify-center lg:justify-start mb-8 px-5 py-2 rounded-full border border-orange-200 dark:border-orange-500/30 bg-orange-50/50 dark:bg-orange-500/10 backdrop-blur-md text-orange-600 dark:text-orange-400 font-semibold text-sm shadow-sm"
            >
              <Heart size={16} className="mr-2" />
              100% Community Driven Initiative
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.95] mb-8"
            >
              Reimagining<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Accessibility.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Creating an ecosystem of inclusive technology, education, and support for individuals with diverse abilities in Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Link href="/projects" className="w-full sm:w-auto">
                <Button size="lg" className="w-full h-16 px-10 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 text-lg font-bold transition-all hover:scale-105 shadow-xl">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/volunteer" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full h-16 px-10 rounded-full border-2 border-slate-200 hover:border-orange-500 hover:text-orange-600 dark:border-slate-800 dark:text-white dark:hover:border-orange-500 dark:hover:text-orange-400 dark:hover:bg-transparent text-lg font-bold transition-all bg-transparent">
                  Join the Movement
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Massive Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="flex-1 w-full max-w-[600px] lg:max-w-[700px] relative mt-12 lg:mt-0"
          >
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[3rem] sm:rounded-[4rem] overflow-hidden shadow-2xl border border-black/5 dark:border-white/10 group">
              <Image
                src="/images/home_hero_authentic.png"
                alt="Diverse individuals with disabilities collaborating in a modern tech workspace"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Floating Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-auto bg-white/90 dark:bg-[#030712]/80 backdrop-blur-xl p-5 sm:p-6 rounded-3xl border border-white/40 dark:border-white/10 shadow-xl flex items-center gap-4 hidden sm:flex transform transition-transform group-hover:-translate-y-2">
                <div className="h-14 w-14 rounded-2xl bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
                  <Users size={28} />
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 dark:text-white">5,000+</div>
                  <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Lives Impacted</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 
        ========================================
        BENTO GRID - Mission & Core Features
        ========================================
      */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Our Core Framework</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">Delivering holistic technological and educational solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">

          {/* Bento Box 1: Large Visual Feature (Spans 8 cols on desktop) */}
          <div className="md:col-span-8 relative rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-slate-900 min-h-[400px] group border border-slate-200 dark:border-slate-800">
            <Image
              src="/images/home_feature_1_authentic.png"
              alt="Young person with special needs using assistive technology"
              fill
              className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent dark:from-[#030712]/90 dark:via-[#030712]/50"></div>
            <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/20 backdrop-blur-md flex items-center justify-center mb-6 border border-orange-500/30">
                <Zap size={28} className="text-orange-400" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Assistive Hardware & AI</h3>
              <p className="text-lg text-slate-300 max-w-md">Developing wearable devices like SafeBand and AI-driven diagnosis tools to empower independence.</p>
            </div>
          </div>

          {/* Bento Box 2: Tall Text Focus (Spans 4 cols on desktop) */}
          <div className="md:col-span-4 rounded-[2.5rem] bg-orange-50 dark:bg-orange-500/5 p-8 sm:p-12 flex flex-col justify-between border border-orange-100 dark:border-orange-500/10 hover:shadow-xl transition-shadow min-h-[400px]">
            <div>
              <div className="w-14 h-14 rounded-full bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400">
                <Shield size={28} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Safeguarding Futures</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Prioritizing privacy, digital safety, and emotional well-being in every piece of tech we deploy for vulnerable communities.
              </p>
            </div>
            <ul className="space-y-3 mt-8">
              {['End-to-end Encryption', 'Zero-Data Selling', 'Caregiver Analytics'].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-base">
                  <CheckCircle2 size={18} className="text-orange-500 mr-3 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Bento Box 3: Wide Horizontal (Spans 12 cols on desktop) */}
          <div className="md:col-span-12 rounded-[2.5rem] bg-slate-900 text-white overflow-hidden relative border border-slate-800 shadow-2xl mt-4 sm:mt-0">
            <div className="absolute inset-0 opacity-40 mix-blend-overlay">
              <Image src="/images/home_feature_2.png" alt="Community" fill className="object-cover" />
            </div>
            <div className="relative z-10 p-8 sm:p-14 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-xl text-center md:text-left">
                <h3 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight">The Inclusive Ecosystem.</h3>
                <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
                  A comprehensive framework extending from early assessment labs to job placement networks for neurological diversities.
                </p>
                <Link href="/about">
                  <Button className="bg-white text-slate-900 hover:bg-orange-500 hover:text-white rounded-full px-8 py-6 text-lg font-bold transition-colors">
                    Discover Our Vision
                  </Button>
                </Link>
              </div>

              {/* Video/Play Trigger */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-2xl flex-shrink-0">
                <PlayCircle size={48} className="text-white/90 ml-2" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 
        ========================================
        EDITORIAL TESTIMONIALS
        ========================================
      */}
      <section className="py-24 sm:py-32 relative w-full overflow-hidden bg-slate-50 dark:bg-[#080c16]">
        {/* Abstract typography background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] text-center pointer-events-none opacity-[0.03] dark:opacity-[0.02]">
          <h2 className="text-[20rem] font-black leading-none whitespace-nowrap">VOICES OF IMPACT</h2>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Community <span className="text-orange-500">Stories.</span>
            </h2>
            <div className="flex items-center gap-2">
              <span className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-amber-500 fill-amber-500" />)}
              </span>
              <span className="text-slate-600 dark:text-slate-400 font-bold">Trusted by Families Nationwide</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <TestimonialCard
              index={0}
              author="Syed Ali"
              role="Parent"
              quote="The SafeBand has completely transformed how our family operates. The peace of mind knowing we can track our son during his wandering episodes is absolutely priceless."
            />
            <TestimonialCard
              index={1}
              author="Fatima Z."
              role="Special Educator"
              quote="AmnaAman's accessibility extension has allowed my dyslexic students to read web content without the usual overwhelming fatigue. A game-changer."
            />
            <TestimonialCard
              index={2}
              author="Omer T."
              role="Young Adult"
              quote="The Inclusive Ecosystem gave me a space where my neurodivergence wasn't a problem to fix, but a unique skillset to train. I now have a job in tech."
            />
          </div>
        </div>
      </section>

      {/* 
        ========================================
        MASSIVE CTA SECTION
        ========================================
      */}
      <section className="relative py-32 sm:py-48 mt-12 overflow-hidden bg-[#030712]">
        <Image
          src="/images/home_cta_bg.png"
          alt="Dark abstract background"
          fill
          className="object-cover opacity-60 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/50"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
            The Future is <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Accessible.</span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-300 font-medium mb-12 max-w-2xl mx-auto">
            Whether you want to sponsor a device, volunteer your tech skills, or join our events — your impact starts here.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/donate" className="w-full sm:w-auto">
              <Button size="lg" className="w-full h-16 px-12 rounded-full bg-orange-600 hover:bg-orange-500 text-white text-lg font-bold transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)]">
                Support the Cause
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full h-16 px-12 rounded-full border-2 border-white/20 text-white hover:bg-white hover:text-slate-900 text-lg font-bold transition-all bg-transparent backdrop-blur-sm">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
