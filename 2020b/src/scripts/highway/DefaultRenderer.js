import Highway from "@dogstudio/highway";
import LocomotiveScroll from "locomotive-scroll";

import dom from "../utils/dom";
import Scrolllock from "../utils/Scrolllock";
import { cursor } from "../index";

const SCROLLNODE = document.querySelector("[data-router-wrapper]");

class DefaultRenderer extends Highway.Renderer {
  constructor(args) {
    super(args);

    this.scroll = null;
    this.loadImages = this.loadImages.bind(this);
  }

  onEnter() {
    cursor.initHoverStates();
  }

  onEnterCompleted() {
    this.scroll = new LocomotiveScroll({
      el: SCROLLNODE,
      smooth: true,
      inertia: 1
    });

    this.scroll.update();
    this.loadImages(dom.arr("img"));

    Scrolllock.unlock();
  }

  onLeave() {
    Scrolllock.lock();
    cursor.resetHover();
  }

  onLeaveCompleted() {
    this.scroll.destroy();
    SCROLLNODE.removeAttribute("style");
  }

  loadImages(images) {
    images.forEach(img =>
      img.addEventListener("load", () => this.scroll.scroll.update())
    );
  }
}

export default DefaultRenderer;
