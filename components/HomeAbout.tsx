'use client'

import { motion } from 'framer-motion'
import { Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ABOUT_VALUES } from '@/lib/constants'

export default function HomeAbout() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral-50 border border-coral-200 mb-6">
            <Users className="w-4 h-4 text-coral-500" />
            <span className="text-sm font-medium text-coral-700">About Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-earth-800 mb-4">
            Why <span className="text-gradient">Crypto</span> for Good?
          </h2>
          <p className="text-lg text-earth-600 max-w-3xl mx-auto">
            Traditional charity donations often lose 10-20% to banking fees and intermediaries.
            Blockchain technology allows us to put 98% of every donation directly into the hands
            of children who need it most.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ABOUT_VALUES.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-8 shadow-lg shadow-earth-100/50 border border-coral-100/50 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-coral-100 to-earth-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-7 h-7 text-coral-600" />
              </div>
              <h3 className="text-xl font-bold text-earth-800 mb-3">{value.title}</h3>
              <p className="text-earth-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-coral-500 to-earth-500 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h3>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            To leverage blockchain technology to create a more transparent, efficient,
            and accessible way to support children in need worldwide. We believe every
            child deserves education, healthcare, and a chance to thrive regardless of
            where they were born.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {['Education', 'Healthcare', 'Nutrition', 'Shelter'].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-coral-600 font-semibold rounded-xl hover:bg-white/90 transition-colors"
            >
              Read Our Full Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
