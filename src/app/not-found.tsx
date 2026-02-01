import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            <h2 className="text-4xl font-bold mb-4">404 - Not Found</h2>
            <p className="text-xl mb-6">Could not find requested resource</p>
            <Link href="/" className="btn btn-primary">
                Return Home
            </Link>
        </div>
    )
}
