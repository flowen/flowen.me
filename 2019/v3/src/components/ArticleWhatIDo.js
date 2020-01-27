import React, { useEffect } from 'react'
import { TimelineLite, TweenLite } from 'gsap'
import { ease } from '../utils/ease'
import useIntersection from '../hooks/useIntersectionobserver'
import logger from '../utils/logger'

const ArticleWhatIDo = () => {
  const tl = new TimelineLite({
    paused: true,
    onComplete: () =>
      logger({
        category: 'WhatIDo section',
        action: 'User viewed section WhatIDo',
      }),
  })
  const { observerEntry, elRef } = useIntersection({ threshold: 0.5 })
  const TITLE = '.what-i-do h1'
  const PARAGRAPHS = '.what-i-do p'

  useEffect(() => {
    TweenLite.set(TITLE, { opacity: 0 })
    TweenLite.set(PARAGRAPHS, { opacity: 0 })
  }, [])

  if (observerEntry.isIntersecting) {
    tl.to(TITLE, 0.5, { opacity: 1, ease })
      .staggerTo(PARAGRAPHS, 0.5, { opacity: 1, ease }, 0.1, '-=.3')
      .play()
  }

  return (
    <article className="article article--what-i-do what-i-do" ref={elRef}>
      <h1>What I do</h1>

      <p>
        I create performant and accessible websites with beautiful and modern
        user interfaces (UI).
        <br />I love micro-interactions, three.js and animation.
        <br />
        I'm comfortable working in a lot of different environments: React, Vue,
        Gatsby, Wordpress, Sitecore, Episerver, etc.
      </p>

      <p>
        I also consult on UI/UX, designs and accessibility and can project
        manage small teams.
      </p>

      <p>
        People call me a patient and clear communicator
        <span
          className="emoji emoji--hands-up"
          role="img"
          aria-label="exclamate"
        >
          {' '}
          🙌
        </span>
      </p>
    </article>
  )
}

export default ArticleWhatIDo
