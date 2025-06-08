import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  TrainIcon,
  BusIcon,
  CarIcon,
  WifiIcon,
  ArrowRightIcon,
  ShieldIcon,
  CreditCardIcon,
  SmartphoneIcon,
} from "lucide-react"
import { FeatureCard } from "@/components/feature-card"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Features | Bi-pass",
  description: "Discover all the features that make Bi-pass the future of public transportation",
}

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              bi-pass
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/features" className="text-sm font-medium text-purple-600 underline underline-offset-4">
              Features
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="/dashboard">
              <Button variant="outline" className="hidden md:flex">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-purple-500 hover:bg-purple-600">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 bg-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Features</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Transforming Your Transportation Experience
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how bi-pass is revolutionizing public transportation with blockchain technology and
                  user-centered design.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                  <Badge className="mb-2 bg-purple-100 text-purple-800 hover:bg-purple-100">Train Passes</Badge>
                  <h2 className="text-3xl font-bold mb-4">Seamless Train Travel</h2>
                  <p className="text-gray-500 mb-6">
                    Train passes are instantly updated on the dapp with access to arrival times and recommendations
                    along your trip. Never miss a connection or worry about ticket validation again.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Real-time pass updates and validation",
                      "Instant access to arrival and departure times",
                      "Smart recommendations for connections",
                      "Digital ticket storage with offline access",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-purple-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-purple-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TrainIcon className="h-24 w-24 text-purple-300" />
                  </div>
                  <img
                    src="/modern-train-station.png"
                    alt="Train station with digital displays"
                    className="object-cover w-full h-full mix-blend-overlay"
                  />
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 items-center md:flex-row-reverse">
                <div className="md:order-2">
                  <Badge className="mb-2 bg-purple-100 text-purple-800 hover:bg-purple-100">Bus Options</Badge>
                  <h2 className="text-3xl font-bold mb-4">Integrated Bus Travel</h2>
                  <p className="text-gray-500 mb-6">
                    The bus is included in the travel log options for your preferred method of travel. Track buses in
                    real-time and get notifications when your bus is approaching.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Real-time bus tracking and ETAs",
                      "Route optimization based on traffic conditions",
                      "Seat reservation on participating routes",
                      "Transfer coordination with other transportation methods",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-purple-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-purple-100 md:order-1">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BusIcon className="h-24 w-24 text-purple-300" />
                  </div>
                  <img
                    src="/modern-bus-stop.png"
                    alt="Modern bus stop with digital display"
                    className="object-cover w-full h-full mix-blend-overlay"
                  />
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                  <Badge className="mb-2 bg-purple-100 text-purple-800 hover:bg-purple-100">Rental Vehicles</Badge>
                  <h2 className="text-3xl font-bold mb-4">On-Demand Vehicle Rentals</h2>
                  <p className="text-gray-500 mb-6">
                    Use your bi-pass to schedule a rental vehicle or car rides around town. Seamlessly transition
                    between public transit and personal transportation.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "One-click vehicle reservations",
                      "Keyless entry with your digital bi-pass",
                      "Flexible rental periods from 1 hour to multiple days",
                      "Integration with ride-sharing services",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-purple-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-purple-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CarIcon className="h-24 w-24 text-purple-300" />
                  </div>
                  <img
                    src="/urban-car-sharing.png"
                    alt="Car sharing and rental service"
                    className="object-cover w-full h-full mix-blend-overlay"
                  />
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 items-center md:flex-row-reverse">
                <div className="md:order-2">
                  <Badge className="mb-2 bg-purple-100 text-purple-800 hover:bg-purple-100">Member Benefits</Badge>
                  <h2 className="text-3xl font-bold mb-4">Exclusive Member Services</h2>
                  <p className="text-gray-500 mb-6">
                    Enjoy the public services provided to bi-pass members, including Global WiFi, priority boarding, and
                    special discounts with partner businesses.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Global WiFi access at all bi-pass locations",
                      "Priority boarding on trains and buses",
                      "Exclusive discounts with retail partners",
                      "Access to premium waiting lounges",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-purple-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-purple-100 md:order-1">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <WifiIcon className="h-24 w-24 text-purple-300" />
                  </div>
                  <img
                    src="/placeholder-79uha.png"
                    alt="People using WiFi in transportation hub"
                    className="object-cover w-full h-full mix-blend-overlay"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Additional Features</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Bi-pass offers a comprehensive suite of features designed to make public transportation more
                  accessible, efficient, and enjoyable.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<ShieldIcon className="h-10 w-10 text-purple-500" />}
                title="Secure Blockchain Technology"
                description="All transactions and passes are secured with Solana blockchain technology for maximum security and transparency."
              />
              <FeatureCard
                icon={<CreditCardIcon className="h-10 w-10 text-purple-500" />}
                title="Flexible Payment Options"
                description="Pay with traditional methods or cryptocurrency. Automatic reimbursements through DeFi protocols."
              />
              <FeatureCard
                icon={<SmartphoneIcon className="h-10 w-10 text-purple-500" />}
                title="Mobile Accessibility"
                description="Access all features through our mobile app, including offline functionality for passes and tickets."
              />
            </div>
          </div>
        </section>

        <section id="cta" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Experience the Future of Transportation?
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join bi-pass today and transform your daily commute with our innovative platform.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button className="bg-purple-500 hover:bg-purple-600">
                    Get Started
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline">View Pricing</Button>
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
