import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardFooter } from "@/components/dashboard-footer"
import { PassCard } from "@/components/passes/pass-card"
import { PassHistory } from "@/components/passes/pass-history"
import { SubscriptionStatus } from "@/components/passes/subscription-status"
import { PlusIcon, ArrowLeftIcon, CalendarIcon, HistoryIcon, CreditCardIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "My Passes | Bi-pass",
  description: "Manage your transportation passes and subscriptions",
}

export default function PassesPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-4 md:px-6">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Dashboard
          </Link>
        </header>
        <main className="grid gap-6 p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">My Passes</h1>
              <p className="text-gray-500">Manage your transportation passes and subscriptions</p>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/passes/buy">
                <Button className="bg-purple-500 hover:bg-purple-600">
                  <PlusIcon className="mr-2 h-4 w-4" />
                  Buy New Pass
                </Button>
              </Link>
            </div>
          </div>

          <SubscriptionStatus />

          <Tabs defaultValue="active" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger
                value="active"
                className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-900"
              >
                <CreditCardIcon className="mr-2 h-4 w-4" />
                Active Passes
              </TabsTrigger>
              <TabsTrigger
                value="upcoming"
                className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-900"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                Upcoming
              </TabsTrigger>
              <TabsTrigger
                value="history"
                className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-900"
              >
                <HistoryIcon className="mr-2 h-4 w-4" />
                History
              </TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <PassCard
                  type="train"
                  title="Monthly Train Pass"
                  status="active"
                  validUntil="June 30, 2025"
                  usageCount={23}
                  usageLimit="Unlimited"
                  savings="$45.75"
                  id="train-monthly-1"
                />
                <PassCard
                  type="bus"
                  title="Weekly Bus Pass"
                  status="active"
                  validUntil="May 26, 2025"
                  usageCount={8}
                  usageLimit="Unlimited"
                  savings="$12.50"
                  id="bus-weekly-1"
                />
                <PassCard
                  type="rental"
                  title="Car Rental Credits"
                  status="active"
                  validUntil="July 15, 2025"
                  usageCount={2}
                  usageLimit="10"
                  savings="$35.00"
                  id="rental-credits-1"
                />
              </div>
            </TabsContent>

            <TabsContent value="upcoming" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <PassCard
                  type="train"
                  title="Weekend Train Pass"
                  status="upcoming"
                  validFrom="June 3, 2025"
                  validUntil="June 5, 2025"
                  usageCount={0}
                  usageLimit="6"
                  id="train-weekend-1"
                />
              </div>
              {/* Show message if no upcoming passes */}
              <div className="rounded-lg border border-dashed p-8 text-center">
                <h3 className="text-lg font-medium mb-2">No more upcoming passes</h3>
                <p className="text-gray-500 mb-4">Purchase additional passes to plan your future trips</p>
                <Link href="/passes/buy">
                  <Button variant="outline">Browse Available Passes</Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="history">
              <PassHistory />
            </TabsContent>
          </Tabs>
        </main>
        <DashboardFooter />
      </div>
    </div>
  )
}
