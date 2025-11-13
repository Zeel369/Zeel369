export default function MetricsSection() {
  const metrics = [
    {
      value: '25%',
      label: 'Reduction in congestion',
      description: 'Proven traffic flow improvement',
    },
    {
      value: '$100M+',
      label: 'Annual revenue potential',
      description: 'Self-financing infrastructure',
    },
    {
      value: '50%',
      label: 'Increase in public support',
      description: 'Voter-approved policies',
    },
    {
      value: '10M+',
      label: 'Tons of CO₂ reduced',
      description: 'Environmental impact',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Proven Impact
          </h2>
          <p className="text-xl text-blue-100">
            Real results from real deployments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-xl font-semibold text-blue-100 mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-blue-200">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
