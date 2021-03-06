import React, { useEffect } from 'react';
import { TweenLite } from 'gsap';

const Nr0 = () => {
  useEffect(() => {
    TweenLite.set('.js--0', { drawSVG: '0% 0%' });
  }, []);

  return (
    <svg className="char" aria-label="0" viewBox="-0.31 -0.61 114 133">
      <g className="outlines">
        <path
          className="char__path js--0"
          d="M106.3,101.38q6.49-14.28,6.5-34.23,0-30.71-15.77-48.49A52.44,52.44,0,0,0,81.33,6.41,54.13,54.13,0,0,0,56.65.89q-24.6,0-40.38,17.77"
          fill="none"
          stroke="#444"
        />
        <path
          className="char__path js--0"
          d="M20.56,119.61A48.83,48.83,0,0,1,16,115.15Q.5,98,.5,67.2T16.27,18.66"
          fill="none"
          stroke="#444"
        />
        <path
          className="char__path js--0"
          d="M106.3,101.38a54.78,54.78,0,0,1-8.92,13.77q-14.85,16.5-40.73,16.5-22.11,0-36.09-12"
          fill="none"
          stroke="#444"
        />
      </g>
      <g className="bowl">
        <path
          className="char__path js--0"
          d="M76.18,89.66a69.87,69.87,0,0,1-8-7.42,102.17,102.17,0,0,1-10.4-12,124.67,124.67,0,0,1-8.65-13.87q-4.29-7.9-4.78-9.86-3,0-3,3.51,0,2.64,3.13,8.84A110.27,110.27,0,0,0,54,73.79,85.42,85.42,0,0,0,65.54,87.12Q70.91,92,73.35,92A2.55,2.55,0,0,0,76.18,89.66Z"
          fill="none"
          stroke="#444"
        />
      </g>
    </svg>
  );
};

export default Nr0;
