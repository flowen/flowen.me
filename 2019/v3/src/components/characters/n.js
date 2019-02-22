import React, { useEffect } from 'react';
import { TweenLite } from 'gsap';
import { drawSVG } from '../../lib/DrawSVGPlugin';

const N = () => {
  useEffect(() => {
    TweenLite.set('.js--n', { drawSVG: '0% 0%' });
  }, []);

  return (
    <svg className="char" viewBox="0 0 230.69 222.68">
      <path
        className="char__path js--n"
        d="M107.73,88.59l2.54,31.83a237.62,237.62,0,0,0-3.52,41.8,82.28,82.28,0,0,0,10,40.23Q97.57,222.19,63,222.18q-19.72,0-34.18-10.35Q12,200.12,12,180.77V86.24Q.5,70,.5,46.3T12,5.19"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--n"
        d="M12,5.19H46.79A31.3,31.3,0,0,1,70.42,15.54q-8.6,8-8.59,13.28,0,6.06,6.83,6.06Q77.26,20,94.93,10.27"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--n"
        d="M135.07.5Q168.87.5,190,17.1,216.52,38,216.52,82l-.59,40q0,14.07,3.12,22.66A26,26,0,0,0,230,158.12a22.6,22.6,0,0,1,.2,3.71v3.51q0,27-15.53,41.9"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--n"
        d="M94.93,10.27Q112.62.5,135.07.5"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--n"
        d="M214.66,207.24q-15.53,14.94-40,14.94t-39.74-13.87q-17.77-15.81-17.78-48a201.67,201.67,0,0,1,1.27-24.13q1.27-10.44,1.76-14.94t1.07-8.4a83.81,83.81,0,0,0,.59-11.52q0-7.62-2.05-10.94A6.37,6.37,0,0,0,114.07,87a12.55,12.55,0,0,0-6.34,1.57"
        fill="none"
        stroke="#444"
      />
    </svg>
  );
};

export default N;
