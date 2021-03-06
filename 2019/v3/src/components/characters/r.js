import React, { useEffect } from 'react';
import { TweenLite } from 'gsap';

const R = () => {
  useEffect(() => {
    TweenLite.set('.js--r', { drawSVG: '0% 0%' });
  }, []);

  return (
    <svg className="char" aria-label="R" viewBox="-0.5 -0.5 252.02 267">
      <g className="bowl">
        <path
          className="char__path js--r"
          d="M109.31,88.76l0-.34.3-.17c1-.57,2.82-.85,5.36-.85a6.17,6.17,0,0,1,5.85,3.21c1.15,2.2,1.73,5.62,1.73,10.17"
          fill="none"
          stroke="#444"
          strokeMiterlimit="10"
        />
        <path
          className="char__path js--r"
          d="M109.69,119.76l-.19-.15V91.93a22.38,22.38,0,0,0-.19-3.17"
          fill="none"
          stroke="#444"
          strokeMiterlimit="10"
        />
        <path
          className="char__path js--r"
          d="M122.5,100.78v6.89c0,4.42-.67,7.59-2,9.71a6.87,6.87,0,0,1-6,3.08c-3.43,0-4.33-.37-4.74-.7"
          fill="none"
          stroke="#444"
          strokeMiterlimit="10"
        />
      </g>
      <g className="outlines">
        <path
          className="char__path js--r"
          d="M.5,224V36.23c-.1-6,5.23-11.7,16.32-17.35C27.75,13.36,42,8.88,59.25,5.57A280.12,280.12,0,0,1,111.65.5c39.83,0,71.41,8.21,93.87,24.39,23.73,17,35.76,41.31,35.76,72.18"
          fill="none"
          stroke="#444"
          strokeMiterlimit="10"
        />
        <path
          className="char__path js--r"
          d="M241.28,97.07c0,17.71-5.09,33.07-15.12,45.66A78.54,78.54,0,0,1,188.27,169c.14,3.68,2.42,5.4,7.15,5.4,5,.1,11.52-2.9,19.71-8.91l.36-.26"
          fill="none"
          stroke="#444"
          strokeMiterlimit="10"
        />
        <path
          className="char__path js--r"
          d="M215.49,165.23l35,35.51,0,.24c-2.33,20.4-9,36.47-19.75,47.76-10.81,11.12-25.88,16.76-44.81,16.76-14.28,0-26.85-3.43-37.36-10.2-13.45-8.39-23.66-22-30.33-40.54l-7-19a163.64,163.64,0,0,1-20.61-2.08"
          fill="none"
          stroke="#444"
          strokeMiterlimit="10"
        />
        <path
          className="char__path js--r"
          d="M90.58,193.67a5.66,5.66,0,0,0-1.31,3.81c0,3.2,5.42,5.19,15.66,5.77l.33,0,11.49,28.93v17.06l-.21.15C101.15,260.09,81.25,265.5,57.4,265.5c-17.14,0-31-3.57-41.36-10.62S.5,237.44.5,224m250-23"
          fill="none"
          stroke="#444"
          strokeMiterlimit="10"
        />
      </g>
    </svg>
  );
};

export default R;
