"use client"

import { Button } from "@/components/ui/button"
import { PlayIcon } from "lucide-react"
import { useDemo } from "@/lib/demo-context"

export function DemoButton() {
  const { startDemoMode } = useDemo()

  return (
    <Button variant="outline" onClick={startDemoMode} className="flex items-center gap-2">
      <PlayIcon className="h-4 w-4" />
      Try Demo
    </Button>
  )
}
