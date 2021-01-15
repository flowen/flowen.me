import Highway from '@dogstudio/highway'

import HomeRenderer from './HomeRenderer'
import ContactRenderer from './ContactRenderer'

import FadeTransition from './FadeTransition'

import dom from '../utils/dom'

const H = new Highway.Core({
  renderers: {
    home: HomeRenderer,
    contact: ContactRenderer,
  },
  transitions: {
    default: FadeTransition,
  },
})

const links = dom.nl('nav a')

console.log(dom)

// Listen the `NAVIGATE_IN` event
// This event is sent everytime a `data-router-view` is added to the DOM Tree
H.on('NAVIGATE_IN', ({ to, location }) => {
  // Check Active Link
  for (let i = 0; i < links.length; i++) {
    const link = links[i]

    // Clean class
    link.classList.remove('is-active')

    // Active link
    if (link.href === location.href) {
      link.classList.add('is-active')
    }
  }
})

export default H
