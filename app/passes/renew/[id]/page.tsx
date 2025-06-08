"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeftIcon, TrainIcon, BusIcon, CarIcon, CheckIcon, InfoIcon, CalendarIcon } from "lucide-react"
import { DashboardFooter } from "@/components/dashboard-footer"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function RenewPassPage({ params }: { params: { id: string } }) {
  const [renewalOption, setRenewalOption] = useState("1")
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Get pass details based on ID
  const passDetails = getPassDetailsById(params.id)

  const handleRenew = () => {
    setIsProcessing(true)
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
    }, 2000)
  }

  // Helper function to get pass details
  function getPassDetailsById(id: string) {
    // In a real app, this would fetch from an API
    if (id.includes("train")) {
      return {
        type: "train",
        title: "Monthly Train Pass",
        currentValidUntil: "June 30, 2025",
        price: "$119.99",
        icon: <TrainIcon className="h-5 w-5 text-purple-500" />,
      }
    } else if (id.includes("bus")) {
      return {
        type: "bus",
        title: "Weekly Bus Pass",
        currentValidUntil: "May 26, 2025",
        price: "$29.99",
        icon: <BusIcon className="h-5 w-5 text-purple-500" />,
      }
    } else {
      return {
        type: "rental",
        title: "Car Rental Credits",
        currentValidUntil: "July 15, 2025",
        price: "$89.99",
        icon: <CarIcon className="h-5 w-5 text-purple-500" />,
      }
    }
  }

  // Calculate new expiration date based on renewal option
  const getNewExpirationDate = () => {
    const currentDate = new Date(passDetails.currentValidUntil)

    if (renewalOption === "1") {
      // Add 1 month
      currentDate.setMonth(currentDate.getMonth() + 1)
    } else if (renewalOption === "3") {
      // Add 3 months
      currentDate.setMonth(currentDate.getMonth() + 3)
    } else if (renewalOption === "6") {
      // Add 6 months
      currentDate.setMonth(currentDate.getMonth() + 6)
    } else if (renewalOption === "12") {
      // Add 12 months
      currentDate.setMonth(currentDate.getMonth() + 12)
    }

    return currentDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  // Calculate price based on renewal option
  const getRenewalPrice = () => {
    const basePrice = Number.parseFloat(passDetails.price.replace("$", ""))

    if (renewalOption === "1") {
      return `$${basePrice.toFixed(2)}`
    } else if (renewalOption === "3") {
      // 5% discount for 3 months
      return `$${(basePrice * 3 * 0.95).toFixed(2)}`
    } else if (renewalOption === "6") {
      // 10% discount for 6 months
      return `$${(basePrice * 6 * 0.9).toFixed(2)}`
    } else if (renewalOption === "12") {
      // 15% discount for 12 months
      return `$${(basePrice * 12 * 0.85).toFixed(2)}`
    }

    return passDetails.price
  }

  // Calculate savings based on renewal option
  const getSavings = () => {
    const basePrice = Number.parseFloat(passDetails.price.replace("$", ""))

    if (renewalOption === "1") {
      return "$0.00"
    } else if (renewalOption === "3") {
      // 5% discount for 3 months
      return `$${(basePrice * 3 * 0.05).toFixed(2)}`
    } else if (renewalOption === "6") {
      // 10% discount for 6 months
      return `$${(basePrice * 6 * 0.1).toFixed(2)}`
    } else if (renewalOption === "12") {
      // 15% discount for 12 months
      return `$${(basePrice * 12 * 0.15).toFixed(2)}`
    }

    return "$0.00"
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-4 md:px-6">
          <Link
            href="/passes"
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to My Passes
          </Link>
        </header>
        <main className="grid gap-6 p-4 md:p-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Renew Pass</h1>
            <p className="text-gray-500">Extend your pass to continue enjoying seamless transportation</p>
          </div>

          <Card className="border-purple-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100">
                  {passDetails.icon}
                </div>
                <div>
                  <CardTitle>{passDetails.title}</CardTitle>
                  <p className="text-sm text-gray-500">Currently valid until {passDetails.currentValidUntil}</p>
                </div>
                <Badge className="ml-auto bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
              </div>
            </CardHeader>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle>Renewal Options</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={renewalOption} onValueChange={setRenewalOption} className="space-y-4">
                  <div className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="1" id="option-1" />
                    <Label htmlFor="option-1" className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">1 Month</div>
                          <div className="text-sm text-gray-500">Standard renewal</div>
                        </div>
                        <div className="font-medium">{passDetails.price}</div>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="3" id="option-3" />
                    <Label htmlFor="option-3" className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">3 Months</div>
                          <div className="text-sm text-gray-500">5% discount</div>
                        </div>
                        <div className="font-medium">{getRenewalPrice()}</div>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-3 bg-purple-50 border-purple-200">
                    <RadioGroupItem value="6" id="option-6" />
                    <Label htmlFor="option-6" className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">6 Months</div>
                          <div className="text-sm text-gray-500">10% discount</div>
                        </div>
                        <div className="font-medium">{getRenewalPrice()}</div>
                      </div>
                    </Label>
                    <Badge className="bg-purple-200 text-purple-800">Popular</Badge>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="12" id="option-12" />
                    <Label htmlFor="option-12" className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">12 Months</div>
                          <div className="text-sm text-gray-500">15% discount</div>
                        </div>
                        <div className="font-medium">{getRenewalPrice()}</div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle>Renewal Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Pass Type</div>
                  <div className="font-medium">{passDetails.title}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Current Expiration</div>
                  <div className="font-medium">{passDetails.currentValidUntil}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">New Expiration</div>
                  <div className="font-medium">{getNewExpirationDate()}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Renewal Period</div>
                  <div className="font-medium">
                    {renewalOption} {Number.parseInt(renewalOption) === 1 ? "Month" : "Months"}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Price</div>
                  <div className="font-medium">{getRenewalPrice()}</div>
                </div>
                {renewalOption !== "1" && (
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">Savings</div>
                    <div className="font-medium text-green-600">{getSavings()}</div>
                  </div>
                )}
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <InfoIcon className="h-4 w-4" />
                  <span>Your pass will be extended from the current expiration date</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <CalendarIcon className="h-4 w-4" />
                  <span>Auto-renewal will be disabled by default</span>
                </div>
              </CardContent>
              <CardFooter>
                <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-purple-500 hover:bg-purple-600">Renew Pass</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    {isSuccess ? (
                      <>
                        <DialogHeader>
                          <DialogTitle className="text-center">Renewal Successful!</DialogTitle>
                          <DialogDescription className="text-center">
                            Your pass has been renewed successfully
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-center py-6">
                          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
                            <CheckIcon className="h-8 w-8 text-green-600" />
                          </div>
                        </div>
                        <DialogFooter className="flex flex-col sm:flex-row gap-2">
                          <Link href="/passes" className="w-full sm:w-auto">
                            <Button className="w-full bg-purple-500 hover:bg-purple-600">View My Passes</Button>
                          </Link>
                          <Link href="/dashboard" className="w-full sm:w-auto">
                            <Button variant="outline" className="w-full">
                              Return to Dashboard
                            </Button>
                          </Link>
                        </DialogFooter>
                      </>
                    ) : (
                      <>
                        <DialogHeader>
                          <DialogTitle>Confirm Renewal</DialogTitle>
                          <DialogDescription>Please review your renewal details before proceeding</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-500">Pass Type</div>
                            <div className="font-medium">{passDetails.title}</div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-500">Renewal Period</div>
                            <div className="font-medium">
                              {renewalOption} {Number.parseInt(renewalOption) === 1 ? "Month" : "Months"}
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-500">New Expiration</div>
                            <div className="font-medium">{getNewExpirationDate()}</div>
                          </div>
                          <div className="flex justify-between items-center font-bold">
                            <div>Total</div>
                            <div>{getRenewalPrice()}</div>
                          </div>
                        </div>
                        <DialogFooter className="flex flex-col sm:flex-row gap-2">
                          <Button
                            onClick={handleRenew}
                            className="w-full bg-purple-500 hover:bg-purple-600"
                            disabled={isProcessing}
                          >
                            {isProcessing ? "Processing..." : "Confirm Renewal"}
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => setShowConfirmation(false)}
                            className="w-full"
                            disabled={isProcessing}
                          >
                            Cancel
                          </Button>
                        </DialogFooter>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>
        </main>
        <DashboardFooter />
      </div>
    </div>
  )
}
