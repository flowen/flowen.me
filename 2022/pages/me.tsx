"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import { styled } from "stitches.config";
import { Row } from "@/components/Row";
import WordMask from "@/components/WordMask";
import Logo from "@/assets/svg/logo.svg";
import MeCarousel from "@/components/MeCarousel";

const HEIGHTMULTIPLIER = 3.25;
const APP_ANIMATION_TIME = 1.5; // Animation time from _app.tsx MotionWrapper

// Words to shuffle with their directions
const nameWords = [
  { text: "Rou Hun", direction: "left" as const },
  { text: "Lowen", direction: "bottom" as const },
  { text: "Flowen", direction: "right" as const },
];

interface MeProps {
  now: string;
  bio: string;
  timeline: {
    header: {
      fan: number;
      [key: string]: number;
    };
    footer: {
      dob: number;
      contact: number;
      arrow: number;
      cv: number;
      tg: number;
      tw: number;
      [key: string]: number;
    };
    [key: string]: any;
  };
}

export default function Me({ now, timeline, bio }: MeProps) {
  const router = useRouter();
  const [wordOrder, setWordOrder] = useState<number[]>([0, 1, 2]);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);
  const [key, setKey] = useState<number>(0); // Key to force remount
  const [carouselDelay, setCarouselDelay] = useState<number>(1.5); // Default carousel delay
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0); // Track active image

  // Determine if we navigated from another page or loaded directly
  const [isDirectNavigation, setIsDirectNavigation] = useState<boolean>(true);

  // Timeline values specific to the me page
  const tlMe = useMemo(
    () => ({
      now: 0.35,
      nowContent: 0.5,
      meCarousel: 1.5,
      nameWords: 0.8,
    }),
    []
  );

  // Calculate the total delay based on the highest value in the timeline
  const calculateTotalDelay = useCallback(() => {
    // The highest value should be timeline.footer.tw (1.7)
    const appDelay = timeline.footer.tw * 1000 + 1000; // Same as in _app.tsx
    const totalDelay = appDelay + APP_ANIMATION_TIME * 1000; // Add app animation time
    return totalDelay;
  }, [timeline.footer.tw]);

  // Check if we navigated from another page
  useEffect(() => {
    // If we have a referrer or previous route, we didn't load directly
    if (
      document.referrer.includes(window.location.host) ||
      router.asPath !== router.pathname
    ) {
      setIsDirectNavigation(false);
    }
  }, [router.asPath, router.pathname]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Calculate and set the appropriate delays based on navigation type
  useEffect(() => {
    // Calculate the appropriate carousel delay based on navigation type
    if (isDirectNavigation) {
      // For direct navigation, use the highest value from the timeline plus app animation time
      const appDelay = timeline.footer.tw + 1; // Convert to seconds and add 1s buffer
      const totalDelay = appDelay + APP_ANIMATION_TIME; // Add app animation time in seconds
      setCarouselDelay(totalDelay);
    } else {
      // For navigation from another page, use the default delay
      setCarouselDelay(tlMe.meCarousel);
    }
  }, [isDirectNavigation, tlMe.meCarousel, timeline.footer.tw]);

  // Start shuffling after initial animation
  useEffect(() => {
    // Longer delay for direct navigation, shorter for page transitions
    const delayTime = isDirectNavigation
      ? calculateTotalDelay() // Use the calculated total delay for direct navigation
      : tlMe.nameWords * 1000 + 1000; // Shorter delay when coming from another page

    const timer = setTimeout(() => {
      setIsShuffling(true);
    }, delayTime);

    return () => clearTimeout(timer);
  }, [isDirectNavigation, tlMe.nameWords, calculateTotalDelay]);

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
          <WordContainer key={`word-${key}-${wordOrder[0]}`}>
            <WordMask
              direction={nameWords[wordOrder[0]].direction}
              delay={isShuffling ? 0 : tlMe.nameWords}
            >
              {nameWords[wordOrder[0]].text}
            </WordMask>
          </WordContainer>
        </AnimatePresence>

        <WordMask direction="top" delay={tlMe.nameWords}>
          =
        </WordMask>

        <AnimatePresence mode="wait">
          <WordContainer key={`word-${key}-${wordOrder[1]}`}>
            <WordMask
              direction={nameWords[wordOrder[1]].direction}
              delay={isShuffling ? 0 : tlMe.nameWords}
            >
              {nameWords[wordOrder[1]].text}
            </WordMask>
          </WordContainer>
        </AnimatePresence>

        <WordMask direction="top" delay={tlMe.nameWords}>
          =
        </WordMask>

        <AnimatePresence mode="wait">
          <WordContainer key={`word-${key}-${wordOrder[2]}`}>
            <WordMask
              direction={nameWords[wordOrder[2]].direction}
              delay={isShuffling ? 0 : tlMe.nameWords}
            >
              {nameWords[wordOrder[2]].text}
            </WordMask>
          </WordContainer>
        </AnimatePresence>
      </AboutMe>

      <h1>
        <WordMask direction="top" delay={tlMe.now}>
          /NOW
        </WordMask>

        <WordMask
          direction="top"
          delay={tlMe.nowContent}
          altFont
          html={now}
          css={{ fontSize: "5vw", marginBottom: "5vh" }}
        />
      </h1>

      <h1>
        <WordMask direction="top" delay={tlMe.now}>
          /BIO
        </WordMask>

        <WordMask
          direction="top"
          delay={tlMe.nowContent}
          altFont
          html={bio}
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

  "& svg": {
    height: `calc(var(--font-size) * ${HEIGHTMULTIPLIER})`,
  },
});

const AboutMe = styled("div", {
  display: "flex",
  gap: "1vw",
  margin: "5vh 0 5vh",
  fontFamily: "var(--font-alt)",
  fontSize: "5vw",
  alignItems: "center",
});

const WordContainer = styled(motion.div, {
  minWidth: "150px",
  display: "flex",
  justifyContent: "center",
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
