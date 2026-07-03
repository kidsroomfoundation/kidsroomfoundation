import Hero from '@/components/Hero'
import DonationSection from '@/components/DonationSection'
import ImpactStats from '@/components/ImpactStats'
import HomeAbout from '@/components/HomeAbout'
import AdBanner from '@/components/AdBanner'

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Ad Banner - Below Hero */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-coral-100/50 p-4">
            <p className="text-xs text-earth-400 text-center mb-2">Advertisement</p>
            <AdBanner slot="pub-8150475435765548" className="min-h-[250px]" />
          </div>
        </div>
      </section>

      <DonationSection />
      
      {/* Ad Banner - Between Donation and Impact */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-coral-100/50 p-4">
            <p className="text-xs text-earth-400 text-center mb-2">Advertisement</p>
            <AdBanner slot="pub-8150475435765548" className="min-h-[250px]" />
          </div>
        </div>
      </section>

      <ImpactStats />
      
      {/* Ad Banner - Between Impact and About */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-coral-100/50 p-4">
            <p className="text-xs text-earth-400 text-center mb-2">Advertisement</p>
            <AdBanner slot="pub-8150475435765548" className="min-h-[250px]" />
          </div>
        </div>
      </section>

      <HomeAbout />
    </>
  )
}
