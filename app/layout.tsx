import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdSenseScript from '@/components/AdSenseScript'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kids Room Foundation | Crypto Charity for Children',
  description: 'Leveraging blockchain technology to create a transparent, efficient way to support children in need worldwide through crypto donations.',
  keywords: ['crypto charity', 'donate crypto', 'children foundation', 'bitcoin donation', 'blockchain charity', 'Kids Room Foundation'],
  authors: [{ name: 'Kids Room Foundation' }],
  openGraph: {
    title: 'Kids Room Foundation',
    description: 'Empowering children worldwide through transparent crypto donations.',
    url: 'https://www.kidsroomfoundation.com',
    siteName: 'Kids Room Foundation',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kids Room Foundation',
    description: 'Empowering children worldwide through transparent crypto donations.',
    creator: '@kidsroomfund',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <AdSenseScript />
      </head>
      <body className={`${inter.className} bg-earth-50 text-earth-900 antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
