import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckIcon, ArrowRightIcon, HelpCircleIcon } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Pricing | Bi-pass",
  description: "Flexible pricing plans for all your transportation needs",
}

export default function PricingPage() {
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
            <Link href="/features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-purple-600 underline underline-offset-4">
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
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Pricing</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple, Transparent Pricing
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that fits your transportation needs with no hidden fees or complicated pricing
                  structures.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {/* Basic Plan */}
              <Card className="flex flex-col border-purple-200">
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>For occasional travelers</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">$9.99</span>
                    <span className="text-sm text-gray-500">/month</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Perfect for those who use public transportation a few times a week.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {[
                      "10 single-trip passes per month",
                      "Basic DeFi yield (2% APY)",
                      "Standard reimbursements for delays",
                      "Mobile app access",
                      "Email support",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-500 hover:bg-purple-600">Get Started</Button>
                </CardFooter>
              </Card>

              {/* Premium Plan */}
              <Card className="flex flex-col relative border-purple-400 shadow-lg">
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <Badge className="bg-purple-500 text-white hover:bg-purple-600">Most Popular</Badge>
                </div>
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>For regular commuters</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">$29.99</span>
                    <span className="text-sm text-gray-500">/month</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Ideal for daily commuters who want to maximize savings and benefits.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {[
                      "Unlimited trips on trains and buses",
                      "Enhanced DeFi yield (5% APY)",
                      "Priority reimbursements for delays",
                      "2 free car rentals per month (2 hours each)",
                      "Global WiFi access",
                      "24/7 priority support",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-500 hover:bg-purple-600">Get Started</Button>
                </CardFooter>
              </Card>

              {/* Enterprise Plan */}
              <Card className="flex flex-col border-purple-200">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For businesses and teams</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">Custom</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Tailored solutions for businesses looking to provide transportation benefits to employees.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {[
                      "Custom pass allocation for employees",
                      "Team management dashboard",
                      "Expense tracking and reporting",
                      "Corporate DeFi yield programs",
                      "Dedicated account manager",
                      "API access for integration",
                      "Custom branding options",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our pricing and plans.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
              {[
                {
                  question: "Can I cancel my subscription at any time?",
                  answer:
                    "Yes, you can cancel your subscription at any time. Your benefits will continue until the end of your current billing period.",
                },
                {
                  question: "How do the DeFi yields work?",
                  answer:
                    "When you purchase a pass, a portion of your funds are allocated to DeFi protocols that generate yield. This yield is used to offset your transportation costs and provide reimbursements.",
                },
                {
                  question: "Are there any hidden fees?",
                  answer:
                    "No, the price you see is the price you pay. There are no hidden fees or additional charges for using our service.",
                },
                {
                  question: "Can I upgrade or downgrade my plan?",
                  answer:
                    "Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle.",
                },
                {
                  question: "Do you offer discounts for students or seniors?",
                  answer:
                    "Yes, we offer special discounts for students, seniors, and other eligible groups. Contact our support team for more information.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept all major credit cards, debit cards, and various cryptocurrencies including SOL, USDC, and more.",
                },
              ].map((faq, i) => (
                <div key={i} className="rounded-lg border bg-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-900">
                      <HelpCircleIcon className="h-4 w-4" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold">{faq.question}</h3>
                      <p className="text-sm text-gray-500">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 md:gap-12 lg:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Compare Plans</h2>
                <p className="text-gray-500">
                  Not sure which plan is right for you? Compare our plans side by side to find the perfect fit for your
                  transportation needs.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-purple-500 hover:bg-purple-600">
                    Get Started
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Contact Sales</Button>
                </div>
              </div>
              <div className="rounded-lg border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-purple-50">
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Feature</th>
                        <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">Basic</th>
                        <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">Premium</th>
                        <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">Enterprise</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        { feature: "Monthly Price", basic: "$9.99", premium: "$29.99", enterprise: "Custom" },
                        { feature: "Trip Passes", basic: "10/month", premium: "Unlimited", enterprise: "Custom" },
                        { feature: "DeFi Yield", basic: "2% APY", premium: "5% APY", enterprise: "Custom" },
                        { feature: "Car Rentals", basic: "—", premium: "2/month", enterprise: "Custom" },
                        { feature: "Global WiFi", basic: "—", premium: "✓", enterprise: "✓" },
                        {
                          feature: "Support",
                          basic: "Email",
                          premium: "24/7 Priority",
                          enterprise: "Dedicated Manager",
                        },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-4 py-3 text-sm font-medium">{row.feature}</td>
                          <td className="px-4 py-3 text-center text-sm">{row.basic}</td>
                          <td className="px-4 py-3 text-center text-sm">{row.premium}</td>
                          <td className="px-4 py-3 text-center text-sm">{row.enterprise}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="py-12 md:py-24 bg-purple-50">
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
                <Link href="/contact">
                  <Button variant="outline">Contact Us</Button>
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
