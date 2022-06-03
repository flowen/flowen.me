import Link from "next/link";
import { styled } from "stitches.config";

import { Row } from "@/components/Row";
import WordMask from "@/components/WordMask";
import MeImage from "@/components/MeImage";

const timeline = {
  header: {
    rou: 0,
    hun: 0.1,
    fan: 0.2,
  },
  uiDev: 0.35,
  motion: 0.5,
  ampersand: 0.7,
  frontend: 0.85,
  creative: 0.9,
  coding: 1.05,
  available: 1.15,
  availableAnswer: 1.15,
  footer: {
    dob: 1.15,
    contact: 1.3,
    arrow: 1.35,
    cv: 1.45,
    tg: 1.5,
    tw: 1.55,
  },
};

export default function Index() {
  return (
    <main>
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
            <AnchorProjects>
              <img src="/assets/img/fx2.jpg" alt="coolshit" />
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
        <MeImage />

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
    </main>
  );
}

const AnchorProjects = styled("a", {
  display: "block",
  margin: "2vmin 0 0 7vmin",
  height: "calc(var(--font-size) * 2)",

  "&:hover": {
    cursor: "pointer",
  },

  "& img": {
    display: "block",
    height: "100%",
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
