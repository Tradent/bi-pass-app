"use client"

import { SessionProvider } from "next-auth/react"
import type { ReactNode } from "react"
import { useState, useEffect } from "react"

export function NextAuthProvider({
  children,
}: {
  children: ReactNode
}) {
  const [isDemoMode, setIsDemoMode] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Check if demo mode is enabled via cookie
    const cookies = document.cookie.split(";")
    const demoModeCookie = cookies.find((cookie) => cookie.trim().startsWith("bipass_demo_mode="))
    setIsDemoMode(!!demoModeCookie && demoModeCookie.includes("true"))
  }, [])

  // During SSR or when not yet determined if in demo mode, render a minimal provider
  if (!isClient) {
    return (
      <SessionProvider refetchInterval={0} refetchOnWindowFocus={false}>
        {children}
      </SessionProvider>
    )
  }

  // If in demo mode, don't use SessionProvider to avoid NextAuth errors
  if (isDemoMode) {
    return <>{children}</>
  }

  return (
    <SessionProvider refetchInterval={0} refetchOnWindowFocus={false}>
      {children}
    </SessionProvider>
  )
}
