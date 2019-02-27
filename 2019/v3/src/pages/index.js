import React from 'react';
import { setConfig } from 'react-hot-loader';

import Intro from '../components/s-intro';
import CTA from '../components/s-cta';
import Hi from '../components/s-hi';
import Services from '../components/s-services';
import Outro from '../components/s-outro';
import Gridlines from '../components/gridlines';

import '../scss/index.scss';

// for hot-reloader to work - https://github.com/gaearon/react-hot-loader/issues/1088
setConfig({ pureSFC: true });

export default () => {
  return (
    <main className="main">
      <Intro />

      <CTA />

      <Hi />

      <Services />

      <Outro />

      <Gridlines />
    </main>
  );
};
