"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CrownIcon, CheckIcon, ArrowUpIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import Link from "next/link"

export function SubscriptionStatus() {
  const [showUpgradeDialog, setShowUpgradeDialog] = useState(false)

  // Mock subscription data - in a real app, this would come from an API
  const subscription = {
    plan: "Premium",
    status: "active",
    renewalDate: "June 30, 2025",
    monthlyCost: "$29.99",
    benefits: [
      "Unlimited trips on trains and buses",
      "Enhanced DeFi yield (5% APY)",
      "Priority reimbursements for delays",
      "2 free car rentals per month (2 hours each)",
      "Global WiFi access",
      "24/7 priority support",
    ],
  }

  return (
    <Card className="border-purple-200">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100">
              <CrownIcon className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <CardTitle className="text-lg">Bi-pass {subscription.plan}</CardTitle>
              <CardDescription>Your current subscription plan</CardDescription>
            </div>
          </div>
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Monthly Cost</span>
              <span className="font-medium">{subscription.monthlyCost}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Next Renewal</span>
              <span className="font-medium">{subscription.renewalDate}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Billing Cycle</span>
              <span className="font-medium">Monthly</span>
            </div>
          </div>

          <div className="md:col-span-2 space-y-2">
            <h3 className="text-sm font-medium text-gray-500">Plan Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {subscription.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <div className="px-6 pb-6 flex flex-col sm:flex-row gap-2">
        <Dialog open={showUpgradeDialog} onOpenChange={setShowUpgradeDialog}>
          <DialogTrigger asChild>
            <Button variant="outline" className="sm:flex-1">
              <ArrowUpIcon className="mr-2 h-4 w-4" />
              Upgrade Plan
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Upgrade Your Plan</DialogTitle>
              <DialogDescription>Choose a plan that better fits your transportation needs</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="rounded-lg border p-4 bg-purple-50 border-purple-200">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold">Enterprise Plan</h3>
                    <p className="text-sm text-gray-500">For businesses and teams</p>
                  </div>
                  <Badge className="bg-purple-200 text-purple-800">Recommended</Badge>
                </div>
                <ul className="space-y-2 mb-4">
                  {[
                    "Custom pass allocation for employees",
                    "Team management dashboard",
                    "Expense tracking and reporting",
                    "Corporate DeFi yield programs",
                    "Dedicated account manager",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckIcon className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center font-bold">Custom Pricing</div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowUpgradeDialog(false)}>
                Cancel
              </Button>
              <Link href="/contact-sales">
                <Button className="bg-purple-500 hover:bg-purple-600">Contact Sales</Button>
              </Link>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Link href="/account/billing" className="sm:flex-1">
          <Button variant="outline" className="w-full">
            Manage Billing
          </Button>
        </Link>

        <Link href="/account/subscription" className="sm:flex-1">
          <Button className="w-full bg-purple-500 hover:bg-purple-600">Manage Subscription</Button>
        </Link>
      </div>
    </Card>
  )
}
