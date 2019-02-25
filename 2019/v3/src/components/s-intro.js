import React, { useEffect } from 'react';
import { TweenLite, TimelineLite } from 'gsap';
// eslint-disable-next-line
import { drawSVG } from '../lib/DrawSVGPlugin';
import { ease } from '../utils/ease';

import R from './characters/r';
import O from './characters/o';
import U from './characters/u';
import H from './characters/h';
import N from './characters/n';
import F from './characters/f';
import A from './characters/a';

const Intro = () => {
  const tl = new TimelineLite();

  const m = 1; // multiplier
  const t1 = 1.25;
  const t2 = 2.25;

  useEffect(() => {
    TweenLite.set('.container', { visibility: 'visible' });

    tl.to('.rouhun .js--r', t1 * m, { drawSVG: '0% 100%', ease })
      .to('.rouhun .js--o', t2 * m, { drawSVG: '0% 100%', ease }, t1 * m)
      .to('.rouhun .js--u', t2 * m, { drawSVG: '0% 100%', ease }, t1 * m)
      .to('.rouhun .js--h', t1 * m, { drawSVG: '0% 100%', ease }, 0)
      .to('.rouhun .js--u', t2 * m, { drawSVG: '0% 100%', ease }, t1 * m + 0.5)
      .to('.rouhun .js--n', t2 * m, { drawSVG: '0% 100%', ease }, t1 * m + 0.5)
      .to('.fan .js--f', t1 * m, { drawSVG: '0% 100%', ease }, t1 * m + 0.5)
      .to('.fan .js--a', t2 * m, { drawSVG: '0% 100%', ease }, t2 * m)
      .to('.fan .js--n', t2 * m, { drawSVG: '0% 100%', ease }, t2 * m)
      .to('.occupation', t2 * m, { opacity: 1, ease }, t2 * m + 0.25);
  }, []);

  return (
    <section className="intro">
      <div className="container rouhun">
        <R />
        <O />
        <U />
        <H />
        <U />
        <N />
      </div>

      <div className="container">
        <div className="fan">
          <F />
          <A />
          <N />
        </div>

        <p className="occupation">Front-end developer &amp; designer.</p>
      </div>
    </section>
  );
};

export default Intro;
