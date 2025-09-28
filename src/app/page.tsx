import React from 'react'

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-responsive-lg font-bold mb-8 leading-tight">
            <span className="solan-gradient-text">
              Welcome to Solan Ushering Services
            </span>
          </h1>
          <p className="text-responsive-sm text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            From warm welcomes to flawless coordination — we bring elegance, excellence, and ease to every event.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-solan btn-hover-lift px-10 py-4 rounded-xl text-lg font-semibold">
              Get Started Today
            </button>
            <button className="px-10 py-4 rounded-xl text-lg font-semibold border-2 border-solan-orange text-solan-orange hover:bg-solan-orange hover:text-white btn-hover-lift">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Ushering",
                description: "Trained staff providing graceful and professional event ushering services.",
                icon: "🎩"
              },
              {
                title: "Event Coordination", 
                description: "Seamless coordination ensuring your event runs flawlessly from start to finish.",
                icon: "📋"
              },
              {
                title: "Excellence in Service",
                description: "Committed to delivering exceptional service that exceeds expectations.",
                icon: "⭐"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card border rounded-xl p-6 hover:shadow-solan transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-solan-orange">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="solan-gradient rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-responsive-lg font-bold mb-4">
              Ready to Make Your Event Exceptional?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contact us today to discuss how we can bring elegance and excellence to your next event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0723128349"
                className="bg-white text-solan-orange px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Call 0723128349
              </a>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-solan-orange transition-all duration-200">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections to test scrolling */}
      {Array.from({ length: 5 }).map((_, i) => (
        <section key={i} className="py-12 px-4">
          <div className="container mx-auto">
            <div className="bg-card border rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4 solan-gradient-text">
                Section {i + 1}
              </h3>
              <p className="text-muted-foreground">
                This is test content to demonstrate the navbar behavior on scroll. 
                The header should become more opaque as you scroll down the page, 
                providing better readability while maintaining the elegant design.
              </p>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Page