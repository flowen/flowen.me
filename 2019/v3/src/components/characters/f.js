import React, { useEffect } from 'react';
import { TweenLite } from 'gsap';

const F = () => {
  useEffect(() => {
    TweenLite.set('.js--f', { drawSVG: '0% 0%' });
  }, []);

  return (
    <svg className="char" aria-label="F" viewBox="-0.5 0 251.52 266.5">
      <path
        className="char__path js--f"
        d="M118.54,246.92q-9.33,8.12-24.86,13.6T55.92,266q-22.23,0-38.26-9.95Q0,245.3,0,225.4V19.17"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--f"
        d="M0,19.17Q0,.51,91.54.5H210.69a87.89,87.89,0,0,1,8.73,24.05,115.05,115.05,0,0,1,2.84,23.85q0,46.48-40.79,46.49"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--f"
        d="M181.47,94.89H111.23q-7.71,0-7.71,6.49v1.42a2.32,2.32,0,0,0,.41,1.63"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--f"
        d="M103.93,104.43h89.71Q204,122.09,204,144.21q0,27.61-12.39,43"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--f"
        d="M191.61,187.24H92.15a5.09,5.09,0,0,0-1.62,3.66c0,2.16,1.66,3.45,5,3.85a92.71,92.71,0,0,0,11.27.61c4.19,0,8.12.07,11.77.21v51.35"
        fill="none"
        stroke="#444"
      />
    </svg>
  );
};

export default F;
