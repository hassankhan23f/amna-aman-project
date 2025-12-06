"use client"

import { Code, Globe, Users, Briefcase } from "lucide-react"
import { ProjectCard } from "@/components/ProjectCard"

export default function ProjectsPage() {
    const projects = [
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
            title: "Community Connect",
            description: "Building a safe digital space for families, teachers, and caregivers to connect, learn, and grow together.",
            icon: Users,
        },
        {
            title: "Job Support Network",
            description: "Helping individuals with disabilities find jobs, internships, and skill-based training.",
            icon: Briefcase,
        },
    ]

    return (
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Our Projects
                </h1>
                <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                    We are working on several initiatives to empower individuals with diverse abilities.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        icon={project.icon}
                        index={index}
                    />
                ))}
            </div>
        </div>
    )
}
