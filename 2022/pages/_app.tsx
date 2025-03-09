import { useState, useEffect } from "react";
import {
  motion,
  useAnimation,
  MotionConfig,
  AnimatePresence,
} from "motion/react";
import { styled } from "@stitches/react";
import { AppProps } from "next/app";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { easeIn, easeOut } from "@/utils/easing";
import { timeline } from "@/utils/timelines";

import "../styles/vars.css";
import "../styles/globals.css";

function App({ Component, pageProps, router }: AppProps) {
  const controls = useAnimation();
  const [scale, setScale] = useState<number | undefined>();

  // Add a route change event listener to scroll to top when navigating between pages
  useEffect(() => {
    const handleRouteChangeComplete = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

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
    const body = document.querySelector("body")!;
    body.style.overflow = "hidden";
    body.style.pointerEvents = "none";

    const wrapper = document.querySelector(".wrapper") as HTMLElement;
    const wrapperHeight = wrapper.offsetHeight;

    // if wrapperHeight larger than height, scale down whole wrapper
    if (wrapperHeight > height) {
      // const scaleT = Math.max(height / wrapperHeight, 0.5);
      setScale(height / wrapperHeight);

      wrapper.style.transform = `scale(${height / wrapperHeight})`;
    }

    const timeout = setTimeout(() => {
      controls.start({ scale: 1 });

      body.style.overflow = "";
      body.style.pointerEvents = "";
    }, timeline.footer.tw * 1000 + 1000);

    return () => clearTimeout(timeout);
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
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </MotionConfig>
      </main>

      <AnimatePresence mode="wait">
        <Footer key={`footer-${router.route}`} />
      </AnimatePresence>
    </MotionWrapper>
  );
}

export default App;

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "10vh 0 15vh",
  transformOrigin: "top",
});

const MotionWrapper = motion.create(Wrapper);
