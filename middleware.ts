import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

const DEMO_MODE_KEY = "bipass_demo_mode"

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Define which paths are protected (require authentication)
  const protectedPaths = ["/dashboard", "/dashboard/trips", "/dashboard/passes", "/dashboard/history", "/passes"]

  // Define which paths are authentication paths
  const authPaths = ["/auth/signin", "/auth/signup", "/auth/forgot-password"]

  // Check if the path is protected
  const isPathProtected = protectedPaths.some((protectedPath) => path.startsWith(protectedPath))

  // Check if the path is an auth path
  const isAuthPath = authPaths.some((authPath) => path === authPath)

  // Check if demo mode is enabled
  const isDemoMode = request.cookies.has(DEMO_MODE_KEY)

  // If in demo mode and trying to access a protected path, allow it
  if (isDemoMode && isPathProtected) {
    return NextResponse.next()
  }

  // If in demo mode and trying to access an auth path, redirect to dashboard
  if (isDemoMode && isAuthPath) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  try {
    // Get the authentication token with a timeout to prevent hanging
    const tokenPromise = getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET || "fallback-secret-do-not-use-in-production",
    }).catch((err) => {
      console.error("Error getting token:", err)
      return null
    })

    // Add a timeout to prevent the middleware from hanging
    const timeoutPromise = new Promise<null>((resolve) => {
      setTimeout(() => resolve(null), 3000)
    })

    // Use Promise.race to either get the token or timeout
    const token = await Promise.race([tokenPromise, timeoutPromise])

    const isAuthenticated = !!token

    // If the path is protected and the user is not authenticated, redirect to sign in
    if (isPathProtected && !isAuthenticated) {
      const signInUrl = new URL("/auth/signin", request.url)
      signInUrl.searchParams.set("callbackUrl", path)
      return NextResponse.redirect(signInUrl)
    }

    // If the user is authenticated and trying to access an auth path, redirect to dashboard
    if (isAuthenticated && isAuthPath) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
  } catch (error) {
    console.error("Middleware error:", error)

    // If there's an error with authentication and the path is protected, redirect to error page
    if (isPathProtected) {
      return NextResponse.redirect(new URL("/auth/error", request.url))
    }
  }

  // Otherwise, continue with the request
  return NextResponse.next()
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*", "/passes/:path*"],
}
