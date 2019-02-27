import React, { useEffect } from 'react';
import { TimelineLite, TweenLite } from 'gsap';
import { ease } from '../utils/ease';
import useIntersection from '../hooks/useIntersectionobserver';

const ArticleProjects = () => {
  const tl = new TimelineLite();
  const { observerEntry, elRef } = useIntersection({ threshold: 0.35 });
  const TITLE = '.article--projects';
  const PROJECTLIST = '.projects__list';
  const EMOJI = '.emoji';
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
      .to(PARAGRAPHS, 0.5, { opacity: 1, ease });
  }

  const openVisual = e => {
    e.preventDefault();
    console.log('openVisual');
  };

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
            className="anchor anchor--hot js--hot"
            href="https://xenochiku.com/015/"
            target="_blank"
            rel="noopener noreferrer external"
            onClick={openVisual}
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
        I've worked in agile, remote and waterfall project environments and am
        comfortable with a lot of different project management tools. Working in
        sprints, estimating stories and managing junior developers are part of
        my experience.
      </p>
    </article>
  );
};

export default ArticleProjects;
