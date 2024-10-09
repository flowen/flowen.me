import React from "react";
import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import fsPromises from "fs/promises";
import path from "path";

import { styled } from "stitches.config";
import { Row } from "@/components/Row";
import WordMask from "@/components/WordMask";
import Carousel from "@/components/Carousel";
import { easeInOut } from "@/utils/easing";

interface Project {
  id: string;
  title: string;
  name: string;
  image: string;
  imagePosition: string;
}

export interface Timeline {
  header: {
    fan: number;
  };
  [key: string]: any;
}

interface IndexProps {
  projects: Project[];
  available: string | boolean;
  timeline: Timeline;
}

interface TimelineIndex {
  uiDev: number;
  design: number;
  motion: number;
  ampersand: number;
  frontend: number;
  imgProjects: number;
  imgMe: number;
  imgMeOverlay: number;
  creative: number;
  coding: number;
  available: number;
  availableAnswer: number;
}

export default function Index({ projects, available, timeline }: IndexProps) {
  const start = timeline.header.fan;
  const difference = 0.1;
  const tlIndex: TimelineIndex = {
    uiDev: start,
    design: start + difference,
    motion: start + difference * 2,
    ampersand: start + difference * 3,
    frontend: start + difference * 4,
    imgProjects: start + difference * 5,
    imgMe: start + difference * 6,
    imgMeOverlay: start + difference * 7,
    creative: start + difference * 8,
    coding: start + difference * 9,
    available: start + difference * 10,
    availableAnswer: start + difference * 11,
  };

  const tl: Timeline & TimelineIndex = { ...timeline, ...tlIndex };

  return (
    <motion.div>
      <Head>
        <title>Freelance frontend UI developer and designer, Rou Hun Fan</title>
      </Head>

      <h1>
        <Row>
          <div>
            <WordMask direction="top" delay={tl.uiDev}>
              UI dev
            </WordMask>
            <WordMask direction="left" delay={tl.design}>
              Design
            </WordMask>
            <WordMask direction="bottom" delay={tl.motion}>
              Motion
            </WordMask>
          </div>

          <AnchorProjects href="/projects" scroll={false}>
            <Carousel projects={projects} tl={tl} />
          </AnchorProjects>
        </Row>

        <Row>
          <WordMask direction="top" delay={tl.ampersand}>
            <Ampersand>&amp;</Ampersand>
          </WordMask>
          &nbsp;
          <WordMask direction="top" delay={tl.frontend}>
            Frontend
          </WordMask>
        </Row>
      </h1>

      <Row css={{ position: "relative" }}>
        <LinkMe href="/me" scroll={false}>
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: tl.imgMeOverlay, ease: easeInOut }}
            layoutId="overlay"
          />

          <motion.img
            src="/assets/img/me.webp"
            alt="me"
            style={{
              height: 328,
              pointerEvents: "none",
              originY: 0,
            }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: tl.imgMe, ease: easeInOut }}
            layoutId="me-image"
          />
        </LinkMe>

        <CreativeCoding>
          <WordMask direction="top" delay={tl.creative}>
            10+ years
          </WordMask>
          <WordMask direction="bottom" delay={tl.creative}>
            of helping
          </WordMask>
          <WordMask direction="bottom" delay={tl.creative}>
            biz grow
          </WordMask>
        </CreativeCoding>
      </Row>

      <Row>
        <WordMask direction="right" delay={tl.available}>
          Available:
        </WordMask>
        <WordMask direction="left" delay={tl.availableAnswer} altFont={true}>
          {typeof available === "string" ? available : available ? "Yes" : "No"}
        </WordMask>
      </Row>
    </motion.div>
  );
}

const AnchorProjects = styled(motion.create(Link), {
  display: "block",
  position: "relative",
  flex: "1 1 0",
  margin: "1rem 0 1rem 3rem",
  height: 328,

  "&:hover": {
    cursor: "pointer",
  },

  "& img": {
    display: "block",
    width: "100%",
  },
});

const CreativeCoding = styled("h1", {
  include: "fontAlt",
});

const Ampersand = styled("span", {
  include: "fontAlt",
});

const LinkMe = styled(Link, {
  overflow: "hidden",
  position: "relative",
  display: "block",
  margin: "0 7vh 2vh 0",
  height: 328,
});

const Overlay = styled(motion.div, {
  zIndex: 100,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",

  background: "rgb(189 179 187)",
  mixBlendMode: "lighten",
  transition: "opacity var(--d-slower) var(--ease-out)",
});

export { Overlay };

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const data = JSON.parse(jsonData.toString()) as IndexProps;

  return {
    props: data,
  };
};
