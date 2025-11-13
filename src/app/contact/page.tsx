'use client'

import { useState } from 'react'
import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'

export default function ContactPage() {
  const [govForm, setGovForm] = useState({
    name: '',
    email: '',
    organization: '',
    city: '',
    message: '',
  })

  const [impactForm, setImpactForm] = useState({
    name: '',
    email: '',
    organization: '',
    type: '',
    message: '',
  })

  const handleGovSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `MTSAi Inquiry - ${govForm.organization} (${govForm.city})`
    const body = `Name: ${govForm.name}
Email: ${govForm.email}
Organization: ${govForm.organization}
City: ${govForm.city}

Message:
${govForm.message}`

    window.location.href = `mailto:government@mtsai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleImpactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `MTSAi Partnership Inquiry - ${impactForm.organization}`
    const body = `Name: ${impactForm.name}
Email: ${impactForm.email}
Organization: ${impactForm.organization}
Organization Type: ${impactForm.type}

Message:
${impactForm.message}`

    window.location.href = `mailto:partnerships@mtsai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const offices = [
    {
      city: 'Vancouver',
      country: 'Canada',
      address: '123 Main Street, Vancouver, BC V6B 1A1',
      phone: '+1 (604) 555-0100',
      email: 'vancouver@mtsai.com',
    },
    {
      city: 'Budapest',
      country: 'Hungary',
      address: 'Budapest University of Technology, Building K',
      phone: '+36 1 555 0100',
      email: 'budapest@mtsai.com',
    },
    {
      city: 'Delhi NCR',
      country: 'India',
      address: 'Cyber City, DLF Phase 2, Gurugram 122002',
      phone: '+91 124 555 0100',
      email: 'delhi@mtsai.com',
    },
    {
      city: 'Chicago',
      country: 'USA',
      address: '456 Innovation Drive, Chicago, IL 60601',
      phone: '+1 (312) 555-0100',
      email: 'chicago@mtsai.com',
    },
  ]

  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Whether you're a city official, super app, university, or impact organization,
            we're here to help you transform urban mobility.
          </p>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Government/City/Super App Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                City / Government / Super App
              </h2>
              <p className="text-gray-600 mb-6">
                Ready to deploy MTSAi in your city? Let's discuss implementation.
              </p>

              <form onSubmit={handleGovSubmit} className="space-y-4">
                <div>
                  <label htmlFor="gov-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="gov-name"
                    required
                    value={govForm.name}
                    onChange={(e) => setGovForm({ ...govForm, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="gov-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="gov-email"
                    required
                    value={govForm.email}
                    onChange={(e) => setGovForm({ ...govForm, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="gov-org" className="block text-sm font-medium text-gray-700 mb-1">
                    Organization *
                  </label>
                  <input
                    type="text"
                    id="gov-org"
                    required
                    value={govForm.organization}
                    onChange={(e) => setGovForm({ ...govForm, organization: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="gov-city" className="block text-sm font-medium text-gray-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    id="gov-city"
                    required
                    value={govForm.city}
                    onChange={(e) => setGovForm({ ...govForm, city: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="gov-message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="gov-message"
                    required
                    rows={4}
                    value={govForm.message}
                    onChange={(e) => setGovForm({ ...govForm, message: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Send Inquiry
                </button>
              </form>
            </div>

            {/* University/Non-profit/Impact Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                University / Non-profit / Impact
              </h2>
              <p className="text-gray-600 mb-6">
                Interested in research collaboration or impact partnerships?
              </p>

              <form onSubmit={handleImpactSubmit} className="space-y-4">
                <div>
                  <label htmlFor="impact-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="impact-name"
                    required
                    value={impactForm.name}
                    onChange={(e) => setImpactForm({ ...impactForm, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="impact-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="impact-email"
                    required
                    value={impactForm.email}
                    onChange={(e) => setImpactForm({ ...impactForm, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="impact-org" className="block text-sm font-medium text-gray-700 mb-1">
                    Organization *
                  </label>
                  <input
                    type="text"
                    id="impact-org"
                    required
                    value={impactForm.organization}
                    onChange={(e) => setImpactForm({ ...impactForm, organization: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="impact-type" className="block text-sm font-medium text-gray-700 mb-1">
                    Organization Type *
                  </label>
                  <select
                    id="impact-type"
                    required
                    value={impactForm.type}
                    onChange={(e) => setImpactForm({ ...impactForm, type: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select type...</option>
                    <option value="university">University / Research</option>
                    <option value="nonprofit">Non-profit</option>
                    <option value="impact">Impact Organization</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="impact-message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="impact-message"
                    required
                    rows={4}
                    value={impactForm.message}
                    onChange={(e) => setImpactForm({ ...impactForm, message: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
            Our Offices
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Visit us at one of our global locations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {office.city}
                </h3>
                <p className="text-primary font-medium mb-4">{office.country}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>{office.address}</p>
                  <p className="font-medium">{office.phone}</p>
                  <p className="text-primary">{office.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                General Inquiries
              </h3>
              <a href="mailto:info@mtsai.com" className="text-primary hover:text-primary-hover">
                info@mtsai.com
              </a>
            </div>
            <div>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Partnerships
              </h3>
              <a href="mailto:partnerships@mtsai.com" className="text-primary hover:text-primary-hover">
                partnerships@mtsai.com
              </a>
            </div>
            <div>
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Careers
              </h3>
              <a href="mailto:careers@mtsai.com" className="text-primary hover:text-primary-hover">
                careers@mtsai.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
