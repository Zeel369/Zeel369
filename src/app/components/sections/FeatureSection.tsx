export default function FeatureSection() {
  const features = [
    {
      emoji: '💰',
      title: 'Dynamic Pricing',
      description: 'Real-time congestion-based pricing that adapts to traffic conditions, reducing peak-hour congestion while generating sustainable revenue.',
    },
    {
      emoji: '🌱',
      title: 'Green Miles Rewards',
      description: 'Incentivize carpooling and public transit use with rewards that promote sustainable transportation choices and reduce emissions.',
    },
    {
      emoji: '🤖',
      title: 'AI Occupancy Detection',
      description: 'Advanced AI technology automatically detects vehicle occupancy to ensure fair pricing and reward compliance without manual verification.',
    },
    {
      emoji: '🎓',
      title: 'Revenue for Education',
      description: 'Direct a portion of generated revenue to fund local schools and educational programs, creating lasting community benefits.',
    },
    {
      emoji: '📱',
      title: 'Super-App Integration',
      description: 'Seamlessly integrate with existing transportation apps and city infrastructure for a unified, user-friendly experience.',
    },
    {
      emoji: '📋',
      title: 'Policy-Ready',
      description: 'Pre-approved frameworks and voter-tested policies ensure rapid deployment with strong public support and legal compliance.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why MTSAi?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Smart solutions for modern cities. Our comprehensive platform addresses traffic
            congestion from every angle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-5xl mb-4">{feature.emoji}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
