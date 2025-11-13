import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import Link from 'next/link'

export default function InvestorCentrePage() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold mb-6">
            Investor Centre
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Investment opportunities in the future of urban mobility
          </p>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Investment Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">$100M+</div>
              <p className="text-gray-600">Annual revenue potential per city</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">4</div>
              <p className="text-gray-600">Continents with active deployments</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">25%</div>
              <p className="text-gray-600">Proven congestion reduction</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <p className="text-gray-600">Cities in deployment pipeline</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Why Invest in MTSAi?
            </h3>

            <div className="space-y-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Massive Market Opportunity
                </h4>
                <p className="text-gray-700">
                  Urban congestion costs the global economy over $1 trillion annually. MTSAi
                  addresses this massive market with proven, scalable solutions.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Self-Financing Model
                </h4>
                <p className="text-gray-700">
                  Our solutions generate revenue from day one, creating sustainable business
                  models that don't rely on government subsidies.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Proven Technology
                </h4>
                <p className="text-gray-700">
                  Validated AI technology with real-world deployments demonstrating consistent
                  results across diverse urban environments.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Strong Public Support
                </h4>
                <p className="text-gray-700">
                  Our voter-tested policy frameworks ensure rapid deployment with community
                  backing, reducing implementation risk.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-primary p-6 mb-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Investor Relations
              </h3>
              <p className="text-gray-700 mb-4">
                For detailed financial information, growth projections, and investment opportunities,
                please contact our investor relations team.
              </p>
              <p className="text-gray-700">
                Email: <a href="mailto:investors@mtsai.com" className="text-primary hover:text-primary-hover font-medium">investors@mtsai.com</a>
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
              >
                Schedule an Investor Meeting
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
