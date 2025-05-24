import Image from "next/image"
import HomeFaq from "../components/ui/home-fq"

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent } from "../components/ui/card"
import { motion } from "framer-motion"
import Link from "next/link"
import IntegrationsShowcase from "../components/ui/Home-features"
import {
  ChevronRight,
  Mail,
  Calendar,
  Video,
  Smartphone,
  FileText,
  Edit2,
  Globe,
  Users,
  Shield
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
  

      <main className="flex-1">
        {/* Hero Section - Redesigned with split layout */}
        <section className="relative bg-gradient-to-br from-blue-500 to-blue-900 text-white overflow-hidden">
          <div className="container grid md:grid-cols-2 gap-8 py-16 md:py-24 items-center">
            <div className="space-y-6 z-10">
              <div className="inline-block px-3 py-1 rounded-full bg-gray-900 text-blue-400 text-xs font-medium">
                OPEN SOURCE
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Digital Workplace{" "}
                <span className="text-black">Now Easier</span> Than Ever
              </h1>
              <p className="text-lg text-gray-300 max-w-md">
                Unlock the full potential of the open-source e-mail and
                collaboration platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-black hover:bg-white hover:text-black">
                  Get Started Free
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-black hover:bg-white/10 hover:text-white"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
             <div className="relative h-[400px] md:h-[500px] bg-white shadow-xl rounded-2xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-full max-w-[500px]"
        >
          <Image
            src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747820245/Untitled_500_x_500_px_1_b4l8vl.gif"
            alt="Digital Workplace Illustration"
            width={500}
            height={500}
            className="object-contain"
          />
        </motion.div>
      </div>
    </div>
          </div>

          {/* Abstract shapes */}
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-100/20 rounded-full filter blur-3xl -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        </section>

        {/* Features Section - Redesigned with cards */}
        {/* <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Carbonio</h2>
              <p className="text-gray-600">
                A complete collaboration platform designed for modern teams
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon={<Globe className="h-10 w-10 text-orange-500" />}
                title="Complete Set of Modern Features"
                description="Everything you need for modern collaboration, from email to video conferencing, file sharing, and team communication."
              />
              <FeatureCard
                icon={<Shield className="h-10 w-10 text-orange-500" />}
                title="Free and Open-source"
                description="100% open-source code that you can modify and adapt to your needs, with no vendor lock-in or hidden costs."
              />
              <FeatureCard
                icon={<Smartphone className="h-10 w-10 text-orange-500" />}
                title="Mobile Applications"
                description="Enjoy the convenience of accessing your collaboration tools on mobile devices with our dedicated mobile applications."
              />
              <FeatureCard
                icon={<Users className="h-10 w-10 text-orange-500" />}
                title="Easy Administration"
                description="Simple, intuitive administration interface to manage users, permissions, and system settings with minimal effort."
              />
            </div>
          </div>
        </section> */}

        <IntegrationsShowcase/>

        {/* CTA Section - Redesigned with gradient background */}
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

        {/* Platform Features - Redesigned with modern cards */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">
                A Complete Platform with All the Features You Need
              </h2>
              <p className="text-gray-600">
                Everything you need for seamless team collaboration in one place
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <PlatformFeatureCard
                icon={<Mail />}
                title="Advanced E-mail"
                description="Professional email management for business communication with advanced features and security."
                image="/placeholder.svg?height=200&width=300"
              />
              <PlatformFeatureCard
                icon={<Calendar />}
                title="Shared Calendars"
                description="Easily schedule meetings and share availability with team members for better coordination."
                image="/placeholder.svg?height=200&width=300"
              />
              <PlatformFeatureCard
                icon={<Video />}
                title="Video Chats"
                description="High-quality video conferencing with screen sharing and recording capabilities."
                image="/placeholder.svg?height=200&width=300"
              />
              <PlatformFeatureCard
                icon={<Smartphone />}
                title="Dedicated Mobile Applications"
                description="Stay connected on the go with our mobile apps for iOS and Android devices."
                image="/placeholder.svg?height=200&width=300"
              />
              <PlatformFeatureCard
                icon={<FileText />}
                title="File Management"
                description="Secure file storage and sharing with version control and access permissions."
                image="/placeholder.svg?height=200&width=300"
              />
              <PlatformFeatureCard
                icon={<Edit2 />}
                title="Collaborative Editing"
                description="Edit documents simultaneously with team members in real-time for efficient collaboration."
                image="/placeholder.svg?height=200&width=300"
              />
            </div>
          </div>
        </section>

        {/* Community Section - Redesigned with cards */}
        <section className="py-16 bg-gradient-to-br from-blue-500 to-blue-900 text-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Our commitment to the community
              </h2>
              <p className="text-gray-300">
                Join thousands of users worldwide who trust Carbonio
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/10 border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Contribute to Carbonio
                  </h3>
                  <p className="text-gray-300">
                    Help us improve the platform by contributing code, reporting
                    bugs, or suggesting new features.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-black  text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Join Our Community</h3>
                  <p className="text-gray-300">
                    Connect with other users and developers to share knowledge
                    and best practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-black  text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Enterprise Support</h3>
                  <p className="text-gray-300">
                    Get professional support and additional features with our
                    enterprise plans.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-black hover:bg-white hover:text-black">
                Get Carbonio Community Edition
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 bg-black text-white">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Join our newsletter</h2>
              <p className="mb-6">
                Stay updated with the latest features and community news
              </p>
              <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/20 border-white/20 text-white placeholder:text-white/60 flex-1"
                />
                <Button className="bg-white  text-orange-600 hover:bg-white/90">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
<HomeFaq/>
     
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}

function PlatformFeatureCard({ icon, title, description, image }) {
  return (
    <Card className="border-none shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-40 bg-gray-100 relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-orange-500">{icon}</div>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}
