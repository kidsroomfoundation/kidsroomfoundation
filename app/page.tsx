import HomeAbout from '@/components/HomeAbout'
import Stories from '@/components/Stories'
import Link from 'next/link'
import { Wallet, Shield, Globe } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-earth-900 tracking-tight mb-8">
            Empowering Children Through <br className="hidden md:block" />
            <span className="text-coral-500">Transparent Crypto Giving</span>
          </h1>
          <p className="text-xl text-earth-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            By eliminating borders and reducing banking fees, your crypto donations go further. 
            Donate completely anonymously, receive instant tax receipts, and track your impact on the blockchain.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/donate"
              className="px-8 py-4 bg-coral-500 text-white font-bold rounded-xl hover:bg-coral-400 transition-all shadow-lg shadow-coral-500/30 flex items-center justify-center gap-2"
            >
              <Wallet className="w-5 h-5" />
              Donate Crypto Now
            </Link>
            <Link 
              href="/transparency"
              className="px-8 py-4 bg-white text-earth-800 border border-earth-200 font-bold rounded-xl hover:border-earth-300 hover:bg-earth-50 transition-all flex items-center justify-center gap-2"
            >
              <Shield className="w-5 h-5" />
              View Financials
            </Link>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-coral-100/30 rounded-full blur-3xl -z-10" />
      </section>

      {/* Trust & Features Banner */}
      <section className="bg-earth-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-earth-800">
            <div className="p-4">
              <h3 className="text-3xl font-bold text-white mb-2">98%</h3>
              <p className="text-coral-400 font-medium">Direct to Programs</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl font-bold text-white mb-2">Zero</h3>
              <p className="text-coral-400 font-medium">International Banking Fees</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl font-bold text-white mb-2">100%</h3>
              <p className="text-coral-400 font-medium">Anonymous Options Available</p>
            </div>
          </div>
        </div>
      </section>

      <HomeAbout />
      <Stories />
    </>
  )
}
