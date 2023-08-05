import { useState, useEffect } from "react";
import {
  motion,
  useAnimation,
  MotionConfig,
  AnimatePresence,
} from "framer-motion";
import { styled } from "@stitches/react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { easeIn, easeOut } from "@/utils/easing";
import "../styles/vars.css";
import "../styles/globals.css";

const timeline = {
  header: {
    rou: 0,
    hun: 0.1,
    fan: 0.2,
  },
  footer: {
    dob: 1.25,
    contact: 1.5,
    arrow: 1.55,
    cv: 1.6,
    tg: 1.65,
    tw: 1.7,
  },
};

function App({ Component, pageProps, router }) {
  const controls = useAnimation();
  const [scale, setScale] = useState();

  useEffect(() => {
    if (console && console.log) {
      const message = `%c
      
        ███████╗██╗      ██████╗ ██╗    ██╗███████╗███╗   ██╗   ███╗   ███╗███████╗
        ██╔════╝██║     ██╔═══██╗██║    ██║██╔════╝████╗  ██║   ████╗ ████║██╔════╝
        █████╗  ██║     ██║   ██║██║ █╗ ██║█████╗  ██╔██╗ ██║   ██╔████╔██║█████╗
        ██╔══╝  ██║     ██║   ██║██║███╗██║██╔══╝  ██║╚██╗██║   ██║╚██╔╝██║██╔══╝
        ██║     ███████╗╚██████╔╝╚███╔███╔╝███████╗██║ ╚████║██╗██║ ╚═╝ ██║███████╗
        ╚═╝     ╚══════╝ ╚═════╝  ╚══╝╚══╝ ╚══════╝╚═╝  ╚═══╝╚═╝╚═╝     ╚═╝╚══════╝
      `;
      console.log(
        message,
        "font-family:monospace, background: #111; color: #aaa;"
      );
    }
    // ASCII ART GENERATOR http://patorjk.com/software/taag/#p=display&h=1&v=0&f=ANSI%20Shadow&t=flowen.me

    const { innerWidth: width, innerHeight: height } = window;
    // make sure we're at the top of the page so the animation will be correctly shown
    window.scrollTo(0, 0);

    // lock scrolling and clicking
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    body.style.pointerEvents = "none";

    const wrapper = document.querySelector(".wrapper");
    const wrapperHeight = wrapper.offsetHeight;

    // if wrapperHeight larger than height, scale down whole wrapper
    if (wrapperHeight > height) {
      // const scaleT = Math.max(height / wrapperHeight, 0.5);
      setScale(height / wrapperHeight);

      wrapper.style.transform = `scale(${height / wrapperHeight})`;
    }

    setTimeout(() => {
      controls.start(() => ({ scale: 1 }));

      body.style.overflow = "";
      body.style.pointerEvents = "";
    }, timeline.footer.tw * 1000 + 1000);
  }, [controls]);

  return (
    <MotionWrapper
      className="wrapper"
      initial={{ scale: scale }}
      style={{ scale: scale }}
      animate={controls}
      transition={{ ease: easeOut, duration: 1.5 }}
    >
      <Header timeline={timeline.header} />

      <main>
        <MotionConfig transition={{ ease: easeIn, duration: 0.6 }}>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} timeline={timeline} />
          </AnimatePresence>
        </MotionConfig>
      </main>

      <Footer timeline={timeline.footer} />
    </MotionWrapper>
  );
}

export default App;

const Wrapper = styled("div", {
  maxWidth: "1100px",
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  padding: "10vh 0 15vh",
  transformOrigin: "top",
});

const MotionWrapper = motion(Wrapper);
