import React from 'react'
import Layout from '../templates/layout'
import Intro from '../components/s-intro'
import CTA from '../components/s-cta'
import Hi from '../components/s-hi'
import Services from '../components/s-services'
import Outro from '../components/s-outro'
import Gridlines from '../components/gridlines'

import '../lib/polyfill-foreach'

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
