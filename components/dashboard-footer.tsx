import Link from "next/link"

export function DashboardFooter() {
  return (
    <footer className="border-t bg-white py-6 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} bi-pass. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">
              Privacy
            </Link>
            <Link href="/help" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">
              Help
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
