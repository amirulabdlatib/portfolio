import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center dark:bg-zinc-950">
            <h1 className="mb-4 text-6xl font-bold text-zinc-900 dark:text-white">404</h1>

            <p className="mb-6 text-lg text-zinc-600 dark:text-zinc-400">Sorry, the page you’re looking for doesn’t exist.</p>

            <Link href="/" className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100">
                Go back home
            </Link>
        </div>
    );
}
