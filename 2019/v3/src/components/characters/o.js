import React, { useEffect } from 'react';
import { TweenLite } from 'gsap';

const O = () => {
  useEffect(() => {
    TweenLite.set('.js--o', { drawSVG: '0% 0%' });
  }, []);

  return (
    <svg className="char" aria-label="o" viewBox="-0.5 -0.5 252.02 267">
      <g className="bowl">
        <path
          className="char__path js--o"
          d="M103.58,152.8v33.69c.89.9,2.37,1.35,4.43,1.35a4.84,4.84,0,0,0,4.42-2.12"
          fill="none"
          stroke="#444"
        />
        <path
          className="char__path js--o"
          d="M113.28,133.89a47.76,47.76,0,0,0-1-7.57c-1-4-2.95-6.06-5.78-6.06a6.3,6.3,0,0,0-4.62,1.93q1.74,19,1.74,30.61"
          fill="none"
          stroke="#444"
        />
        <path
          className="char__path js--o"
          d="M112.43,185.72q1.35-2.11,1.35-7.32V150.87q0-10.49-.5-17"
          fill="none"
          stroke="#444"
        />
      </g>
      <g className="outlines">
        <path
          className="char__path js--o"
          d="M0,155.59q0-52.08,29.74-82.21"
          fill="none"
          stroke="#444"
        />
        <path
          className="char__path js--o"
          d="M29.74,73.38q29.75-30.12,78.07-30.13T186,74.63q29.64,31.38,29.65,81.73"
          fill="none"
          stroke="#444"
        />
        <path
          className="char__path js--o"
          d="M215.63,156.36q0,50.34-28.59,80T109.35,266q-49.09,0-77.78-27.92Q0,207.68,0,155.59"
          fill="none"
          stroke="#444"
        />
      </g>
    </svg>
  );
};

export default O;
