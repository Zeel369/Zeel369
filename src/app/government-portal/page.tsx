import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import Link from 'next/link'

export default function GovernmentPortalPage() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold mb-6">
            Government Portal
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Comprehensive tools and resources for city officials and government agencies
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              The MTSAi Government Portal provides city officials with real-time dashboards,
              policy frameworks, and implementation tools to deploy and manage smart traffic
              solutions effectively.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Real-Time Analytics
                </h3>
                <p className="text-gray-600">
                  Monitor traffic flow, revenue, and impact metrics in real-time
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Policy Frameworks
                </h3>
                <p className="text-gray-600">
                  Pre-approved policy templates and voter engagement tools
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Implementation Support
                </h3>
                <p className="text-gray-600">
                  Step-by-step deployment guides and technical assistance
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-primary p-6 mb-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Portal Access
              </h3>
              <p className="text-gray-700">
                Access to the Government Portal is restricted to authorized city officials and
                government agencies. Please contact us to request access credentials.
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
              >
                Request Portal Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
