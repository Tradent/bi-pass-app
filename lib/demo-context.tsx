"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useSearchParams } from "next/navigation"

type DemoContextType = {
  isDemoMode: boolean
  startDemoMode: () => void
  exitDemoMode: () => void
}

const DemoContext = createContext<DemoContextType | undefined>(undefined)

// Mock demo user data
export const demoUser = {
  id: "demo-user",
  name: "Demo User",
  email: "demo@example.com",
  image: null,
  walletAddress: "demo123...abc",
  walletType: null,
}

const DEMO_MODE_KEY = "bipass_demo_mode"

export function DemoProvider({ children }: { children: ReactNode }) {
  const [isDemoMode, setIsDemoMode] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Check if demo mode is enabled on mount or via query param
  useEffect(() => {
    // Check URL parameter first
    const demoParam = searchParams.get("demo")
    if (demoParam === "true") {
      setIsDemoMode(true)
      localStorage.setItem(DEMO_MODE_KEY, "true")
      return
    }

    // Then check localStorage
    const storedDemoMode = localStorage.getItem(DEMO_MODE_KEY)
    if (storedDemoMode === "true") {
      setIsDemoMode(true)
    }
  }, [searchParams])

  // Update localStorage when demo mode changes
  useEffect(() => {
    if (isDemoMode) {
      localStorage.setItem(DEMO_MODE_KEY, "true")
      // Set a cookie for server-side awareness
      document.cookie = `${DEMO_MODE_KEY}=true; path=/; max-age=${60 * 60 * 24}` // 1 day
    } else {
      localStorage.removeItem(DEMO_MODE_KEY)
      // Remove the cookie
      document.cookie = `${DEMO_MODE_KEY}=; path=/; max-age=0`
    }
  }, [isDemoMode])

  const startDemoMode = () => {
    setIsDemoMode(true)
    router.push("/dashboard")
  }

  const exitDemoMode = () => {
    setIsDemoMode(false)
    // Redirect to home if on a protected route
    if (pathname.startsWith("/dashboard") || pathname.startsWith("/passes") || pathname.startsWith("/account")) {
      router.push("/")
    }
  }

  return (
    <DemoContext.Provider
      value={{
        isDemoMode,
        startDemoMode,
        exitDemoMode,
      }}
    >
      {children}
    </DemoContext.Provider>
  )
}

export function useDemo() {
  const context = useContext(DemoContext)
  if (context === undefined) {
    throw new Error("useDemo must be used within a DemoProvider")
  }
  return context
}
