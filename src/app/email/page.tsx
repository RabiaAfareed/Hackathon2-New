'use client'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Email() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Signing up with:', email)
    setEmail('')
  }

  return (
    <section className="w-full max-w-[1440px] mx-auto bg-gray-200 mb-[40px]">
      <div className="h-full w-full px-4 sm:px-6 md:px-[74px] pt-[52px] pb-[65px] flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6">
          Join the club and get the benefits
        </h2>
        {/* Subtext */}
        <p className="text-gray-600 mb-8 max-w-lg mx-auto text-sm sm:text-base lg:text-lg">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
        </p>
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto"
        >
          <div className="flex-1">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 text-sm sm:text-base"
              required
            />
          </div>
          <div>
            <Button
              type="submit"
              className="h-12 w-full sm:w-auto px-8 bg-[#2A2640] hover:bg-[#2A2640]/90 text-white"
            >
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
