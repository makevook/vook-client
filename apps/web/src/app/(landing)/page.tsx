'use client'

import React from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

import { HeroBanner } from './_components/HeroBanner'
import { IconSection } from './_components/IconSection'
import { DetailBanner } from './_components/DetailBanner'
import { RedirectBanner } from './_components/RedirectBanner'

const LandingPage = () => {
  const router = useRouter()

  if (Cookies.get('access')) {
    router.push('/workspace')
  }

  return (
    <div style={{ width: '100%' }}>
      <HeroBanner />
      <IconSection />
      <div style={{ height: 720 }} />
      <DetailBanner />
      <RedirectBanner />
    </div>
  )
}

export default LandingPage
