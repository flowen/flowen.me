import React from 'react';
import { TimelineLite } from 'gsap';
import { drawSVG } from '../lib/DrawSVGPlugin';
import { ease } from '../utils/ease';
import useIntersection from '../hooks/useIntersectionobserver';

import Nr0 from './characters/0';
import Nr3 from './characters/3';
import Dot from './characters/dot';
import Gridlines from './gridlines';

const Outro = () => {
  const tl = new TimelineLite();
  const { observerEntry, elRef } = useIntersection({ threshold: 0.8 });

  if (observerEntry.isIntersecting) {
    tl.to('.outro .js--0', 0.5, { drawSVG: '0% 100%', ease })
      .to('.outro .js--3', 0.5, { drawSVG: '0% 100%', ease })
      .to('.outro .js--dot', 0.5, { drawSVG: '0% 100%', ease });
  }

  return (
    <section
      className="outro"
      ref={elRef}
      data-visible={observerEntry.isIntersecting}
    >
      <div className="count">
        <Nr0 />
        <Nr3 />
        <Dot />
      </div>

      <article className="outro__article">
        <p className="outro__paragraph">
          I am available for remote development, design and consulting gigs -
          big and small.
        </p>
        <span
          className="emoji emoji--point"
          role="img"
          aria-label="pointing right"
        >
          👉
        </span>{' '}
        <a href="mailto:lowen.f@gmail.com" className="outro__anchor">
          Contact me
        </a>
      </article>

      <Gridlines />
    </section>
  );
};

export default Outro;
