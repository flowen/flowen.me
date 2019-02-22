import React, { useEffect } from 'react';
import { setConfig } from 'react-hot-loader';
import { TweenLite, TimelineLite } from 'gsap';
import { drawSVG } from '../lib/DrawSVGPlugin';
import { ease } from '../utils/ease';

import R from '../components/characters/r';
import O from '../components/characters/o';
import U from '../components/characters/u';
import H from '../components/characters/h';
import N from '../components/characters/n';
import F from '../components/characters/f';
import A from '../components/characters/a';

import '../scss/index.scss';

// for hot-reloader to work - https://github.com/gaearon/react-hot-loader/issues/1088
// still doesnt' work tho
setConfig({ pureSFC: true });

export default () => {
  const tl = new TimelineLite();

  useEffect(() => {
    TweenLite.set('.container', { visibility: 'visible' });

    const t = 2.5;
    tl.to('.rouhun .js--r', t, { drawSVG: '0% 100%', ease })
      .to('.rouhun .js--o', t, { drawSVG: '0% 100%', ease }, +0.75)
      .to('.rouhun .js--u', t, { drawSVG: '0% 100%', ease }, +1.25)
      .to('.rouhun .js--h', t, { drawSVG: '0% 100%', ease }, +1.5)
      .to('.rouhun .js--u', t, { drawSVG: '0% 100%', ease }, +0.75)
      .to('.rouhun .js--n', t, { drawSVG: '0% 100%', ease }, 1)
      .to('.fan .js--f', t, { drawSVG: '0% 100%', ease }, 1.5)
      .to('.fan .js--a', t, { drawSVG: '0% 100%', ease }, 1.25)
      .to('.fan .js--n', t, { drawSVG: '0% 100%', ease }, 1.35);
  }, []);

  return (
    <main className="main">
      <section className="intro">
        <div className="container rouhun">
          <R className="char--cap" />
          <O />
          <U />
          <H className="char--cap" />
          <U />
          <N />
        </div>

        <div className="container fan">
          <F className="char--cap" />
          <A />
          <N />
        </div>
      </section>

      <div className="grid-lines">
        <div className="col" />
        <div className="col" />
        <div className="col" />
        <div className="col" />
        <div className="col" />
        <div className="col" />
        <div className="col" />
        <div className="col" />
      </div>
    </main>
  );
};
