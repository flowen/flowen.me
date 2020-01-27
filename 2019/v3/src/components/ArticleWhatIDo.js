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
      <h1>What can I do for you?</h1>

      <p>
        Do you need a performant and accessible websites?
        <br />
        Are you looking for beautiful, modern user interfaces (UI) ?
        <br />
        Or use micro-interactions, 3d or animation to spice up the experience of
        your website?
        <br />
        <br />
        Or perhaps need a experienced front-end developer in your team who can
        wiggle with both the code and design?
      </p>

      <p>
        Consultance for your current UI/UX project? Need answers for design or
        accessibility questions? Or even someone that can manage a small team
        while designing and coding?
        <br />
        <br />
        You're in luck{' '}
        <span className="emoji" role="img" aria-label="party face">
          {' '}
          🥳
        </span>{' '}
        that's exactly what I can help you with.
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
