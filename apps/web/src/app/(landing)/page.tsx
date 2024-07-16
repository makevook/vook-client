import React from 'react'

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
    </div>
  )
}

export default LandingPage
