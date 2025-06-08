"use client"

import { Suspense } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { useSearchParams } from "next/navigation"

// Component that uses useSearchParams
function AuthErrorContent() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  let errorMessage = "An unexpected authentication error occurred."
  let errorDescription = "Please try signing in again or contact support if the problem persists."

  // Map error codes to user-friendly messages
  if (error === "Configuration") {
    errorMessage = "There is a problem with the server configuration."
    errorDescription = "Please contact the administrator to resolve this issue."
  } else if (error === "AccessDenied") {
    errorMessage = "You do not have permission to sign in."
    errorDescription = "Please contact support if you believe this is an error."
  } else if (error === "Verification") {
    errorMessage = "The verification link may have been used or is no longer valid."
    errorDescription = "Please request a new verification link."
  } else if (error === "OAuthSignin" || error === "OAuthCallback" || error === "OAuthCreateAccount") {
    errorMessage = "There was a problem with the OAuth authentication."
    errorDescription = "Please try again or use a different sign-in method."
  } else if (error === "EmailCreateAccount" || error === "Callback" || error === "OAuthAccountNotLinked") {
    errorMessage = "There was a problem with your account."
    errorDescription = "The email might be used with a different sign-in method."
  } else if (error === "SessionRequired") {
    errorMessage = "You need to be signed in to access this page."
    errorDescription = "Please sign in to continue."
  } else if (error === "Default") {
    errorMessage = "An authentication error occurred."
    errorDescription = "Please check your credentials and try again."
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Authentication Error</CardTitle>
        <CardDescription>There was a problem signing you in</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="p-4 bg-red-50 text-red-700 rounded-md text-center mb-4">
          <p className="font-medium mb-2">{errorMessage}</p>
          <p className="text-sm">{errorDescription}</p>
          {error && <p className="text-xs mt-2 text-red-500">Error code: {error}</p>}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="flex flex-col gap-2 w-full">
          <Link href="/auth/signin" className="w-full">
            <Button className="w-full bg-purple-500 hover:bg-purple-600">Try Again</Button>
          </Link>
          <Link href="/" className="w-full">
            <Button variant="outline" className="w-full">
              Return to Home
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

// Loading fallback
function AuthErrorLoading() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Loading...</CardTitle>
        <CardDescription>Please wait</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center py-8">
          <div className="h-8 w-8 rounded-full border-4 border-purple-200 border-t-purple-500 animate-spin"></div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function AuthErrorPage() {
  return (
    <div className="flex flex-col min-h-screen">
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
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <Suspense fallback={<AuthErrorLoading />}>
          <AuthErrorContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}
