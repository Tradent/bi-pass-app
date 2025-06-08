import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SolanaWalletProvider } from "@/components/wallet-provider"
import { AuthProvider } from "@/lib/auth-context"
import { NextAuthProvider } from "@/components/next-auth-provider"
import { DemoProvider } from "@/lib/demo-context"
import { DemoModeIndicator } from "@/components/demo-mode-indicator"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bi-pass | Transforming Public Transportation",
  description: "Optimizing and transforming the industry of private public transportation with blockchain technology.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DemoProvider>
          <NextAuthProvider>
            <SolanaWalletProvider>
              <AuthProvider>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                  {children}
                  <DemoModeIndicator />
                </ThemeProvider>
              </AuthProvider>
            </SolanaWalletProvider>
          </NextAuthProvider>
        </DemoProvider>
      </body>
    </html>
  )
}
