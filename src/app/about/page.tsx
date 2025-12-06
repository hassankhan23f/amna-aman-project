import Image from "next/image"

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            <section className="bg-slate-50 py-20 dark:bg-slate-900">
                <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                        About Us
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                        AmnaAman is dedicated to creating a world where technology bridges gaps and fosters inclusion for everyone.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                                Our Mission
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Our mission is to empower individuals with diverse abilities by providing them with the tools, resources, and community support they need to thrive in the digital age. We believe that technology should be accessible to all, and we are committed to breaking down barriers to education and employment.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <div className="rounded-xl bg-orange-50 p-6 dark:bg-orange-900/20">
                                    <h3 className="mb-2 font-semibold text-orange-700 dark:text-orange-300">Education</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Providing accessible coding workshops and digital literacy programs.</p>
                                </div>
                                <div className="rounded-xl bg-amber-50 p-6 dark:bg-amber-900/20">
                                    <h3 className="mb-2 font-semibold text-amber-700 dark:text-amber-300">Community</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Building a supportive network for students, mentors, and families.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 shadow-xl">
                            <Image
                                src="/images/mission.png"
                                alt="AmnaAman Mission"
                                fill
                                className="object-cover transition-transform hover:scale-105 duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
