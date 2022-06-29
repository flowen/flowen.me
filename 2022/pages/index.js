import Link from "next/link";
import Head from "next/head";

import { motion } from "framer-motion";
import { styled } from "stitches.config";

import { Row } from "@/components/Row";
import WordMask from "@/components/WordMask";
import Carousel from "@/components/Carousel";
import { easeInOut } from "@/utils/easing";

const HEIGHTMULTIPLIER = 2.5;

export default function Index({ projects, available, timeline }) {
  const start = tl.header.fan;
  const difference = 0.025;
  const tlIndex = {
    uiDev: start,
    design: start + difference,
    motion: start + difference * 2,
    ampersand: start + difference * 3,
    frontend: start + difference * 4,
    imgProjects: start + difference * 5,
    imgMe: start + difference * 6,
    creative: start + difference * 7,
    coding: start + difference * 8,
    available: start + difference * 9,
    availableAnswer: start + difference * 10,
  };

  const tl = { ...timeline, ...tlIndex };

  return (
    <motion.div>
      <Head>
        <title>Freelance frontend UI developer and designer, Rou Hun Fan</title>
      </Head>

      <h1>
        <Row>
          <div>
            <WordMask direction="top" delay={timeline.uiDev}>
              UI dev
            </WordMask>
            <WordMask direction="left" delay={timeline.design}>
              Design
            </WordMask>
            <WordMask direction="bottom" delay={timeline.motion}>
              Motion
            </WordMask>
          </div>

          <Link href="/projects" scroll={false}>
            <AnchorProjects>
              <Carousel projects={projects} delay={timeline.imgProjects} />
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
          <LinkMe>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: timeline.imgMe }}
              layoutId="overlay"
            />

            <motion.img
              src="/assets/img/me.jpg"
              alt="me"
              style={{
                height: `calc(var(--font-size) * ${HEIGHTMULTIPLIER})`,
              }}
              transition={{ delay: timeline.imgMe, ease: easeInOut }}
              layoutId="me-image"
            />
          </LinkMe>
        </Link>

        <CreativeCoding>
          <WordMask direction="top" delay={timeline.creative}>
            Helping biz,
          </WordMask>
          <WordMask direction="bottom" delay={timeline.creative}>
            individuals,
          </WordMask>
          <WordMask direction="bottom" delay={timeline.creative}>
            10+ years
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
          {available}
        </WordMask>
      </Row>
    </motion.div>
  );
}

const AnchorProjects = styled(motion.a, {
  position: "relative",
  flex: 1,
  margin: "1rem 0 1rem 3rem",
  height: `calc(var(--font-size) * ${2.5})`,

  "&:hover": {
    cursor: "pointer",
  },

  "& img": {
    display: "block",
    width: "100%",
  },

  "& + h2": {
    color: "red",
  },
});

const CreativeCoding = styled("h1", {
  include: "fontAlt",
});

const Ampersand = styled("span", {
  include: "fontAlt",
});

const LinkMe = styled("a", {
  overflow: "hidden",
  position: "relative",
  display: "block",
  margin: "0 7vh 2vh 0",
  height: `calc(var(--font-size) * ${HEIGHTMULTIPLIER})`,
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

// Fetching data from the JSON file
import fsPromises from "fs/promises";
import path from "path";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: data,
  };
}
