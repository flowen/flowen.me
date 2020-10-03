import DefaultRenderer from "./DefaultRenderer";

class ClientRenderer extends DefaultRenderer {
  onEnter() {
    super.onEnter();
    console.log("ClientRenderer");
  }
}

export default ClientRenderer;
