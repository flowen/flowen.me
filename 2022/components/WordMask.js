import { styled, theme } from "stitches.config";
import { motion } from "framer-motion";
import { easeIn, easeOut } from "@/utils/easing";

export default function WordMask({
  children,
  direction,
  delay = 0,
  altFont = false,
  html,
  ...props
}) {
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
        }}
        exit={{
          x:
            direction === "left" ? "100%" : direction === "right" ? "-100%" : 0,
          y:
            direction === "top" ? "100%" : direction === "bottom" ? "-100%" : 0,
          transition: {
            delay: 0.2,
            duration: 0.5,
            ease: easeIn,
          },
        }}
        transition={{
          ease: easeOut,
          duration: theme.duration.slow.value,
          delay: delay,
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

const Mask = styled("div", {
  overflow: "hidden",
});

const AltFont = styled("span", {
  include: "fontAlt",
});
