import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - Kids Room Foundation',
  description: 'Privacy policy for Kids Room Foundation website.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl shadow-earth-100/50 border border-coral-100/50 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-earth-800 mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-earth max-w-none">
            <p className="text-earth-600 mb-6">
              Last updated: July 1, 2024
            </p>
            
            <h2 className="text-xl font-bold text-earth-800 mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-earth-600 mb-4">
              We collect minimal information to operate our website and process donations:
            </p>
            <ul className="list-disc list-inside text-earth-600 mb-6 space-y-2">
              <li>Contact information (name, email) when you use our contact form</li>
              <li>Blockchain transaction data (publicly available on-chain)</li>
              <li>Website usage analytics (anonymized)</li>
            </ul>
            
            <h2 className="text-xl font-bold text-earth-800 mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-earth-600 mb-4">
              We use your information solely to:
            </p>
            <ul className="list-disc list-inside text-earth-600 mb-6 space-y-2">
              <li>Respond to your inquiries</li>
              <li>Send donation receipts and updates (if you opt in)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <h2 className="text-xl font-bold text-earth-800 mt-8 mb-4">
              3. Crypto Donations
            </h2>
            <p className="text-earth-600 mb-6">
              All crypto donations are processed on public blockchains. Wallet addresses and transaction 
              amounts are publicly visible by design. We do not collect personal information from 
              blockchain transactions unless you voluntarily provide it.
            </p>
            
            <h2 className="text-xl font-bold text-earth-800 mt-8 mb-4">
              4. Data Security
            </h2>
            <p className="text-earth-600 mb-6">
              We implement appropriate security measures to protect your personal information. 
              However, no internet transmission is 100% secure. We encourage you to use secure 
              wallets and verify all transaction details before sending crypto.
            </p>
            
            <h2 className="text-xl font-bold text-earth-800 mt-8 mb-4">
              5. Contact Us
            </h2>
            <p className="text-earth-600 mb-6">
              If you have questions about this privacy policy, please contact us at{' '}
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
