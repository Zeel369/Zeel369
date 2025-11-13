import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import Link from 'next/link'

export default function SolutionsPage() {
  const solutions = [
    {
      emoji: '💰',
      title: 'Dynamic Pricing',
      description: 'Real-time congestion-based pricing that adapts to traffic conditions',
      features: [
        'Variable pricing based on real-time traffic data',
        'Peak and off-peak hour optimization',
        'Reduced congestion during rush hours',
        'Self-financing infrastructure model',
      ],
    },
    {
      emoji: '🌱',
      title: 'Green Miles Rewards',
      description: 'Incentivize sustainable transportation choices',
      features: [
        'Rewards for carpooling and public transit use',
        'Gamification to encourage eco-friendly behavior',
        'Partner integration with local businesses',
        'Redeemable points for transit and services',
      ],
    },
    {
      emoji: '🤖',
      title: 'AI Occupancy Detection',
      description: 'Advanced AI automatically detects vehicle occupancy',
      features: [
        'Computer vision-based occupancy verification',
        'Privacy-focused, no personal data storage',
        '99%+ accuracy in detection',
        'Eliminates need for manual enforcement',
      ],
    },
    {
      emoji: '🎓',
      title: 'Revenue for Education',
      description: 'Direct funding to local schools and educational programs',
      features: [
        'Transparent allocation of generated revenue',
        'Support for K-12 and higher education',
        'Community-approved funding frameworks',
        'Long-term educational infrastructure investment',
      ],
    },
    {
      emoji: '📱',
      title: 'Super-App Integration',
      description: 'Seamless integration with existing transportation apps',
      features: [
        'Single-app experience for all transit needs',
        'Real-time routing and pricing information',
        'Payment integration and digital wallet support',
        'Multi-modal journey planning',
      ],
    },
    {
      emoji: '📋',
      title: 'Policy-Ready',
      description: 'Pre-approved frameworks and voter-tested policies',
      features: [
        'Evidence-based policy recommendations',
        'Voter approval frameworks included',
        'Legal compliance and regulatory support',
        'Rapid deployment timelines (6-12 months)',
      ],
    },
  ]

  const caseStudies = [
    {
      title: 'Demo Spine Corridor',
      location: 'Pilot Program',
      metrics: [
        { label: 'Congestion Reduction', value: '28%' },
        { label: 'Public Support', value: '67%' },
        { label: 'Revenue Generated', value: '$2.5M' },
      ],
      description: 'Initial pilot program demonstrating effectiveness of dynamic pricing and AI occupancy detection.',
    },
    {
      title: 'Budapest Metro Area',
      location: 'Hungary',
      metrics: [
        { label: 'Congestion Reduction', value: '22%' },
        { label: 'Transit Ridership Increase', value: '35%' },
        { label: 'CO₂ Reduction', value: '18%' },
      ],
      description: 'European deployment showcasing integration with existing public transit systems.',
    },
    {
      title: 'Indian Metros',
      location: 'Delhi NCR & Others',
      metrics: [
        { label: 'Vehicles Processed Daily', value: '500K+' },
        { label: 'Average Time Savings', value: '23 min' },
        { label: 'User Satisfaction', value: '72%' },
      ],
      description: 'Large-scale deployment in high-density urban environments with complex traffic patterns.',
    },
  ]

  const howItWorks = [
    {
      step: '1',
      title: 'Detect',
      description: 'AI-powered cameras detect vehicle occupancy and traffic conditions in real-time',
    },
    {
      step: '2',
      title: 'Price',
      description: 'Dynamic pricing adjusts based on congestion levels to manage demand',
    },
    {
      step: '3',
      title: 'Reward',
      description: 'Carpoolers and transit users earn Green Miles rewards for sustainable choices',
    },
    {
      step: '4',
      title: 'Impact',
      description: 'Revenue funds education while reducing congestion and emissions',
    },
  ]

  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold mb-6">
            Our Solutions
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Comprehensive, integrated solutions to solve urban traffic congestion with
            technology, policy, and community support.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
            Complete Traffic Management Platform
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Six integrated solutions working together to transform urban mobility
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{solution.emoji}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
            Proven Results
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Real-world deployments demonstrating measurable impact
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {study.title}
                </h3>
                <p className="text-primary font-medium mb-6">{study.location}</p>

                <div className="space-y-4 mb-6">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="border-l-4 border-primary pl-4">
                      <div className="text-3xl font-bold text-gray-900">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {study.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Four simple steps to transform urban mobility
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-3xl font-bold mb-6 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Deploy MTSAi?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us to learn how MTSAi can transform traffic management in your city.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg text-lg font-medium transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
