import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service - Kids Room Foundation',
  description: 'Terms of service for Kids Room Foundation website.',
}

export default function TermsPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl shadow-earth-100/50 border border-coral-100/50 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-earth-800 mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-earth max-w-none">
            <p className="text-earth-600 mb-6">
              Last updated: July 1, 2024
            </p>
            
            <h2 className="text-xl font-bold text-earth-800 mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-earth-600 mb-6">
              By accessing and using the Kids Room Foundation website, you accept and agree to be bound 
              by these Terms of Service. If you do not agree, please do not use our website.
            </p>
            
            <h2 className="text-xl font-bold text-earth-800 mt-8 mb-4">
              2. Donations
            </h2>
            <p className="text-earth-600 mb-4">
              All donations made through our website are voluntary and non-refundable. By donating:
            </p>
            <ul className="list-disc list-inside text-earth-600 mb-6 space-y-2">
              <li>You confirm you are the lawful owner of the crypto assets being donated</li>
              <li>You understand blockchain transactions are irreversible</li>
              <li>You acknowledge donations may have tax implications in your jurisdiction</li>
              <li>You agree that we are not responsible for lost funds sent to wrong addresses or wrong networks</li>
            </ul>
            
            <h2 className="text-xl font-bold text-earth-800 mt-8 mb-4">
              3. Use of Website
            </h2>
            <p className="text-earth-600 mb-6">
              You agree to use our website only for lawful purposes. You must not use our website in any 
              way that causes harm, interferes with other users, or violates applicable laws.
            </p>
            
            <h2 className="text-xl font-bold text-earth-800 mt-8 mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-earth-600 mb-6">
              All content on this website, including text, graphics, logos, and images, is the property 
              of Kids Room Foundation and protected by copyright and trademark laws.
            </p>
            
            <h2 className="text-xl font-bold text-earth-800 mt-8 mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-earth-600 mb-6">
              Kids Room Foundation is not liable for any direct, indirect, incidental, or consequential 
              damages arising from your use of this website or donation of cryptocurrency.
            </p>
            
            <h2 className="text-xl font-bold text-earth-800 mt-8 mb-4">
              6. Changes to Terms
            </h2>
            <p className="text-earth-600 mb-6">
              We reserve the right to modify these terms at any time. Continued use of the website 
              after changes constitutes acceptance of the new terms.
            </p>
            
            <h2 className="text-xl font-bold text-earth-800 mt-8 mb-4">
              7. Contact
            </h2>
            <p className="text-earth-600 mb-6">
              Questions about these terms? Contact us at{' '}
              <a href="mailto:hello@kidsroomfoundation.com" className="text-coral-600 hover:underline">
                hello@kidsroomfoundation.com
              </a>.
            </p>
          </div>
          
          <div className="mt-8 pt-8 border-t border-earth-100">
            <Link href="/" className="text-coral-600 font-semibold hover:text-coral-700 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
