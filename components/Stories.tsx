'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const STORIES = [
  {
    type: 'Beneficiary',
    quote: "Because of the funds raised, our community center in Bogotá was able to install new computers and provide daily meals for 50 children. The transparency of seeing the funds arrive directly changed everything for us.",
    author: "Maria V.",
    role: "Community Director, Colombia",
  },
  {
    type: 'Donor',
    quote: "I prefer to keep my philanthropic giving anonymous. Kids Room Foundation allowed me to donate crypto privately while still providing an automated, compliant tax receipt for my records. The perfect balance.",
    author: "Anonymous",
    role: "Bitcoin Donor",
  },
  {
    type: 'Partner',
    quote: "Working with a charity that utilizes smart contracts ensures that our corporate matching gifts are tracked with zero overhead. 98% efficiency is unheard of in traditional philanthropy.",
    author: "David C.",
    role: "Web3 Tech Partner",
  }
]

export default function Stories() {
  return (
    <section className="py-24 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-earth-800 mb-4">
            Real Impact, <span className="text-coral-500">Real Stories</span>
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the people receiving aid and the donors making it possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {STORIES.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-lg shadow-earth-100/50 border border-earth-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-coral-100" />
              <div className="flex items-center gap-1 mb-6 text-coral-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-earth-700 leading-relaxed mb-8 italic">
                "{story.quote}"
              </p>
              <div>
                <h4 className="font-bold text-earth-900">{story.author}</h4>
                <p className="text-sm text-coral-600 font-medium">{story.role}</p>
              </div>
              <span className="absolute top-0 left-8 -translate-y-1/2 px-3 py-1 bg-earth-800 text-white text-xs font-bold rounded-full">
                {story.type}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
