import React, { useEffect } from 'react';
import { TweenLite } from 'gsap';
import { drawSVG } from '../../lib/DrawSVGPlugin';

const U = () => {
  useEffect(() => {
    TweenLite.set('.js--u', { drawSVG: '0% 0%' });
  }, []);

  return (
    <svg className="char" viewBox="0 0 229.52 220.73">
      <path
        className="char__path js--u"
        d="M124.13,199.91q0,4.5,4.49,9a50,50,0,0,1-15,8.2q-8.79,3.12-25.88,3.13a83,83,0,0,1-33.3-7q-20.13-8.59-30.86-26.37-13.09-21.09-13.09-53.52v-49A75.65,75.65,0,0,1,.5,46,96.59,96.59,0,0,1,3.23,23.74"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--u"
        d="M3.23,23.74A62.31,62.31,0,0,1,12,3.23H55q24.23,0,38,11.43t13.77,34.67v63.28q0,18.95,7.23,18.94a8.91,8.91,0,0,0,5.07-2"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--u"
        d="M117.1,16.21V13"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--u"
        d="M119.05,129.6q-2-6.45-2-20.12V16.21"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--u"
        d="M117.1,13Q137.8.5,166.91.5q16.4,0,28.8,4.39t19,11.63V118.27q0,29.12,14.06,37.89a22.74,22.74,0,0,1,.2,3.72v3.51q0,28.52-15,43.16"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--u"
        d="M214,206.55q-13.68,13.68-37.7,13.68A54.72,54.72,0,0,1,149,213.39a42.84,42.84,0,0,1-18.27-19.92q-6.63,0-6.64,6.44"
        fill="none"
        stroke="#444"
      />
    </svg>
  );
};

export default U;
