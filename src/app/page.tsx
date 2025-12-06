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
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-slate-50 px-4 dark:bg-slate-950 sm:px-6 lg:px-8">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home.jpg"
            alt="Inclusive coding classroom"
            fill
            className="object-cover opacity-50 dark:opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-50/70 to-transparent dark:from-slate-950/90 dark:via-slate-950/70 dark:to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto">
          <div className="max-w-3xl space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 inline-flex items-center rounded-full border border-orange-200 bg-orange-50/80 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-orange-800 dark:border-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                <Star size={16} className="mr-2 fill-orange-600 text-orange-600 dark:fill-orange-400 dark:text-orange-400" />
                Empowering 500+ Students Worldwide
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Welcome to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:to-amber-400">AmnaAman</span>
              </h1>
              <h2 className="mt-6 text-2xl font-medium text-slate-600 dark:text-slate-300 sm:text-3xl md:text-4xl">
                Where Technology Meets Inclusion
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              We are creating a future where every individual, regardless of ability, can learn, grow, and connect. Join our mission to build a more inclusive world through technology and compassion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link href="/volunteer">
                <Button size="lg" className="w-full sm:w-auto rounded-full text-lg h-14 px-8">
                  <span className="mr-2">Volunteer Now</span>
                  <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
                </Button>
              </Link>
              <Link href="/donate">
                <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-lg h-14 px-8 bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
                  Donate Us
                </Button>
              </Link>
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
      <section className="bg-slate-50 py-24 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Driven by a passion for equality and empowerment.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "We believe in the power of empathy to build bridges and foster understanding.",
                color: "text-red-500",
                bg: "bg-red-50 dark:bg-red-900/20",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Leveraging technology to create accessible learning and growth opportunities.",
                color: "text-yellow-500",
                bg: "bg-yellow-50 dark:bg-yellow-900/20",
              },
              {
                icon: Users,
                title: "Community",
                description: "Creating a safe, inclusive space for everyone to connect and thrive.",
                color: "text-orange-500",
                bg: "bg-orange-50 dark:bg-orange-900/20",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${item.bg} ${item.color}`}>
                  <item.icon size={28} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl dark:bg-orange-900/20"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl dark:bg-amber-900/20"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Why Choose AmnaAman?
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800"
              >
                <div className="mb-6 p-4 rounded-full bg-white dark:bg-slate-800 shadow-sm text-orange-600 dark:text-orange-400">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-24 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Voices of Impact
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
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
      <section className="py-16 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">Trusted by Leading Organizations</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for Partner Logos */}
            {['Google', 'Microsoft', 'Github', 'Vercel', 'Supabase'].map((partner) => (
              <span key={partner} className="text-2xl font-bold text-slate-400 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white cursor-default">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-orange-600 dark:bg-orange-900">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]"></div>
        </div>
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-orange-100 mb-10">
            Whether you want to learn, teach, or support, there is a place for you in our community. Join us today and be part of the change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/volunteer">
              <Button size="lg" className="w-full sm:w-auto bg-white text-orange-600 hover:bg-orange-50 border-none">
                Join as Volunteer
              </Button>
            </Link>
            <Link href="/courses">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-orange-400 text-white hover:bg-orange-700 hover:text-white">
                Start Learning
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
