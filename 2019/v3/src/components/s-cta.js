import React from 'react';
import useIntersection from '../hooks/useIntersectionobserver';
import logger from '../utils/logger';

const CTA = () => {
  const { observerEntry, elRef } = useIntersection({ threshold: 0.75 });

  if (observerEntry.isIntersecting) {
    logger({
      category: 'CTA section',
      action: 'User viewed section CTA'
    });
  }

  return (
    <section className="cta" ref={elRef}>
      <a
        href="mailto:lowen@flowen.nl?subject=hi!&body=Tell me about your project in 3 sentences: %0D%0A%0D%0ATell me when you consider your project a success: %0D%0A%0D%0AIs there a budget you have in mind? %0D%0A%0D%0AHow did you find me: "
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
