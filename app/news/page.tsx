import { motion } from 'framer-motion'
import { Newspaper, Calendar, ArrowRight, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

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
  {
    id: 4,
    title: 'Partnership Announced: Kids Room Foundation x UNICEF Blockchain Initiative',
    excerpt: 'We are proud to announce a strategic partnership with UNICEF\'s blockchain initiative to expand our reach and improve transparency in charitable giving.',
    date: 'May 22, 2024',
    readTime: '2 min read',
    category: 'Partnership',
    featured: false,
  },
  {
    id: 5,
    title: 'Q2 2024 Transparency Report Published',
    excerpt: 'Our quarterly transparency report is now live. See exactly how every dollar was spent, from education programs to healthcare initiatives and operational costs.',
    date: 'May 1, 2024',
    readTime: '5 min read',
    category: 'Report',
    featured: false,
  },
  {
    id: 6,
    title: 'How Blockchain is Revolutionizing Charity Transparency',
    excerpt: 'An in-depth look at how blockchain technology is changing the way charities operate, with real examples from our own donation tracking system.',
    date: 'April 18, 2024',
    readTime: '7 min read',
    category: 'Education',
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral-50 border border-coral-200 mb-6">
            <Newspaper className="w-4 h-4 text-coral-500" />
            <span className="text-sm font-medium text-coral-700">
              News & Updates
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-earth-800 mb-4">
            Latest from <span className="text-gradient">Kids Room</span>
          </h1>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Stories, updates, and insights from our mission to help children worldwide.
          </p>
        </motion.div>

        {featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 bg-white rounded-3xl shadow-xl shadow-earth-100/50 border border-coral-100/50 overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-coral-100 to-earth-100 p-12 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <Image
                    src="/images/logo.png"
                    alt="Featured"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-coral-100 text-coral-700 text-xs font-semibold rounded-full">
                    {featuredArticle.category}
                  </span>
                  <span className="text-sm text-earth-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {featuredArticle.date}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-earth-800 mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-earth-600 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-earth-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {featuredArticle.readTime}
                  </span>
                  <button className="inline-flex items-center gap-2 text-coral-600 font-semibold hover:text-coral-700 transition-colors">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-3xl shadow-lg shadow-earth-100/50 border border-coral-100/50 p-6 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-earth-100 text-earth-600 text-xs font-semibold rounded-full">
                  {article.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-earth-800 mb-3 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-earth-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-earth-100">
                <span className="text-xs text-earth-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </span>
                <span className="text-xs text-earth-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
