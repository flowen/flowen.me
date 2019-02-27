import React, { useEffect } from 'react';
import { TimelineLite, TweenLite } from 'gsap';
import { ease } from '../utils/ease';
import useIntersection from '../hooks/useIntersectionobserver';

const ArticleWhatIDo = () => {
  const tl = new TimelineLite();
  const { observerEntry, elRef } = useIntersection({ threshold: 0.5 });
  const TITLE = '.article--what-i-do h1';
  const PARAGRAPHS = '.article--what-i-do p';

  useEffect(() => {
    TweenLite.set(TITLE, { opacity: 0 });
    TweenLite.set(PARAGRAPHS, { opacity: 0 });
  }, []);

  if (observerEntry.isIntersecting) {
    tl.to(TITLE, 0.5, { opacity: 1, ease }).staggerTo(
      PARAGRAPHS,
      0.5,
      { opacity: 1, ease },
      0.07,
      '-=.2'
    );
  }

  return (
    <article className="article what-i-do" ref={elRef}>
      <h1>What I do</h1>

      <p>
        I love to create performant, accessible webpages and user interfaces,
        supporting them with beautiful animation. I find myself quickly
        comfortable in any environment: React, Vue, Gatsby, Wordpress, Sitecore,
        Episerver, etc. I'm easy to adjust to any coding patterns currently used
        in your project.
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
  );
};

export default ArticleWhatIDo;
