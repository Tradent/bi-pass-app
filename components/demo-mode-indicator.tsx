"use client"

import { useDemo } from "@/lib/demo-context"
import { Button } from "@/components/ui/button"
import { AlertCircleIcon, XIcon } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function DemoModeIndicator() {
  const { isDemoMode, exitDemoMode } = useDemo()
  const [isCollapsed, setIsCollapsed] = useState(false)

  if (!isDemoMode) return null

  if (isCollapsed) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsCollapsed(false)}
          className="h-10 w-10 rounded-full bg-purple-500 hover:bg-purple-600 p-0 shadow-lg"
        >
          <AlertCircleIcon className="h-5 w-5" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm bg-purple-50 border border-purple-200 rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <AlertCircleIcon className="h-5 w-5 text-purple-500" />
          <h3 className="font-medium">Demo Mode Active</h3>
        </div>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => setIsCollapsed(true)}>
          <XIcon className="h-4 w-4" />
        </Button>
      </div>
      <p className="text-sm text-gray-600 mb-3">
        You're currently using Bi-pass in demo mode. All data is simulated and changes won't be saved.
      </p>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1" onClick={exitDemoMode}>
          Exit Demo
        </Button>
        <Link href="/auth/signup" className="flex-1">
          <Button size="sm" className="w-full bg-purple-500 hover:bg-purple-600">
            Create Account
          </Button>
        </Link>
      </div>
    </div>
  )
}
