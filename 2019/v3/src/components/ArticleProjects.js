import React, { useEffect } from 'react';
import { TimelineLite, TweenLite } from 'gsap';
import { ease } from '../utils/ease';
import useIntersection from '../hooks/useIntersectionobserver';

const ArticleProjects = () => {
  const tl = new TimelineLite();
  const { observerEntry, elRef } = useIntersection({ threshold: 0.35 });
  const TITLE = '.article--projects';
  const PROJECTS = '.projects';
  const PARAGRAPHS = '.article--projects p';

  useEffect(() => {
    TweenLite.set(TITLE, { opacity: 0 });
    TweenLite.set(PROJECTS, { opacity: 0 });
    TweenLite.set(PARAGRAPHS, { opacity: 0 });
  }, []);

  if (observerEntry.isIntersecting) {
    tl.to(TITLE, 0.5, { opacity: 1, ease })
      .to(PROJECTS, 0.5, { opacity: 1, ease })
      .to(PARAGRAPHS, 0.5, { opacity: 1, ease });
  }

  return (
    <article className="article article--projects projects" ref={elRef}>
      <h1>Some projects</h1>

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
            href="https://huisartsenpensioen.nl"
            target="_blank"
            rel="noopener noreferrer external"
          >
            huisartsenpensioen.nl
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
            className="anchor--hot js--hot"
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
        Apart from websites other projects include: interactive games, large
        corporate sites to small marketing landingpages and blogs.
      </p>
    </article>
  );
};

export default ArticleProjects;
