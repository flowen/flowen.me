import React from 'react';
import { TimelineLite } from 'gsap';
import { drawSVG } from '../lib/DrawSVGPlugin';
import { ease } from '../utils/ease';
import useIntersection from '../hooks/useIntersectionobserver';

import Nr0 from './characters/0';
import Nr1 from './characters/1';
import Dot from './characters/dot';

import me from '../assets/img/me.jpg';

const Hi = () => {
  const tl = new TimelineLite();
  const { observerEntry, elRef } = useIntersection({ threshold: 0.8 });

  if (observerEntry.isIntersecting) {
    tl.to('.hi .js--0', 0.5, { drawSVG: '0% 100%', ease })
      .to('.hi .js--1', 0.5, { drawSVG: '0% 100%', ease })
      .to('.hi .js--dot', 0.5, { drawSVG: '0% 100%', ease });
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
            🤜 💢 🤛
          </span>
        </h1>
        <p>
          I'm currently travelling througout Europe, Asia and the middle East
          while working remotely with clients.
        </p>

        <p>
          In the Netherlands I've worked with some of the top digital agencies
          such as Valtech and Mirabeau.
        </p>

        <p>
          I loves typography, graphic design and animation and try to mix them
          with my technical skills as a developer.
        </p>
      </article>

      <figure className="hi__figure">
        <img src={me} className="hi__img" />
        <figcaption className="hi__figcaption">
          Facing windstorms in the mountains of Annapurna, Nepal
        </figcaption>
      </figure>
    </section>
  );
};

export default Hi;
