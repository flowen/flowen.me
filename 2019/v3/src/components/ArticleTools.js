import React, { useEffect } from 'react'
import { TimelineLite, TweenLite } from 'gsap'
import { ease } from '../utils/ease'
import useIntersection from '../hooks/useIntersectionobserver'
import logger from '../utils/logger'

const ArticleTools = () => {
  const tl = new TimelineLite({
    paused: true,
    onComplete: () =>
      logger({
        category: 'Tools section',
        action: 'User viewed section Tools',
      }),
  })
  const { observerEntry, elRef } = useIntersection({ threshold: 0.5 })
  const TITLE = '.tools__title'
  const LISTITEM = '.tools__listitem'

  useEffect(() => {
    TweenLite.set(TITLE, { opacity: 0 })
    TweenLite.set(LISTITEM, { opacity: 0 })
  }, [])

  if (observerEntry.isIntersecting) {
    tl.to(TITLE, 0.5, { opacity: 1, ease })
      .staggerTo(LISTITEM, 0.5, { opacity: 1, ease }, 0.07, '-=.2')
      .play()
  }

  return (
    <article className="article article--tools tools" ref={elRef}>
      <h1 className="tools__title">Some of my favorite tools</h1>

      <ul className="tools__list">
        <li className="tools__listitem">Javascript</li>
        <li className="tools__listitem">React</li>
        <li className="tools__listitem">Gatsby</li>
        <li className="tools__listitem">SCSS</li>
        <li className="tools__listitem">Utility first CSS</li>
        <li className="tools__listitem">SVG</li>
        <li className="tools__listitem">GSAP</li>
      </ul>

      <ul className="tools__list">
        <li className="tools__listitem">VScode</li>
        <li className="tools__listitem">Figma</li>
        <li className="tools__listitem">Sketch</li>
        <li className="tools__listitem">Photoshop</li>
        <li className="tools__listitem">Illustrator</li>
      </ul>

      <ul className="tools__list">
        <li className="tools__listitem">Terminal</li>
        <li className="tools__listitem">GIT</li>
        <li className="tools__listitem">Notion</li>
      </ul>
    </article>
  )
}

export default ArticleTools
