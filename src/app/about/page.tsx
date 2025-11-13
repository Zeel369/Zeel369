import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import LeadershipGrid from '../components/ui/LeadershipGrid'
import Link from 'next/link'

export default function AboutPage() {
  const leadershipMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      description: 'Former Director of Urban Planning at MIT, 15+ years in smart city solutions',
      image: '/assets/images/team/sarah-chen.jpg',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      description: 'AI researcher and engineer, previously led autonomous systems at Tesla',
      image: '/assets/images/team/michael-rodriguez.jpg',
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'VP of Research & Development',
      description: 'Computer vision expert with PhD from Stanford, 20+ patents in AI',
      image: '/assets/images/team/priya-sharma.jpg',
    },
    {
      name: 'James Thompson',
      role: 'VP of Policy & Government Relations',
      description: 'Former city council member and transportation policy advisor',
      image: '/assets/images/team/james-thompson.jpg',
    },
    {
      name: 'Dr. Anna Kovács',
      role: 'Director of European Operations',
      description: 'Transportation economist with extensive experience in EU infrastructure',
      image: '/assets/images/team/anna-kovacs.jpg',
    },
    {
      name: 'David Park',
      role: 'Chief Financial Officer',
      description: 'Former investment banker specializing in infrastructure and public-private partnerships',
      image: '/assets/images/team/david-park.jpg',
    },
  ]

  const globalOffices = [
    {
      location: 'Vancouver, Canada',
      address: '123 Main Street, Vancouver, BC',
      description: 'North American Headquarters',
    },
    {
      location: 'Budapest, Hungary',
      address: 'Budapest University of Technology',
      description: 'European R&D Center',
    },
    {
      location: 'Delhi NCR, India',
      address: 'Cyber City, Gurugram',
      description: 'Asia-Pacific Operations',
    },
    {
      location: 'Chicago, USA',
      address: '456 Innovation Drive, Chicago, IL',
      description: 'US Policy & Implementation Hub',
    },
  ]

  const timeline = [
    {
      year: '2023',
      title: 'Foundation',
      description: 'MTSAi founded with mission to solve urban traffic congestion through AI and policy innovation',
    },
    {
      year: '2024',
      title: 'First Pilot Programs',
      description: 'Successful pilot deployments in three major metropolitan areas, demonstrating 25% congestion reduction',
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Expanded operations to 4 continents with partnerships with leading universities and governments',
    },
  ]

  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold mb-6">
            About MTSAi
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            We're on a mission to transform urban mobility through cutting-edge AI technology,
            evidence-based policy, and community-centered solutions.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To eliminate urban traffic congestion through innovative AI-powered solutions that
              gain public trust, deliver measurable results, and create sustainable revenue streams
              for community benefits. We believe that solving traffic congestion requires not just
              technology, but also voter support and evidence-based policy frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Vision
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              A world where cities flow freely, air is clean, and communities thrive. We envision
              urban environments where intelligent transportation systems reduce congestion,
              minimize emissions, and reinvest revenue into education and public services—all
              with the full support and approval of the communities they serve.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-4">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Meet the experts driving innovation in urban mobility
          </p>
          <LeadershipGrid members={leadershipMembers} />
        </div>
      </section>

      {/* Global Footprint */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
            Global Footprint
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Operating across four continents to serve cities worldwide
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {globalOffices.map((office, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {office.location}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{office.address}</p>
                <p className="text-sm font-medium text-primary">{office.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your City?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the cities that are already benefiting from MTSAi's innovative traffic solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg text-lg font-medium transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
