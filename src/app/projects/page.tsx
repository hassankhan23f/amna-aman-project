"use client"

import { Code, Globe, Users, Briefcase, Calendar } from "lucide-react"
import { ProjectCard } from "@/components/ProjectCard"
import Image from "next/image"

export default function ProjectsPage() {
    const projects = [
        {
            title: "Indus AI Week 2026",
            description: "Hassan Khan representing Amna Aman Project as CTO at Indus AI Week 2026 🇵🇰",
            fullDescription: `Indus AI Week stands as a national platform bringing together policy, innovation, talent, and investment — and being part of this ecosystem reflects our commitment to building meaningful, inclusive technology.

At AmnaAman, we believe AI should empower communities, create accessibility, and open opportunities for all. Representation at forums like this strengthens our vision and expands our impact within Pakistan’s growing AI landscape.

The future of AI in Pakistan is being built today — and we are proud to contribute to that journey.`,
            icon: Users,
            images: [
                "/images/indusai1.jpg",
                "/images/indusai2.jpg",
                "/images/indusai3.jpg",
                "/images/indusai4.jpg",
                "/images/indusai5.jpg"
            ]
        },
        {
            title: "Muhammadi Agosh Orphanage",
            description: "A heartwarming visit to share smiles, stories, and lessons on kindness and inclusion.",
            fullDescription: `Had a wonderful time visiting Muhammadi Agosh Orphanage.
            
            It was truly heartwarming to meet the amazing children and spend time sharing smiles, stories, and lessons on kindness and inclusion.
            
            As part of the Amna Aman Organization’s Inclusion Project for Special Children, I had the opportunity to talk about the importance of treating everyone with respect, empathy, and equality — because every child deserves to feel seen, valued, and included.`,
            icon: Users,
            images: ["/images/image1.jpeg", "/images/image2.jpeg", "/images/image3.jpeg"]
        },
        {
            title: "International World Disability Day at NUTECH",
            description: "Organized a special inclusion-focused event attended by NUTECH Rector and Pro-Rectors, highlighting student talent.",
            fullDescription: `A special inclusion-focused program was successfully organized and managed by our student team at NUTECH University Islamabad, highlighting the voices, talents, and experiences of specially-abled students.

            The program was honored by the presence of the Rector, Mr. Moazzam Ijaz, and the Pro-Rector of NUTECH, whose attendance reflected the university’s strong commitment to inclusivity, accessibility, and student-led initiatives.
            
            The event featured a documentary presentation that showcased the real-life journeys, challenges, and achievements of specially-abled individuals, emphasizing the importance of equal opportunities in education and society. This was followed by an interactive sign language activity, aimed at raising awareness and encouraging empathy and communication between students with and without hearing impairments.
            
            One of the most impactful segments of the program was the speeches delivered by specially-abled students of NUTECH, who confidently shared their personal stories, aspirations, and experiences within the academic environment. Their speeches highlighted resilience, determination, and the need for continued support and accessibility within educational institutions.
            
            The program successfully created a meaningful platform for dialogue, awareness, and inclusion, fostering a culture of respect and understanding among students, faculty, and administration.`,
            icon: Users,
            images: [
                "/images/nutech-event-1.jpg",
                "/images/nutech-event-2.jpg",
                "/images/nutech-event-3.jpg",
                "/images/nutech-event-4.jpg",
                "/images/nutech-event-5.jpg"
            ]
        },
        {
            title: "Inclusive Ecosystem Project",
            description: "A purpose-built initiative for individuals with autism, ADHD, Down syndrome, and intellectual or mental constraints.",
            fullDescription: `The Inclusive Ecosystem Project is a purpose-built initiative for individuals with autism, ADHD, Down syndrome, and intellectual or mental constraints who are unable to thrive in traditional schooling systems.

            By Amna Khurram

            In Pakistan, most special education institutions support children only up to the age of 15, leaving older individuals with disabilities without proper opportunities to learn, work, or grow. This project addresses that gap by creating a safe, structured, and lifelong development environment focused on abilities rather than limitations.
            
            Participants are first assessed by qualified psychologists through ability-based evaluations to understand their social, academic, and skill potential. Based on these assessments, they are guided into skill-based learning labs, where they receive hands-on training aligned with their strengths.
            
            The ecosystem also includes a social development zone, where individuals learn daily living skills such as hygiene, communication, and social manners, and a life & financial literacy zone, covering essentials like banking, identification, and basic financial awareness.
            
            After completing training, individuals are supported in employment pathways, either within the organization or through recommendations to partner institutions and corporate organizations.
            
            The Inclusive Ecosystem Project empowers individuals to become financially independent, socially confident, and active contributors to society, building a more inclusive future for Pakistan.`,
            link: "https://inclusive-simulation.vercel.app",
            icon: Users,
            images: [
                "/images/ecosystem-1.png",
                "/images/ecosystem-2.png",
                "/images/ecosystem-3.png",
                "/images/ecosystem-4.png",
                "/images/ecosystem-5.png"
            ]
        },
        {
            title: "Code for Inclusion",
            description: "Providing inclusive online workshops and beginner coding lessons for students with diverse learning abilities.",
            icon: Code,
        },
        {
            title: "EduTech Access",
            description: "Making online learning accessible for everyone using free tools like Google Meet, Canva, and Moodle.",
            icon: Globe,
        },
        {
            title: "Job Support Network",
            description: "Helping individuals with disabilities find jobs, internships, and skill-based training.",
            icon: Briefcase,
        },
    ]

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712] selection:bg-orange-500/30">
            {/* Ultra Premium Events Hero */}
            <section className="relative pt-12 pb-24 lg:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full overflow-hidden rounded-[3rem] mt-4 border border-slate-200 dark:border-slate-800">
                <Image
                    src="/images/events_hero_premium.png"
                    alt="Abstract Tech Events"
                    fill
                    className="object-cover opacity-90 dark:opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#030712] dark:via-[#030712]/80 dark:to-transparent"></div>

                <div className="relative z-10 text-center max-w-3xl mx-auto pt-20">
                    <div className="inline-flex items-center justify-center mb-6 px-4 py-1.5 rounded-full bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 font-medium text-sm backdrop-blur-md">
                        <Calendar size={16} className="mr-2" />
                        Our Initiatives
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
                        Milestones of <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Impact.</span>
                    </h1>
                    <p className="text-xl text-slate-700 dark:text-slate-300">
                        Explore our latest events, projects, and community-driven initiatives that are shaping the future of accessibility in Pakistan.
                    </p>
                </div>
            </section>

            {/* Events Grid */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <div key={index} className="transform transition-all duration-300 hover:-translate-y-2">
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                icon={project.icon}
                                index={index}
                                // @ts-ignore
                                fullDescription={project.fullDescription}
                                // @ts-ignore
                                images={project.images}
                                // @ts-ignore
                                link={project.link}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
