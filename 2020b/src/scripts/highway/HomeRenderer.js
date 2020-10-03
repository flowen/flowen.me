import DefaultRenderer from "./DefaultRenderer";
import dom from "../utils/dom";
import ClientsMenu from "../modules/ClientsMenu";

class HomeRenderer extends DefaultRenderer {
  constructor(args) {
    super(args);
    this.clientsmenu = null;
  }

  onEnter() {
    super.onEnter();

    // preloader here
  }

  onEnterCompleted() {
    super.onEnterCompleted();

    this.clientsmenu = new ClientsMenu();
    this.clientsmenu.init();

    this.scroll.on("scroll", instance => {
      const {
        limit,
        scroll: { y }
      } = instance;

      const totalScrolled = (y / limit) * 100;
      const blackholeScale = 1 + y / limit;
      const translateGradient = totalScrolled * 0.1;

      dom.el(".blackhole").style.transform = `scale(${blackholeScale})`;
      //prettier-ignore
      dom.el(".-green").style.transform =
        `translate(${translateGradient}%, ${-translateGradient * 1.25}%)`;
      //prettier-ignore
      dom.el(".-purple").style.transform =
        `translate(${-translateGradient}%, ${-translateGradient}%)`;
    });
  }

  onLeaveCompleted() {
    super.onLeaveCompleted();

    this.clientsmenu.clearBindings();
    this.clientsmenu = null;
  }
}

export default HomeRenderer;
