'use client'

import { useState } from 'react'
import { Check, Copy, Wallet } from 'lucide-react'

interface CryptoAddressCardProps {
  network: string
  symbol: string
  address: string
}

export default function CryptoAddressCard({ network, symbol, address }: CryptoAddressCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="bg-white rounded-2xl p-6 border border-coral-100/60 shadow-md shadow-earth-100/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-coral-200">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-coral-50 flex items-center justify-center text-coral-500 shrink-0">
          <Wallet className="w-6 h-6" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-bold text-earth-800">{network}</span>
            <span className="text-xs font-semibold px-2 py-0.5 bg-earth-100 text-earth-600 rounded-md">
              {symbol}
            </span>
          </div>
          <p className="text-sm text-earth-500 font-mono mt-1 break-all select-all">
            {address}
          </p>
        </div>
      </div>
      
      <button
        onClick={handleCopy}
        className={`sm:w-auto w-full py-2.5 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all shrink-0 active:scale-95 ${
          copied
            ? 'bg-green-500 text-white shadow-md shadow-green-500/20'
            : 'bg-earth-800 text-white hover:bg-earth-700'
        }`}
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            Copy Address
          </>
        )}
      </button>
    </div>
  )
}
