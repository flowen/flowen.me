import { motion } from "framer-motion";
import { styled } from "stitches.config";

import { MotionOverlay } from "@/pages/index";
import { Row } from "@/components/Row";
import WordMask from "@/components/WordMask";
import Logo from "@/assets/svg/logo.svg";

const heightMultiplier = 3;

const timeline = {
  header: {
    rou: 0,
    hun: 0.1,
    fan: 0.2,
  },
  now: 0.35,
  nowContent: 0.5,
  footer: {
    dob: 1.15,
    contact: 1.3,
    arrow: 1.35,
    cv: 1.45,
    tg: 1.5,
    tw: 1.55,
  },
};

export default function Me() {
  return (
    <motion.div layout>
      <Row css={{ position: "relative" }}>
        <Wrapper
          style={{ height: `calc(var(--font-size) * ${heightMultiplier})` }}
        >
          <MotionOverlay
            layoutId="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
          />
          <motion.img
            src="/assets/img/me.jpg"
            alt="me"
            style={{ height: `calc(var(--font-size) * ${heightMultiplier})` }}
            layoutId="me-image"
            whileHover={{ scale: 1.2 }}
          />
        </Wrapper>

        <LogoSVG />
      </Row>

      <h1>
        <WordMask direction="top" delay={timeline.now}>
          /NOW
        </WordMask>
        <WordMask direction="top" delay={timeline.nowContent} altFont={true}>
          Enjoying my son &amp; looking for a job
        </WordMask>
      </h1>
    </motion.div>
  );
}

const Wrapper = styled("div", {
  display: "block",
  position: "relative",
});

const LogoSVG = styled(Logo, {
  position: "absolute",
  top: "5vw",
  right: "5vw",
  height: "calc(var(--font-size) * 3)",
});
