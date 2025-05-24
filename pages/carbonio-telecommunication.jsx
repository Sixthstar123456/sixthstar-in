import Image from "next/image"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/text-area"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Server, Cloud } from "lucide-react"
import Faq5 from "../components/ui/tele-faq"


export default function ZextrasPageTele() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="bg-blue-200 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 h-[600px] ">
            <div className="lg:w-1/2">
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">A DIGITAL WORKPLACE</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Designed
                <br />
                for Digital
                <br />
                Sovereignty
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Zextras Carbonio is the perfect solution for public sector and regulated industries, providing a secure
                digital workplace that is compliant with Italian's regulations such as local data protection laws.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <Image
                  src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748078036/carbonio_public_sector_h8irdx.png?height=400&width=500"
                  alt="Digital Sovereignty Illustration"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Achieve Data Sovereignty</h2>
              <p className="text-gray-600 leading-relaxed">
                Our platform ensures that your organization maintains complete control over your data, meeting all
                regulatory requirements for data sovereignty and privacy protection.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">"All in One" is the Key</h2>
              <p className="text-gray-600 leading-relaxed">
                A single, comprehensive platform, bringing all your business tools, eliminating the need for multiple
                separate solutions and reducing complexity.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Private Deployment</h2>
              <p className="text-gray-600 leading-relaxed">
                Deploy Carbonio on your own infrastructure, whether on-premises or in your preferred cloud environment,
                maintaining complete control over your data and infrastructure.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                A Complete Platform with All the Features You Need
              </h2>
              <p className="text-gray-600 leading-relaxed">
                From email and calendar to file sharing, video conferencing, and collaboration tools, Carbonio provides
                everything your organization needs in a single, integrated platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hexagonal Diagrams */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-40">
            {/* First Hexagon */}
            <div className="relative">
              <div className="w-64 h-64 bg-teal-800 transform rotate-45 rounded-lg flex items-center justify-center">
                <div className="transform -rotate-45 text-center">
                  <div className="text-orange-500 text-2xl font-bold mb-2">Digital</div>
                  <div className="text-white text-xl font-bold">Sovereignty</div>
                </div>
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-teal-700 text-white px-4 py-2 rounded text-sm">
                Compliance
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-teal-700 text-white px-4 py-2 rounded text-sm">
                Auditing
              </div>
              <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-teal-700 text-white px-4 py-2 rounded text-sm">
                Data Privacy
              </div>
              <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-teal-700 text-white px-4 py-2 rounded text-sm">
                Governance
              </div>
            </div>

            {/* Second Hexagon */}
            <div className="relative">
              <div className="w-64 h-64 bg-slate-800 transform rotate-45 rounded-lg flex items-center justify-center">
                <div className="transform -rotate-45 text-center">
                  <div className="text-orange-500 text-2xl font-bold mb-2">Digital</div>
                  <div className="text-white text-xl font-bold">Workplace</div>
                </div>
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white px-4 py-2 rounded text-sm">
                Video Meeting
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white px-4 py-2 rounded text-sm">
                File Sharing
              </div>
              <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-slate-700 text-white px-4 py-2 rounded text-sm">
                Email
              </div>
              <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-slate-700 text-white px-4 py-2 rounded text-sm">
                Chat
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
            Our network of partners is here to assist you. They will provide you with quality local service from a local
            company in your country that guarantees compliance with all applicable local regulations.
          </p>
        </div>
      </section>

    

      {/* World Map Section */}
      <section className="bg-blue-100 py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="relative">
            <Image
              src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1748078340/partner-zextras-location_mpekvq.png?height=300&width=600"
              alt="World Map"
              width={600}
              height={300}
              className="mx-auto opacity-100"
            />
          </div>
        </div>
      </section>

      {/* Best of Hands Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">You Are in the Best of Hands!</h2>
          <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            The Zextras Managed Service brings together a team of digital solutions deployed in countries and provides
            the most suitable answers to various regulatory requirements. Our team of experts ensures that your digital
            workplace is always running smoothly and efficiently, providing you with peace of mind and allowing you to
            focus on your core business.
          </p>

         

         
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gradient-to-br from-blue-500 to-blue-900 text-white">
               <div className="container grid md:grid-cols-2 gap-12 items-center">
                 <div className="relative h-[400px]">
                   <div className="absolute inset-0 flex items-center justify-center">
                     <div className="relative w-full h-full max-w-[400px]">
                      <Image
       src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747821091/interfaccia_carbonio_CE_lmxi8o.webp"
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

     <Faq5/>
     
    </div>
  )
}
