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

const linkVariants = {
  tap: {
    scale: 0.95,
  },
  hover: {
    scale: 1.05,
  },
};

export default function Index() {
  return (
    <motion.div>
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

          <Link href="/projects">
            <AnchorProjects
              whileTap="tap"
              whileHover="hover"
              variants={linkVariants}
            >
              <motion.img
                src="/assets/img/fx.jpg"
                alt="coolshit"
                style={{ marginTop: "-43px" }}
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
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
          <LinkMe whileTap="tap" whileHover="hover" variants={linkVariants}>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              layoutId="overlay"
            />
            <motion.img
              src="/assets/img/me.jpg"
              alt="me"
              style={{
                height: `calc(var(--font-size) * ${heightMultiplier})`,
              }}
              layoutId="me-image"
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

const AnchorProjects = styled(motion.a, {
  position: "relative",
  overflow: "hidden",

  flex: 1,
  margin: "1rem 0 1rem 3rem",
  height: "calc(var(--font-size) * 2)",

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

const LinkMe = styled(motion.a, {
  overflow: "hidden",
  position: "relative",
  display: "block",
  margin: "0 7vh 2vh 0",
  height: `calc(var(--font-size) * ${heightMultiplier})`,
});

const Overlay = styled(motion.div, {
  zIndex: 100,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",

  background: "#E75A5A",
  mixBlendMode: "lighten",
  transition: "opacity var(--d-slower) var(--ease-out)",
});

export { Overlay };
