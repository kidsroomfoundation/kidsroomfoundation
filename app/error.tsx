'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { AlertTriangle, RefreshCcw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Vercel handles error logging, but you can also log to Sentry here if added later
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 pt-24 pb-12">
      <div className="text-center max-w-xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-earth-100/50 border border-coral-100/50">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 text-red-500 rounded-2xl mb-6">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-earth-800 mb-4">
          Something went wrong!
        </h2>
        <p className="text-earth-600 mb-8">
          We apologize for the inconvenience. An unexpected error occurred on our end.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-earth-800 text-white font-semibold rounded-xl hover:bg-earth-700 transition-colors w-full sm:w-auto"
        >
          <RefreshCcw className="w-5 h-5" />
          Try again
        </button>
      </div>
    </div>
  )
}
