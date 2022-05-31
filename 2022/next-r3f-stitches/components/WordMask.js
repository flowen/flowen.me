import { styled, theme } from "stitches.config";
import { motion } from "framer-motion";
import { easeOut } from "@/utils/easing";

export default function WordMask({ children, direction, delay = 0 }) {
  return (
    <Mask>
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
        transition={{
          ease: easeOut,
          duration: theme.duration.slow.value,
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    </Mask>
  );
}

const Mask = styled("div", {
  display: "flex-inline",
  overflow: "hidden",
});
