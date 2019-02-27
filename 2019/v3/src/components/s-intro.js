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

  const m = 0.5; // multiplier
  const t1 = 0.75 * m;
  const t2 = 1.25 * m;

  useEffect(() => {
    document.querySelector('.rouhun').classList.remove('not-visible');
    document.querySelector('.container').classList.remove('not-visible');

    tl.add('startLabel', 0)
      .add('lowerCaseLabel', 0.5 * m)
      .to('.rouhun .js--r', t1, { drawSVG: '0% 100%', ease }, 'startLabel')
      .to('.rouhun .js--o', t2, { drawSVG: '0% 100%', ease }, 'lowerCaseLabel')
      .to('.rouhun .js--u', t2, { drawSVG: '0% 100%', ease }, 'lowerCaseLabel')
      .to('.rouhun .js--h', t1, { drawSVG: '0% 100%', ease }, 'startLabel')
      .to('.rouhun .js--u', t2, { drawSVG: '0% 100%', ease }, 'lowerCaseLabel')
      .to('.rouhun .js--n', t2, { drawSVG: '0% 100%', ease }, 'lowerCaseLabel')
      .to('.fan .js--f', t1, { drawSVG: '0% 100%', ease }, 'lowerCaseLabel')
      .to('.fan .js--a', t2, { drawSVG: '0% 100%', ease }, 'lowerCaseLabel+=.5')
      .to('.fan .js--n', t2, { drawSVG: '0% 100%', ease }, 'lowerCaseLabel+=.5')
      .to('.occupation', t2, { opacity: 1, ease }, 'lowerCaseLabel+=.75');
  }, []);

  return (
    <section className="intro">
      <div className="rouhun not-visible">
        <R />
        <O />
        <U />
        <H />
        <U />
        <N />
      </div>

      <div className="container not-visible">
        <div className="fan">
          <F />
          <A />
          <N />
        </div>

        <p className="occupation">Creative developer &amp; designer.</p>
      </div>
    </section>
  );
};

export default Intro;
