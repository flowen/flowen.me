import { AnimatePresence } from "framer-motion";
import { styled } from "@stitches/react";

import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "../styles/vars.css";
import "../styles/globals.css";

function App({ Component, pageProps, router }) {
  return (
    <Wrapper>
      <Header timeline={timeline.header} />

      <main>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </main>

      <Footer timeline={timeline.footer} />
      <Nav />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "720px",
  margin: "0 auto",
  padding: "10vh 0 15vh",
});

const timeline = {
  header: {
    rou: 0,
    hun: 0.1,
    fan: 0.2,
  },
  footer: {
    dob: 1.15,
    contact: 1.3,
    arrow: 1.35,
    cv: 1.45,
    tg: 1.5,
    tw: 1.55,
  },
};
