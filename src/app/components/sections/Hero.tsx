import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Placeholder for hero image - replace with actual image */}
        <div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-gray-900" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6">
            Solving Traffic Congestion With Trust, Technology, And Voter Support
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl">
            Miracle Traffic Solution AI is a ready-to-deploy, self-financing solution that combines
            dynamic pricing, AI-powered occupancy detection, and voter-approved policies to reduce
            congestion, generate revenue for education, and improve urban mobility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/solutions"
              className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors text-center"
            >
              See How It Works
            </Link>
            <Link
              href="/impact"
              className="inline-block bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg text-lg font-medium transition-colors text-center"
            >
              See the Impact
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
