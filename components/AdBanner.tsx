'use client'

import { useEffect, useRef } from 'react'

interface AdBannerProps {
  slot: string
  style?: React.CSSProperties
  className?: string
}

export default function AdBanner({ slot, style, className }: AdBannerProps) {
  const adLoaded = useRef(false)

  useEffect(() => {
    if (!adLoaded.current) {
      try {
        // @ts-ignore
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        adLoaded.current = true
      } catch (e) {
        console.error('AdSense error:', e)
      }
    }
  }, [])

  return (
    <ins
      className={`adsbygoogle ${className || ''}`}
      style={{
        display: 'block',
        ...style,
      }}
      data-ad-client="ca-pub-8150475435765548"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}
