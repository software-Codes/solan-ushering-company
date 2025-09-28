'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Phone, ArrowRight, Star } from 'lucide-react'
import { images } from '../../public/images/images'

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={images.soloimage}
          alt="Solan Ushering Services Background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Gradient overlay for brand colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-solan-orange/30 via-transparent to-solan-blue/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-6 mb-8 text-sm text-white/90 backdrop-blur-sm bg-white/10 rounded-full px-6 py-3 mx-auto w-fit">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-solan-orange text-solan-orange" />
            <span className="font-medium">5+ Years Experience</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/30" />
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-solan-orange text-solan-orange" />
            <span className="font-medium">500+ Events</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/30" />
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-solan-orange text-solan-orange" />
            <span className="font-medium">100% Satisfaction</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
          <span className="block mb-2">From Warm</span>
          <span className="block mb-2 bg-gradient-to-r from-solan-orange to-solan-orange-light bg-clip-text text-transparent">Welcomes</span>
          <span className="block">to Flawless</span>
          <span className="bg-gradient-to-r from-solan-blue to-solan-blue-light bg-clip-text text-transparent">Coordination</span>
        </h1>

        {/* Subtitle */}
        <div className="backdrop-blur-sm bg-black/20 rounded-2xl p-6 mb-12 max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed">
            We bring elegance, excellence, and ease to every event. 
            <span className="block mt-2 font-semibold text-solan-orange">
              Professional ushering services that make the difference.
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            asChild 
            size="lg" 
            className="btn-solan btn-hover-lift px-12 py-6 text-xl font-semibold rounded-2xl shadow-2xl"
          >
            <Link href="tel:0723128349">
              <Phone className="h-6 w-6 mr-3" />
              Call Now - 0723128349
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="px-12 py-6 text-xl font-semibold rounded-2xl border-2 border-solan-orange text-solan-orange hover:bg-solan-orange hover:text-white btn-hover-lift shadow-lg"
          >
            <Link href="/portfolio">
              View Our Work
              <ArrowRight className="h-6 w-6 ml-3" />
            </Link>
          </Button>
        </div>

        {/* Services preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: "🎭", title: "Event Ushering", desc: "Weddings & Galas" },
            { icon: "🏢", title: "Corporate Events", desc: "Conferences & Meetings" },
            { icon: "🎪", title: "Fair Management", desc: "Exhibitions & Shows" },
            { icon: "👑", title: "VIP Services", desc: "Premium Experience" }
          ].map((service, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-solan-orange">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white bg-white/20 backdrop-blur-sm rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection