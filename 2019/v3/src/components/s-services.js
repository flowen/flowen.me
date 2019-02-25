import React from 'react';
import { TimelineLite } from 'gsap';
import { drawSVG } from '../lib/DrawSVGPlugin';
import { ease } from '../utils/ease';
import useIntersection from '../hooks/useIntersectionobserver';

import Nr0 from './characters/0';
import Nr2 from './characters/2';
import Dot from './characters/dot';

const Services = () => {
  const tl = new TimelineLite();
  const { observerEntry, elRef } = useIntersection({ threshold: 1 });

  if (observerEntry.isIntersecting) {
    tl.to('.services .js--0', 0.5, { drawSVG: '0% 100%', ease })
      .to('.services .js--2', 0.5, { drawSVG: '0% 100%', ease })
      .to('.services .js--dot', 0.5, { drawSVG: '0% 100%', ease });
  }

  return (
    <section className="services">
      <div className="count" ref={elRef}>
        <Nr0 />
        <Nr2 />
        <Dot />
      </div>

      <article className="article article--what-i-do">
        <h1>What I do</h1>

        <p>
          I love create web user interfaces and creating beautiful and
          accessible animation. I can do this in pretty much any environment:
          React, Vue, Gatsby, Wordpress, Sitecore, Episerver, etc. I find myself
          easy to adjust to whatever coding patterns you are using.
        </p>

        <p>I also consult on UI/UX, designs and accessibility.</p>

        <p>
          And have been called a patient and strong communicator{' '}
          <span
            className="emoji emoji--hands-up"
            role="img"
            aria-label="exclamate"
          >
            🙌
          </span>
        </p>
      </article>

      <article className="article article--projects">
        <h1>Some projects</h1>

        <ul className="projects">
          <li>
            <a
              href="https://www.mirabeau.nl/"
              target="_blank"
              rel="noopener noreferrer external"
            >
              mirabeau.nl
            </a>
          </li>
          <li>
            <a
              href="https://huisartsenpensioen.nl"
              target="_blank"
              rel="noopener noreferrer external"
            >
              huisartsenpensioen.nl
            </a>
          </li>
          <li>
            <a
              href="https://technoinasia.com"
              target="_blank"
              rel="noopener noreferrer external"
            >
              technoinasia.com
            </a>
          </li>
          <li>
            <a
              href="https://shinbyeong.com"
              target="_blank"
              rel="noopener noreferrer external"
            >
              shinbyeong.com
            </a>
          </li>
          <li>
            <a
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
                🔥🔥🔥
              </span>
            </a>
          </li>
        </ul>

        <p>
          Apart from websites other projects include: interactive games, large
          corporate sites to small marketing landingpages and blogs.
        </p>
      </article>

      <article className="article article--tools">
        <h1>Some of my favorite tools</h1>

        <ul className="article__list">
          <li>Javascript es6</li>
          <li>React / Gatsby</li>
          <li>SCSS</li>
          <li>SVG</li>
          <li>GSAP</li>
          <li>three.js</li>
        </ul>

        <ul className="article__list">
          <li>Figma</li>
          <li>Sketch</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>Invision Studio</li>
          <li>Terminal</li>
          <li>GIT</li>
          <li>Notion</li>
        </ul>
      </article>
    </section>
  );
};

export default Services;
