import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdSenseScript from '@/components/AdSenseScript'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kids Room Foundation - Crypto Donations for Children',
  description: 'Every Child Deserves a Safe Place to Grow. Support children in need through transparent blockchain donations.',
  keywords: ['crypto donation', 'children charity', 'blockchain', 'Ethereum', 'Bitcoin', 'donation', 'kids room foundation'],
  openGraph: {
    title: 'Kids Room Foundation',
    description: 'Every Child Deserves a Safe Place to Grow',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <AdSenseScript />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-b from-coral-50/30 to-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
