import React, { useEffect } from 'react';
import { TweenLite } from 'gsap';

const H = () => {
  useEffect(() => {
    TweenLite.set('.js--h', { drawSVG: '0% 0%' });
  }, []);

  return (
    <svg className="char" aria-label="H" viewBox="-0.5 0 251.52 266.5">
      <path
        className="char__path js--h"
        d="M91.3,173.9q0,4.8,1.81,6.9t8.6,2.11h15.22v66.27q-15.42,10-29.23,13.42A118,118,0,0,1,59.47,266q-27,0-42.85-11Q0,243.77,0,222.55V23.33"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--h"
        d="M0,23.33A69,69,0,0,1,25.73,6.41,87.93,87.93,0,0,1,57.67.5q24.21,0,41,12,18.23,13.62,18.22,37.65V85.8h25.43q0-5.2-1.9-7.11"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--h"
        d="M140.46,78.69q-1.91-1.91-6.11-1.9h-6.81V23.33A69,69,0,0,1,153.27,6.41,88,88,0,0,1,185.21.5q24.22,0,41,12,18.21,13.62,18.22,37.65"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--h"
        d="M244.48,50.16v199Q222.06,266,187,266q-27,0-42.85-11-16.62-11.22-16.62-32.44V182.91h14.22q8.2,0,10.31-2.11t2.1-6.9H91.3"
        fill="none"
        stroke="#444"
      />
    </svg>
  );
};

export default H;
