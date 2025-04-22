'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function LandingPage() {
  const [lang, setLang] = useState('en')

  return (
    <div
      className="min-h-screen text-white relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg.png') !important" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-950/90 z-0" />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <header className="flex justify-between items-center px-10 py-4 border-b border-green-700">
          <div className="text-lg font-bold">logo</div>
          <nav className="flex gap-6">
            <Link href="#">Home</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Support</Link>
            <Link href="#">Tutorial</Link>
            <Link href="#">FAQs</Link>
          </nav>
          <div className="flex items-center gap-4">
            {/* Language selector */}
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent border border-green-500 rounded px-2 py-1 text-white"
            >
              <option value="en">🇬🇧 English</option>
              <option value="fr">🇫🇷 Français</option>
              <option value="ur">🇵🇰 اردو</option>
            </select>
            <button className="border border-green-500 px-4 py-1 rounded">Login</button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="text-center mt-16 px-6">
          {/* Floating Images */}
          <Image
            src="/images/storage.png"
            alt="Storage"
            width={100}
            height={100}
            className="absolute top-32 left-10 rotate-[15deg]"
          />
          <Image
            src="/images/usage.png"
            alt="Usage"
            width={100}
            height={100}
            className="absolute top-32 right-10 -rotate-[12deg]"
          />

          {/* Main Text */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Your Private Cloud.<br />
            <span className="text-white">Secure, Simple, Yours.</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Upload, Share, And Manage Your Files<br />
            With Full Privacy 🔒 And Zero Compromises.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button className="bg-green-600 px-6 py-2 rounded-full text-white hover:bg-green-700">
              Secure Your Files Now
            </button>
            <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-green-900 transition">
              View Pricing
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-24 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Powerful Features<br />At Your Fingertips.
          </h2>
        </section>
      </div>
    </div>
  )
}
