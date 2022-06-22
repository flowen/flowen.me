import { useState, useLayoutEffect } from "react";
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
    dob: 1.15,
    contact: 1.3,
    arrow: 1.35,
    cv: 1.45,
    tg: 1.5,
    tw: 1.55,
  },
};

function App({ Component, pageProps, router }) {
  const controls = useAnimation();
  const [scale, setScale] = useState();

  useLayoutEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;

    const wrapper = document.querySelector(".wrapper");
    const wrapperHeight = wrapper.offsetHeight;

    // if wrapperHeight larger than height, scale down whole wrapper
    if (wrapperHeight > height) {
      setScale(height / wrapperHeight);
      wrapper.style.transform = `scale(${height / wrapperHeight})`;
    }

    setTimeout(() => {
      controls.start(() => ({ scale: 1 }));
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
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </MotionConfig>
      </main>

      <Footer timeline={timeline.footer} />
    </MotionWrapper>
  );
}

export default App;

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  padding: "10vh 0 15vh",
  transformOrigin: "top",
});

const MotionWrapper = motion(Wrapper);
