import DefaultRenderer from "./DefaultRenderer";

class ContactRenderer extends DefaultRenderer {
  onEnter() {
    super.onEnter();
    console.log("onEnter extends");
  }
}

export default ContactRenderer;
