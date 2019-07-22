import '../utils/welcomelog'

import React from 'react'
import Layout from '../components/layout'
import Intro from '../components/section-intro'
import CTA from '../components/section-cta'
import Hi from '../components/section-hi'
import Services from '../components/section-services'
import Outro from '../components/section-outro'
import Gridlines from '../components/gridlines'

export default () => {
  return (
    <Layout>
      <Intro />
      <CTA />
      <Hi />
      <Services />
      <Outro />
      <Gridlines />
    </Layout>
  )
}
