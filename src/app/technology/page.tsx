import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import Link from 'next/link'

export default function TechnologyPage() {
  const techComponents = [
    {
      title: 'Computer Vision & AI',
      description: 'Advanced deep learning models for real-time vehicle occupancy detection',
      features: ['99%+ accuracy', 'Privacy-focused design', 'Real-time processing', 'Edge computing optimized'],
    },
    {
      title: 'Dynamic Pricing Engine',
      description: 'Sophisticated algorithms that adjust pricing based on real-time traffic data',
      features: ['Real-time traffic analysis', 'Predictive modeling', 'Demand-based pricing', 'Revenue optimization'],
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure cloud architecture supporting millions of transactions',
      features: ['99.99% uptime', 'Auto-scaling', 'Global distribution', 'Data encryption'],
    },
    {
      title: 'Mobile & Web Platforms',
      description: 'User-friendly applications for drivers, administrators, and city officials',
      features: ['Cross-platform compatibility', 'Real-time notifications', 'Integrated payments', 'Analytics dashboards'],
    },
  ]

  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold mb-6">
            Technology Platform
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Cutting-edge AI and cloud infrastructure powering intelligent traffic management
          </p>
        </div>
      </section>

      {/* Technology Components */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center">
            Core Technology Components
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techComponents.map((component, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {component.title}
                </h3>
                <p className="text-gray-600 mb-6">{component.description}</p>
                <ul className="space-y-2">
                  {component.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
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
            Learn More About Our Technology
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg text-lg font-medium transition-colors"
          >
            Schedule a Technical Demo
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
