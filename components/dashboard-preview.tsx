"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  TrainIcon,
  BusIcon,
  CarIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  AlertCircleIcon,
  WifiIcon,
} from "lucide-react"

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("train")

  return (
    <div className="border rounded-xl overflow-hidden shadow-lg bg-white">
      <div className="p-4 border-b bg-purple-50">
        <h3 className="text-lg font-medium">Transportation Dashboard</h3>
      </div>
      <Tabs defaultValue="train" className="w-full" onValueChange={setActiveTab}>
        <div className="border-b px-4">
          <TabsList className="bg-transparent h-12">
            <TabsTrigger
              value="train"
              className="data-[state=active]:border-b-2 data-[state=active]:border-purple-500 rounded-none"
            >
              <TrainIcon className="mr-2 h-4 w-4" />
              Train
            </TabsTrigger>
            <TabsTrigger
              value="bus"
              className="data-[state=active]:border-b-2 data-[state=active]:border-purple-500 rounded-none"
            >
              <BusIcon className="mr-2 h-4 w-4" />
              Bus
            </TabsTrigger>
            <TabsTrigger
              value="rental"
              className="data-[state=active]:border-b-2 data-[state=active]:border-purple-500 rounded-none"
            >
              <CarIcon className="mr-2 h-4 w-4" />
              Rental
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="train" className="p-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Upcoming Trip</CardTitle>
                <CardDescription>Central Station → North Terminal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-sm">Today</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-sm">Departs 14:30</span>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">On Time</Badge>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Platform</span>
                    <span className="font-medium">3A</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-gray-500">Train Number</span>
                    <span className="font-medium">EX-2453</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Pass Status</CardTitle>
                <CardDescription>Monthly Unlimited</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full rounded-full" style={{ width: "65%" }}></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Valid Until</span>
                    <span className="font-medium">June 30, 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Trips Taken</span>
                    <span className="font-medium">23 / Unlimited</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Savings</span>
                    <span className="font-medium text-green-600">$45.75</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-500 hover:bg-purple-600">Renew Pass</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Service Alerts</CardTitle>
                <CardDescription>Your regular routes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
                    <AlertCircleIcon className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm">Minor Delays</h4>
                      <p className="text-xs text-gray-500">
                        East Line experiencing 10-15 minute delays due to maintenance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Last Updated</span>
                    <span className="font-medium">10 minutes ago</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Alerts
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-6">
            <h3 className="font-medium mb-4">Recommended Routes</h3>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100">
                      <TrainIcon className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Central → {i === 1 ? "Westpark" : i === 2 ? "Eastside" : "Downtown"}
                      </h4>
                      <p className="text-sm text-gray-500">
                        Departs in {i * 15} minutes • Platform {i + 1}
                      </p>
                    </div>
                  </div>
                  <Badge className={i === 1 ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                    {i === 1 ? "Recommended" : "Alternative"}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="bus" className="p-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Upcoming Trip</CardTitle>
                <CardDescription>Route 42 → Downtown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-sm">Today</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-sm">Departs 15:45</span>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">5 min delay</Badge>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Stop</span>
                    <span className="font-medium">Main St & 5th Ave</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-gray-500">Bus Number</span>
                    <span className="font-medium">B-4217</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Pass Status</CardTitle>
                <CardDescription>Weekly Unlimited</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full rounded-full" style={{ width: "30%" }}></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Valid Until</span>
                    <span className="font-medium">May 26, 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Trips Taken</span>
                    <span className="font-medium">8 / Unlimited</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Savings</span>
                    <span className="font-medium text-green-600">$12.50</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-500 hover:bg-purple-600">Renew Pass</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Nearby Stops</CardTitle>
                <CardDescription>Within 500m of your location</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-2 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100">
                          <MapPinIcon className="h-4 w-4 text-purple-500" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">
                            {i === 1 ? "Main St & 3rd" : i === 2 ? "Central Ave" : "Park Blvd"}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {i * 100}m • Routes {i * 10}, {i * 10 + 5}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-medium">{i}min</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Map
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="rental" className="p-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Available Rentals</CardTitle>
                <CardDescription>Near Central Station</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100">
                          <CarIcon className="h-5 w-5 text-purple-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">{i === 1 ? "Economy" : i === 2 ? "Standard" : "Premium"}</h4>
                          <p className="text-sm text-gray-500">
                            {i === 1 ? "$25" : i === 2 ? "$35" : "$55"}/hour • {i * 2} available
                          </p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant={i === 1 ? "default" : "outline"}
                        className={i === 1 ? "bg-purple-500 hover:bg-purple-600" : ""}
                      >
                        Book
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Options
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Rental History</CardTitle>
                <CardDescription>Your recent rentals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Economy Car</h4>
                      <Badge className="bg-gray-100 text-gray-800">Completed</Badge>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">May 10, 2025 • 2 hours</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Total Cost</span>
                      <span className="font-medium">$50.00</span>
                    </div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Standard SUV</h4>
                      <Badge className="bg-gray-100 text-gray-800">Completed</Badge>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">April 28, 2025 • 4 hours</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Total Cost</span>
                      <span className="font-medium">$140.00</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All History
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Membership Benefits</CardTitle>
                <CardDescription>Bi-pass Gold Member</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 mt-0.5">
                      <CarIcon className="h-4 w-4 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">15% Off All Rentals</h4>
                      <p className="text-xs text-gray-500">Automatic discount applied at checkout</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 mt-0.5">
                      <WifiIcon className="h-4 w-4 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Global WiFi Access</h4>
                      <p className="text-xs text-gray-500">Connect at any bi-pass location</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 mt-0.5">
                      <ClockIcon className="h-4 w-4 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Priority Booking</h4>
                      <p className="text-xs text-gray-500">Reserve vehicles 24 hours in advance</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-500 hover:bg-purple-600">Upgrade Membership</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
