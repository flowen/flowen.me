import React, { useEffect } from 'react';
import { TweenLite } from 'gsap';

const N = () => {
  useEffect(() => {
    TweenLite.set('.js--n', { drawSVG: '0% 0%' });
  }, []);

  return (
    <svg className="char" aria-label="n" viewBox="-0.5 -0.5 252.02 267">
      <path
        className="char__path js--n"
        d="M107.23,132.41l2.54,31.83a237.62,237.62,0,0,0-3.52,41.8,82.28,82.28,0,0,0,10,40.23Q97.07,266,62.5,266q-19.72,0-34.18-10.35-16.8-11.72-16.8-31.06V130.06Q0,113.86,0,90.12T11.52,49"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--n"
        d="M11.52,49H46.29A31.3,31.3,0,0,1,69.92,59.36q-8.6,8-8.59,13.28,0,6.06,6.83,6.06,8.59-14.85,26.27-24.61"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--n"
        d="M134.57,44.32q33.8,0,54.88,16.6Q216,81.83,216,125.77l-.59,40q0,14.07,3.12,22.66a26,26,0,0,0,10.94,13.48,22.6,22.6,0,0,1,.2,3.71v3.51q0,27-15.53,41.9"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--n"
        d="M94.43,54.09q17.68-9.77,40.14-9.77"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--n"
        d="M214.16,251.06Q198.64,266,174.12,266t-39.74-13.87q-17.77-15.81-17.78-48A201.67,201.67,0,0,1,117.87,180q1.27-10.44,1.76-14.94t1.07-8.4a83.81,83.81,0,0,0,.59-11.52q0-7.62-2.05-10.94a6.37,6.37,0,0,0-5.67-3.32,12.55,12.55,0,0,0-6.34,1.57"
        fill="none"
        stroke="#444"
      />
    </svg>
  );
};

export default N;
