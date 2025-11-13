import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import Link from 'next/link'

export default function ResourcesPage() {
  const resources = [
    {
      category: 'Research Papers',
      items: [
        'AI-Powered Traffic Management: A Case Study',
        'Dynamic Pricing Models for Urban Congestion',
        'Public Acceptance of Smart Traffic Solutions',
        'Environmental Impact of Congestion Pricing',
      ],
    },
    {
      category: 'White Papers',
      items: [
        'MTSAi Implementation Framework',
        'Voter Approval Strategies for Traffic Solutions',
        'Revenue Models for Self-Financing Infrastructure',
        'Privacy and Security in AI Traffic Systems',
      ],
    },
    {
      category: 'Case Studies',
      items: [
        'Demo Spine Corridor: Lessons Learned',
        'Budapest Metro Area Deployment',
        'Indian Metros: Scaling in High-Density Environments',
        'North American Pilot Programs',
      ],
    },
    {
      category: 'Technical Documentation',
      items: [
        'API Documentation',
        'Integration Guides',
        'System Architecture Overview',
        'Deployment Best Practices',
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
            Resources
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Research papers, case studies, and technical documentation to help you understand MTSAi
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {resources.map((category, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {category.category}
                </h2>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx}>
                      <a href="#" className="flex items-start text-gray-700 hover:text-primary">
                        <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Need More Information?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us for custom research or technical documentation
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
