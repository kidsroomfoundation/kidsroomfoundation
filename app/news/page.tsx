import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { Newspaper, Calendar, ArrowRight, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import AdBanner from '@/components/AdBanner'

interface Article {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  featured: boolean
  image: string
  content: string
}

// Node logic to fetch all local markdown files dynamically
function getLocalArticles(): Article[] {
  const newsDirectory = path.join(process.cwd(), 'content/news')
  
  // Create directory if it doesn't exist yet to prevent build crashes
  if (!fs.existsSync(newsDirectory)) {
    fs.mkdirSync(newsDirectory, { recursive: true })
    return []
  }

  const fileNames = fs.readdirSync(newsDirectory)
  
  const articles = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '')
      const fullPath = path.join(newsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      
      // Parse frontmatter metadata
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || 'Untitled Article',
        excerpt: data.excerpt || '',
        date: data.date || '',
        readTime: data.readTime || '3 min read',
        category: data.category || 'Update',
        featured: data.featured || false,
        image: data.image || '/images/logo.png', // Fallback to logo image
        content: content,
      } as Article
    })

  // Sort articles by date descending
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export const metadata = {
  title: 'News & Updates - Kids Room Foundation',
  description: 'Latest news, updates, and stories from Kids Room Foundation.',
}

export default function NewsPage() {
  const articles = getLocalArticles()
  const featuredArticle = articles.find((a) => a.featured) || articles[0]
  const regularArticles = articles.filter((a) => a.slug !== featuredArticle?.slug)

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
        </div>

        {/* Ad Banner - Top of News */}
        <div className="mb-12 bg-white rounded-2xl shadow-sm border border-coral-100/50 p-4">
          <p className="text-xs text-earth-400 text-center mb-2">Advertisement</p>
          <AdBanner slot="8150475435765548" className="min-h-[250px]" />
        </div>

        {/* Featured Article Layout */}
        {featuredArticle && (
          <div className="mb-12 bg-white rounded-3xl shadow-xl shadow-earth-100/50 border border-coral-100/50 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[300px] bg-gradient-to-br from-coral-100 to-earth-100 p-12 flex items-center justify-center">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover"
                />
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
                  {/* For full production layout, link this to an individual /news/[slug] page if desired */}
                  <span className="inline-flex items-center gap-2 text-coral-600 font-semibold cursor-pointer hover:text-coral-700 transition-colors">
                    Read Markdown File Below <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Ad Banner - Between Featured and Grid */}
        <div className="mb-12 bg-white rounded-2xl shadow-sm border border-coral-100/50 p-4">
          <p className="text-xs text-earth-400 text-center mb-2">Advertisement</p>
          <AdBanner slot="8150475435765548" className="min-h-[250px]" />
        </div>

        {/* Regular Articles Grid */}
        {regularArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-3xl shadow-lg shadow-earth-100/50 border border-coral-100/50 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative h-48 w-full bg-earth-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-earth-100 text-earth-600 text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-earth-800 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-earth-600 text-sm mb-6 leading-relaxed line-clamp-3">
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
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-earth-500">
            No additional news updates found. Add markdown files inside your content directory to post!
          </div>
        )}
      </div>
    </div>
  )
}
