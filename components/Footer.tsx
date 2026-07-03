'use client'

import { Heart, Github, Twitter, MessageCircle, Mail, ArrowUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-earth-900 text-earth-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.png"
                  alt="Kids Room Foundation"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white block leading-tight">
                  Kids Room Foundation
                </span>
                <span className="text-sm text-coral-300">
                  Every Child Deserves a Safe Place to Grow
                </span>
              </div>
            </div>
            <p className="text-earth-400 leading-relaxed mb-6 max-w-md">
              Building a transparent future for charitable giving. Every crypto 
              donation is tracked on the blockchain, ensuring your contribution 
              reaches children in need.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: 'https://x.com/kidsroomfund', label: 'Twitter' },
                { icon: MessageCircle, href: '#', label: 'Discord' },
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Mail, href: 'mailto:hello@kidsroomfoundation.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-earth-800 flex items-center justify-center hover:bg-coral-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Donate', href: '/#donate' },
                { name: 'News', href: '/news' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-earth-400 hover:text-coral-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {[
                { name: 'How to Donate Crypto', href: '/#donate' },
                { name: 'Tax Information', href: '/about' },
                { name: 'FAQ', href: '/contact' },
                { name: 'Partnerships', href: '/contact' },
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-earth-400 hover:text-coral-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-earth-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-earth-500">
            © 2024 Kids Room Foundation. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-earth-500">
            <Link href="/privacy" className="hover:text-coral-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-coral-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-coral-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-coral-700 transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}
