import dom from "./dom";
const CLASSLOCK = "has-scroll-lock";

export default class Scrolllock {
  static isLocked() {
    return dom.html.classList.contains(CLASSLOCK) === true;
  }

  static unlock() {
    if (this.isLocked()) {
      dom.html.classList.remove(CLASSLOCK);
    }
  }

  static lock() {
    if (!this.isLocked()) {
      dom.html.classList.add(CLASSLOCK);
    }
  }
}
