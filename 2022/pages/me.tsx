"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "motion/react";

import { styled } from "stitches.config";
import { Row } from "@/components/Row";
import WordMask from "@/components/WordMask";
import Logo from "@/assets/svg/logo.svg";
import MeCarousel from "@/components/MeCarousel";
import { timelineMe } from "@/utils/timelines";

const HEIGHTMULTIPLIER = 3.25;
const APP_ANIMATION_TIME = 1.5; // Animation time from _app.tsx MotionWrapper

const nameWords = [
  { text: "Rou Hun", direction: "left" as const },
  { text: "Lowen", direction: "bottom" as const },
  { text: "Flowen", direction: "right" as const },
];

interface MeProps {
  now: string;
  bio: string;
  future: string;
}

export default function Me({ now, bio, future }: MeProps) {
  const router = useRouter();
  const [wordOrder, setWordOrder] = useState<number[]>([0, 1, 2]);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);
  const [key, setKey] = useState<number>(0);
  const [carouselDelay, setCarouselDelay] =
    useState<number>(APP_ANIMATION_TIME);
  const [isDirectNavigation, setIsDirectNavigation] = useState<boolean>(true);
  const isExitingRef = useRef(false);

  // Calculate the total delay based on the highest value in the timeline
  const calculateTotalDelay = useCallback(() => {
    const appDelay = timelineMe.footer.tw * 1000 + 1000; // Same as in _app.tsx
    const totalDelay = appDelay + APP_ANIMATION_TIME * 1000; // Add app animation time
    return totalDelay;
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const forceMode = params.get("navMode");

      if (forceMode === "direct") {
        setIsDirectNavigation(true);
        return;
      } else if (forceMode === "indirect") {
        setIsDirectNavigation(false);
        return;
      }
    }

    // fix for exit animations for rou hun = flowen = lowen
    const handleRouteChangeStart = (url: string) => {
      // Store a flag in sessionStorage indicating we're navigating within the app
      if (typeof window !== "undefined") {
        sessionStorage.setItem("nextNavigation", "true");
      }
      // Set exiting ref to true immediately (synchronous)
      isExitingRef.current = true;
      setKey((prev) => prev + 1);

      if (url !== router.asPath) {
        // Prevent the default navigation
        router.events.emit("routeChangeError");

        window.history.pushState(null, "", router.asPath);

        setTimeout(() => {
          router.push(url);
        }, 300);

        return false;
      }
    };
    router.events.on("routeChangeStart", handleRouteChangeStart);

    // Check if we have the navigation flag from a previous navigation
    if (typeof window !== "undefined") {
      const hadPreviousNavigation =
        sessionStorage.getItem("nextNavigation") === "true";
      setIsDirectNavigation(!hadPreviousNavigation);
    }

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router]);

  // Calculate and set the appropriate delays based on navigation type
  useEffect(() => {
    // Calculate the appropriate carousel delay based on navigation type
    if (isDirectNavigation) {
      // For direct navigation, use the highest value from the timeline plus app animation time
      const appDelay = timelineMe.footer.tw + 1;
      const totalDelay = appDelay + APP_ANIMATION_TIME;
      setCarouselDelay(totalDelay);
    } else {
      // For navigation from another page, use the default delay
      setCarouselDelay(timelineMe.meCarousel);
    }
  }, [isDirectNavigation]);

  // Start shuffling after initial animation
  useEffect(() => {
    // Longer delay for direct navigation, shorter for page transitions
    const delayTime = isDirectNavigation
      ? calculateTotalDelay() // Use the calculated total delay for direct navigation
      : timelineMe.nameWords * 1000 + 1000; // Shorter delay when coming from another page

    const timer = setTimeout(() => {
      setIsShuffling(true);
    }, delayTime);

    return () => clearTimeout(timer);
  }, [isDirectNavigation, calculateTotalDelay]);

  // Shuffle the words every 2 seconds
  useEffect(() => {
    if (!isShuffling) return;

    const interval = setInterval(() => {
      // Fisher-Yates shuffle algorithm
      const newOrder = [...wordOrder];
      for (let i = newOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
      }
      setWordOrder(newOrder);
      setKey((prev) => prev + 1); // force remount
    }, 2000);

    return () => clearInterval(interval);
  }, [isShuffling, wordOrder]);

  return (
    <motion.div>
      <Head>
        <title>
          The web is boring af, lets 🌶️ it up | Freelance frontend UI developer
          and designer | Rou Hun Fan
        </title>
        <meta name="description" content={bio} />
        <meta
          name="keywords"
          content="UI developer, designer, frontend, React, Next.js"
        />
      </Head>

      <Row css={{ position: "relative" }}>
        <Wrapper>
          <MeCarousel
            height={`calc(var(--font-size) * ${HEIGHTMULTIPLIER})`}
            delay={carouselDelay}
          />
        </Wrapper>

        <LogoWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Logo />
        </LogoWrapper>
      </Row>

      <AboutMe>
        <AnimatePresence mode="wait">
          <WordMask
            key={`word-${key}-${wordOrder[0]}`}
            direction={nameWords[wordOrder[0]].direction}
            delay={
              isExitingRef.current ? 0 : isShuffling ? 0 : timelineMe.nameWords
            }
          >
            {nameWords[wordOrder[0]].text}
          </WordMask>
        </AnimatePresence>

        <WordMask
          direction="top"
          delay={isExitingRef.current ? 0 : timelineMe.nameWords}
        >
          =
        </WordMask>

        <AnimatePresence mode="wait">
          <WordMask
            key={`word-${key}-${wordOrder[1]}`}
            direction={nameWords[wordOrder[1]].direction}
            delay={
              isExitingRef.current ? 0 : isShuffling ? 0 : timelineMe.nameWords
            }
          >
            {nameWords[wordOrder[1]].text}
          </WordMask>
        </AnimatePresence>

        <WordMask
          direction="top"
          delay={isExitingRef.current ? 0 : timelineMe.nameWords}
        >
          =
        </WordMask>

        <AnimatePresence mode="wait">
          <WordMask
            key={`word-${key}-${wordOrder[2]}`}
            direction={nameWords[wordOrder[2]].direction}
            delay={
              isExitingRef.current ? 0 : isShuffling ? 0 : timelineMe.nameWords
            }
          >
            {nameWords[wordOrder[2]].text}
          </WordMask>
        </AnimatePresence>
      </AboutMe>

      <h1>
        <WordMask direction="top" delay={timelineMe.now}>
          /NOW
        </WordMask>

        <WordMask
          direction="top"
          delay={timelineMe.nowContent}
          altFont
          html={now}
          css={{ fontSize: "5vw", marginBottom: "5vh" }}
        />
      </h1>

      <h1>
        <WordMask direction="top" delay={timelineMe.now}>
          /BIO
        </WordMask>

        <WordMask
          direction="top"
          delay={timelineMe.nowContent}
          altFont
          html={bio}
          css={{ fontSize: "5vw", marginBottom: "5vh" }}
        />
      </h1>

      <h1>
        <WordMask direction="top" delay={timelineMe.now}>
          /FUTURE
        </WordMask>

        <WordMask
          direction="top"
          delay={timelineMe.nowContent}
          altFont
          html={future}
          css={{ fontSize: "5vw", marginBottom: "5vh" }}
        />
      </h1>
    </motion.div>
  );
}

const Wrapper = styled("div", {
  position: "relative",
  width: "100%",
  height: `calc(var(--font-size) * ${HEIGHTMULTIPLIER})`,
  overflow: "hidden",
});

const LogoWrapper = styled(motion.div, {
  zIndex: 100,
  position: "absolute",
  top: "5vw",
  left: "27.5vw",
  mixBlendMode: "difference",

  "& svg": {
    height: `calc(var(--font-size) * ${HEIGHTMULTIPLIER})`,
  },
});

const AboutMe = styled("div", {
  display: "flex",
  gap: "20px",
  margin: "5vh 0",
  fontFamily: "var(--font-alt)",
  fontSize: "5vw",
});

import fsPromises from "fs/promises";
import path from "path";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return {
    props: {
      bio: data.bio,
      now: data.now,
    },
  };
};
