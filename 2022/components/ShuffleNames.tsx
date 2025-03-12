import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import WordMask from "@/components/WordMask";
import { timelineMe } from "@/utils/timelines";
import { styled } from "stitches.config";
import { easeOut } from "@/utils/easing";

const NAMES = [
  { text: "Rou Hun", direction: "left" as const },
  { text: "Lowen", direction: "bottom" as const },
  { text: "Flowen", direction: "right" as const },
];

const DELAYS = {
  SHUFFLE: 0,
  INTERVAL: 2000,
  WORD_MASK: timelineMe.nameWords,
} as const;

interface ShuffleNamesProps {
  isShortAnimation: boolean;
  calculateTotalDelay: () => number;
}

export default function ShuffleNames({
  isShortAnimation,
  calculateTotalDelay,
}: ShuffleNamesProps) {
  const [wordOrder, setWordOrder] = useState<number[]>([0, 1, 2]);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);
  const [key, setKey] = useState<number>(0);

  // Start shuffling after initial animation
  useEffect(() => {
    const startDelay = isShortAnimation
      ? 0
      : calculateTotalDelay() - DELAYS.INTERVAL;

    console.log({ startDelay });

    const startTimer = setTimeout(() => {
      setIsShuffling(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [isShortAnimation, calculateTotalDelay]);

  // Handle shuffling interval
  useEffect(() => {
    if (!isShuffling) return;

    const shuffleInterval = setInterval(() => {
      setWordOrder((currentOrder) => {
        const newOrder = [...currentOrder];
        for (let i = newOrder.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
        }
        return newOrder;
      });
      setKey((prev) => prev + 1);
    }, DELAYS.INTERVAL);

    return () => {
      clearInterval(shuffleInterval);
    };
  }, [isShuffling]);

  // For animated words with shuffling
  const getDelay = () => (isShuffling ? DELAYS.SHUFFLE : DELAYS.WORD_MASK);

  return (
    <Wrapper>
      <MotionAboutMe
        key="shuffle-container"
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ ease: easeOut, duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          <WordMask
            key={`word-${key}-${wordOrder[0]}`}
            direction={NAMES[wordOrder[0]].direction}
            delay={getDelay()}
            exitDelay={0}
            exitDuration={0.1}
          >
            {NAMES[wordOrder[0]].text}
          </WordMask>
        </AnimatePresence>

        <WordMask
          direction="top"
          delay={DELAYS.WORD_MASK}
          exitDelay={0}
          exitDuration={0.1}
        >
          =
        </WordMask>

        <AnimatePresence mode="wait">
          <WordMask
            key={`word-${key}-${wordOrder[1]}`}
            direction={NAMES[wordOrder[1]].direction}
            delay={getDelay()}
            exitDelay={0}
            exitDuration={0.1}
          >
            {NAMES[wordOrder[1]].text}
          </WordMask>
        </AnimatePresence>

        <WordMask
          direction="top"
          delay={DELAYS.WORD_MASK}
          exitDelay={0}
          exitDuration={0.1}
        >
          =
        </WordMask>

        <AnimatePresence mode="wait">
          <WordMask
            key={`word-${key}-${wordOrder[2]}`}
            direction={NAMES[wordOrder[2]].direction}
            delay={getDelay()}
            exitDelay={0}
            exitDuration={0.1}
          >
            {NAMES[wordOrder[2]].text}
          </WordMask>
        </AnimatePresence>
      </MotionAboutMe>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  overflow: "hidden",
  margin: "5vh 0",
});

const AboutMe = styled("div", {
  display: "flex",
  gap: "20px",
  fontFamily: "var(--font-alt)",
  fontSize: "5vw",
});

const MotionAboutMe = motion.create(AboutMe);
