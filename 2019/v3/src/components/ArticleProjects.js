import React, { useEffect } from 'react';
import { TimelineLite, TweenLite } from 'gsap';
import { ease } from '../utils/ease';
import useIntersection from '../hooks/useIntersectionobserver';
import logger from '../utils/logger';

const ArticleProjects = () => {
  const tl = new TimelineLite({
    paused: true,
    onComplete: () =>
      logger({
        category: 'Projects section',
        action: 'User viewed section Projects'
      })
  });
  const { observerEntry, elRef } = useIntersection({ threshold: 0.35 });
  const TITLE = '.article--projects';
  const PROJECTLIST = '.projects__list';
  const PARAGRAPHS = '.article--projects p';

  useEffect(() => {
    TweenLite.set(TITLE, { opacity: 0 });
    TweenLite.set(PROJECTLIST, { opacity: 0 });
    TweenLite.set(PARAGRAPHS, { opacity: 0 });
  }, []);

  if (observerEntry.isIntersecting) {
    tl.to(TITLE, 0.5, { opacity: 1, ease })
      .to(PROJECTLIST, 0.5, {
        opacity: 1,
        ease,
        onComplete: () =>
          document.querySelector(PROJECTLIST).setAttribute('data-visible', true)
      })
      .to(PARAGRAPHS, 0.5, { opacity: 1, ease })
      .play();
  }

  return (
    <article className="article article--projects projects" ref={elRef}>
      <h1 className="projects__title">Some projects</h1>

      <ul className="projects__list">
        <li className="projects__listitem">
          <a
            className="anchor"
            href="https://www.mirabeau.nl/"
            target="_blank"
            rel="noopener noreferrer external"
          >
            mirabeau.nl
          </a>
        </li>
        <li className="projects__listitem">
          <a
            className="anchor"
            href="http://huisartsenpensioen.nl"
            target="_blank"
            rel="noopener noreferrer external"
          >
            huisartsenpensioen.nl
          </a>
        </li>
        <li className="projects__listitem">
          <a
            className="anchor"
            href="https://vvvcadeaubonnen.nl/"
            target="_blank"
            rel="noopener noreferrer external"
          >
            vvvcadeaubonnen.nl
          </a>
        </li>
        <li className="projects__listitem">
          <a
            className="anchor"
            href="https://technoinasia.com"
            target="_blank"
            rel="noopener noreferrer external"
          >
            technoinasia.com
          </a>
        </li>
        <li className="projects__listitem">
          <a
            className="anchor"
            href="https://shinbyeong.com"
            target="_blank"
            rel="noopener noreferrer external"
          >
            shinbyeong.com
          </a>
        </li>
        <li className="projects__listitem">
          <a
            className="anchor anchor--hot js--hot"
            href="https://xenochiku.com/015/"
            target="_blank"
            rel="noopener noreferrer external"
          >
            audiovisual experiments
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
      </ul>

      <p>
        I work with agile, remote and waterfall methods. Sprints, estimation (of
        stories) and managing junior developers are part of my experience.
      </p>
    </article>
  );
};

export default ArticleProjects;
