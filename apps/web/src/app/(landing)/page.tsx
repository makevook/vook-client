import React from 'react'

import { HeroBanner } from './_components/HeroBanner'
import { DetailBanner } from './_components/DetailBanner'
import Footer from './_components/Footer/Footer'
import { RedirectBanner } from './_components/RedirectBanner'

const LandingPage = () => {
  return (
    <div>
      <HeroBanner />
      <div style={{ height: 720 }} />
      <DetailBanner />
      <RedirectBanner />
      <Footer />
    </div>
  )
}

export default LandingPage
