import React, { useEffect } from 'react';
import { TimelineLite } from 'gsap';
import { drawSVG } from '../lib/DrawSVGPlugin';
import { ease } from '../utils/ease';
import useIntersection from '../hooks/useIntersectionobserver';

import Nr0 from './characters/0';
import Nr1 from './characters/1';
import Dot from './characters/dot';
import DrawBoxLines from './drawBoxLines';

import me from '../assets/img/me.jpg';
import TweenLite from 'gsap/TweenLite';

const Hi = () => {
  const TITLE = '.hi__article h1';
  const PARAGRAPHS = '.hi__article p';
  const IMG = '.hi__figure img';

  useEffect(() => {
    TweenLite.set(TITLE, { opacity: 0 });
    TweenLite.set(PARAGRAPHS, { opacity: 0 });
    TweenLite.set(IMG, { opacity: 0 });
  }, []);

  const tl = new TimelineLite();
  const { observerEntry, elRef } = useIntersection({ threshold: 0.25 });

  if (observerEntry.isIntersecting) {
    tl.add('start', '0')
      .to('.hi .js--0', 0.5, { drawSVG: '0% 100%', ease })
      .to('.hi .js--1', 0.5, { drawSVG: '0% 100%', ease })
      .to('.hi .js--dot', 0.5, { drawSVG: '0% 100%', ease })
      .to('.hi__article path', 2.5, { drawSVG: '0% 100%' }, 'start')
      .to('.hi__figure path', 2.5, { drawSVG: '0% 100%' }, 'start')
      .add('textLabel', '1')
      .staggerTo(PARAGRAPHS, 0.5, { opacity: 1, ease }, 0.07, 'textLabel')
      .to(TITLE, 0.5, { opacity: 1, ease }, 'textLabel')
      .to(IMG, 0.5, { opacity: 1, ease }, 'textLabel');
  }

  return (
    <section
      className="hi"
      ref={elRef}
      data-visible={observerEntry.isIntersecting}
    >
      <div className="count">
        <Nr0 />
        <Nr1 />
        <Dot />
      </div>

      <article className="hi__article">
        <h1 className="hi__title">
          Hi
          <span className="emoji emoji--peace" role="img" aria-label="vow">
            🤝
          </span>
        </h1>
        <p>
          I'm currently travelling througout Europe and Asia while working
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
        <img src={me} alt="hi it's me" className="hi__img" />
        <DrawBoxLines />
      </figure>
    </section>
  );
};

export default Hi;
