import React, { useEffect } from 'react';
import { TweenLite } from 'gsap';
import { drawSVG } from '../../lib/DrawSVGPlugin';

const O = () => {
  useEffect(() => {
    TweenLite.set('.js--o', { drawSVG: '0% 0%' });
  }, []);

  return (
    <svg className="char" viewBox="0 0 219.75 226.98">
      <g id="bowl">
        <path
          className="char__path js--o"
          d="M105.58,111.63v34.18c.91.92,2.41,1.37,4.49,1.37a4.9,4.9,0,0,0,4.49-2.15"
          fill="none"
          stroke="#444"
        />
        <path
          className="char__path js--o"
          d="M115.43,92.45a48.56,48.56,0,0,0-1.06-7.67q-1.58-6.15-5.86-6.16a6.4,6.4,0,0,0-4.69,2q1.75,19.33,1.76,31.05"
          fill="none"
          stroke="#444"
        />
        <path
          className="char__path js--o"
          d="M114.56,145q1.36-2.15,1.37-7.42V109.68q0-10.65-.5-17.23"
          fill="none"
          stroke="#444"
        />
      </g>
      <g id="outlines">
        <path
          className="char__path js--o"
          d="M.5,114.47q0-52.85,30.18-83.4"
          fill="none"
          stroke="#444"
        />
        <path
          className="char__path js--o"
          d="M30.68,31.07Q60.85.5,109.88.5t79.29,31.84q30.08,31.83,30.08,82.91"
          fill="none"
          stroke="#444"
        />
        <path
          className="char__path js--o"
          d="M219.25,115.25q0,51.08-29,81.15t-78.81,30.08q-49.81,0-78.91-28.32-32-30.87-32-83.69"
          fill="none"
          stroke="#444"
        />
      </g>
    </svg>
  );
};

export default O;
