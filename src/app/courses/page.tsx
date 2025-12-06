import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function CoursesPage() {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        return redirect('/login')
    }

    const courses = [
        { title: 'C++', category: 'Tech', description: 'Learn the basics of C++ programming.' },
        { title: 'HTML & CSS', category: 'Tech', description: 'Build beautiful websites.' },
        { title: 'Canva Design', category: 'Creative', description: 'Create stunning graphics.' },
        { title: 'Video Editing', category: 'Creative', description: 'Edit videos like a pro with CapCut.' },
        { title: 'Communication Skills', category: 'Grooming', description: 'Master the art of communication.' },
        { title: 'Financial Responsibility', category: 'Grooming', description: 'Manage your finances effectively.' },
    ]

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-8 flex items-center justify-between">
                <h1 className="text-3xl font-bold">Available Courses</h1>
                <p className="text-sm text-gray-500">Welcome, {user.email}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course, index) => (
                    <div key={index} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                        <div className="mb-2 inline-block rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                            {course.category}
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">{course.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{course.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
