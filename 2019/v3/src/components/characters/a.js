import React, { useEffect } from 'react';
import { TweenLite } from 'gsap';

const A = () => {
  useEffect(() => {
    TweenLite.set('.js--a', { drawSVG: '0% 0%' });
  }, []);

  return (
    <svg className="char" aria-label="a" viewBox="-0.5 -0.5 252.02 267">
      <g className="bowl">
        <path
          className="char__path js--a"
          d="M100,175.38q-8.2,0-8.2,7.42,0,7,9.57,7,6.63,0,9.76-3.22t3.13-11.23Z"
          fill="none"
          stroke="#444"
        />
      </g>
      <g className="outlines">
        <g>
          <path
            className="char__path js--a"
            d="M106.45,122.64a11.88,11.88,0,0,0,.58-3.32q0-5.07-8.59-6.84A116.31,116.31,0,0,0,76,110.73q-29.51,0-50.39,11.91Q16,106.43,16,81.62q0-14.06,3.51-20.89"
            fill="none"
            stroke="#444"
          />
          <path
            className="char__path js--a"
            d="M215.43,201.94a22.6,22.6,0,0,1,.2,3.71v3.51q0,27.74-16.8,43.17Q184,266,162.11,266A53.71,53.71,0,0,1,135,259a39.59,39.59,0,0,1-17.58-20.31"
            fill="none"
            stroke="#444"
          />
          <path
            className="char__path js--a"
            d="M117.38,238.66q-6.64,0-6.64,6.44,0,5.47,6.84,12.31Q104.88,266,79.3,266q-36.13,0-57.72-19.63T0,191.49q0-35.25,22.85-54.59,20.9-17.39,54.1-17.38a149.46,149.46,0,0,1,21.88,1.56c4.69.91,7.22,1.43,7.62,1.56"
            fill="none"
            stroke="#444"
          />
          <path
            className="char__path js--a"
            d="M19.53,60.73Q33.6,54.28,55.27,49.3a203.7,203.7,0,0,1,45.71-5q49.61,0,75,21.68t25.39,61.52V165.8q0,14.07,3.12,22.66a26,26,0,0,0,10.94,13.48"
            fill="none"
            stroke="#444"
          />
        </g>
      </g>
    </svg>
  );
};

export default A;
