import React, { useEffect } from 'react'
import { TweenLite, TimelineLite } from 'gsap'
import { ease } from '../utils/ease'
import useIntersection from '../hooks/useIntersectionobserver'
import logger from '../utils/logger'

import Nr0 from './characters/0'
import Nr3 from './characters/3'
import Dot from './characters/dot'
import Gridlines from './gridlines'

if (typeof window !== `undefined`) {
  // eslint-disable-next-line
  require('../lib/DrawSVGPlugin.js')
}

const Outro = () => {
  const tl = new TimelineLite({
    paused: true,
    onComplete: () =>
      logger({
        category: 'Outro section',
        action: 'User viewed section Outro',
      }),
  })
  const PARAGRAPH = '.outro__paragraph'
  const ANCHOR = '.outro__anchor'
  const EMOJI = '.emoji--point'

  const { observerEntry, elRef } = useIntersection({ threshold: 0.5 })

  useEffect(() => {
    TweenLite.set(PARAGRAPH, { opacity: 0 })
    TweenLite.set(ANCHOR, { opacity: 0 })
    TweenLite.set(EMOJI, { opacity: 0 })
  }, [])

  if (observerEntry.isIntersecting) {
    document.querySelector('.outro').setAttribute('data-visible', true)

    tl.to('.outro .js--0', 0.5, { drawSVG: '0% 100%', ease })
      .to('.outro .js--3', 0.5, { drawSVG: '0% 100%', ease })
      .to('.outro .js--dot', 0.5, { drawSVG: '0% 100%', ease })
      .to(PARAGRAPH, 0.5, { opacity: 1, ease })
      .to(ANCHOR, 0.5, { opacity: 1, ease })
      .to(EMOJI, 0.5, { opacity: 1, ease })
      .play()
  }

  return (
    <section className="outro" ref={elRef}>
      <div className="count">
        <Nr0 />
        <Nr3 />
        <Dot />
      </div>

      <article className="outro__article">
        <p className="outro__paragraph">
          Let me solve your design, front-end or other web-challenges
        </p>
        <span
          className="emoji emoji--point"
          role="img"
          aria-label="pointing right"
        >
          👉
        </span>{' '}
        <a
          href="mailto:lowen@flowen.nl?subject=hi!&body=Tell me about your project in 3 sentences: %0D%0A%0D%0ATell me when you consider your project a success: %0D%0A%0D%0AIs there a budget you have in mind? %0D%0A%0D%0AHow did you find me: "
          className="anchor outro__anchor"
        >
          Contact me
        </a>
      </article>

      <Gridlines />
    </section>
  )
}

export default Outro
