if (console && console.log) {
  const message = `%c

  ███████╗██╗      ██████╗ ██╗    ██╗███████╗███╗   ██╗   ███╗   ███╗███████╗
  ██╔════╝██║     ██╔═══██╗██║    ██║██╔════╝████╗  ██║   ████╗ ████║██╔════╝
  █████╗  ██║     ██║   ██║██║ █╗ ██║█████╗  ██╔██╗ ██║   ██╔████╔██║█████╗
  ██╔══╝  ██║     ██║   ██║██║███╗██║██╔══╝  ██║╚██╗██║   ██║╚██╔╝██║██╔══╝
  ██║     ███████╗╚██████╔╝╚███╔███╔╝███████╗██║ ╚████║██╗██║ ╚═╝ ██║███████╗
  ╚═╝     ╚══════╝ ╚═════╝  ╚══╝╚══╝ ╚══════╝╚═╝  ╚═══╝╚═╝╚═╝     ╚═╝╚══════╝
`;
  console.log(message, "font-family:monospace, background: #111; color: #aaa;");
}
// ASCII ART GENERATOR http://patorjk.com/software/taag/#p=display&h=1&v=0&f=ANSI%20Shadow&t=flowen.me

const html = document.documentElement;
html.classList.remove("no-js");
html.classList.add("js");
