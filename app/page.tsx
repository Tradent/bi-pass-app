import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrainIcon, BusIcon, CarIcon, WifiIcon, ArrowRightIcon, CalendarIcon, ClockIcon, MapIcon } from "lucide-react"
import { DashboardPreview } from "@/components/dashboard-preview"
import { HeroSection } from "@/components/hero-section"
import { FeatureCard } from "@/components/feature-card"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />

        <section id="features" className="py-12 md:py-24 bg-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Features</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simplify Your Transportation
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Bi-pass transforms how you access and manage public transportation with blockchain technology.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
              <FeatureCard
                icon={<TrainIcon className="h-10 w-10 text-purple-500" />}
                title="Train Passes"
                description="Instantly updated on the dapp with access to arrival times and recommendations along your trip."
              />
              <FeatureCard
                icon={<BusIcon className="h-10 w-10 text-purple-500" />}
                title="Bus Options"
                description="Included in the travel log options for your preferred method of travel."
              />
              <FeatureCard
                icon={<CarIcon className="h-10 w-10 text-purple-500" />}
                title="Rental Vehicles"
                description="Schedule a rental vehicle or car rides around town with your bi-pass."
              />
              <FeatureCard
                icon={<WifiIcon className="h-10 w-10 text-purple-500" />}
                title="Member Benefits"
                description="Enjoy public services provided to bi-pass members, including Global WiFi."
              />
            </div>
          </div>
        </section>

        <section id="dashboard-preview" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Manage Your Transportation
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our intuitive dashboard makes it easy to purchase, manage, and schedule your transportation.
                </p>
              </div>
            </div>
            <DashboardPreview />
          </div>
        </section>

        <section id="how-it-works" className="py-12 md:py-24 bg-gradient-to-b from-white to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">How It Works</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powered by Solana</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We use DeFi protocols to redistribute your regular transportation costs and reimburse your travel
                  expenses.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <Card className="border-purple-200">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-4">
                    <CalendarIcon className="h-6 w-6 text-purple-500" />
                  </div>
                  <CardTitle>Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Plan your trips in advance and receive reminders for upcoming journeys.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-purple-200">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-4">
                    <ClockIcon className="h-6 w-6 text-purple-500" />
                  </div>
                  <CardTitle>Real-time Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Get instant notifications about delays, changes, and alternative routes.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-purple-200">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-4">
                    <MapIcon className="h-6 w-6 text-purple-500" />
                  </div>
                  <CardTitle>Smart Routing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    AI-powered recommendations for the fastest and most cost-effective routes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="cta" className="py-12 md:py-24">
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
                <Link href="/features">
                  <Button variant="outline">Learn More</Button>
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
