export default function PartnersSection() {
  const partners = [
    { name: 'BME', logo: '/assets/images/partners/bme-logo.svg' },
    { name: 'Obudai Egyetem', logo: '/assets/images/partners/obudai-logo.svg' },
    { name: 'AR', logo: '/assets/images/partners/ar-logo.svg' },
    { name: 'Crux', logo: '/assets/images/partners/crux-logo.svg' },
    { name: 'Partner 5', logo: '/assets/images/partners/partner5-logo.svg' },
    { name: 'Partner 6', logo: '/assets/images/partners/partner6-logo.svg' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Leading Institutions
          </h2>
          <p className="text-xl text-gray-600">
            Partnering with world-class organizations to deliver innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="text-center">
                {/* Placeholder for partner logos */}
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500 font-medium">{partner.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
