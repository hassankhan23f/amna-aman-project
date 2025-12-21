"use client"

import { Code, Globe, Users, Briefcase } from "lucide-react"
import { ProjectCard } from "@/components/ProjectCard"

export default function ProjectsPage() {
    const projects = [
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
                        // @ts-ignore
                        fullDescription={project.fullDescription}
                        // @ts-ignore
                        images={project.images}
                        // @ts-ignore
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}
