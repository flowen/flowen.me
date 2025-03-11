import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "motion/react";
import { useRouter } from "next/router";
import WordMask from "@/components/WordMask";
import { timelineMe } from "@/utils/timelines";

const NAMES = [
  { text: "Rou Hun", direction: "left" as const },
  { text: "Lowen", direction: "bottom" as const },
  { text: "Flowen", direction: "right" as const },
];

const DELAYS = {
  EXIT: 0,
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
  const router = useRouter();
  const [wordOrder, setWordOrder] = useState<number[]>([0, 1, 2]);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);
  const [key, setKey] = useState<number>(0);
  const isExitingRef = useRef(false);

  // Listen for route changes to trigger exit animations
  useEffect(() => {
    const handleRouteChangeStart = () => {
      console.log("ShuffleNames: Exit animation triggered");
      isExitingRef.current = true;
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router]);

  useEffect(() => {
    const startDelay = isShortAnimation
      ? 0
      : calculateTotalDelay() - DELAYS.INTERVAL;

    const startTimer = setTimeout(() => {
      if (!isExitingRef.current) {
        setIsShuffling(true);
      }
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [isShortAnimation, calculateTotalDelay]);

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

  // Determine delay based on animation state
  const getDelay = (index: number) => {
    if (isExitingRef.current) return DELAYS.EXIT;
    if (isShuffling) return DELAYS.SHUFFLE;
    return DELAYS.WORD_MASK;
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <WordMask
          key={`word-${key}-${wordOrder[0]}`}
          direction={NAMES[wordOrder[0]].direction}
          delay={getDelay(0)}
        >
          {NAMES[wordOrder[0]].text}
        </WordMask>
      </AnimatePresence>

      <WordMask
        direction="top"
        delay={isExitingRef.current ? DELAYS.EXIT : DELAYS.WORD_MASK}
      >
        =
      </WordMask>

      <AnimatePresence mode="wait">
        <WordMask
          key={`word-${key}-${wordOrder[1]}`}
          direction={NAMES[wordOrder[1]].direction}
          delay={getDelay(1)}
        >
          {NAMES[wordOrder[1]].text}
        </WordMask>
      </AnimatePresence>

      <WordMask
        direction="top"
        delay={isExitingRef.current ? DELAYS.EXIT : DELAYS.WORD_MASK}
      >
        =
      </WordMask>

      <AnimatePresence mode="wait">
        <WordMask
          key={`word-${key}-${wordOrder[2]}`}
          direction={NAMES[wordOrder[2]].direction}
          delay={getDelay(2)}
        >
          {NAMES[wordOrder[2]].text}
        </WordMask>
      </AnimatePresence>
    </>
  );
}
