export const dynamic = "force-static"

export default function AppRouter500Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold text-purple-500">500</h1>
          <h2 className="text-2xl font-semibold">Server Error</h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Sorry, something went wrong on our server. We're working to fix the issue.
          </p>
          <div className="pt-4">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-purple-500 text-white hover:bg-purple-600 h-10 px-4 py-2"
            >
              Return Home
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
