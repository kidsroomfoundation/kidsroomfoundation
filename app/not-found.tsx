import Link from 'next/link'
import { Home, Heart } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 pt-24 pb-12">
      <div className="text-center max-w-xl mx-auto">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-coral-50 rounded-full mb-8">
          <span className="text-5xl font-bold text-coral-500">404</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-earth-800 mb-4">
          Page Not Found
        </h1>
        <p className="text-earth-600 mb-8 text-lg">
          Oops! The page you are looking for seems to have wandered off. Let's get you back to helping children in need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-earth-800 text-white font-semibold rounded-xl hover:bg-earth-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link 
            href="/donate"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-coral-500 text-white font-semibold rounded-xl hover:bg-coral-400 transition-colors shadow-lg shadow-coral-500/30"
          >
            <Heart className="w-5 h-5" />
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  )
}
