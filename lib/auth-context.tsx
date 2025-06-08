"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useSession as useNextAuthSession, signOut as nextAuthSignOut } from "next-auth/react"
import { useWallet } from "@solana/wallet-adapter-react"
import { useDemo, demoUser } from "@/lib/demo-context"

type User = {
  id: string
  name?: string | null
  email?: string | null
  image?: string | null
  walletAddress?: string | null
  walletType?: "phantom" | "solflare" | null
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  isDemoUser: boolean
  authError: Error | null
  connectWallet: (walletType: "phantom" | "solflare") => Promise<void>
  disconnectWallet: () => void
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Safe wrapper for useSession that handles undefined return
function useSession() {
  // Default session object
  let session = { data: null, status: "unauthenticated", update: () => Promise.resolve(null) }
  const nextAuthSession = useNextAuthSession()

  try {
    // Check if we're in a browser environment
    if (typeof window !== "undefined") {
      // Use try-catch to handle potential errors from useNextAuthSession
      try {
        // Only override the default if nextAuthSession is valid
        if (nextAuthSession) {
          session = nextAuthSession
        }
      } catch (error) {
        console.error("Error using NextAuth session:", error)
        // Fall back to the default session
      }
    }
  } catch (error) {
    console.error("Error in useSession wrapper:", error)
  }

  // Always return a valid session object
  return session
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const session = useSession()
  const { connected, publicKey, disconnect, connect, wallet } = useWallet()
  const { isDemoMode } = useDemo()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [authError, setAuthError] = useState<Error | null>(null)
  const [isDemoUser, setIsDemoUser] = useState(false)

  useEffect(() => {
    // Handle demo mode
    if (isDemoMode) {
      setUser(demoUser)
      setIsDemoUser(true)
      setAuthError(null)
      setIsLoading(false)
      return
    } else {
      setIsDemoUser(false)
    }

    // Only update state if we're not in a loading state
    if (session.status === "loading") {
      return
    }

    try {
      // Handle session-based authentication
      if (session.data?.user && session.data.user.email) {
        setUser({
          id: session.data.user.id || session.data.user.email,
          name: session.data.user.name,
          email: session.data.user.email,
          image: session.data.user.image,
          walletAddress: (session.data.user as any)?.walletAddress,
          walletType: (session.data.user as any)?.walletType,
        })
        setAuthError(null)
      }
      // Handle wallet-based authentication
      else if (connected && publicKey) {
        setUser({
          id: publicKey.toString(),
          walletAddress: publicKey.toString(),
          walletType: wallet?.adapter.name.toLowerCase().includes("phantom")
            ? "phantom"
            : wallet?.adapter.name.toLowerCase().includes("solflare")
              ? "solflare"
              : null,
        })
        setAuthError(null)
      }
      // No authentication
      else {
        setUser(null)
      }
    } catch (error) {
      console.error("Error setting user:", error)
      setAuthError(error instanceof Error ? error : new Error("Unknown authentication error"))
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }, [session.data, session.status, connected, publicKey, wallet, isDemoMode])

  const connectWallet = async (walletType: "phantom" | "solflare") => {
    try {
      if (connected) {
        await disconnect()
      }

      // The actual connection is handled by the WalletProvider
      await connect()
      setAuthError(null)
    } catch (error) {
      console.error("Failed to connect wallet:", error)
      setAuthError(error instanceof Error ? error : new Error("Failed to connect wallet"))
    }
  }

  const disconnectWallet = async () => {
    try {
      await disconnect()
      setUser(null)
      setAuthError(null)
    } catch (error) {
      console.error("Failed to disconnect wallet:", error)
      setAuthError(error instanceof Error ? error : new Error("Failed to disconnect wallet"))
    }
  }

  const signOut = async () => {
    if (isDemoMode) {
      // This will be handled by the demo context
      return Promise.resolve()
    }

    try {
      if (connected) {
        await disconnect()
      }

      await nextAuthSignOut({ callbackUrl: "/" })
    } catch (error) {
      console.error("Error signing out:", error)
      throw error
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        isDemoUser,
        authError,
        connectWallet,
        disconnectWallet,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
