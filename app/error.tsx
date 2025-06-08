"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold text-purple-500">Error</h1>
          <h2 className="text-2xl font-semibold">Something went wrong</h2>
          <p className="text-gray-500 max-w-md mx-auto">An unexpected error occurred. Please try again later.</p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => reset()} className="bg-purple-500 hover:bg-purple-600">
              Try Again
            </Button>
            <Link href="/">
              <Button variant="outline">Return Home</Button>
            </Link>
          </div>
          {error.digest && <p className="text-xs text-gray-400 mt-8">Error ID: {error.digest}</p>}
        </div>
      </main>
    </div>
  )
}
