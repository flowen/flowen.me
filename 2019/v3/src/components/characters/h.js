import React, { useEffect } from 'react';
import { TweenLite } from 'gsap';
import { drawSVG } from '../../lib/DrawSVGPlugin';

const H = () => {
  useEffect(() => {
    TweenLite.set('.js--h', { drawSVG: '0% 0%' });
  }, []);

  return (
    <svg className="char" viewBox="0 0 239.48 259.98">
      <path
        className="char__path js--h"
        d="M89.56,169.64c0,3.13.59,5.37,1.76,6.74s4,2.05,8.4,2.05h14.84v64.65q-15,9.76-28.51,13.08a114.44,114.44,0,0,1-27.54,3.32q-26.37,0-41.8-10.74Q.5,237.8.5,217.1V22.77"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--h"
        d="M.5,22.77A67.28,67.28,0,0,1,25.6,6.26,85.84,85.84,0,0,1,56.75.5q23.63,0,40,11.72,17.77,13.29,17.77,36.72V83.7h24.81q0-5.07-1.86-6.93"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--h"
        d="M137.51,76.77c-1.24-1.24-3.22-1.86-6-1.86h-6.64V22.77A67.28,67.28,0,0,1,150,6.26,85.84,85.84,0,0,1,181.16.5q23.64,0,40,11.72Q239,25.51,239,48.94"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--h"
        d="M239,48.94V243.08q-21.89,16.41-56.06,16.4-26.37,0-41.8-10.74-16.2-10.94-16.21-31.64V178.43h13.87q8,0,10.06-2.05c1.37-1.37,2-3.61,2-6.74H89.56"
        fill="none"
        stroke="#444"
      />
    </svg>
  );
};

export default H;
