'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, MessageSquare, Clock, CheckCircle, Loader2 } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert('Failed to send message. Please try again later.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Network error. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
            <MessageSquare className="w-4 h-4 text-coral-500" />
            <span className="text-sm font-medium text-coral-700">
              Contact Us
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-earth-800 mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Have questions about donating, partnering, or our work? We would love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl shadow-xl shadow-earth-100/50 border border-coral-100/50 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-earth-800 mb-6">
                Send Us a Message
              </h2>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-earth-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-earth-600">
                    Thank you for reaching out. We will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-earth-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-earth-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-200 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-earth-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-earth-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-200 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-earth-700 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-earth-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-200 outline-none transition-all bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="donation">Questions About Donating</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="media">Media & Press</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-earth-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-earth-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-200 outline-none transition-all resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-primary text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-coral-500/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl shadow-lg shadow-earth-100/50 border border-coral-100/50 p-8">
              <div className="w-12 h-12 rounded-2xl bg-coral-100 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-coral-600" />
              </div>
              <h3 className="text-lg font-bold text-earth-800 mb-2">
                Email Us
              </h3>
              <p className="text-earth-600 text-sm mb-3">
                For general inquiries and support
              </p>
              <a
                href="mailto:hello@kidsroomfoundation.com"
                className="text-coral-600 font-semibold hover:text-coral-700 transition-colors"
              >
                hello@kidsroomfoundation.com
              </a>
            </div>

            <div className="bg-white rounded-3xl shadow-lg shadow-earth-100/50 border border-coral-100/50 p-8">
              <div className="w-12 h-12 rounded-2xl bg-earth-100 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-earth-600" />
              </div>
              <h3 className="text-lg font-bold text-earth-800 mb-2">
                Headquarters
              </h3>
              <p className="text-earth-600 text-sm">
                123 Charity Lane, Suite 400<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg shadow-earth-100/50 border border-coral-100/50 p-8">
              <div className="w-12 h-12 rounded-2xl bg-warm-100 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-warm-600" />
              </div>
              <h3 className="text-lg font-bold text-earth-800 mb-3">
                Phone Contact
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-earth-400">
                    US Headquarters
                  </span>
                  <a
                    href="tel:+1-917-259-0546"
                    className="text-coral-600 font-semibold hover:text-coral-700 transition-colors text-sm"
                  >
                    +1 (917) 259-0546
                  </a>
                </div>
                <div className="pt-2 border-t border-earth-100">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-earth-400">
                    UK Office
                  </span>
                  <a
                    href="tel:+44-7418611342"
                    className="text-coral-600 font-semibold hover:text-coral-700 transition-colors text-sm"
                  >
                    +44 7418611342
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg shadow-earth-100/50 border border-coral-100/50 p-8">
              <div className="w-12 h-12 rounded-2xl bg-coral-100 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-coral-600" />
              </div>
              <h3 className="text-lg font-bold text-earth-800 mb-2">
                Response Time
              </h3>
              <p className="text-earth-600 text-sm">
                We aim to respond to all inquiries within 24 hours. For urgent matters, please email us directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
