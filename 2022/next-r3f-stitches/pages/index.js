import Link from "next/link";
import { motion } from "framer-motion";
import { styled } from "stitches.config";

import { Row } from "@/components/Row";
import WordMask from "@/components/WordMask";

const heightMultiplier = 2;
const timeline = {
  uiDev: 0.35,
  motion: 0.5,
  ampersand: 0.7,
  frontend: 0.85,
  creative: 0.9,
  coding: 1.05,
  available: 1.15,
  availableAnswer: 1.15,
};

export default function Index() {
  return (
    <motion.div layout>
      <h1>
        <Row>
          <div>
            <WordMask direction="top" delay={timeline.uiDev}>
              UI dev
            </WordMask>
            <WordMask direction="right" delay={timeline.motion}>
              Motion
            </WordMask>
          </div>

          <Link href="/projects" scroll={false}>
            <AnchorProjects>
              <img
                src="/assets/img/fx.jpg"
                alt="coolshit"
                style={{ marginTop: "-43px" }}
              />
            </AnchorProjects>
          </Link>
        </Row>

        <Row>
          <WordMask direction="top" delay={timeline.ampersand}>
            <Ampersand>&amp;</Ampersand>
          </WordMask>
          &nbsp;
          <WordMask direction="top" delay={timeline.frontend}>
            Frontend
          </WordMask>
        </Row>
      </h1>

      <Row css={{ position: "relative" }}>
        <Link href="/me" scroll={false}>
          <LinkMe
            style={{ height: `calc(var(--font-size) * ${heightMultiplier})` }}
          >
            <MotionOverlay
              layoutId="overlay"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src="/assets/img/me.jpg"
              alt="me"
              style={{ height: `calc(var(--font-size) * ${heightMultiplier})` }}
              layoutId="me-image"
              transition={{ duration: 0.3 }}
            />
          </LinkMe>
        </Link>

        <CreativeCoding>
          <WordMask direction="top" delay={timeline.creative}>
            Creative
          </WordMask>
          <WordMask direction="bottom" delay={timeline.creative}>
            Coding
          </WordMask>
        </CreativeCoding>
      </Row>

      <Row>
        <WordMask direction="right" delay={timeline.available}>
          Available:
        </WordMask>
        <WordMask
          direction="left"
          delay={timeline.availableAnswer}
          altFont={true}
        >
          Yes
        </WordMask>
      </Row>
    </motion.div>
  );
}

const AnchorProjects = styled("a", {
  position: "relative",
  zIndex: "999",

  flex: 1,
  margin: "1rem 0 1rem 3rem",
  height: "calc(var(--font-size) * 2)",
  overflow: "hidden",

  "&:hover": {
    cursor: "pointer",
  },

  "& img": {
    display: "block",
    width: "100%",
  },
});

const CreativeCoding = styled("h1", {
  fontFamily: "$fontAlt",
  fontFeatureSettings: '"aalt" on',
  fontWeight: "400",
});

const Ampersand = styled("span", {
  fontFamily: "$fontAlt",
  fontWeight: "400",
});

const LinkMe = styled("a", {
  position: "relative",
  display: "block",
  margin: "0 7vh 2vh 0",
});

const Overlay = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",

  background: "#E75A5A",
  mixBlendMode: "lighten",
  transition: "opacity var(--d-slower) var(--ease-out)",
});

const MotionOverlay = motion(Overlay);

export { MotionOverlay };
