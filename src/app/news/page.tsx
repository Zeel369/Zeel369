import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import Link from 'next/link'

export default function NewsPage() {
  const newsArticles = [
    {
      date: 'November 10, 2025',
      category: 'Technology',
      title: 'How AI is Revolutionizing Urban Traffic Management',
      excerpt: 'Discover how artificial intelligence and machine learning are transforming the way cities manage traffic flow and reduce congestion.',
    },
    {
      date: 'November 5, 2025',
      category: 'Policy',
      title: 'Building Public Support for Congestion Pricing',
      excerpt: 'Learn about the strategies that have helped cities gain voter approval for innovative traffic management solutions.',
    },
    {
      date: 'October 28, 2025',
      category: 'Impact',
      title: 'Environmental Benefits of Smart Traffic Solutions',
      excerpt: 'Explore the significant environmental impact of reducing traffic congestion through intelligent transportation systems.',
    },
    {
      date: 'October 15, 2025',
      category: 'Expansion',
      title: 'MTSAi Expands to Three New Cities',
      excerpt: 'We are excited to announce partnerships with three major metropolitan areas for pilot program deployments.',
    },
    {
      date: 'October 1, 2025',
      category: 'Research',
      title: 'New Study Shows 25% Reduction in Congestion',
      excerpt: 'Independent research validates MTSAi effectiveness in reducing traffic congestion and improving urban mobility.',
    },
    {
      date: 'September 20, 2025',
      category: 'Partnership',
      title: 'Partnership with Leading University Announced',
      excerpt: 'Collaboration will advance research in AI-powered traffic management and smart city solutions.',
    },
  ]

  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold mb-6">
            News & Updates
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Stay informed about the latest developments in smart traffic management
          </p>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="space-y-8">
            {newsArticles.map((article, index) => (
              <article key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <div className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {article.category}
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                      {article.title}
                    </h2>
                  </div>
                  <span className="text-sm text-gray-500 md:ml-4 flex-shrink-0">
                    {article.date}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <Link href="#" className="text-primary hover:text-primary-hover font-medium">
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
