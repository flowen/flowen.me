import React, { useEffect } from 'react'
import { TimelineLite, TweenLite } from 'gsap'
import { ease } from '../utils/ease'
import useIntersection from '../hooks/useIntersectionobserver'
import logger from '../utils/logger'

const ArticleProjects = () => {
  const tl = new TimelineLite({
    paused: true,
    onComplete: () =>
      logger({
        category: 'Projects section',
        action: 'User viewed section Projects',
      }),
  })
  const { observerEntry, elRef } = useIntersection({ threshold: 0.35 })
  const TITLE = '.article--projects'
  const PROJECTLIST = '.projects__list'
  const PARAGRAPHS = '.article--projects p'

  useEffect(() => {
    TweenLite.set(TITLE, { opacity: 0 })
    TweenLite.set(PROJECTLIST, { opacity: 0 })
    TweenLite.set(PARAGRAPHS, { opacity: 0 })
  }, [])

  if (observerEntry.isIntersecting) {
    tl.to(TITLE, 0.5, { opacity: 1, ease })
      .to(PROJECTLIST, 0.5, {
        opacity: 1,
        ease,
        onComplete: () =>
          document
            .querySelector(PROJECTLIST)
            .setAttribute('data-visible', true),
      })
      .to(PARAGRAPHS, 0.5, { opacity: 1, ease })
      .play()
  }

  return (
    <article className="article article--projects projects" ref={elRef}>
      <h1 className="projects__title">Some projects</h1>

      <ul className="projects__list">
        <li className="projects__listitem">
          <a
            className="anchor"
            href="https://principlesofwealth.net"
            target="_blank"
            rel="noopener noreferrer external"
          >
            Principles of wealth
            <span
              className="emoji emoji--fire"
              role="img"
              aria-label="hot hot hot"
            >
              🔥
            </span>
            <span
              className="emoji emoji--fire"
              role="img"
              aria-label="hot hot hot"
            >
              🔥
            </span>
            <span
              className="emoji emoji--fire"
              role="img"
              aria-label="hot hot hot"
            >
              🔥
            </span>
          </a>
        </li>
        <li className="projects__listitem">
          <a
            className="anchor anchor--hot js--hot"
            href="https://problem.studio/"
            target="_blank"
            rel="noopener noreferrer external"
          >
            Problem Studio
            <span
              className="emoji emoji--fire"
              role="img"
              aria-label="hot hot hot"
            >
              🔥
            </span>
            <span
              className="emoji emoji--fire"
              role="img"
              aria-label="hot hot hot"
            >
              🔥
            </span>
            <span
              className="emoji emoji--fire"
              role="img"
              aria-label="hot hot hot"
            >
              🔥
            </span>
          </a>
        </li>
        <li className="projects__listitem">Dashboard designs for Migros</li>
        <li className="projects__listitem">
          <a
            className="anchor"
            href="http://nieuwe.jaarbeurs.nl/"
            target="_blank"
            rel="noopener noreferrer external"
          >
            Static frontpage for Jaarbeurs.nl
          </a>
        </li>
        <li className="projects__listitem">
          <a
            className="anchor"
            href="https://mevishaslam.com/"
            target="_blank"
            rel="noopener noreferrer external"
          >
            Mevish Aslam Business coach
          </a>
        </li>
        <li className="projects__listitem">
          <a
            className="anchor"
            href="https://theatrejs-demo.netlify.com"
            target="_blank"
            rel="noopener noreferrer external"
          >
            Audiovisual animation for TheatreJS
          </a>
        </li>
        <li className="projects__listitem">
          <a
            className="anchor"
            href="https://www.mirabeau.nl/"
            target="_blank"
            rel="noopener noreferrer external"
          >
            Studio Mirabeau
          </a>
        </li>
        <li className="projects__listitem">
          <a
            className="anchor"
            href="http://huisartsenpensioen.nl"
            target="_blank"
            rel="noopener noreferrer external"
          >
            Huisartsen pensioen
          </a>
        </li>
        <li className="projects__listitem">
          <a
            className="anchor"
            href="https://shinbyeong.com"
            target="_blank"
            rel="noopener noreferrer external"
          >
            Oh yea I wrote a fiction book once
          </a>
        </li>
      </ul>

      <p class="projects__description">
        I've worked with agile, remote and waterfall methods. Sprints, story
        estimation and project managing a small team including junior developers
        are part of my experience.
        <br /> <br />
        As a senior developer I also lead projects and can help managing small
        to mid-size projects.
      </p>
    </article>
  )
}

export default ArticleProjects
