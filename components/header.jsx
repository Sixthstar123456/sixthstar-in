import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image' // Don't forget this import if using next/image

export default function MainHeader() {
  return (
    <div>
      <header className="sticky top-0 z-40 bg-white text-black">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <Image
                src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746246014/Untitled_120_x_160_px_120_x_60_px_r7jcyf.png" // Replace with your actual image path
                alt="Zextras Logo"
                width={120} // Adjust size as needed
                height={40}
              />
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#" className="text-sm font-medium hover:text-orange-400 transition-colors">
                Solutions
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-orange-400 transition-colors">
                Products
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-orange-400 transition-colors">
                Services
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-orange-400 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:text-orange-400 transition-colors">
              Get Started
            </Link>
            <Button className="bg-orange-500 hover:bg-orange-600">
              Try Free
            </Button>
          </div>
        </div>
      </header>
    </div>
  )
}
