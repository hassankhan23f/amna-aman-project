export default async function ErrorPage(props: {
    searchParams: Promise<{ message?: string }>
}) {
    const searchParams = await props.searchParams
    const message = searchParams.message || "Sorry, we encountered an error during authentication."

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-8 text-center">
            <h1 className="text-4xl font-bold text-red-600">Something went wrong</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                {message}
            </p>
            <a
                href="/login"
                className="mt-6 rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-500"
            >
                Go back to Login
            </a>
        </div>
    )
}
