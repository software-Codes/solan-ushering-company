import React from 'react'
import HeroSection from '@/components/HeroSection'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Page: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="solan-gradient-text">Why Choose</span> Solan?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just provide staff – we deliver experiences that elevate your events to extraordinary.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Trained Professionals",
                description: "Our team undergoes rigorous training in etiquette, protocol, and customer service excellence.",
                icon: "🎓",
                color: "solan-orange"
              },
              {
                title: "Seamless Coordination", 
                description: "From planning to execution, we ensure every detail is perfectly orchestrated.",
                icon: "⚡",
                color: "solan-blue"
              },
              {
                title: "Premium Experience",
                description: "We create memorable moments that leave lasting impressions on your guests.",
                icon: "✨",
                color: "solan-orange"
              },
              {
                title: "Flexible Packages",
                description: "Customized service packages to match your event size, style, and budget.",
                icon: "📦",
                color: "solan-blue"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock availability for consultations, planning, and emergency support.",
                icon: "🕐",
                color: "solan-orange"
              },
              {
                title: "Proven Track Record",
                description: "500+ successful events with 100% client satisfaction and glowing testimonials.",
                icon: "🏆",
                color: "solan-blue"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-card border rounded-2xl p-8 hover:shadow-solan-lg transition-all duration-500 hover:-translate-y-3 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-solan-orange/10 to-solan-blue/10 rounded-bl-full" />
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-4 text-${feature.color}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 solan-gradient opacity-95" />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Elevate Your Event?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
              Let's create an unforgettable experience together. Contact us for a free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 text-white">
                <div className="bg-white/20 p-4 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Call Us Now</h3>
                  <p className="text-lg opacity-90">0723128349</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-white">
                <div className="bg-white/20 p-4 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email Us</h3>
                  <p className="text-lg opacity-90">info@solanushering.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-white">
                <div className="bg-white/20 p-4 rounded-full">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Available</h3>
                  <p className="text-lg opacity-90">24/7 for Consultations</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-6">
              <Button 
                asChild 
                size="lg" 
                className="w-full bg-white text-solan-orange hover:bg-white/90 py-6 text-xl font-bold rounded-2xl shadow-2xl btn-hover-lift"
              >
                <Link href="tel:0723128349">
                  <Phone className="h-6 w-6 mr-3" />
                  Call Now - Free Consultation
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="w-full border-2 border-white text-white hover:bg-white hover:text-solan-orange py-6 text-xl font-bold rounded-2xl btn-hover-lift"
              >
                <Link href="/contact">
                  <Mail className="h-6 w-6 mr-3" />
                  Send Message
                </Link>
              </Button>
              
              <div className="text-center text-white/80 text-sm">
                <p>Response within 30 minutes • Free quotes • No obligations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Page