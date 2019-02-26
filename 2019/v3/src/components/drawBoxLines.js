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
        d="M799,1V799H1V1H799M0,400H0m0,0V800H800V0H0V400Z"
        fill="none"
        stroke="#444"
        strokeMiterlimit="1"
      />
    </svg>
  );
};
export default DrawBoxLines;
