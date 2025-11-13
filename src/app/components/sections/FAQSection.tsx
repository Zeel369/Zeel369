'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How does MTSAi reduce traffic congestion?',
      answer: 'MTSAi uses dynamic pricing to manage demand during peak hours, AI-powered occupancy detection to encourage carpooling, and integrated rewards to promote public transit use. This multi-faceted approach has been proven to reduce congestion by up to 25% in pilot programs.',
    },
    {
      question: 'Is this just another toll system?',
      answer: 'No, MTSAi is fundamentally different from traditional tolls. It uses variable pricing based on real-time traffic conditions, rewards carpoolers and transit users, and directs revenue to community benefits like education. The system is designed with voter approval and public support at its core.',
    },
    {
      question: 'How does the AI occupancy detection work?',
      answer: 'Our advanced AI system uses computer vision to detect the number of occupants in vehicles automatically. This eliminates the need for manual verification, reduces enforcement costs, and ensures fair pricing for carpoolers. The technology is privacy-focused and has been tested extensively for accuracy.',
    },
    {
      question: 'What happens to the revenue generated?',
      answer: 'Revenue is allocated according to voter-approved frameworks, with significant portions directed to education funding, public transit improvements, and infrastructure maintenance. The system is designed to be self-financing while delivering tangible community benefits.',
    },
    {
      question: 'How quickly can MTSAi be deployed in my city?',
      answer: 'MTSAi is designed for rapid deployment with pre-approved policy frameworks and tested technology. Depending on your city\'s existing infrastructure and approval processes, deployment can typically begin within 6-12 months. We work closely with city officials to ensure a smooth implementation.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about MTSAi
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-primary transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
