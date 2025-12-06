import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Briefcase, Code, Video, DollarSign, PenTool, Globe, MapPin, Building, ArrowRight } from 'lucide-react'

export default async function DashboardPage() {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        return redirect('/login')
    }

    const courses = [
        { title: 'Web Development Bootcamp', category: 'Tech', description: 'Master HTML, CSS, and modern JavaScript.', icon: Code, color: 'text-blue-600 bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400' },
        { title: 'Freelancing Mastery', category: 'Career', description: 'Learn how to succeed on Upwork and Fiverr.', icon: DollarSign, color: 'text-green-600 bg-green-100 dark:bg-green-900/20 dark:text-green-400' },
        { title: 'Graphic Design with Canva', category: 'Creative', description: 'Create stunning visuals easily.', icon: PenTool, color: 'text-purple-600 bg-purple-100 dark:bg-purple-900/20 dark:text-purple-400' },
        { title: 'Video Editing with CapCut', category: 'Creative', description: 'Edit professional videos on your phone.', icon: Video, color: 'text-pink-600 bg-pink-100 dark:bg-pink-900/20 dark:text-pink-400' },
    ]

    const jobs = [
        { title: 'React Developer', company: 'Systems Limited', location: 'Lahore, Pakistan', type: 'Full-time', posted: '2 days ago' },
        { title: 'SQA Engineer', company: '10Pearls', location: 'Karachi, Pakistan', type: 'Full-time', posted: '1 day ago' },
        { title: 'Digital Marketing Intern', company: 'Ibex', location: 'Islamabad, Pakistan', type: 'Internship', posted: '3 days ago' },
        { title: 'Senior Graphic Designer', company: 'Popcorn Studio', location: 'Lahore, Pakistan', type: 'Contract', posted: '5 days ago' },
        { title: 'Frontend Developer', company: 'Arbisoft', location: 'Lahore, Pakistan', type: 'Full-time', posted: '1 week ago' },
    ]

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <header className="mb-10">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                        Welcome back, <span className="text-orange-600 dark:text-orange-400">{user.email?.split('@')[0]}</span>
                    </h1>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                        Here is what is happening in your network today.
                    </p>
                </header>

                <div className="grid gap-8 lg:grid-cols-12">
                    {/* Courses Section */}
                    <div className="lg:col-span-8 space-y-8">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Available Courses</h2>
                            <Link href="/courses" className="text-sm font-medium text-orange-600 dark:text-orange-400 hover:underline">View All</Link>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2">
                            {[
                                {
                                    title: 'Web Development Bootcamp',
                                    category: 'Tech',
                                    description: 'SuperSimpleDev HTML & CSS Full Course - Beginner to Pro.',
                                    icon: Code,
                                    color: 'text-blue-600 bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400',
                                    href: 'https://www.youtube.com/watch?v=G3e-cpL7ofc'
                                },
                                {
                                    title: 'Freelancing Mastery',
                                    category: 'Career',
                                    description: 'Learn Freelancing with Hisham Sarwar | Complete Course.',
                                    icon: DollarSign,
                                    color: 'text-green-600 bg-green-100 dark:bg-green-900/20 dark:text-green-400',
                                    href: 'https://www.youtube.com/playlist?list=PLHi_NUJDIGWIU1-pPxaiVLNFwtX2Z2wwJ'
                                },
                                {
                                    title: 'Graphic Design with Canva',
                                    category: 'Creative',
                                    description: 'Canva Masterclass 2025: From Beginner to Pro.',
                                    icon: PenTool,
                                    color: 'text-purple-600 bg-purple-100 dark:bg-purple-900/20 dark:text-purple-400',
                                    href: 'https://www.youtube.com/watch?v=kRz1117s0cM'
                                },
                                {
                                    title: 'Video Editing with CapCut',
                                    category: 'Creative',
                                    description: 'CapCut App Video Editing Tutorial - COMPLETE Guide.',
                                    icon: Video,
                                    color: 'text-pink-600 bg-pink-100 dark:bg-pink-900/20 dark:text-pink-400',
                                    href: 'https://www.youtube.com/watch?v=7M7D8Fj2Y_g'
                                },
                            ].map((course, index) => (
                                <Link href={course.href} key={index} target="_blank" rel="noopener noreferrer" className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950">
                                    <div>
                                        <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${course.color}`}>
                                            <course.icon size={28} />
                                        </div>
                                        <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                            {course.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                            {course.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                                            {course.category}
                                        </span>
                                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-orange-600 dark:text-slate-600 dark:group-hover:text-orange-400 transition-colors" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Job Opportunities Section */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Job Opportunities</h2>
                            <Link href="#" className="text-sm font-medium text-orange-600 dark:text-orange-400 hover:underline">View All</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            {[
                                {
                                    title: 'Associate Programs',
                                    company: 'NOWPDP',
                                    location: 'Karachi, Pakistan',
                                    type: 'Full-time',
                                    posted: 'Recently',
                                    href: 'https://www.nowpdp.org.pk/job-detail/associate-programs?utm_source=chatgpt.com'
                                },
                                {
                                    title: 'Disabled Person Internship 2025',
                                    company: 'Review Pakistani Jobs',
                                    location: 'Pakistan',
                                    type: 'Internship',
                                    posted: 'New',
                                    href: 'https://reviewpakistanijobs.com/disabled-person-internship-2025/'
                                },
                                {
                                    title: 'Internship Program for PWD',
                                    company: 'AlBaraka Bank',
                                    location: 'Multiple Cities',
                                    type: 'Internship',
                                    posted: 'Active',
                                    href: 'https://careers.albaraka.com.pk/albaraka-bank-pakistan-ltd-internship-program-for-pwd-islamabad-faisalabad-karachi-lahore-multan-peshawar-jobs-1528486'
                                },
                                {
                                    title: 'React Developer',
                                    company: 'Systems Limited',
                                    location: 'Lahore, Pakistan',
                                    type: 'Full-time',
                                    posted: '2 days ago',
                                    href: '#'
                                },
                                {
                                    title: 'SQA Engineer',
                                    company: '10Pearls',
                                    location: 'Karachi, Pakistan',
                                    type: 'Full-time',
                                    posted: '1 day ago',
                                    href: '#'
                                },
                            ].map((job, index) => (
                                <Link href={job.href} key={index} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-orange-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-orange-900/50 cursor-pointer">
                                    <div className="mt-1 h-10 w-10 flex-shrink-0 rounded-lg bg-slate-100 flex items-center justify-center dark:bg-slate-800 text-slate-500">
                                        <Building size={20} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-slate-900 dark:text-white text-sm truncate group-hover:text-orange-600 transition-colors">
                                            {job.title}
                                        </h3>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 truncate">
                                            {job.company} • {job.posted}
                                        </p>
                                        <div className="mt-3 flex items-center gap-2 flex-wrap">
                                            <span className="inline-flex items-center text-xs text-slate-500 dark:text-slate-500 bg-slate-50 dark:bg-slate-900 px-2 py-1 rounded-md">
                                                <MapPin size={10} className="mr-1" />
                                                {job.location}
                                            </span>
                                            <span className="rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-600 dark:bg-orange-900/20 dark:text-orange-400">
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="rounded-xl bg-gradient-to-br from-orange-600 to-amber-500 p-6 text-white text-center">
                            <h3 className="font-bold text-lg mb-2">Need Career Advice?</h3>
                            <p className="text-orange-50 text-sm mb-4">Book a 1-on-1 session with our career counselors.</p>
                            <button className="w-full rounded-lg bg-white py-2 text-sm font-bold text-orange-600 hover:bg-orange-50 transition-colors">
                                Book Session
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
