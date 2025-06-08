"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeftIcon, TrainIcon, BusIcon, CarIcon, CheckIcon, InfoIcon } from "lucide-react"
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

export default function BuyPassPage() {
  const [selectedPassType, setSelectedPassType] = useState<string | null>(null)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handlePurchase = () => {
    setIsProcessing(true)
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
    }, 2000)
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
            <h1 className="text-2xl font-bold tracking-tight">Buy New Pass</h1>
            <p className="text-gray-500">Select the type of pass you need for your transportation</p>
          </div>

          <Tabs defaultValue="train" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger
                value="train"
                className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-900"
              >
                <TrainIcon className="mr-2 h-4 w-4" />
                Train Passes
              </TabsTrigger>
              <TabsTrigger value="bus" className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-900">
                <BusIcon className="mr-2 h-4 w-4" />
                Bus Passes
              </TabsTrigger>
              <TabsTrigger
                value="rental"
                className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-900"
              >
                <CarIcon className="mr-2 h-4 w-4" />
                Rental Credits
              </TabsTrigger>
            </TabsList>

            <TabsContent value="train" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    id: "train-single",
                    title: "Single Trip",
                    price: "$2.99",
                    description: "Valid for one train journey",
                    features: [
                      "Valid for 24 hours from activation",
                      "One-way trip on any train route",
                      "Automatic delay reimbursements",
                    ],
                  },
                  {
                    id: "train-day",
                    title: "Day Pass",
                    price: "$9.99",
                    description: "Unlimited train rides for one day",
                    features: [
                      "Unlimited rides for 24 hours",
                      "Access to all train routes",
                      "15% discount on connecting bus routes",
                    ],
                  },
                  {
                    id: "train-weekly",
                    title: "Weekly Pass",
                    price: "$39.99",
                    description: "Unlimited train rides for one week",
                    features: [
                      "Unlimited rides for 7 days",
                      "Access to all train routes",
                      "Priority boarding at stations",
                    ],
                    popular: true,
                  },
                  {
                    id: "train-monthly",
                    title: "Monthly Pass",
                    price: "$119.99",
                    description: "Unlimited train rides for one month",
                    features: [
                      "Unlimited rides for 30 days",
                      "Access to all train routes",
                      "Priority boarding",
                      "Access to premium waiting areas",
                    ],
                  },
                  {
                    id: "train-weekend",
                    title: "Weekend Pass",
                    price: "$19.99",
                    description: "Unlimited train rides for one weekend",
                    features: [
                      "Valid Friday 6pm to Sunday midnight",
                      "Unlimited rides on all routes",
                      "10% discount on car rentals",
                    ],
                  },
                ].map((pass) => (
                  <Card
                    key={pass.id}
                    className={`border-purple-200 ${selectedPassType === pass.id ? "ring-2 ring-purple-500" : ""}`}
                  >
                    <CardHeader className="pb-2 relative">
                      {pass.popular && (
                        <div className="absolute -top-3 -right-3">
                          <Badge className="bg-purple-500 text-white hover:bg-purple-600">Popular</Badge>
                        </div>
                      )}
                      <CardTitle className="text-lg">{pass.title}</CardTitle>
                      <CardDescription>{pass.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-4">{pass.price}</div>
                      <ul className="space-y-2">
                        {pass.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckIcon className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <RadioGroup value={selectedPassType || ""} onValueChange={setSelectedPassType} className="w-full">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value={pass.id} id={pass.id} />
                          <Label htmlFor={pass.id} className="flex-1 cursor-pointer">
                            Select {pass.title}
                          </Label>
                        </div>
                      </RadioGroup>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bus" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    id: "bus-single",
                    title: "Single Trip",
                    price: "$1.99",
                    description: "Valid for one bus journey",
                    features: [
                      "Valid for 24 hours from activation",
                      "One-way trip on any bus route",
                      "Automatic delay reimbursements",
                    ],
                  },
                  {
                    id: "bus-day",
                    title: "Day Pass",
                    price: "$7.99",
                    description: "Unlimited bus rides for one day",
                    features: [
                      "Unlimited rides for 24 hours",
                      "Access to all bus routes",
                      "Real-time bus tracking notifications",
                    ],
                    popular: true,
                  },
                  {
                    id: "bus-weekly",
                    title: "Weekly Pass",
                    price: "$29.99",
                    description: "Unlimited bus rides for one week",
                    features: [
                      "Unlimited rides for 7 days",
                      "Access to all bus routes",
                      "Transfer coordination with trains",
                    ],
                  },
                  {
                    id: "bus-monthly",
                    title: "Monthly Pass",
                    price: "$89.99",
                    description: "Unlimited bus rides for one month",
                    features: [
                      "Unlimited rides for 30 days",
                      "Access to all bus routes",
                      "Priority boarding",
                      "Seat reservation on select routes",
                    ],
                  },
                ].map((pass) => (
                  <Card
                    key={pass.id}
                    className={`border-purple-200 ${selectedPassType === pass.id ? "ring-2 ring-purple-500" : ""}`}
                  >
                    <CardHeader className="pb-2 relative">
                      {pass.popular && (
                        <div className="absolute -top-3 -right-3">
                          <Badge className="bg-purple-500 text-white hover:bg-purple-600">Popular</Badge>
                        </div>
                      )}
                      <CardTitle className="text-lg">{pass.title}</CardTitle>
                      <CardDescription>{pass.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-4">{pass.price}</div>
                      <ul className="space-y-2">
                        {pass.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckIcon className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <RadioGroup value={selectedPassType || ""} onValueChange={setSelectedPassType} className="w-full">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value={pass.id} id={pass.id} />
                          <Label htmlFor={pass.id} className="flex-1 cursor-pointer">
                            Select {pass.title}
                          </Label>
                        </div>
                      </RadioGroup>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="rental" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    id: "rental-credits-5",
                    title: "5 Rental Credits",
                    price: "$49.99",
                    description: "5 credits for car rentals",
                    features: [
                      "Each credit = 1 hour of rental time",
                      "Valid for 90 days from purchase",
                      "Keyless entry with your digital bi-pass",
                    ],
                  },
                  {
                    id: "rental-credits-10",
                    title: "10 Rental Credits",
                    price: "$89.99",
                    description: "10 credits for car rentals",
                    features: [
                      "Each credit = 1 hour of rental time",
                      "Valid for 90 days from purchase",
                      "Keyless entry with your digital bi-pass",
                      "10% discount on additional time",
                    ],
                    popular: true,
                  },
                  {
                    id: "rental-credits-20",
                    title: "20 Rental Credits",
                    price: "$159.99",
                    description: "20 credits for car rentals",
                    features: [
                      "Each credit = 1 hour of rental time",
                      "Valid for 120 days from purchase",
                      "Keyless entry with your digital bi-pass",
                      "15% discount on additional time",
                      "Premium vehicle options",
                    ],
                  },
                ].map((pass) => (
                  <Card
                    key={pass.id}
                    className={`border-purple-200 ${selectedPassType === pass.id ? "ring-2 ring-purple-500" : ""}`}
                  >
                    <CardHeader className="pb-2 relative">
                      {pass.popular && (
                        <div className="absolute -top-3 -right-3">
                          <Badge className="bg-purple-500 text-white hover:bg-purple-600">Popular</Badge>
                        </div>
                      )}
                      <CardTitle className="text-lg">{pass.title}</CardTitle>
                      <CardDescription>{pass.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-4">{pass.price}</div>
                      <ul className="space-y-2">
                        {pass.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckIcon className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <RadioGroup value={selectedPassType || ""} onValueChange={setSelectedPassType} className="w-full">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value={pass.id} id={pass.id} />
                          <Label htmlFor={pass.id} className="flex-1 cursor-pointer">
                            Select {pass.title}
                          </Label>
                        </div>
                      </RadioGroup>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex flex-col md:flex-row gap-4 items-start">
            <Card className="w-full md:w-2/3 border-purple-200">
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Choose how you want to pay for your pass</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="wallet" className="space-y-4">
                  <div className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="wallet" id="wallet" />
                    <Label htmlFor="wallet" className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4 text-purple-500"
                            >
                              <rect x="2" y="5" width="20" height="14" rx="2" />
                              <line x1="2" y1="10" x2="22" y2="10" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium">Solana Wallet</div>
                            <div className="text-sm text-gray-500">Pay with SOL from your connected wallet</div>
                          </div>
                        </div>
                        <Badge className="bg-purple-100 text-purple-800">Connected</Badge>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="credit" id="credit" />
                    <Label htmlFor="credit" className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4 text-purple-500"
                            >
                              <rect x="2" y="5" width="20" height="14" rx="2" />
                              <line x1="2" y1="10" x2="22" y2="10" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium">Credit/Debit Card</div>
                            <div className="text-sm text-gray-500">Pay with your saved card ending in 4242</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">Change</div>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="usdc" id="usdc" />
                    <Label htmlFor="usdc" className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4 text-purple-500"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 6v12" />
                              <path d="M8 10h8" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium">USDC</div>
                            <div className="text-sm text-gray-500">Pay with USDC stablecoin</div>
                          </div>
                        </div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <Card className="w-full md:w-1/3 border-purple-200">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedPassType ? (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">Selected Pass</div>
                      <div className="font-medium">
                        {selectedPassType.includes("train")
                          ? selectedPassType.includes("single")
                            ? "Single Train Trip"
                            : selectedPassType.includes("day")
                              ? "Train Day Pass"
                              : selectedPassType.includes("weekly")
                                ? "Train Weekly Pass"
                                : selectedPassType.includes("monthly")
                                  ? "Train Monthly Pass"
                                  : "Train Weekend Pass"
                          : selectedPassType.includes("bus")
                            ? selectedPassType.includes("single")
                              ? "Single Bus Trip"
                              : selectedPassType.includes("day")
                                ? "Bus Day Pass"
                                : selectedPassType.includes("weekly")
                                  ? "Bus Weekly Pass"
                                  : "Bus Monthly Pass"
                            : selectedPassType.includes("5")
                              ? "5 Rental Credits"
                              : selectedPassType.includes("10")
                                ? "10 Rental Credits"
                                : "20 Rental Credits"}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">Price</div>
                      <div className="font-medium">
                        {selectedPassType.includes("train")
                          ? selectedPassType.includes("single")
                            ? "$2.99"
                            : selectedPassType.includes("day")
                              ? "$9.99"
                              : selectedPassType.includes("weekly")
                                ? "$39.99"
                                : selectedPassType.includes("monthly")
                                  ? "$119.99"
                                  : "$19.99"
                          : selectedPassType.includes("bus")
                            ? selectedPassType.includes("single")
                              ? "$1.99"
                              : selectedPassType.includes("day")
                                ? "$7.99"
                                : selectedPassType.includes("weekly")
                                  ? "$29.99"
                                  : "$89.99"
                            : selectedPassType.includes("5")
                              ? "$49.99"
                              : selectedPassType.includes("10")
                                ? "$89.99"
                                : "$159.99"}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">DeFi Yield Estimate</div>
                      <div className="font-medium text-green-600">
                        {selectedPassType.includes("train")
                          ? selectedPassType.includes("single")
                            ? "+$0.05"
                            : selectedPassType.includes("day")
                              ? "+$0.15"
                              : selectedPassType.includes("weekly")
                                ? "+$1.20"
                                : selectedPassType.includes("monthly")
                                  ? "+$5.40"
                                  : "+$0.60"
                          : selectedPassType.includes("bus")
                            ? selectedPassType.includes("single")
                              ? "+$0.03"
                              : selectedPassType.includes("day")
                                ? "+$0.12"
                                : selectedPassType.includes("weekly")
                                  ? "+$0.90"
                                  : "+$4.05"
                            : selectedPassType.includes("5")
                              ? "+$1.50"
                              : selectedPassType.includes("10")
                                ? "+$2.70"
                                : "+$4.80"}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <InfoIcon className="h-4 w-4" />
                      <span>Estimated yield based on 5% APY</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center font-bold">
                        <div>Total</div>
                        <div>
                          {selectedPassType.includes("train")
                            ? selectedPassType.includes("single")
                              ? "$2.99"
                              : selectedPassType.includes("day")
                                ? "$9.99"
                                : selectedPassType.includes("weekly")
                                  ? "$39.99"
                                  : selectedPassType.includes("monthly")
                                    ? "$119.99"
                                    : "$19.99"
                            : selectedPassType.includes("bus")
                              ? selectedPassType.includes("single")
                                ? "$1.99"
                                : selectedPassType.includes("day")
                                  ? "$7.99"
                                  : selectedPassType.includes("weekly")
                                    ? "$29.99"
                                    : "$89.99"
                              : selectedPassType.includes("5")
                                ? "$49.99"
                                : selectedPassType.includes("10")
                                  ? "$89.99"
                                  : "$159.99"}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>Select a pass to see the order summary</p>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-purple-500 hover:bg-purple-600" disabled={!selectedPassType}>
                      Proceed to Checkout
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    {isSuccess ? (
                      <>
                        <DialogHeader>
                          <DialogTitle className="text-center">Purchase Successful!</DialogTitle>
                          <DialogDescription className="text-center">
                            Your pass has been added to your account
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
                          <DialogTitle>Confirm Purchase</DialogTitle>
                          <DialogDescription>Please review your order before completing the purchase</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-500">Selected Pass</div>
                            <div className="font-medium">
                              {selectedPassType?.includes("train")
                                ? selectedPassType.includes("single")
                                  ? "Single Train Trip"
                                  : selectedPassType.includes("day")
                                    ? "Train Day Pass"
                                    : selectedPassType.includes("weekly")
                                      ? "Train Weekly Pass"
                                      : selectedPassType.includes("monthly")
                                        ? "Train Monthly Pass"
                                        : "Train Weekend Pass"
                                : selectedPassType?.includes("bus")
                                  ? selectedPassType.includes("single")
                                    ? "Single Bus Trip"
                                    : selectedPassType.includes("day")
                                      ? "Bus Day Pass"
                                      : selectedPassType.includes("weekly")
                                        ? "Bus Weekly Pass"
                                        : "Bus Monthly Pass"
                                  : selectedPassType?.includes("5")
                                    ? "5 Rental Credits"
                                    : selectedPassType?.includes("10")
                                      ? "10 Rental Credits"
                                      : "20 Rental Credits"}
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-500">Payment Method</div>
                            <div className="font-medium">Solana Wallet</div>
                          </div>
                          <div className="flex justify-between items-center font-bold">
                            <div>Total</div>
                            <div>
                              {selectedPassType?.includes("train")
                                ? selectedPassType.includes("single")
                                  ? "$2.99"
                                  : selectedPassType.includes("day")
                                    ? "$9.99"
                                    : selectedPassType.includes("weekly")
                                      ? "$39.99"
                                      : selectedPassType.includes("monthly")
                                        ? "$119.99"
                                        : "$19.99"
                                : selectedPassType?.includes("bus")
                                  ? selectedPassType.includes("single")
                                    ? "$1.99"
                                    : selectedPassType.includes("day")
                                      ? "$7.99"
                                      : selectedPassType.includes("weekly")
                                        ? "$29.99"
                                        : "$89.99"
                                  : selectedPassType?.includes("5")
                                    ? "$49.99"
                                    : selectedPassType?.includes("10")
                                      ? "$89.99"
                                      : "$159.99"}
                            </div>
                          </div>
                        </div>
                        <DialogFooter className="flex flex-col sm:flex-row gap-2">
                          <Button
                            onClick={handlePurchase}
                            className="w-full bg-purple-500 hover:bg-purple-600"
                            disabled={isProcessing}
                          >
                            {isProcessing ? "Processing..." : "Complete Purchase"}
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
