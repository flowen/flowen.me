import React, { useEffect } from 'react';
import { TweenLite } from 'gsap';

const U = () => {
  useEffect(() => {
    TweenLite.set('.js--u', { drawSVG: '0% 0%' });
  }, []);

  return (
    <svg className="char" aria-label="u" viewBox="-0.5 -0.5 252.02 267">
      <path
        className="char__path js--u"
        d="M128.13,254.67a50.46,50.46,0,0,1-15,8.21Q104.3,266,87.21,266a82.8,82.8,0,0,1-33.3-7q-20.13-8.6-30.86-26.37Q10,211.51,10,179.09v-49A75.59,75.59,0,0,1,0,91.78,96.45,96.45,0,0,1,2.73,69.52,62.13,62.13,0,0,1,11.52,49"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--u"
        d="M11.52,49h43q24.23,0,38,11.42T106.25,95.1v63.28q0,18.94,7.23,19a9,9,0,0,0,5.08-2q-2-6.45-2-20.12V58.77"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--u"
        d="M116.6,58.77q20.7-12.5,49.81-12.5,16.4,0,28.81,4.4t19,11.62V164.05q0,29.1,14.06,37.89a22.6,22.6,0,0,1,.2,3.71"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--u"
        d="M228.52,205.65v3.51q0,28.53-15,43.17Q199.8,266,175.78,266a54.72,54.72,0,0,1-27.24-6.84,42.74,42.74,0,0,1-18.27-19.92q-6.63,0-6.64,6.45,0,4.49,4.5,9"
        fill="none"
        stroke="#444"
      />
    </svg>
  );
};

export default U;
