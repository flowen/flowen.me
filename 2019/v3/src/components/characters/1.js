import React, { useEffect } from 'react';
import { TweenLite } from 'gsap';

const Nr1 = () => {
  useEffect(() => {
    TweenLite.set('.js--1', { drawSVG: '0% 0%' });
  }, []);

  return (
    <svg className="char" aria-label="1" viewBox="0 0 114 133">
      <path
        className="char__path js--1"
        d="M36.14,62a37.81,37.81,0,0,1-13,2.15A21.83,21.83,0,0,1,7,57.58Q.5,51,.5,38.59A38.88,38.88,0,0,1,3.92,22.67q12.3-1.47,19.14-4.88,9.57-4.89,16.4-15.73"
        transform="translate(0.31 0.61)"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--1"
        d="M62.46,129.26a39.43,39.43,0,0,1-13.52,2.39q-11.43,0-18.56-5.47-8.1-6.15-8.1-18V68.57a44,44,0,0,0,10.25-1.08c3-.71,4.49-1.79,4.49-3.22A3,3,0,0,0,36.14,62"
        transform="translate(0.31 0.61)"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--1"
        d="M39.46,2.06H57q8.38,0,12.4,3.13Q74,9,74,18.57V122.28a34,34,0,0,1-11.58,7"
        transform="translate(0.31 0.61)"
        fill="none"
        stroke="#444"
      />
    </svg>
  );
};

export default Nr1;
