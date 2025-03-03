import React, { useEffect } from 'react'
import { TimelineLite } from 'gsap'
import { ease } from '../utils/ease'
import logger from '../utils/logger'

import R from './characters/r'
import O from './characters/o'
import U from './characters/u'
import H from './characters/h'
import N from './characters/n'
import F from './characters/f'
import A from './characters/a'

if (typeof window !== `undefined`) {
  // eslint-disable-next-line
  require('../lib/DrawSVGPlugin.js')
}

const Intro = () => {
  const tl = new TimelineLite({
    paused: true,
    onComplete: () =>
      logger({
        category: 'Intro section',
        action: 'User viewed section Intro',
      }),
  })

  const m = 1.5 // multiplier
  const t1 = 0.75 * m
  const t2 = 1.75 * m

  useEffect(() => {
    document.querySelector('.rouhun').classList.remove('not-visible')
    document.querySelector('.container').classList.remove('not-visible')

    // prettier-ignore
    tl.add('startLabel', 0)
      .add('lowerCaseLabel', 0.5 * m)
      .to('.rouhun .js--r', t1, { drawSVG: '0% 100%', ease }, 'startLabel')
      .to('.rouhun .js--o', t2, { drawSVG: '0% 100%', ease }, 'lowerCaseLabel')
      .to('.rouhun .js--u', t2, { drawSVG: '0% 100%', ease }, 'lowerCaseLabel+=.5')
      .to('.rouhun .js--h', t1, { drawSVG: '0% 100%', ease }, 'startLabel')
      .to('.rouhun .js--u', t2, { drawSVG: '0% 100%', ease }, 'lowerCaseLabel+=.5')
      .to('.rouhun .js--n', t2, { drawSVG: '0% 100%', ease }, 'lowerCaseLabel+=.75')
      .to('.fan .js--f', t1, { drawSVG: '0% 100%', ease }, 'lowerCaseLabel')
      .to('.fan .js--a', t2, { drawSVG: '0% 100%', ease }, 'lowerCaseLabel+=.5')
      .to('.fan .js--n', t2, { drawSVG: '0% 100%', ease }, 'lowerCaseLabel+=.5')
      .to('.occupation', t2, { opacity: 1, ease }, 'lowerCaseLabel+=.75')
      .play();
  }, [])

  return (
    <section className="intro">
      <div className="rouhun not-visible">
        <R />
        <O />
        <U />
        <H />
        <U />
        <N />
      </div>

      <div className="container not-visible">
        <div className="fan">
          <F />
          <A />
          <N />
        </div>

        <p className="occupation">
          Fan of you!
          <br /> &amp; front-end UI developer
        </p>
      </div>
    </section>
  )
}

export default Intro
