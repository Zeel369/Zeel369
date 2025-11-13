import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import Link from 'next/link'

export default function RidesharingPage() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold mb-6">
            Ridesharing Solutions
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Integrated ridesharing and carpooling solutions to reduce congestion and emissions
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              MTSAi's ridesharing platform encourages carpooling and shared mobility through
              integrated incentives, AI-powered matching, and seamless payment systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">For Riders</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    Earn Green Miles rewards
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    Reduced toll charges
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    Safe, verified carpooling
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    Environmental impact tracking
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">For Cities</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    Reduced vehicle miles traveled
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    Lower emissions
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    Optimized HOV lane usage
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    Data-driven planning
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
              >
                Learn More About Ridesharing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
