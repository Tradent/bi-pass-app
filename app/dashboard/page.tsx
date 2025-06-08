import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrainIcon,
  BusIcon,
  CarIcon,
  CalendarIcon,
  MapIcon,
  HomeIcon,
  SettingsIcon,
  CreditCardIcon,
  HistoryIcon,
  BellIcon,
  LogOutIcon,
} from "lucide-react"
import { DashboardPreview } from "@/components/dashboard-preview"
import { DashboardFooter } from "@/components/dashboard-footer"

export const metadata: Metadata = {
  title: "Dashboard | Bi-pass",
  description: "Manage your transportation with Bi-pass",
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 z-50 border-r bg-white">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              bi-pass
            </span>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <div className="px-4 mb-4">
            <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight">Dashboard</h2>
            <div className="space-y-1">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-lg bg-purple-50 px-3 py-2 text-purple-900 transition-all hover:text-purple-900"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                href="/dashboard/trips"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-purple-900 hover:bg-purple-50"
              >
                <MapIcon className="h-4 w-4" />
                My Trips
              </Link>
              <Link
                href="/dashboard/passes"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-purple-900 hover:bg-purple-50"
              >
                <CreditCardIcon className="h-4 w-4" />
                Passes
              </Link>
              <Link
                href="/dashboard/history"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-purple-900 hover:bg-purple-50"
              >
                <HistoryIcon className="h-4 w-4" />
                History
              </Link>
            </div>
          </div>
          <div className="px-4 mb-4">
            <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight">Transportation</h2>
            <div className="space-y-1">
              <Link
                href="/dashboard/train"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-purple-900 hover:bg-purple-50"
              >
                <TrainIcon className="h-4 w-4" />
                Train
              </Link>
              <Link
                href="/dashboard/bus"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-purple-900 hover:bg-purple-50"
              >
                <BusIcon className="h-4 w-4" />
                Bus
              </Link>
              <Link
                href="/dashboard/rental"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-purple-900 hover:bg-purple-50"
              >
                <CarIcon className="h-4 w-4" />
                Rental
              </Link>
            </div>
          </div>
          <div className="px-4">
            <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight">Account</h2>
            <div className="space-y-1">
              <Link
                href="/dashboard/notifications"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-purple-900 hover:bg-purple-50"
              >
                <BellIcon className="h-4 w-4" />
                Notifications
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-purple-900 hover:bg-purple-50"
              >
                <SettingsIcon className="h-4 w-4" />
                Settings
              </Link>
              <Link
                href="/logout"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-purple-900 hover:bg-purple-50"
              >
                <LogOutIcon className="h-4 w-4" />
                Logout
              </Link>
            </div>
          </div>
        </nav>
        <div className="mt-auto p-4 border-t">
          <div className="flex items-center gap-3 rounded-lg bg-purple-50 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-200">
              <span className="font-medium text-purple-700">JS</span>
            </div>
            <div>
              <p className="text-sm font-medium">John Smith</p>
              <p className="text-xs text-gray-500">Gold Member</p>
            </div>
          </div>
        </div>
      </aside>
      <div className="flex-1 md:ml-64">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-4 md:px-6">
          <div className="md:hidden">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                bi-pass
              </span>
            </Link>
          </div>
          <div className="hidden md:flex gap-6 ml-6">
            <Link href="/features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full md:hidden">
              <SettingsIcon className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Button>
            <div className="hidden md:flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100">
                <span className="text-sm font-medium text-purple-700">JS</span>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium">John Smith</p>
                <p className="text-xs text-gray-500">Gold Member</p>
              </div>
            </div>
          </div>
        </header>
        <main className="grid gap-6 p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-gray-500">Welcome back, John! Here's your transportation overview.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <CalendarIcon className="mr-2 h-4 w-4" />
                Schedule Trip
              </Button>
              <Button size="sm" className="bg-purple-500 hover:bg-purple-600">
                <CreditCardIcon className="mr-2 h-4 w-4" />
                Buy Pass
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Passes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-gray-500">Train, Bus, and Rental</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Trips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-gray-500">Next: Today at 14:30</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Monthly Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">$87.50</div>
                <p className="text-xs text-gray-500">15% more than last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Reward Points</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,250</div>
                <p className="text-xs text-gray-500">250 points until next reward</p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4">Transportation Dashboard</h2>
            <DashboardPreview />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your transportation activity from the past 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      icon: <TrainIcon />,
                      title: "Train Trip",
                      desc: "Central → North Terminal",
                      time: "Today, 10:15 AM",
                    },
                    { icon: <BusIcon />, title: "Bus Trip", desc: "Route 42 → Downtown", time: "Yesterday, 5:30 PM" },
                    { icon: <CarIcon />, title: "Car Rental", desc: "Economy Car (2 hours)", time: "May 15, 2025" },
                    {
                      icon: <CreditCardIcon />,
                      title: "Pass Renewal",
                      desc: "Monthly Train Pass",
                      time: "May 12, 2025",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                        <div className="h-5 w-5 text-purple-600">{item.icon}</div>
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                      <div className="text-xs text-gray-500">{item.time}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Activity
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Solana Wallet</CardTitle>
                <CardDescription>Your DeFi transportation account</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border bg-card p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium">Wallet Balance</h3>
                      <Badge className="bg-purple-100 text-purple-800">Connected</Badge>
                    </div>
                    <div className="text-2xl font-bold mb-1">◎ 12.45</div>
                    <p className="text-sm text-gray-500">≈ $245.67 USD</p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Recent Transactions</h3>
                    <div className="space-y-3">
                      {[
                        { type: "Reimbursement", amount: "+◎ 0.75", time: "Today" },
                        { type: "Pass Purchase", amount: "-◎ 1.20", time: "May 14" },
                        { type: "Yield Earned", amount: "+◎ 0.12", time: "May 12" },
                      ].map((tx, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                          <div>
                            <p className="font-medium text-sm">{tx.type}</p>
                            <p className="text-xs text-gray-500">{tx.time}</p>
                          </div>
                          <span
                            className={`font-medium ${tx.amount.startsWith("+") ? "text-green-600" : "text-gray-600"}`}
                          >
                            {tx.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button className="w-full bg-purple-500 hover:bg-purple-600">Add Funds</Button>
                <Button variant="outline" className="w-full">
                  View DeFi Options
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
        <DashboardFooter />
      </div>
    </div>
  )
}
