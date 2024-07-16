import React from 'react'

import { Footer } from '@/components/layout'

import { HeroBanner } from './_components/HeroBanner'
import { IconSection } from './_components/IconSection'
import { DetailBanner } from './_components/DetailBanner'
import { RedirectBanner } from './_components/RedirectBanner'

const LandingPage = () => {
  return (
    <div>
      <HeroBanner />
      <IconSection />
      <div style={{ height: 720 }} />
      <DetailBanner />
      <RedirectBanner />
      <Footer />
    </div>
  )
}

export default LandingPage
