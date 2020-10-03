import gsap from "gsap";
import GetCursorPosition from "cursor-position";
import dom from "../utils/dom";
import { distance } from "../utils/math";
import { dFast, dNormal, dSlow, dSlower } from "../gsapConfig";

const CLIENTLISTCLASS = ".clientsmenu .clients-list";
const CLIENTITEMSCLASS = ".clientsmenu .client-item";
const POSTERCONTAINERCLASS = ".clientsmenu .poster";
const POSTERIMAGECLASS = ".clientsmenu .poster-image";

const WINDOWWIDTH = window.innerWidth;
const WINDOWHEIGHT = window.innerHeight;
const HALFWIDTH = WINDOWWIDTH / 2;
const HALFHEIGHT = WINDOWHEIGHT / 2;

const { interpolate, clamp } = gsap.utils;

export default class ClientsMenu {
  constructor() {
    this.list = dom.el(CLIENTLISTCLASS);
    this.listItems = dom.arr(CLIENTITEMSCLASS);
    this.prevItem = null;

    this.dmap = dom.el("feDisplacementMap");
    this.x = HALFWIDTH;
    this.y = HALFHEIGHT;
    this.lerpedX = HALFWIDTH;
    this.lerpedY = HALFHEIGHT;

    this.isRendering = false;
    this.frame = null;

    this.poster = dom.el(POSTERCONTAINERCLASS);
    this.posterImages = dom.arr(POSTERIMAGECLASS);

    this.renderPoster = this.renderPoster.bind(this);
    this.showPoster = this.showPoster.bind(this);
    this.hidePoster = this.hidePoster.bind(this);
    this.handlePoster = this.handlePoster.bind(this);
  }

  init() {
    if (!dom.contains(CLIENTLISTCLASS)) return;

    gsap.set(this.poster, { x: HALFWIDTH, y: 0 });

    this.list.addEventListener("mouseover", this.showPoster);
    this.list.addEventListener("mouseleave", this.hidePoster);
    this.list.addEventListener("mousemove", this.handlePoster);
  }

  handlePoster(e) {
    this.movePoster(e);
    this.changePoster(e);
  }

  renderPoster() {
    if (!this.isRendering) {
      // console.log(`cancelling id: ${this.frame}`);
      cancelAnimationFrame(this.frame);
      return;
    }

    this.lerpedX = interpolate(this.lerpedX, this.x, 0.08);
    this.lerpedY = interpolate(this.lerpedY, this.y, 0.08);
    const dist = distance(this.lerpedX, this.x, this.lerpedY, this.y);
    const dmScale = clamp(0, 70, dist * 5);

    gsap.to(this.dmap.scale, {
      baseVal: dmScale,
      ease: "flowOut",
      duration: 2,
      delay: dFast
    });

    this.frame = requestAnimationFrame(() => this.renderPoster());
  }

  changePoster(e) {
    const item = e.target.closest(".client-item");
    if (!item || item === this.prevItem) return;

    const currentIndex = this.listItems.indexOf(item);

    this.posterImages.forEach(el => el.classList.remove("-current"));
    this.posterImages[currentIndex].classList.add("-current");

    this.lerpedX = HALFWIDTH;
    this.lerpedY = HALFHEIGHT;
    this.prevItem = item;
  }

  movePoster(e) {
    const { x, y } = GetCursorPosition(e);
    const { x: xOffset, y: yOffset } = this.list.getBoundingClientRect();

    this.x = x;
    this.y = y;

    gsap.to(this.poster, {
      x: x - Math.floor(xOffset),
      y: y - Math.floor(yOffset),
      duration: dFast,
      ease: "flowInOut"
    });
  }

  showPoster(e) {
    gsap.to(this.poster, { opacity: 1 });

    this.isRendering = true;
    this.renderPoster();
  }

  hidePoster() {
    gsap.to(this.poster, { opacity: 0 });
    this.isRendering = false;
  }

  clearBindings() {
    this.list.removeEventListener("mouseenter", this.showPoster);
    this.list.removeEventListener("mouseleave", this.hidePoster);
    this.list.removeEventListener("mouseleave", this.handlePoster);
  }
}
