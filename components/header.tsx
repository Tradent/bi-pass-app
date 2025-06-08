"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useDemo } from "@/lib/demo-context"
import { PlayIcon } from "lucide-react"

export function Header() {
  const { user, isAuthenticated, isLoading, authError, isDemoUser, signOut } = useAuth()
  const { isDemoMode, startDemoMode, exitDemoMode } = useDemo()
  const [isSigningOut, setIsSigningOut] = useState(false)
  const router = useRouter()

  // Handle auth errors
  useEffect(() => {
    if (authError) {
      console.error("Authentication error:", authError)
      // You could redirect to error page or show a toast notification
    }
  }, [authError])

  const handleSignOut = async () => {
    if (isDemoMode) {
      exitDemoMode()
      return
    }

    try {
      setIsSigningOut(true)
      await signOut()
    } catch (error) {
      console.error("Error signing out:", error)
      // Fallback to redirect if signOut fails
      router.push("/")
    } finally {
      setIsSigningOut(false)
    }
  }

  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            bi-pass
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/features" className="text-sm font-medium hover:underline underline-offset-4">
            Features
          </Link>
          <Link href="/how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
            How It Works
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:underline underline-offset-4">
            Pricing
          </Link>
        </nav>
        <div className="flex gap-4">
          {isLoading ? (
            <div className="h-10 w-20 bg-gray-100 animate-pulse rounded-md"></div>
          ) : isAuthenticated || isDemoMode ? (
            <>
              <Link href="/dashboard">
                <Button variant="outline" className="hidden md:flex">
                  Dashboard
                </Button>
              </Link>
              <Button onClick={handleSignOut} variant="ghost" disabled={isSigningOut}>
                {isSigningOut ? "Signing out..." : isDemoMode ? "Exit Demo" : "Sign Out"}
              </Button>
              {isDemoMode && (
                <Link href="/auth/signup">
                  <Button className="bg-purple-500 hover:bg-purple-600">Create Account</Button>
                </Link>
              )}
            </>
          ) : (
            <>
              <Button variant="outline" className="hidden md:flex items-center gap-2" onClick={startDemoMode}>
                <PlayIcon className="h-4 w-4" />
                Try Demo
              </Button>
              <Link href="/auth/signin">
                <Button variant="outline" className="hidden md:flex">
                  Log In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-purple-500 hover:bg-purple-600">Get Started</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
