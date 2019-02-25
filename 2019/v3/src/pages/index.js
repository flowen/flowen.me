import React, { useEffect } from 'react';
import { setConfig } from 'react-hot-loader';
import { TweenLite, TimelineLite } from 'gsap';
// eslint-disable-next-line
import { drawSVG } from '../lib/DrawSVGPlugin';
import { ease } from '../utils/ease';

import Intro from '../components/s-intro';
import CTA from '../components/s-cta';
import Hi from '../components/s-hi';
import Services from '../components/s-services';

import '../scss/index.scss';

// for hot-reloader to work - https://github.com/gaearon/react-hot-loader/issues/1088
// still doesnt' work tho??
setConfig({ pureSFC: true });

export default () => {
  // const tl = new TimelineLite();

  // useEffect(() => {}, []);

  return (
    <main className="main">
      <Intro />

      <CTA />

      <Hi />

      <Services />

      <section className="outro">
        <div className="count">02.</div>
        <p className="outro__text">
          I am available for remote development, design and consulting gigs -
          big and small.
          <span
            className="emoji emoji--point"
            role="img"
            aria-label="pointing right"
          >
            👉
          </span>{' '}
          Contact me
        </p>
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
