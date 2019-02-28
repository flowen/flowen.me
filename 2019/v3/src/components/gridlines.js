import React, { useEffect } from 'react';
import debounce from '../utils/debounce';

const Gridlines = () => {
  const elRef = React.createRef();

  useEffect(() => {
    const cols = elRef.current.querySelectorAll('.col');

    // we calculate the width with Javascript because of rounding bugs with CSS in browsers
    const handleResize = () => {
      const colWidth = Math.ceil(window.innerWidth / cols.length);
      cols.forEach(col => (col.style.minWidth = `${colWidth}px`));
    };

    handleResize();

    window.addEventListener('resize', debounce(handleResize));
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <div className="grid-lines" ref={elRef}>
      <div className="col" />
      <div className="col" />
      <div className="col" />
      <div className="col" />
      <div className="col" />
      <div className="col" />
      <div className="col" />
      <div className="col" />
      <div className="col" />
    </div>
  );
};

export default Gridlines;
