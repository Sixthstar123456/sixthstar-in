import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { CheckCircle, ArrowRight, Mail, Calendar, Video, Smartphone, FileText, Edit2 } from "lucide-react"
import Faq3 from "../components/ui/community-faq"
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      

      {/* Hero Section */}
      <section className="bg-blue-600 py-20">
        <div className="container grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-4 py-1 text-sm text-blue-900">
              <span className="font-medium">Zextras</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Carbonio Community<span className="block">Edition</span>
            </h1>
            <p className="text-xl text-blue-100">
              Carbonio Community Edition is 100% open source:
unleash the full potential of transparency and interoperability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-blue-600 border-white hover:bg-blue-700 hover:text-white">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg bg-[url(https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747895849/exagon_1_ph8h4c.png)] bg-cover
           p-6 shadow-xl">
            <Image
              src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746618356/Untitled_1000_x_1000_px_7_clwqhe.png?height=400&width=500"
              alt="Digital Workplace Illustration"
              width={500}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Works seamlessly with business apps</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrate with your favorite tools to streamline your workflow and boost productivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3"></div>
              <div className="p-6">
                <Image
                  src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747832583/Untitled_500_x_500_px_6_s24zll.gif?height=300&width=500"
                  alt="App Integrations"
                  width={500}
                  height={300}
                  className="rounded-md object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Zoho Books</h3>
                  <p className="text-gray-600">
                    Manage invoices with integrated payment features or direct payment links using Zoho Books.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Zoho Commerce</h3>
                  <p className="text-gray-600">
                    Create online stores and accept e-commerce payments using Zoho Payments and payment links.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Website / Zoho Apps</h3>
                  <p className="text-gray-600">
                    Weave in Zoho payments to accept payments on any website or in any Zoho app via Checkout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Form Section */}
        <section className="py-16 bg-gradient-to-br from-blue-500 to-blue-900 text-white">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative h-[400px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full max-w-[400px]">
                        <Image
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747821091/interfaccia_carbonio_CE_lmxi8o.webp?height=400&width=400"
                          alt="Carbonio Community Edition"
                          width={400}
                          height={400}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/30 rounded-full filter blur-2xl"></div>
                  </div>
      
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">
                      Get Carbonio Community Edition
                    </h2>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="text-sm font-medium block mb-1"
                          >
                            First Name
                          </label>
                          <Input
                            id="firstName"
                            className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="text-sm font-medium block mb-1"
                          >
                            Last Name
                          </label>
                          <Input
                            id="lastName"
                            className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="text-sm font-medium block mb-1"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                          placeholder="john.doe@example.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="text-sm font-medium block mb-1"
                        >
                          Company
                        </label>
                        <Input
                          id="company"
                          className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                          placeholder="Acme Inc."
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="country"
                          className="text-sm font-medium block mb-1"
                        >
                          Country
                        </label>
                        <Input
                          id="country"
                          className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                          placeholder="United States"
                        />
                      </div>
                      <div className="pt-2">
                        <Button className="w-full bg-white text-black hover:bg-black hover:text-white">
                          Get a Quote
                        </Button>
                      </div>
                      <p className="text-xs text-white/70 text-center">
                        By submitting this form, you agree to our terms and privacy
                        policy.
                      </p>
                    </form>
                  </div>
                </div>
              </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              A Complete Platform with All the Features You Need
            </h2>
            <p className="text-lg text-gray-600">Everything you need for seamless team collaboration in one place</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="h-8 w-8 text-blue-600" />,
                title: "Advanced E-mail",
                description:
                  "Professional email management for business communication with advanced features and security",
              },
              {
                icon: <Calendar className="h-8 w-8 text-blue-600" />,
                title: "Shared Calendars",
                description:
                  "Easily schedule meetings and share availability with team members for better coordination",
              },
              {
                icon: <Video className="h-8 w-8 text-blue-600" />,
                title: "Video Chats",
                description: "High-quality video conferencing with screen sharing and recording capabilities",
              },
              {
                icon: <Smartphone className="h-8 w-8 text-blue-600" />,
                title: "Dedicated Mobile Applications",
                description: "Stay connected on the go with our mobile apps for iOS and Android devices",
              },
              {
                icon: <FileText className="h-8 w-8 text-blue-600" />,
                title: "File Management",
                description: "Secure file storage and sharing with version control and access permissions",
              },
              {
                icon: <Edit2 className="h-8 w-8 text-blue-600" />,
                title: "Collaborative Editing",
                description: "Edit documents simultaneously with team members in real-time for efficient collaboration",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-2">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our commitment to the community</h2>
            <p className="text-lg text-blue-100">Join thousands of users worldwide who trust Carbonío</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-blue-600 text-xl font-bold">
                    C
                  </div>
                ),
                title: "Contribute to Carbonío",
                description:
                  "Help us improve the platform by contributing code, reporting bugs, or suggesting new features",
              },
              {
                icon: (
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-blue-600 text-xl font-bold">
                    J
                  </div>
                ),
                title: "Join Our Community",
                description: "Connect with other users and developers to share knowledge and best practices",
              },
              {
                icon: (
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-blue-600 text-xl font-bold">
                    E
                  </div>
                ),
                title: "Enterprise Support",
                description: "Get professional support and additional features with our enterprise plans",
              },
            ].map((item, index) => (
              <div key={index} className="bg-blue-700 rounded-xl p-8 hover:bg-blue-800 transition-colors">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100 mb-6">{item.description}</p>
                <Button variant="outline" className="border-white text-black hover:bg-blue-600 hover:text-white">
                  Learn More
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Get Carbonío Community Edition
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      

      {/* Footer */}
      <Faq3/>
    </div>
  )
}
