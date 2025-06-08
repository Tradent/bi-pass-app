"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrainIcon, BusIcon, CarIcon, SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for pass history
const passHistory = [
  {
    id: "train-monthly-old-1",
    type: "train",
    title: "Monthly Train Pass",
    validFrom: "April 1, 2025",
    validUntil: "April 30, 2025",
    usageCount: 42,
    usageLimit: "Unlimited",
  },
  {
    id: "bus-weekly-old-1",
    type: "bus",
    title: "Weekly Bus Pass",
    validFrom: "April 15, 2025",
    validUntil: "April 22, 2025",
    usageCount: 18,
    usageLimit: "Unlimited",
  },
  {
    id: "rental-credits-old-1",
    type: "rental",
    title: "Car Rental Credits",
    validFrom: "March 10, 2025",
    validUntil: "April 10, 2025",
    usageCount: 5,
    usageLimit: 5,
  },
  {
    id: "train-weekend-old-1",
    type: "train",
    title: "Weekend Train Pass",
    validFrom: "March 20, 2025",
    validUntil: "March 22, 2025",
    usageCount: 4,
    usageLimit: 6,
  },
  {
    id: "bus-daily-old-1",
    type: "bus",
    title: "Daily Bus Pass",
    validFrom: "March 15, 2025",
    validUntil: "March 15, 2025",
    usageCount: 3,
    usageLimit: 5,
  },
]

export function PassHistory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")

  // Filter passes based on search term and filter type
  const filteredPasses = passHistory.filter((pass) => {
    const matchesSearch = pass.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === "all" || pass.type === filterType
    return matchesSearch && matchesType
  })

  const getIcon = (type: string) => {
    switch (type) {
      case "train":
        return <TrainIcon className="h-5 w-5 text-purple-500" />
      case "bus":
        return <BusIcon className="h-5 w-5 text-purple-500" />
      case "rental":
        return <CarIcon className="h-5 w-5 text-purple-500" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search passes..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="train">Train Passes</SelectItem>
            <SelectItem value="bus">Bus Passes</SelectItem>
            <SelectItem value="rental">Rental Credits</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filteredPasses.length > 0 ? (
        <div className="space-y-4">
          {filteredPasses.map((pass) => (
            <Card key={pass.id} className="border-gray-200">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                      {getIcon(pass.type)}
                    </div>
                    <CardTitle className="text-lg">{pass.title}</CardTitle>
                  </div>
                  <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Expired</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex justify-between md:flex-col md:justify-start text-sm">
                    <span className="text-gray-500">Valid Period</span>
                    <span className="font-medium">
                      {pass.validFrom} - {pass.validUntil}
                    </span>
                  </div>
                  <div className="flex justify-between md:flex-col md:justify-start text-sm">
                    <span className="text-gray-500">Usage</span>
                    <span className="font-medium">
                      {pass.usageCount} / {pass.usageLimit}
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed p-8 text-center">
          <h3 className="text-lg font-medium mb-2">No passes found</h3>
          <p className="text-gray-500 mb-4">
            {searchTerm || filterType !== "all"
              ? "Try adjusting your search or filter criteria"
              : "You don't have any expired passes yet"}
          </p>
          {(searchTerm || filterType !== "all") && (
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setFilterType("all")
              }}
            >
              Clear Filters
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
