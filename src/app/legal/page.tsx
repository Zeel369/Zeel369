import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'

export default function LegalPage() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold mb-6">
            Legal Information
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Terms of service, privacy policy, and legal compliance information
          </p>
        </div>
      </section>

      {/* Legal Content */}
      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="space-y-12">
            {/* Privacy Policy */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  At MTSAi, we are committed to protecting your privacy. This Privacy Policy explains
                  how we collect, use, and safeguard your personal information.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Data Collection</h3>
                <p>
                  We collect only the minimum data necessary to provide our services, including
                  traffic flow information, vehicle occupancy data, and payment information. All
                  data is anonymized and encrypted.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Data Usage</h3>
                <p>
                  Your data is used solely for traffic management, system improvement, and required
                  regulatory compliance. We never sell your personal information to third parties.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Data Security</h3>
                <p>
                  We employ industry-leading security measures including encryption, secure data
                  centers, and regular security audits to protect your information.
                </p>
              </div>
            </div>

            {/* Terms of Service */}
            <div className="border-t pt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  By using MTSAi services, you agree to comply with these terms and conditions.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Service Use</h3>
                <p>
                  Our services are provided for lawful traffic management purposes. Users must
                  comply with all applicable local, state, and federal regulations.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Liability</h3>
                <p>
                  MTSAi provides traffic management services in good faith but cannot guarantee
                  specific outcomes. Users are responsible for their own compliance with traffic
                  regulations.
                </p>
              </div>
            </div>

            {/* Compliance */}
            <div className="border-t pt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Regulatory Compliance</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  MTSAi complies with all applicable regulations including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>GDPR (General Data Protection Regulation) in Europe</li>
                  <li>CCPA (California Consumer Privacy Act) in California</li>
                  <li>SOC 2 Type II certification for data security</li>
                  <li>Local transportation and privacy regulations in all deployment regions</li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="border-t pt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Contact</h2>
              <p className="text-gray-700">
                For legal inquiries, please contact: <a href="mailto:legal@mtsai.com" className="text-primary hover:text-primary-hover">legal@mtsai.com</a>
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Last updated: November 13, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
