import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon, WalletIcon, TicketIcon, RefreshCwIcon, BarChart3Icon } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "How It Works | Bi-pass",
  description: "Learn how Bi-pass uses Solana blockchain technology to transform public transportation",
}

export default function HowItWorksPage() {
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
            <Link href="/how-it-works" className="text-sm font-medium text-purple-600 underline underline-offset-4">
              How It Works
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="/dashboard">
              <Button variant="outline" className="hidden md:flex">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-purple-500 hover:bg-purple-600">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 bg-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">How It Works</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Powered by Solana Blockchain
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We use DeFi protocols to redistribute your regular transportation costs and reimburse your travel
                  expenses.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
              <div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-purple-100 p-2 text-purple-600">
                    <WalletIcon className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Connect Your Wallet</h2>
                  <p className="text-gray-500 md:text-xl/relaxed">
                    Start by connecting your Solana wallet to the bi-pass platform. This secure connection allows for
                    seamless transactions and access to DeFi features.
                  </p>
                </div>
                <div className="mt-12 space-y-4">
                  <div className="inline-block rounded-lg bg-purple-100 p-2 text-purple-600">
                    <TicketIcon className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Purchase Passes</h2>
                  <p className="text-gray-500 md:text-xl/relaxed">
                    Buy train, bus, or combined transportation passes using traditional payment methods or
                    cryptocurrency. All passes are stored as digital tokens on the Solana blockchain.
                  </p>
                </div>
              </div>
              <div className="space-y-12">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-purple-100 p-2 text-purple-600">
                    <RefreshCwIcon className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold">DeFi Integration</h2>
                  <p className="text-gray-500 md:text-xl/relaxed">
                    Your transportation funds are automatically allocated to DeFi protocols when not in use, generating
                    yield that offsets your travel costs over time.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-purple-100 p-2 text-purple-600">
                    <BarChart3Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Reimbursements & Rewards</h2>
                  <p className="text-gray-500 md:text-xl/relaxed">
                    Receive automatic reimbursements for delayed or canceled trips. Earn rewards for consistent usage
                    that can be redeemed for free trips or other benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Technology Behind Bi-pass</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform leverages cutting-edge blockchain technology to create a seamless, secure, and rewarding
                  transportation experience.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-purple-200">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-purple-500"
                    >
                      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                    </svg>
                  </div>
                  <CardTitle>Solana Blockchain</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    We utilize Solana's high-performance blockchain for fast, low-cost transactions and smart contracts
                    that power our transportation ecosystem.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-purple-200">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-purple-500"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <CardTitle>Smart Contracts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Our custom smart contracts automatically handle pass validation, reimbursements, and yield
                    distribution without intermediaries.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-purple-200">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-purple-500"
                    >
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                    </svg>
                  </div>
                  <CardTitle>DeFi Protocols</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    We integrate with leading DeFi protocols to generate yield on transportation funds, creating a
                    sustainable economic model.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">How Reimbursements Work</h2>
                <p className="text-gray-500 mb-6">
                  Our innovative reimbursement system automatically compensates you for service disruptions, delays, and
                  cancellations without requiring you to file claims.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-900">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold">Service Monitoring</h3>
                      <p className="text-sm text-gray-500">
                        Our system continuously monitors transportation services for delays and disruptions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-900">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold">Smart Contract Verification</h3>
                      <p className="text-sm text-gray-500">
                        When a disruption is detected, smart contracts verify your affected journey.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-900">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold">Automatic Compensation</h3>
                      <p className="text-sm text-gray-500">
                        Compensation is automatically calculated and transferred to your wallet.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-900">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold">Transparent Records</h3>
                      <p className="text-sm text-gray-500">
                        All transactions are recorded on the blockchain for complete transparency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden bg-purple-100">
                <img
                  src="/purple-blockchain-transactions.png"
                  alt="Blockchain transaction visualization"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="py-12 md:py-24 bg-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Commute?
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join bi-pass today and experience the future of public transportation.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button className="bg-purple-500 hover:bg-purple-600">
                    Get Started
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline">View Pricing</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
