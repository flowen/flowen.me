"use client";

import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "motion/react";

import { styled } from "stitches.config";
import { Row } from "@/components/Row";
import WordMask from "@/components/WordMask";
import Logo from "@/assets/svg/logo.svg";
import MeCarousel from "@/components/MeCarousel";
import { timelineMe } from "@/utils/timelines";
import ShuffleNames from "@/components/ShuffleNames";

const HEIGHTMULTIPLIER = 3.25;
const APP_ANIMATION_TIME = 1.5; // Animation time from _app.tsx MotionWrapper

interface MeProps {
  now: string;
  bio: string;
  future: string;
}

export default function Me({ now, bio, future }: MeProps) {
  const router = useRouter();
  const [isShortAnimation, setIsShortAnimation] = useState<boolean>(false);
  const [carouselStartDelay, setCarouselStarttDelay] = useState<number>(0); // Initialize to 0

  // Calculate the total delay based on the highest value in the timeline
  const calculateTotalDelay = useCallback(() => {
    const appDelay = timelineMe.footer.tw * 1000 + 1000; // Same as in _app.tsx
    const totalDelay = appDelay + APP_ANIMATION_TIME * 1000; // Add app animation time
    return totalDelay;
  }, []);

  // Set up animation timing based on URL parameters
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const hasShortAnimation = params.get("shortAnimation") !== null;
      console.log({ hasShortAnimation });
      setIsShortAnimation(hasShortAnimation);

      // Set carousel delay based on animation type
      const newDelay = hasShortAnimation
        ? timelineMe.meCarousel
        : calculateTotalDelay() / 1000;
      setCarouselStarttDelay(newDelay);
      console.log("Setting carousel delay:", { newDelay });

      // Clean up URL if it has the parameter, but delay it to prevent re-renders
      if (hasShortAnimation) {
        const timeoutId = setTimeout(() => {
          router.replace("/me", undefined, { shallow: true });
        }, newDelay * 1000 + 100); // Convert to ms and add small buffer

        return () => clearTimeout(timeoutId);
      }
    }
  }, [router, calculateTotalDelay]);

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
            carouselStartDelay={carouselStartDelay}
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

      <ShuffleNames
        isShortAnimation={isShortAnimation}
        calculateTotalDelay={calculateTotalDelay}
      />

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
        <WordMask direction="top" delay={timelineMe.now + 0.1}>
          /BIO
        </WordMask>

        <WordMask
          direction="top"
          delay={timelineMe.nowContent + 0.15}
          altFont
          html={bio}
          css={{ fontSize: "5vw", marginBottom: "5vh" }}
        />
      </h1>

      <h1>
        <WordMask direction="top" delay={timelineMe.now + 0.2}>
          /FUTURE
        </WordMask>

        <WordMask
          direction="top"
          delay={timelineMe.nowContent + 0.25}
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
      future: data.future,
    },
  };
};
