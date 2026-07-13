'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Twitter, Mail, MapPin, Heart, ShieldCheck, FileText, Ghost } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-earth-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Banner */}
        <div className="bg-earth-800 rounded-2xl p-6 mb-12 flex flex-col md:flex-row items-center justify-around gap-6 text-center border border-earth-700">
          <div className="flex items-center gap-3">
            <Ghost className="w-6 h-6 text-coral-500" />
            <div className="text-left">
              <h4 className="font-bold text-white text-sm">100% Anonymous</h4>
              <p className="text-earth-400 text-xs">Donate without sharing personal data</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-coral-500" />
            <div className="text-left">
              <h4 className="font-bold text-white text-sm">Instant Tax Receipts</h4>
              <p className="text-earth-400 text-xs">Automated 501(c)(3) compliant receipts</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-coral-500" />
            <div className="text-left">
              <h4 className="font-bold text-white text-sm">On-Chain Transparency</h4>
              <p className="text-earth-400 text-xs">Track your impact in real-time</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-earth-800 pb-12">
          {/* Brand & About */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-40 h-12">
                <Image
                  src="/images/logo.png"
                  alt="Kids Room Foundation"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-earth-400 text-sm leading-relaxed mb-6">
              Leveraging blockchain technology to create a more transparent, efficient, and accessible way to support children in need worldwide.
            </p>
            <Link 
              href="/donate" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-coral-500 hover:bg-coral-400 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              <Heart className="w-4 h-4" />
              Donate Now
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-earth-400 hover:text-coral-400 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/news" className="text-earth-400 hover:text-coral-400 transition-colors text-sm">News & Updates</Link></li>
              <li><Link href="/transparency" className="text-earth-400 hover:text-coral-400 transition-colors text-sm">Financial Transparency</Link></li>
              <li><Link href="/contact" className="text-earth-400 hover:text-coral-400 transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-earth-400 text-sm">
                <MapPin className="w-5 h-5 text-coral-500 shrink-0" />
                <span>123 Charity Lane, Suite 400<br />New York, NY 10001<br />United States</span>
              </li>
              <li className="flex items-center gap-3 text-earth-400 text-sm">
                <Mail className="w-5 h-5 text-coral-500 shrink-0" />
                <a href="mailto:hello@kidsroomfoundation.com" className="hover:text-coral-400 transition-colors">hello@kidsroomfoundation.com</a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Follow Us</h3>
            <div className="flex flex-col space-y-4">
              <a href="https://instagram.com/kidsroomfoundation" target="_blank" rel="noopener noreferrer" aria-label="Follow Kids Room Foundation on Instagram" className="flex items-center gap-3 text-earth-400 hover:text-coral-400 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-earth-800 flex items-center justify-center group-hover:bg-coral-500/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">@kidsroomfoundation</span>
              </a>
              <a href="https://twitter.com/kidsroomfund" target="_blank" rel="noopener noreferrer" aria-label="Follow Kids Room Foundation on Twitter" className="flex items-center gap-3 text-earth-400 hover:text-coral-400 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-earth-800 flex items-center justify-center group-hover:bg-coral-500/20 transition-colors">
                  <Twitter className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">@kidsroomfund</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Updated to 2026 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-earth-500">
          <p>© 2026 Kids Room Foundation. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-coral-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-coral-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
