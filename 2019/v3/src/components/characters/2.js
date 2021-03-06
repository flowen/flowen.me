import React, { useEffect } from 'react';
import { TweenLite } from 'gsap';

const Nr2 = () => {
  useEffect(() => {
    TweenLite.set('.js--2', { drawSVG: '0% 0%' });
  }, []);

  return (
    <svg className="char" aria-label="2" viewBox="0 0 113.19 132.26">
      <path
        className="char__path js--2"
        d="M10.27,131.65A43.64,43.64,0,0,1,2.75,106.8Q2.75,93.18,8,83.9A100.23,100.23,0,0,0,42.88,70.32q15.63-9.85,15.63-20.89a8.07,8.07,0,0,0-1.32-4.79,4.23,4.23,0,0,0-3.66-1.85q-4.78,0-4.79,5c0,3.36,1.14,5.81,3.42,7.38q-4.78,7.13-14.75,13.08a79,79,0,0,1-19.53,8.6"
        transform="translate(0 0.11)"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--2"
        d="M17.88,76.87Q.5,65.35.5,45.71T16,14.56Q30.48,3.82,53.09,3.82T90.54,15.73q15.92,12.9,15.92,34.48,0,15.72-9.28,26.17Q86.73,88.1,66.61,92.1"
        transform="translate(0 0.11)"
        fill="none"
        stroke="#444"
      />
      <path
        className="char__path js--2"
        d="M66.61,92.1c0,2.48,1.11,3.71,3.32,3.71q5.86,0,14.36-3.71t13.18-8.79q9.28,9.28,9.28,24.47t-8.69,23.87H10.27"
        transform="translate(0 0.11)"
        fill="none"
        stroke="#444"
      />
    </svg>
  );
};

export default Nr2;
