import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Contact Us
                </h1>
                <p className="mb-12 text-lg text-gray-600 dark:text-gray-300">
                    Have questions or want to get involved? Reach out to us!
                </p>

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300">
                            <Phone size={24} />
                        </div>
                        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Phone</h3>
                        <p className="text-gray-600 dark:text-gray-400">03085105000</p>
                    </div>

                    <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300">
                            <Mail size={24} />
                        </div>
                        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Email</h3>
                        <p className="text-gray-600 dark:text-gray-400">amnaaman.org@gmail.com</p>
                    </div>

                    <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300">
                            <MapPin size={24} />
                        </div>
                        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Location</h3>
                        <p className="text-gray-600 dark:text-gray-400">Islamabad, Pakistan</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
