import React, { useEffect } from 'react';
import { TweenLite } from 'gsap';
import { drawSVG } from '../../lib/DrawSVGPlugin';

const F = () => {
  useEffect(() => {
    TweenLite.set('.js--f', { drawSVG: '0% 0%' });
  }, []);

  return (
    <svg className="char" viewBox="0 0 214.87 256.47">
      <path
        className="char__path js--f"
        d="M114.56,237.61q-9,7.81-23.92,13.09T54.31,256q-21.39,0-36.82-9.57Q.5,236.05.5,216.91V18.47"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--f"
        d="M.5,18.47Q.5.5,88.59.5H203.23a84.73,84.73,0,0,1,8.4,23.14,110.64,110.64,0,0,1,2.74,23q0,44.73-39.26,44.73"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--f"
        d="M175.11,91.32H107.53q-7.43,0-7.42,6.25v1.37a2.26,2.26,0,0,0,.39,1.56"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--f"
        d="M100.5,100.5h86.33q10,17,10,38.28,0,26.57-11.91,41.41"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--f"
        d="M184.88,180.19H89.17a4.85,4.85,0,0,0-1.56,3.51c0,2.09,1.59,3.32,4.78,3.71a90.09,90.09,0,0,0,10.84.59q6.06,0,11.33.2v49.41"
        fill="none"
        stroke="#444"
      />
    </svg>
  );
};

export default F;
