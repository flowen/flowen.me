import React from 'react';
import useIntersection from '../hooks/useIntersectionobserver';

const CTA = () => {
  const { observerEntry, elRef } = useIntersection({ threshold: 0.75 });

  return (
    <section className="cta" ref={elRef}>
      <a
        href="mailto:lowen.f@gmail.com"
        className="cta__anchor"
        data-visible={observerEntry.isIntersecting}
      >
        <span
          className="emoji emoji--wave js--wave"
          role="img"
          aria-label="hand waving"
        >
          👋
        </span>
        <span className="anchor__text">available for remote projects</span>
      </a>
    </section>
  );
};

export default CTA;
