import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import MetricsSection from '../components/sections/MetricsSection'
import Link from 'next/link'

export default function ImpactPage() {
  const impactAreas = [
    {
      title: 'Traffic Reduction',
      icon: '🚗',
      description: 'Up to 25% reduction in congestion during peak hours',
      benefits: [
        'Faster commute times',
        'Reduced idling and fuel consumption',
        'Improved quality of life',
        'Better emergency vehicle access',
      ],
    },
    {
      title: 'Environmental Benefits',
      icon: '🌍',
      description: '10M+ tons of CO₂ reduced annually across all deployments',
      benefits: [
        'Cleaner air quality',
        'Reduced greenhouse gas emissions',
        'Lower noise pollution',
        'Healthier urban environments',
      ],
    },
    {
      title: 'Economic Impact',
      icon: '💵',
      description: '$100M+ in annual revenue potential for cities',
      benefits: [
        'Self-financing infrastructure',
        'Education funding',
        'Public transit improvements',
        'Job creation',
      ],
    },
    {
      title: 'Social Benefits',
      icon: '👥',
      description: 'Improved mobility and accessibility for all residents',
      benefits: [
        'Increased public transit use',
        'More equitable transportation access',
        'Community engagement and support',
        'Voter-approved policies',
      ],
    },
  ]

  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold mb-6">
            Our Impact
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Measurable results across traffic, environment, economy, and community well-being
          </p>
        </div>
      </section>

      {/* Metrics */}
      <MetricsSection />

      {/* Impact Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center">
            Comprehensive Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-lg text-gray-700 mb-6 font-medium">
                  {area.description}
                </p>
                <ul className="space-y-2">
                  {area.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Create Impact in Your City
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join cities worldwide that are transforming urban mobility with MTSAi
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg text-lg font-medium transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
