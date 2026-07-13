import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import AdBanner from '@/components/AdBanner'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const newsDirectory = path.join(process.cwd(), 'content/news')
  if (!fs.existsSync(newsDirectory)) return []

  const fileNames = fs.readdirSync(newsDirectory)
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx?$/, ''),
  }))
}

function getArticle(slug: string) {
  const newsDirectory = path.join(process.cwd(), 'content/news')
  const fullPath = path.join(newsDirectory, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    title: data.title,
    date: data.date,
    readTime: data.readTime || '5 min read',
    category: data.category || 'News',
    image: data.image || '/images/logo.png',
    htmlContent: marked.parse(content) as string,
  }
}

export default function ArticlePage({ params }: Props) {
  const article = getArticle(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <article className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link 
          href="/news"
          className="inline-flex items-center gap-2 text-earth-500 hover:text-coral-600 transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to News
        </Link>

        {/* Article Header */}
        <header className="mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="px-3 py-1 bg-coral-100 text-coral-700 text-xs font-semibold rounded-full">
              {article.category}
            </span>
            <span className="text-sm text-earth-400 flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
            <span className="text-sm text-earth-400 flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-earth-800 mb-6 leading-tight">
            {article.title}
          </h1>
        </header>

        {/* Article Hero Image */}
        <div className="relative h-[300px] sm:h-[450px] w-full bg-earth-100 rounded-3xl overflow-hidden mb-12 shadow-xl shadow-earth-100/50">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Top Ad Banner */}
        <div className="mb-12 bg-white rounded-2xl shadow-sm border border-coral-100/50 p-4">
          <p className="text-xs text-earth-400 text-center mb-2">Advertisement</p>
          <AdBanner slot="8150475435765548" className="min-h-[250px]" />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-earth prose-lg max-w-none text-earth-700 leading-relaxed mb-12
                     prose-headings:text-earth-800 prose-headings:font-bold prose-headings:mt-10
                     prose-a:text-coral-600 hover:prose-a:text-coral-500
                     prose-blockquote:border-l-4 prose-blockquote:border-coral-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:bg-coral-50/50 prose-blockquote:py-2 prose-blockquote:rounded-r-xl
                     prose-img:rounded-2xl prose-img:shadow-lg
                     prose-ul:list-disc prose-ul:pl-6 prose-li:my-2"
          dangerouslySetInnerHTML={{ __html: article.htmlContent }}
        />

        {/* Bottom Ad Banner */}
        <div className="mt-16 bg-white rounded-2xl shadow-sm border border-coral-100/50 p-4">
          <p className="text-xs text-earth-400 text-center mb-2">Advertisement</p>
          <AdBanner slot="8150475435765548" className="min-h-[250px]" />
        </div>
        
      </div>
    </article>
  )
}
