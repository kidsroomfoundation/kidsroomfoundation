'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, Heart, Shield, Zap, Globe, ExternalLink, Wallet } from 'lucide-react'

const WALLET_ADDRESSES = {
  btc: 'bc1qfwvcxf4lxu7pm7zjz4765a0ex3sw6sqv3h2ace',
  eth: '0x814124d2b00f1654ec0954dfb8f5ed8d06488e7b',
  sol: 'XxDMtxTBC8mLepvXeacBAKhtez5iJuAFKgfmSt18YNy',
  usdt_trc20: 'TVa2djKcc2dTZo6PrKYRhYHTkTV6w69zf6',
  usdt_erc20: '0x814124D2b00f1654Ec0954dfb8F5ED8D06488E7b',
  usdc_erc20: '0x814124D2b00f1654Ec0954dfb8F5ED8D06488E7b',
} as const

const CRYPTO_OPTIONS = [
  {
    id: 'eth',
    name: 'Ethereum',
    symbol: 'ETH',
    icon: 'Ξ',
    color: '#627EEA',
    address: WALLET_ADDRESSES.eth,
    chain: 'ERC20',
    presets: ['0.01', '0.05', '0.1', '0.5', '1', '5'],
  },
  {
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: '₿',
    color: '#F7931A',
    address: WALLET_ADDRESSES.btc,
    chain: 'Bitcoin',
    presets: ['0.001', '0.005', '0.01', '0.05', '0.1', '0.5'],
  },
  {
    id: 'sol',
    name: 'Solana',
    symbol: 'SOL',
    icon: '◎',
    color: '#14F195',
    address: WALLET_ADDRESSES.sol,
    chain: 'Solana',
    presets: ['0.1', '0.5', '1', '5', '10', '50'],
  },
  {
    id: 'usdt_erc20',
    name: 'USDT',
    symbol: 'USDT',
    icon: '₮',
    color: '#26A17B',
    address: WALLET_ADDRESSES.usdt_erc20,
    chain: 'ERC20',
    presets: ['10', '25', '50', '100', '500', '1000'],
  },
  {
    id: 'usdt_trc20',
    name: 'USDT (TRC20)',
    symbol: 'USDT',
    icon: '₮',
    color: '#FF060A',
    address: WALLET_ADDRESSES.usdt_trc20,
    chain: 'TRC20',
    presets: ['10', '25', '50', '100', '500', '1000'],
  },
  {
    id: 'usdc_erc20',
    name: 'USDC',
    symbol: 'USDC',
    icon: '$',
    color: '#2775CA',
    address: WALLET_ADDRESSES.usdc_erc20,
    chain: 'ERC20',
    presets: ['10', '25', '50', '100', '500', '1000'],
  },
]

export default function DonationSection() {
  const [selectedCrypto, setSelectedCrypto] = useState(CRYPTO_OPTIONS[0])
  const [copied, setCopied] = useState(false)

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(selectedCrypto.address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="donate" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral-50 border border-coral-200 mb-6">
            <Heart className="w-4 h-4 text-coral-500" fill="currentColor" />
            <span className="text-sm font-medium text-coral-700">Make a Difference</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-earth-800 mb-4">
            Choose Your <span className="text-gradient">Donation</span>
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Select your preferred cryptocurrency and send directly to our verified wallet. Every donation is recorded on the blockchain for complete transparency.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl shadow-xl shadow-earth-100/50 border border-coral-100/50 p-8">
              <div className="mb-8">
                <label className="block text-sm font-semibold text-earth-700 mb-4">Select Cryptocurrency</label>
                <div className="grid grid-cols-2 gap-3">
                  {CRYPTO_OPTIONS.map((crypto) => (
                    <button
                      key={crypto.id}
                      onClick={() => setSelectedCrypto(crypto)}
                      className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all ${
                        selectedCrypto.id === crypto.id ? 'border-coral-400 bg-coral-50' : 'border-earth-100 hover:border-coral-200'
                      }`}
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                        style={{ backgroundColor: crypto.color }}
                      >
                        {crypto.icon}
                      </div>
                      <div className="text-left min-w-0">
                        <div className="font-semibold text-earth-800 text-sm">{crypto.name}</div>
                        <div className="text-xs text-earth-500">{crypto.chain}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-earth-700 mb-4">
                  Suggested Amounts ({selectedCrypto.symbol})
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {selectedCrypto.presets.map((preset) => (
                    <div
                      key={preset}
                      className="py-3 rounded-xl font-semibold text-sm bg-earth-50 text-earth-700 text-center border border-earth-100"
                    >
                      {preset} {selectedCrypto.symbol}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-coral-50 rounded-2xl border border-coral-200">
                <div className="flex items-center gap-3 mb-3">
                  <Wallet className="w-5 h-5 text-coral-600" />
                  <span className="font-semibold text-earth-800">How to Donate</span>
                </div>
                <ol className="text-sm text-earth-600 space-y-2 list-decimal list-inside">
                  <li>Copy the wallet address on the right</li>
                  <li>Open your crypto wallet app</li>
                  <li>Paste the address and enter your amount</li>
                  <li>Confirm the transaction</li>
                </ol>
                <p className="text-xs text-earth-500 mt-3">
                  Make sure you send on the <strong>{selectedCrypto.chain}</strong> network only.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl shadow-xl shadow-earth-100/50 border border-coral-100/50 p-8 text-center">
              <h3 className="text-xl font-bold text-earth-800 mb-2">Direct Transfer</h3>
              <p className="text-sm text-earth-500 mb-6">Send {selectedCrypto.symbol} on {selectedCrypto.chain} to this address</p>

              <div
                className="w-24 h-24 mx-auto mb-6 rounded-3xl flex items-center justify-center text-4xl"
                style={{
                  backgroundColor: selectedCrypto.color + '15',
                  color: selectedCrypto.color,
                }}
              >
                {selectedCrypto.icon}
              </div>

              <div className="bg-earth-50 rounded-xl p-4 mb-4">
                <div className="text-xs text-earth-400 uppercase tracking-wider mb-2 font-semibold">
                  {selectedCrypto.name} Address ({selectedCrypto.chain})
                </div>
                <code className="block text-sm text-earth-700 break-all font-mono leading-relaxed">
                  {selectedCrypto.address}
                </code>
              </div>

              <button
                onClick={handleCopyAddress}
                className="w-full py-3 px-4 bg-earth-800 text-white font-semibold rounded-xl hover:bg-earth-700 transition-colors flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 text-green-400" />
                    Address Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    Copy Address
                  </>
                )}
              </button>

              {selectedCrypto.id === 'sol' && (
                <a
                  href={`https://explorer.solana.com/address/${selectedCrypto.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm text-coral-600 hover:text-coral-800 font-medium"
                >
                  View on Solana Explorer <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            <div className="bg-white rounded-3xl shadow-xl shadow-earth-100/50 border border-coral-100/50 p-6">
              <h3 className="text-lg font-bold text-earth-800 mb-4">All Donation Addresses</h3>
              <div className="space-y-3">
                {CRYPTO_OPTIONS.map((crypto) => (
                  <div
                    key={crypto.id}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer ${
                      selectedCrypto.id === crypto.id ? 'bg-coral-50 border border-coral-200' : 'bg-earth-50 hover:bg-earth-100'
                    }`}
                    onClick={() => setSelectedCrypto(crypto)}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: crypto.color }}
                    >
                      {crypto.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold text-earth-700">
                        {crypto.name} <span className="text-earth-400">({crypto.chain})</span>
                      </div>
                      <div className="text-xs text-earth-500 truncate font-mono">{crypto.address}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
