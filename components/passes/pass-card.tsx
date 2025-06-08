"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrainIcon, BusIcon, CarIcon, AlertCircleIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type PassType = "train" | "bus" | "rental"
type PassStatus = "active" | "upcoming" | "expired"

interface PassCardProps {
  type: PassType
  title: string
  status: PassStatus
  validUntil: string
  validFrom?: string
  usageCount: number
  usageLimit: string | number
  savings?: string
  id: string
}

export function PassCard({
  type,
  title,
  status,
  validUntil,
  validFrom,
  usageCount,
  usageLimit,
  savings,
  id,
}: PassCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  const getIcon = () => {
    switch (type) {
      case "train":
        return <TrainIcon className="h-5 w-5 text-purple-500" />
      case "bus":
        return <BusIcon className="h-5 w-5 text-purple-500" />
      case "rental":
        return <CarIcon className="h-5 w-5 text-purple-500" />
    }
  }

  const getStatusBadge = () => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
      case "upcoming":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Upcoming</Badge>
      case "expired":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Expired</Badge>
    }
  }

  const getProgressPercentage = () => {
    if (typeof usageLimit === "string" && usageLimit.toLowerCase() === "unlimited") {
      // For unlimited passes, show progress based on time remaining
      const now = new Date()
      const end = new Date(validUntil)
      const start = validFrom ? new Date(validFrom) : new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000) // Assume 30 days if no start date

      const totalDuration = end.getTime() - start.getTime()
      const elapsed = now.getTime() - start.getTime()

      const percentage = Math.max(0, Math.min(100, (elapsed / totalDuration) * 100))
      return 100 - percentage // Invert to show time remaining
    } else {
      // For limited passes, show usage progress
      const limit = typeof usageLimit === "string" ? Number.parseInt(usageLimit) : usageLimit
      return Math.min(100, (usageCount / limit) * 100)
    }
  }

  const isRenewable = status === "active" && getProgressPercentage() < 30

  return (
    <Card className="border-purple-200">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100">{getIcon()}</div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          {getStatusBadge()}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="bg-purple-500 h-full rounded-full" style={{ width: `${getProgressPercentage()}%` }}></div>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Valid Until</span>
            <span className="font-medium">{validUntil}</span>
          </div>
          {validFrom && status === "upcoming" && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Valid From</span>
              <span className="font-medium">{validFrom}</span>
            </div>
          )}
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Trips Taken</span>
            <span className="font-medium">
              {usageCount} / {usageLimit}
            </span>
          </div>
          {savings && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Savings</span>
              <span className="font-medium text-green-600">{savings}</span>
            </div>
          )}
          {isRenewable && (
            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
              <AlertCircleIcon className="h-5 w-5 text-amber-500 mt-0.5" />
              <div>
                <h4 className="font-medium text-sm">Expiring Soon</h4>
                <p className="text-xs text-gray-500">
                  Your pass will expire soon. Consider renewing to avoid interruption.
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Dialog open={showDetails} onOpenChange={setShowDetails}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-100">{getIcon()}</div>
                {title}
              </DialogTitle>
              <DialogDescription>Pass details and usage information</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Status</h4>
                  <p>{getStatusBadge()}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Pass ID</h4>
                  <p className="text-sm font-mono">{id}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Valid Until</h4>
                  <p>{validUntil}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Usage</h4>
                  <p>
                    {usageCount} / {usageLimit}
                  </p>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="text-sm font-medium mb-2">Pass Benefits</h4>
                <ul className="space-y-2 text-sm">
                  {type === "train" && (
                    <>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                        <span>Unlimited train rides during validity period</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                        <span>Priority boarding at stations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                        <span>Access to premium waiting areas</span>
                      </li>
                    </>
                  )}
                  {type === "bus" && (
                    <>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                        <span>Unlimited bus rides during validity period</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                        <span>Real-time bus tracking notifications</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                        <span>Transfer coordination with other transportation</span>
                      </li>
                    </>
                  )}
                  {type === "rental" && (
                    <>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                        <span>Vehicle rentals up to usage limit</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                        <span>Keyless entry with your digital bi-pass</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                        <span>15% discount on additional rental time</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            <DialogFooter className="flex flex-col sm:flex-row gap-2">
              {status === "active" && (
                <Link href={`/passes/renew/${id}`} className="w-full sm:w-auto">
                  <Button className="w-full bg-purple-500 hover:bg-purple-600">Renew Pass</Button>
                </Link>
              )}
              {status === "upcoming" && (
                <Button variant="outline" className="w-full sm:w-auto">
                  Modify Pass
                </Button>
              )}
              <Button variant="outline" onClick={() => setShowDetails(false)} className="w-full sm:w-auto">
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {status === "active" && (
          <Link href={`/passes/renew/${id}`} className="w-full">
            <Button
              className={`w-full ${isRenewable ? "bg-purple-500 hover:bg-purple-600" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
            >
              Renew Pass
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}
