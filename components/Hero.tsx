'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-coral-200/40 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-earth-200/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-coral-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-coral-200 mb-8">
            <Heart className="w-4 h-4 text-coral-500" fill="currentColor" />
            <span className="text-sm font-medium text-coral-700">
              Transparent Blockchain Donations
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative w-40 h-40 mx-auto">
            <Image
              src="/images/logo.png"
              alt="Kids Room Foundation"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
        >
          <span className="text-earth-800">Every Child Deserves</span>
          <br />
          <span className="text-gradient">a Safe Place to Grow</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-earth-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Kids Room Foundation uses blockchain technology to ensure every crypto 
          donation reaches children in need. Transparent, secure, and impactful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/#donate"
            className="px-8 py-4 bg-gradient-primary text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-coral-500/30 transition-all hover:scale-105 animate-pulse-glow"
          >
            Make a Donation
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 bg-white text-earth-700 font-semibold rounded-2xl border border-earth-200 hover:border-coral-300 hover:shadow-lg transition-all"
          >
            Learn More
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { label: 'Children Helped', value: '12,500+' },
            { label: 'Total Donations', value: '$2.4M' },
            { label: 'Countries', value: '28' },
            { label: 'Donors', value: '8,300+' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-coral-100/50"
            >
              <div className="text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-earth-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16"
        >
          <a
            href="#donate"
            className="inline-flex flex-col items-center text-earth-400 hover:text-coral-500 transition-colors"
          >
            <span className="text-sm mb-2">Scroll to donate</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
