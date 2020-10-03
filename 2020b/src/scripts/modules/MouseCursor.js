import gsap from "gsap";
import GetCursorPosition from "cursor-position";
import dom from "../utils/dom";

const MOUSECURSORCLASS = ".mousecursor";

export default class MouseCursor {
  constructor() {
    if (!dom.contains(MOUSECURSORCLASS)) return;

    this.el = dom.el(MOUSECURSORCLASS);
    this.x = null;
    this.y = null;
  }

  init() {
    document.addEventListener("click", () => this.click());
    document.addEventListener("mouseenter", () => this.show(this.el));
    document.addEventListener("mouseleave", () => this.hide(this.el));
    document.addEventListener("mousemove", () => {
      const { x, y } = GetCursorPosition();
      this.x = x;
      this.y = y;

      gsap.to(this.el, { x, y, ease: "power2.out" });
    });
  }

  initHoverStates() {
    dom.nodelist("a[href]").forEach(anchor => {
      anchor.addEventListener("mouseover", () => this.hover());
      anchor.addEventListener("mouseleave", () => this.resetHover());
    });
  }

  show(el) {
    gsap.to(el, { opacity: 1, duration: 0.2 });
  }

  hide(el) {
    gsap.to(el, { opacity: 0, duration: 0.2 });
  }

  hover() {
    gsap.to(this.el, { scale: 1, duration: 0.2 });
  }

  resetHover() {
    gsap.to(this.el, { scale: 0.5, duration: 0.2 });
  }

  click() {
    this.el.classList.add("-click");
    setTimeout(() => this.el.classList.remove("-click"), 350);
  }
}
