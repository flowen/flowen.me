import React, { useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { TimelineLite, TweenLite } from 'gsap'
import useIntersection from '../hooks/useIntersectionobserver'
import { ease } from '../utils/ease'
import logger from '../utils/logger'

import Nr0 from './characters/0'
import Nr1 from './characters/1'
import Dot from './characters/dot'
import DrawBoxLines from './drawBoxLines'

if (typeof window !== `undefined`) {
  // eslint-disable-next-line
  require('../lib/DrawSVGPlugin.js')
}

const Hi = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fixed(width: 400, height: 400, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const TITLE = '.hi__article h1'
  const PARAGRAPHS = '.hi__article p'
  const IMG = '.hi__img'

  useEffect(() => {
    TweenLite.set(TITLE, { opacity: 0 })
    TweenLite.set(PARAGRAPHS, { opacity: 0 })
    TweenLite.set(IMG, { opacity: 0 })
  }, [])

  const tl = new TimelineLite({
    paused: true,
    onComplete: () =>
      logger({
        category: 'Hi section',
        action: 'User viewed section Hi',
      }),
  })
  const { observerEntry, elRef } = useIntersection({ threshold: 0.5 })

  if (observerEntry.isIntersecting) {
    tl.add('start', '0')
      .to('.hi .js--0', 0.5, { drawSVG: '0% 100%', ease })
      .to('.hi .js--1', 0.5, { drawSVG: '0% 100%', ease })
      .to('.hi .js--dot', 0.5, { drawSVG: '0% 100%', ease })
      .to('.hi__article path', 0.75, { drawSVG: '0% 100%' }, 'start')
      .to('.hi__figure path', 0.75, { drawSVG: '0% 100%' }, 'start')
      .add('textLabel', '1')
      .to(TITLE, 0.5, { opacity: 1, ease }, 'textLabel')
      .staggerTo(PARAGRAPHS, 0.5, { opacity: 1, ease }, 0.1, 'textLabel')
      .to(IMG, 0.5, { opacity: 1, ease }, 'textLabel+=.5')
      .play()
  }

  return (
    <section className="hi" data-visible={observerEntry.isIntersecting}>
      <div className="count">
        <Nr0 />
        <Nr1 />
        <Dot />
      </div>

      <article className="hi__article" ref={elRef}>
        <p className="hi__title">
          Hi
          <span className="emoji emoji--peace" role="img" aria-label="vow">
            🤝
          </span>
        </p>
        <p>
          I'm currently travelling throughout Europe and Asia while working
          remotely with clients.
        </p>

        <p>
          In the Netherlands I've worked with some of the top digital agencies
          such as{' '}
          <a
            className="anchor"
            href="https://www.valtech.nl/"
            target="_blank"
            rel="noopener noreferrer external"
          >
            Valtech
          </a>{' '}
          and{' '}
          <a
            className="anchor"
            href="https://www.mirabeau.nl/"
            target="_blank"
            rel="noopener noreferrer external"
          >
            Mirabeau
          </a>
          .
        </p>

        <p>
          I love typography, graphic design and animation and mix them
          creatively with my technical skills as a developer.
        </p>

        <DrawBoxLines />
      </article>

      <figure className="hi__figure">
        <Img
          fixed={data.file.childImageSharp.fixed}
          alt="hi it's me"
          className="hi__img"
          fadeIn={false}
          style={{
            width: '100%',
          }}
        />
        <DrawBoxLines />
      </figure>
    </section>
  )
}

export default Hi
