import Highway from "@dogstudio/highway";

import DefaultRenderer from "./DefaultRenderer";
import HomeRenderer from "./HomeRenderer";
import ClientRenderer from "./ClientRenderer";
import ContactRenderer from "./ContactRenderer";

import FadeTransition from "./FadeTransition";

import dom from "../utils/dom";

const H = new Highway.Core({
  renderers: {
    home: HomeRenderer,
    client: ClientRenderer,
    contact: ContactRenderer,
    about: DefaultRenderer,
    allhtml: DefaultRenderer
  },
  transitions: {
    default: FadeTransition
  }
});

const links = dom.nodelist("nav a");

// Listen the `NAVIGATE_IN` event
// This event is sent everytime a `data-router-view` is added to the DOM Tree
H.on("NAVIGATE_IN", ({ to, location }) => {
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.classList.remove("is-active");

    if (link.href === location.href) {
      link.classList.add("is-active");
    }
  }
});

export default H;
