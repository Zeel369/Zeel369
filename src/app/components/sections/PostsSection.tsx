import Link from 'next/link'

export default function PostsSection() {
  const posts = [
    {
      image: '/assets/images/posts/post-1.jpg',
      category: 'Technology',
      title: 'How AI is Revolutionizing Urban Traffic Management',
      excerpt: 'Discover how artificial intelligence and machine learning are transforming the way cities manage traffic flow and reduce congestion.',
      date: 'November 10, 2025',
      link: '/news/ai-urban-traffic',
    },
    {
      image: '/assets/images/posts/post-2.jpg',
      category: 'Policy',
      title: 'Building Public Support for Congestion Pricing',
      excerpt: 'Learn about the strategies that have helped cities gain voter approval for innovative traffic management solutions.',
      date: 'November 5, 2025',
      link: '/news/public-support-congestion-pricing',
    },
    {
      image: '/assets/images/posts/post-3.jpg',
      category: 'Impact',
      title: 'Environmental Benefits of Smart Traffic Solutions',
      excerpt: 'Explore the significant environmental impact of reducing traffic congestion through intelligent transportation systems.',
      date: 'October 28, 2025',
      link: '/news/environmental-benefits',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600">
            Stay informed about the latest developments in smart traffic management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200" />

              {/* Content */}
              <div className="p-6">
                <div className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {post.category}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link
                    href={post.link}
                    className="text-primary hover:text-primary-hover font-medium text-sm"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/news"
            className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-lg font-medium transition-colors"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  )
}
