import React, { useEffect } from 'react';
import { TweenLite } from 'gsap';

const Dot = () => {
  useEffect(() => {
    TweenLite.set('.js--dot', { drawSVG: '0% 0%' });
  }, []);

  return (
    <svg className="char" aria-label="." viewBox="0 0 113.69 132.76">
      <path
        className="char__path js--dot"
        d="M8.3,84a27.06,27.06,0,0,1,19.82-8.3,27.7,27.7,0,0,1,20,8.3,27.73,27.73,0,0,1,8.31,20.07A27.09,27.09,0,0,1,48.14,124a27.65,27.65,0,0,1-20,8.2A27.1,27.1,0,0,1,8.25,123.9,27,27,0,0,1,0,104.08,27.77,27.77,0,0,1,8.3,84Z"
        transform="translate(0.5 0.11)"
        fill="none"
        stroke="#444"
      />
    </svg>
  );
};

export default Dot;
