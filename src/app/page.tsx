"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Heart, Users, Lightbulb, Star } from "lucide-react"
import { TestimonialCard } from "@/components/TestimonialCard"
import { Button } from "@/components/ui/button"

export default function Home() {
  const testimonials = [
    {
      quote: "AmnaAman has completely changed my life. The coding workshops gave me the confidence to pursue a career in tech.",
      author: "Sarah Ahmed",
      role: "Student",
    },
    {
      quote: "Volunteering here has been the most rewarding experience. Seeing the students grow is priceless.",
      author: "Ali Khan",
      role: "Volunteer Mentor",
    },
    {
      quote: "A truly inclusive community that cares. My son has found a safe space to learn and make friends.",
      author: "Fatima Bibi",
      role: "Parent",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative flex min-h-[95vh] items-center overflow-hidden bg-slate-50 dark:bg-[#030712] px-4 sm:px-6 lg:px-8">
        {/* Background Gradients and Effects */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Animated Orbs */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-500/20 mix-blend-screen filter blur-[100px] animate-pulse dark:bg-orange-500/10"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/20 mix-blend-screen filter blur-[100px] animate-pulse delay-700 dark:bg-amber-500/10"></div>
          <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full bg-blue-500/10 mix-blend-screen filter blur-[100px] dark:bg-blue-500/5"></div>

          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay"></div>

          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="container relative z-10 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-10 text-left pt-20 lg:pt-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="mb-8 inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md px-5 py-2 text-sm font-medium text-orange-600 dark:border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.15)]">
                  <Star size={16} className="mr-2 fill-orange-500 text-orange-500" />
                  Empowering 500+ Students Worldwide
                </div>
                <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1]">
                  Building <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">Inclusive Futures</span>
                </h1>
                <h2 className="mt-8 text-2xl font-medium text-slate-600 dark:text-slate-300 sm:text-3xl max-w-2xl leading-snug">
                  Where Technology Meets Compassion and Opportunity.
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="max-w-xl text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
              >
                We are creating a world where every individual, regardless of ability, can learn, grow, and connect through accessible technology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-5 pt-4"
              >
                <Link href="/volunteer">
                  <Button size="lg" className="w-full sm:w-auto rounded-full text-lg h-14 px-8 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white border-0 shadow-[0_10px_30px_rgba(249,115,22,0.3)] hover:shadow-[0_15px_40px_rgba(249,115,22,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                    <span className="mr-2">Volunteer Now</span>
                    <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
                  </Button>
                </Link>
                <Link href="/donate">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-lg h-14 px-8 border-slate-300 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md hover:bg-white/80 dark:hover:bg-white/10 text-slate-700 dark:text-white transition-all duration-300">
                    Donate Us
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Hero Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="flex-1 hidden lg:block relative"
            >
              <div className="relative w-full aspect-square max-w-[600px] ml-auto">
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-orange-500/20 to-amber-300/20 rotate-6 scale-105 blur-2xl dark:from-orange-500/10 dark:to-amber-300/10"></div>
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl glass-dark z-10 hidden dark:block">
                  <Image src="/images/home.jpg" alt="Inclusive ecosystem" fill className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>
                </div>
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-white/40 shadow-2xl z-10 dark:hidden">
                  <Image src="/images/home.jpg" alt="Inclusive ecosystem" fill className="object-cover" priority />
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -bottom-8 -left-8 z-20 glass-dark rounded-2xl p-6 border border-white/10 shadow-2xl backdrop-blur-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 rounded-xl text-white">
                      <Heart size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-sm text-slate-300">Community Driven</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-slate-100 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              { label: "Students", value: "500+" },
              { label: "Volunteers", value: "100+" },
              { label: "Projects", value: "15+" },
              { label: "Cities", value: "10+" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-orange-600 dark:text-orange-400">{stat.value}</div>
                <div className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Preview */}
      <section className="bg-white py-32 dark:bg-[#030712]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Our Core Values
            </h2>
            <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">
              Driven by a passion for equality and empowerment.
            </p>
          </motion.div>

          <div className="mt-20 grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "We believe in the power of empathy to build bridges and foster understanding.",
                color: "text-red-500",
                bg: "from-red-50 to-red-100/50 dark:from-red-500/10 dark:to-red-500/5",
                border: "group-hover:border-red-500/50"
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Leveraging technology to create accessible learning and growth opportunities.",
                color: "text-amber-500",
                bg: "from-amber-50 to-amber-100/50 dark:from-amber-500/10 dark:to-amber-500/5",
                border: "group-hover:border-amber-500/50"
              },
              {
                icon: Users,
                title: "Community",
                description: "Creating a safe, inclusive space for everyone to connect and thrive.",
                color: "text-orange-500",
                bg: "from-orange-50 to-orange-100/50 dark:from-orange-500/10 dark:to-orange-500/5",
                border: "group-hover:border-orange-500/50"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className={`group relative rounded-3xl border border-slate-200/60 bg-white/50 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-white/5 dark:bg-white/[0.02] ${item.border}`}
              >
                <div className={`mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.bg} ${item.color} shadow-inner transition-transform duration-500 group-hover:scale-110`}>
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-slate-50 dark:bg-[#030712] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-orange-500/10 rounded-full mix-blend-screen filter blur-3xl dark:bg-orange-500/5"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full mix-blend-screen filter blur-3xl dark:bg-amber-500/5"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Why Choose AmnaAman?
            </h2>
            <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">
              We go beyond traditional education to provide a holistic ecosystem for growth.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Expert Mentorship", desc: "Learn from industry professionals who are passionate about inclusion.", icon: Users },
              { title: "Adaptive Curriculum", desc: "Courses designed to accommodate diverse learning styles and needs.", icon: Lightbulb },
              { title: "Career Pathways", desc: "Direct connections to internships and job opportunities in tech.", icon: Star }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                className="group flex flex-col items-center text-center p-10 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/30 hover:shadow-[0_20px_40px_rgba(249,115,22,0.1)]"
              >
                <div className="mb-8 p-5 rounded-2xl bg-orange-50 dark:bg-orange-500/10 shadow-inner text-orange-600 dark:text-orange-400 transition-transform duration-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                  <item.icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-32 dark:bg-[#030712]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Voices of Impact
            </h2>
            <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">
              Hear from our community members about their journey with AmnaAman.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Strip */}
      <section className="py-20 bg-slate-50 dark:bg-[#030712] border-y border-slate-200/50 dark:border-white/5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-10">Trusted by Leading Organizations</p>
          <div className="flex flex-wrap justify-center gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {['Google', 'Microsoft', 'Github', 'Vercel', 'Supabase'].map((partner) => (
              <span key={partner} className="text-3xl font-bold text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-default transition-colors duration-300">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden bg-slate-900 dark:bg-[#030712]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-amber-500/90 mix-blend-multiply dark:from-orange-900/80 dark:to-orange-600/80"></div>
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-8 leading-tight">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl md:text-2xl text-orange-50 dark:text-orange-100/80 mb-12 font-medium">
              Whether you want to learn, teach, or support, there is a place for you in our community. Join us today and be part of the change.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/volunteer">
                <Button size="lg" className="w-full sm:w-auto rounded-full text-lg h-16 px-10 bg-white text-orange-600 hover:bg-orange-50 hover:text-orange-700 hover:scale-105 shadow-[0_10px_30px_rgba(255,255,255,0.2)] border-0 transition-all duration-300">
                  Join as Volunteer
                </Button>
              </Link>
              <Link href="/courses">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-lg h-16 px-10 border-2 border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-orange-600 hover:scale-105 transition-all duration-300">
                  Start Learning
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
