import { styled } from "stitches.config";
import { motion } from "motion/react";
import { easeIn, easeOut } from "@/utils/easing";

interface WordMaskProps {
  children?: React.ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
  exitDelay?: number;
  exitDuration?: number;
  altFont?: boolean;
  html?: string;
  [key: string]: any;
}

export default function WordMask({
  children,
  direction,
  delay = 0,
  exitDelay,
  exitDuration,
  altFont = false,
  html,
  ...props
}: WordMaskProps) {
  return (
    <Mask {...props}>
      <motion.div
        initial={{
          x:
            direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
          y:
            direction === "top" ? "-100%" : direction === "bottom" ? "100%" : 0,
        }}
        animate={{
          x: 0,
          y: 0,
          transition: {
            ease: easeOut,
            duration: 0.5,
            delay: delay,
          },
        }}
        exit={{
          x:
            direction === "left" ? "100%" : direction === "right" ? "-100%" : 0,
          y:
            direction === "top" ? "100%" : direction === "bottom" ? "-100%" : 0,
          transition: {
            delay: exitDelay || 0.2,
            duration: exitDuration || 0.5,
            ease: easeIn,
          },
        }}
      >
        {html ? (
          altFont ? (
            <AltFont>
              <span dangerouslySetInnerHTML={{ __html: html }} />
            </AltFont>
          ) : (
            <span dangerouslySetInnerHTML={{ __html: html }} />
          )
        ) : altFont ? (
          <AltFont>{children}</AltFont>
        ) : (
          children
        )}
      </motion.div>
    </Mask>
  );
}

const Mask = styled(motion.div, {
  overflow: "hidden",
});

const AltFont = styled("span", {
  include: "fontAlt",
});
