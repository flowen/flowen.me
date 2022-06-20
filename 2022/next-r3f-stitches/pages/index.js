import Link from "next/link";
import { styled } from "stitches.config";

import { Row } from "@/components/Row";
import WordMask from "@/components/WordMask";
import MeImage from "@/components/MeImage";

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
    <>
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
              <img src="/assets/img/fx.jpg" alt="coolshit" />
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
        <MeImage layout transition={{ duration: 0.3 }} />

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
    </>
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
