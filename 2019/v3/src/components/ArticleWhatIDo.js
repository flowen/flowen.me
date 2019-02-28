import React, { useEffect } from 'react';
import { TimelineLite, TweenLite } from 'gsap';
import { ease } from '../utils/ease';
import useIntersection from '../hooks/useIntersectionobserver';

const ArticleWhatIDo = () => {
  const tl = new TimelineLite();
  const { observerEntry, elRef } = useIntersection({ threshold: 0.5 });
  const TITLE = '.what-i-do h1';
  const PARAGRAPHS = '.what-i-do p';

  useEffect(() => {
    TweenLite.set(TITLE, { opacity: 0 });
    TweenLite.set(PARAGRAPHS, { opacity: 0 });
  }, []);

  if (observerEntry.isIntersecting) {
    tl.to(TITLE, 0.5, { opacity: 1, ease }).staggerTo(
      PARAGRAPHS,
      0.5,
      { opacity: 1, ease },
      0.1,
      '-=.3'
    );
  }

  return (
    <article className="article article--what-i-do what-i-do" ref={elRef}>
      <h1>What I do</h1>

      <p>
        I create performant, accessible websites and UI with beautiful
        animation. I'm comfortable working in most coding environments: React,
        Vue, Gatsby, Wordpress, Sitecore, Episerver, etc.
      </p>

      <p>I also consult on UI/UX, designs and accessibility.</p>

      <p>
        And have been called a patient and clear communicator
        <span
          className="emoji emoji--hands-up"
          role="img"
          aria-label="exclamate"
        >
          {' '}
          🙌
        </span>
      </p>
    </article>
  );
};

export default ArticleWhatIDo;
