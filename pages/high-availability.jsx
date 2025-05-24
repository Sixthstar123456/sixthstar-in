import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Shield, Clock, Database, Users, Zap, Lock, BarChart, Server } from "lucide-react"

import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Input } from "../components/ui/input"
import Faq4 from "../components/ui/high-availability-faq"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-300 to-blue-500 dark:from-blue-900/20 dark:to-blue-800/20
">
        <div className="container flex flex-col lg:flex-row items-center py-20 gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block rounded-full  bg-blue-200  px-3 py-1 text-sm text-blue-800 dark:text-purple-300">
              Enterprise Email Solution
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              High Availability
 <br />
             
            </h1>
            <p className="text-lg text-white text-muted-foreground max-w-[600px]">
              High Availability (HA) is the ability of a system to operate
continuously and error-free over a period of time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 ">
              <Button size="lg" className="gap-2 bg-black hover:bg-black">
                Connect With us <ChevronRight className="h-4 w-4" />
              </Button>
            
            </div>
            
          </div>
          <div className="flex-1 relative">
            <div className="relative h-[400px] w-full">
              <Image
                src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748000441/crb_1_ftosce.webp?height=400&width=500"
                alt="NexusMail Dashboard Preview"
                width={500}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">Comprehensive Email Management</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Everything you need for professional email operations in one powerful platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-purple-600 mb-2" />
              <CardTitle>Advanced Security</CardTitle>
              <CardDescription>Multi-layered protection against threats and vulnerabilities</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-3 w-3 text-purple-600" />
                  </div>
                  <span>AI-powered threat detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-3 w-3 text-purple-600" />
                  </div>
                  <span>End-to-end encryption</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-3 w-3 text-purple-600" />
                  </div>
                  <span>Advanced phishing protection</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="gap-1">
                Learn more <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="h-10 w-10 text-cyan-600 mb-2" />
              <CardTitle>Intelligent Backup</CardTitle>
              <CardDescription>Never lose critical communications with smart recovery options</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-3 w-3 text-cyan-600" />
                  </div>
                  <span>Continuous point-in-time backups</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-3 w-3 text-cyan-600" />
                  </div>
                  <span>Granular recovery options</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-3 w-3 text-cyan-600" />
                  </div>
                  <span>Cross-region redundancy</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="gap-1">
                Learn more <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Database className="h-10 w-10 text-pink-600 mb-2" />
              <CardTitle>Smart Storage</CardTitle>
              <CardDescription>Optimize your email storage with intelligent management</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-3 w-3 text-pink-600" />
                  </div>
                  <span>Automatic archiving policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-3 w-3 text-pink-600" />
                  </div>
                  <span>Deduplication technology</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mt-0.5">
                    <ChevronRight className="h-3 w-3 text-pink-600" />
                  </div>
                  <span>Tiered storage optimization</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="gap-1">
                Learn more <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Reliability Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-purple-950/20 dark:to-cyan-950/20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-cyan-100 dark:bg-cyan-900/30 px-3 py-1 text-sm text-cyan-700 dark:text-cyan-300">
                Enterprise Reliability
              </div>
              <h2 className="text-3xl font-bold">99.99% Uptime Guarantee</h2>
              <p className="text-muted-foreground">
                Our distributed infrastructure ensures your email services remain operational even during the most
                challenging circumstances.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                    <Server className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Geo-Distributed Infrastructure</h3>
                    <p className="text-sm text-muted-foreground">
                      Multiple data centers across regions ensure continuous service availability
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                    <Zap className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Automatic Failover</h3>
                    <p className="text-sm text-muted-foreground">
                      Seamless transition between systems during outages with zero data loss
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                    <BarChart className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Real-time Monitoring</h3>
                    <p className="text-sm text-muted-foreground">
                      24/7 system monitoring with proactive issue detection and resolution
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[400px] w-full">
                <div className="absolute right-0 bottom-0 h-[350px] w-[350px] bg-gradient-to-br from-purple-200/50 to-cyan-200/50 rounded-full blur-3xl"></div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Reliability Infrastructure"
                  width={500}
                  height={400}
                  className="object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Tabs */}
      <section className="py-20 container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">Powerful Email Features</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Explore our comprehensive suite of tools designed for modern business communication
          </p>
        </div>

        <Tabs defaultValue="composition" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-[600px] grid-cols-3">
              <TabsTrigger value="composition">Composition</TabsTrigger>
              <TabsTrigger value="organization">Organization</TabsTrigger>
              <TabsTrigger value="administration">Administration</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="composition" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Advanced Composition Tools</h3>
                <p className="text-muted-foreground">
                  Create professional emails with powerful formatting options, templates, and AI assistance.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                      <ChevronRight className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">AI-powered writing suggestions</p>
                      <p className="text-sm text-muted-foreground">Get intelligent recommendations as you write</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                      <ChevronRight className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Rich formatting and templates</p>
                      <p className="text-sm text-muted-foreground">
                        Create professional emails with customizable designs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                      <ChevronRight className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Smart scheduling</p>
                      <p className="text-sm text-muted-foreground">
                        Send emails at optimal times for better engagement
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="gap-1">
                  Explore Composition Features <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Email Composition Interface"
                  width={500}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="organization" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Intelligent Organization</h3>
                <p className="text-muted-foreground">
                  Keep your inbox clean and organized with smart filters, categorization, and search capabilities.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                      <ChevronRight className="h-4 w-4 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-medium">Smart categorization</p>
                      <p className="text-sm text-muted-foreground">
                        Automatically sort emails into relevant categories
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                      <ChevronRight className="h-4 w-4 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-medium">Advanced search capabilities</p>
                      <p className="text-sm text-muted-foreground">
                        Find any email instantly with powerful search options
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                      <ChevronRight className="h-4 w-4 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-medium">Custom folder structures</p>
                      <p className="text-sm text-muted-foreground">
                        Create personalized organization systems for your team
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="gap-1">
                  Explore Organization Features <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Email Organization Interface"
                  width={500}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="administration" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Powerful Administration</h3>
                <p className="text-muted-foreground">
                  Manage your organization's email infrastructure with comprehensive admin tools.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center shrink-0">
                      <ChevronRight className="h-4 w-4 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-medium">Granular permission controls</p>
                      <p className="text-sm text-muted-foreground">
                        Define precise access levels for different user roles
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center shrink-0">
                      <ChevronRight className="h-4 w-4 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-medium">Comprehensive audit logs</p>
                      <p className="text-sm text-muted-foreground">
                        Track all system activities for compliance and security
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center shrink-0">
                      <ChevronRight className="h-4 w-4 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-medium">Policy enforcement</p>
                      <p className="text-sm text-muted-foreground">
                        Implement and manage organization-wide email policies
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="gap-1">
                  Explore Administration Features <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Email Administration Dashboard"
                  width={500}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
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
      {/* Authentication Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-purple-950/20 dark:to-cyan-950/20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative h-[400px] w-full">
                <div className="absolute left-0 bottom-0 h-[350px] w-[350px] bg-gradient-to-br from-purple-200/50 to-cyan-200/50 rounded-full blur-3xl"></div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Secure Authentication"
                  width={500}
                  height={400}
                  className="object-contain relative z-10"
                />
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
                Enterprise Security
              </div>
              <h2 className="text-3xl font-bold">Advanced Authentication</h2>
              <p className="text-muted-foreground">
                Protect your organization with multi-layered authentication and access controls.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card className="bg-background/50 backdrop-blur">
                  <CardHeader>
                    <Lock className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle className="text-base">Multi-Factor Authentication</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Secure accounts with multiple verification methods including biometrics and hardware keys.
                  </CardContent>
                </Card>

                <Card className="bg-background/50 backdrop-blur">
                  <CardHeader>
                    <Users className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle className="text-base">Single Sign-On</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Seamless integration with your existing identity providers and authentication systems.
                  </CardContent>
                </Card>

                <Card className="bg-background/50 backdrop-blur">
                  <CardHeader>
                    <Shield className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle className="text-base">Zero Trust Security</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Continuous verification of every access request regardless of source.
                  </CardContent>
                </Card>

                <Card className="bg-background/50 backdrop-blur">
                  <CardHeader>
                    <BarChart className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle className="text-base">Anomaly Detection</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    AI-powered monitoring to identify and block suspicious login attempts.
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container">
        <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-600 p-8 md:p-12 lg:p-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Ready to transform your email infrastructure?</h2>
              <p className="text-white/80">
                Join thousands of organizations that trust NexusMail for their critical communications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="gap-2">
                  Start Free Trial <ChevronRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Schedule Demo
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                  <div className="text-3xl font-bold">10k+</div>
                  <div className="text-white/80">Organizations</div>
                </div>
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                  <div className="text-3xl font-bold">99.99%</div>
                  <div className="text-white/80">Uptime</div>
                </div>
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-white/80">Support</div>
                </div>
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                  <div className="text-3xl font-bold">5M+</div>
                  <div className="text-white/80">Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<Faq4/>      
    </div>
  )
}
