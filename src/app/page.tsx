import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import FeatureSection from './components/sections/FeatureSection'
import PartnersSection from './components/sections/PartnersSection'
import MetricsSection from './components/sections/MetricsSection'
import PostsSection from './components/sections/PostsSection'
import FAQSection from './components/sections/FAQSection'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <FeatureSection />
      <PartnersSection />
      <MetricsSection />
      <PostsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
