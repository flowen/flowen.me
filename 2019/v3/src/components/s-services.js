import React from 'react';
import { TimelineLite } from 'gsap';
// import { drawSVG } from '../lib/DrawSVGPlugin';
import { ease } from '../utils/ease';
import useIntersection from '../hooks/useIntersectionobserver';

import Nr0 from './characters/0';
import Nr2 from './characters/2';
import Dot from './characters/dot';

import ArticleWhatIDo from './ArticleWhatIDo';
import ArticleProjects from './ArticleProjects';
import ArticleTools from './ArticleTools';

if (typeof window !== `undefined`) {
  // eslint-disable-next-line
  require('../lib/DrawSVGPlugin.js');
}

const Services = () => {
  const tl = new TimelineLite();
  const { observerEntry, elRef } = useIntersection({ threshold: 0.5 });

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

      <ArticleWhatIDo />
      <ArticleProjects />
      <ArticleTools />
    </section>
  );
};

export default Services;
