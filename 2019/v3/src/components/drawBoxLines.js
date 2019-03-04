import React, { useEffect } from 'react';
import { TweenLite } from 'gsap';

const DrawBoxLines = () => {
  useEffect(() => {
    TweenLite.set('.js--box', { drawSVG: '0% 0%' });
  }, []);

  return (
    <svg
      className="hi__drawbox"
      viewBox="0 0 800 800"
      preserveAspectRatio="none"
    >
      <path
        className="path js--box"
        d="M0,400V800H800V0H0Z"
        fill="none"
        stroke="#444"
        strokeMiterlimit="20"
      />
    </svg>
  );
};
export default DrawBoxLines;
