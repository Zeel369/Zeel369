import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import Link from 'next/link'

export default function PartnersPage() {
  const partnerCategories = [
    {
      title: 'Academic Partners',
      partners: [
        { name: 'Budapest University of Technology and Economics (BME)', description: 'Research collaboration on AI and traffic systems' },
        { name: 'Óbuda University', description: 'Advanced computer vision research' },
        { name: 'Stanford University', description: 'Transportation policy and economics' },
        { name: 'MIT Urban Planning Lab', description: 'Smart city solutions research' },
      ],
    },
    {
      title: 'Technology Partners',
      partners: [
        { name: 'AR Technologies', description: 'Computer vision and AI infrastructure' },
        { name: 'Crux Systems', description: 'Cloud computing and data analytics' },
        { name: 'Major Cloud Provider', description: 'Scalable infrastructure solutions' },
      ],
    },
    {
      title: 'Government Partners',
      partners: [
        { name: 'City of Vancouver', description: 'Pilot program and policy development' },
        { name: 'Budapest Municipality', description: 'European deployment partner' },
        { name: 'Delhi NCR Authority', description: 'Large-scale urban implementation' },
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
            Our Partners
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Collaborating with world-class institutions to deliver innovative urban mobility solutions
          </p>
        </div>
      </section>

      {/* Partners by Category */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          {partnerCategories.map((category, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.partners.map((partner, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {partner.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Become a Partner
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our network of academic institutions, technology companies, and government organizations
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg text-lg font-medium transition-colors"
          >
            Partner With Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
