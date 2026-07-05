import { Newspaper, Calendar, ArrowRight, Clock } from 'lucide-react'
import Image from 'next/image'
import AdBanner from '@/components/AdBanner'

const newsArticles = [
  {
    id: 1,
    title: 'Kids Room Foundation Reaches $2 Million in Crypto Donations',
    excerpt: 'Thanks to our incredible community of donors, we have officially crossed the $2 million mark in total crypto donations. These funds have directly supported over 12,500 children across 28 countries.',
    date: 'June 28, 2024',
    readTime: '3 min read',
    category: 'Milestone',
    featured: true,
  },
  {
    id: 2,
    title: 'New School Opens in Rural Kenya Funded by Bitcoin Donations',
    excerpt: 'A new 12-classroom school has opened its doors in rural Kenya, fully funded by Bitcoin donations from our community. The school will serve 400 children annually.',
    date: 'June 15, 2024',
    readTime: '4 min read',
    category: 'Project Update',
    featured: false,
  },
  {
    id: 3,
    title: 'Understanding Crypto Donations: A Guide for First-Time Donors',
    excerpt: 'New to crypto? This comprehensive guide walks you through sending your first donation, choosing the right network, and understanding transaction fees.',
    date: 'June 10, 2024',
    readTime: '6 min read',
    category: 'Guide',
    featured: false,
  },
]

export const metadata = {
  title: 'News & Updates - Kids Room Foundation',
  description: 'Latest news, updates, and stories from Kids Room Foundation.',
}

export default function NewsPage() {
  const featuredArticle = newsArticles.find(a => a.featured)
  const regularArticles = newsArticles.filter(a => !a.featured)

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral-50 border border-coral-200 mb-6">
            <Newspaper className="w-4 h-4 text-coral-500" />
            <span className="text-sm font-medium text-coral-700">News & Updates</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-earth-800 mb-4">
            Latest from <span className="text-gradient">Kids Room</span>
          </h1>
        </div>

        {featuredArticle && (
          <div className="mb-12 bg-white rounded-3xl shadow-xl shadow-earth-100/50 border border-coral-100/50 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-coral-100 to-earth-100 p-12 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <Image src="/images/logo.png" alt="Featured" fill className="object-contain" />
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-earth-800 mb-4">{featuredArticle.title}</h2>
                <p className="text-earth-600 mb-6">{featuredArticle.excerpt}</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article) => (
            <article key={article.id} className="bg-white rounded-3xl shadow-lg shadow-earth-100/50 border border-coral-100/50 p-6">
              <h3 className="text-xl font-bold text-earth-800 mb-3">{article.title}</h3>
              <p className="text-earth-600 text-sm mb-6">{article.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
