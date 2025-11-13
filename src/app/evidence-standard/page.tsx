import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'

export default function EvidenceStandardPage() {
  const standards = [
    {
      title: 'Rigorous Research Methodology',
      description: 'All claims are backed by peer-reviewed research and independent validation',
      details: [
        'Randomized controlled trials where applicable',
        'Long-term longitudinal studies',
        'Independent third-party verification',
        'Academic peer review process',
      ],
    },
    {
      title: 'Transparent Data Collection',
      description: 'Open and verifiable data collection and analysis processes',
      details: [
        'Published methodology and data sources',
        'Reproducible analysis frameworks',
        'Open data sharing with academic partners',
        'Regular audits and validation',
      ],
    },
    {
      title: 'Conservative Estimates',
      description: 'We use conservative estimates to ensure realistic expectations',
      details: [
        'Lower-bound impact projections',
        'Accounting for implementation challenges',
        'Risk-adjusted forecasting',
        'Continuous monitoring and adjustment',
      ],
    },
    {
      title: 'Third-Party Validation',
      description: 'Independent verification of all major claims and metrics',
      details: [
        'University research partnerships',
        'Government audit processes',
        'Professional certification bodies',
        'Community oversight committees',
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
            Evidence Standard
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Our commitment to rigorous, transparent, and independently validated research
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At MTSAi, we are committed to the highest standards of evidence and transparency.
              Every claim we make about our technology's impact is supported by rigorous research,
              independent validation, and real-world data.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              We believe that public trust requires not just effective solutions, but also complete
              transparency about how those solutions are developed, tested, and validated.
            </p>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center">
            Our Standards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standards.map((standard, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {standard.title}
                </h3>
                <p className="text-gray-600 mb-6">{standard.description}</p>
                <ul className="space-y-2">
                  {standard.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Commitment to You
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We pledge to maintain the highest standards of scientific rigor and transparency in
            all our research and claims. If you have questions about our evidence or methodology,
            we encourage you to reach out to our research team.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
