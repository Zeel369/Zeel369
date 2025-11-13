import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import LeadershipGrid from '../components/ui/LeadershipGrid'

export default function LeadershipPage() {
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

  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold mb-6">
            Leadership Team
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Meet the experts driving innovation in urban mobility and smart traffic management
          </p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <LeadershipGrid members={leadershipMembers} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
