import { Users, Target, Heart, Globe, Shield, Award, BookOpen, Stethoscope, Home, Utensils } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const team = [
  {
    name: 'Sarah Mitchell',
    role: 'Founder & CEO',
    bio: 'Former UNICEF advisor with 15 years of experience in child welfare programs across Africa and Asia.',
  },
  {
    name: 'David Chen',
    role: 'Blockchain Director',
    bio: 'Ethereum developer and advocate for transparent philanthropy. Previously built DeFi protocols for social good.',
  },
  {
    name: 'Amara Okafor',
    role: 'Operations Director',
    bio: 'Manages on-ground operations in 12 countries. Background in international development and logistics.',
  },
  {
    name: 'James Wilson',
    role: 'Transparency Officer',
    bio: 'Ensures all donations are tracked and reported. CPA with expertise in nonprofit financial management.',
  },
]

const programs = [
  {
    icon: BookOpen,
    title: 'Education',
    description: 'Building schools, providing scholarships, and supplying learning materials to underprivileged children.',
    stat: '3,200+ Scholarships',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare',
    description: 'Mobile clinics, vaccination programs, and access to essential medicines in remote communities.',
    stat: '45 Mobile Clinics',
  },
  {
    icon: Utensils,
    title: 'Nutrition',
    description: 'Daily meal programs, agricultural training, and emergency food relief during crises.',
    stat: '8,000 Meals/Day',
  },
  {
    icon: Home,
    title: 'Shelter',
    description: 'Safe housing for orphans and displaced children, including reconstruction after natural disasters.',
    stat: '12 Safe Homes',
  },
]

const partners = [
  'UNICEF', 'Save the Children', 'Red Cross', 'World Vision', 'Crypto Relief', 'Gitcoin'
]

export const metadata = {
  title: 'About Us - Kids Room Foundation',
  description: 'Learn about our mission, team, and the impact we are making through transparent crypto donations.',
}

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral-50 border border-coral-200 mb-6">
            <Users className="w-4 h-4 text-coral-500" />
            <span className="text-sm font-medium text-coral-700">
              About Us
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-earth-800 mb-4">
            Our <span className="text-gradient">Story</span> & Mission
          </h1>
          <p className="text-lg text-earth-600 max-w-3xl mx-auto">
            Founded in 2021, Kids Room Foundation was born from a simple belief: 
            every child deserves a safe place to grow, learn, and dream.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-earth-100/50 border border-coral-100/50 p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-earth-800 mb-6">
                Why We Exist
              </h2>
              <p className="text-earth-600 leading-relaxed mb-4">
                In 2021, our founder Sarah Mitchell witnessed firsthand the inefficiencies 
                of traditional charity funding while working in rural Kenya. Donations were 
                losing 20-30% to banking fees, intermediaries, and administrative overhead 
                before reaching the children who needed them.
              </p>
              <p className="text-earth-600 leading-relaxed mb-4">
                She asked a simple question: What if we could send donations directly, 
                transparently, and globally without borders or banks? The answer was blockchain.
              </p>
              <p className="text-earth-600 leading-relaxed">
                Today, Kids Room Foundation operates in 28 countries, has helped over 12,500 
                children, and maintains a 98% fund-to-cause ratio — all made possible by 
                crypto donors like you.
              </p>
            </div>
            <div className="bg-gradient-to-br from-coral-100 to-earth-100 rounded-2xl p-12 flex items-center justify-center">
              <div className="relative w-48 h-48">
                <Image
                  src="/images/logo.png"
                  alt="Kids Room Foundation"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-earth-800 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Child-First Approach',
                description: 'Every decision begins with one question: How does this help a child? No exceptions.',
              },
              {
                icon: Shield,
                title: 'Radical Transparency',
                description: 'Every transaction is on-chain. Every report is public. We have nothing to hide.',
              },
              {
                icon: Globe,
                title: 'Borderless Giving',
                description: 'Crypto knows no borders. Neither does our mission to help every child in need.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-3xl p-8 shadow-lg shadow-earth-100/50 border border-coral-100/50 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-coral-100 to-earth-100 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-coral-600" />
                </div>
                <h3 className="text-xl font-bold text-earth-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-earth-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-earth-800 text-center mb-12">
            Our Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div
                key={program.title}
                className="bg-white rounded-3xl p-8 shadow-lg shadow-earth-100/50 border border-coral-100/50 flex gap-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-coral-400 to-earth-400 flex items-center justify-center flex-shrink-0">
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-earth-800">
                      {program.title}
                    </h3>
                    <span className="px-2 py-1 bg-coral-100 text-coral-700 text-xs font-semibold rounded-full">
                      {program.stat}
                    </span>
                  </div>
                  <p className="text-earth-600 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-earth-800 text-center mb-12">
            Meet the Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-3xl p-6 shadow-lg shadow-earth-100/50 border border-coral-100/50 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-coral-200 to-earth-200 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-earth-700">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-earth-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-coral-600 text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-earth-500 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-earth-800 text-center mb-8">
            Our Partners
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner) => (
              <div
                key={partner}
                className="px-6 py-3 bg-white rounded-xl shadow-md shadow-earth-100/50 border border-coral-100/50 text-earth-700 font-semibold"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-coral-500 to-earth-500 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Mission
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you donate crypto, volunteer your time, or spread the word, 
            you are helping build a world where every child has a safe place to grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#donate"
              className="px-8 py-4 bg-white text-coral-600 font-bold rounded-2xl hover:bg-white/90 transition-colors"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-2xl hover:bg-white/30 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
