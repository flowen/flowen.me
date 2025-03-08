import React from "react";
import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";
import { motion } from "motion/react";
import fsPromises from "fs/promises";
import path from "path";
import { useRouter } from "next/router";

import { styled } from "stitches.config";
import { Row } from "@/components/Row";
import WordMask from "@/components/WordMask";
import Carousel from "@/components/Carousel";
import { easeInOut, easeOut } from "@/utils/easing";
import Image from "next/image";

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
  const router = useRouter();
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
        <title>
          The web is boring af, lets 🌶️ it up | Freelance frontend UI developer
          and designer | Rou Hun Fan
        </title>
      </Head>

      <h1>
        <Row
          css={{
            display: "flex",
            alignItems: "stretch",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              flex: "0 0 auto",
              whiteSpace: "nowrap",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignSelf: "stretch",
            }}
          >
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

          <div
            style={{
              position: "relative",
              flex: "0 1 100%",
              minHeight: "100%",
              marginLeft: "2rem",
            }}
          >
            <AnchorProjects href="/projects" scroll={false}>
              <Carousel projects={projects} tl={tl} />
            </AnchorProjects>

            <CarouselTitle
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, rotate: -10, opacity: 1 }}
              exit={{ y: "-25%", opacity: 0 }}
              transition={{ ease: easeOut, delay: tl.imgProjects + 0.25 }}
            >
              Projects
            </CarouselTitle>
          </div>
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

      <Row
        css={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          flexWrap: "nowrap",
        }}
      >
        <LinkMe href="/me" scroll={false}>
          <motion.div
            layoutId="me-image"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <motion.div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={router.asPath !== "/me" ? { y: "-100%" } : undefined}
              transition={{ delay: tl.imgMe, ease: easeInOut }}
            >
              <Image
                src="/assets/img/me.webp"
                alt="me"
                fill
                sizes="(max-width: 768px) 100vw, 328px"
                style={{
                  objectFit: "cover",
                  objectPosition: "center -20px",
                  pointerEvents: "none",
                }}
                priority
              />
            </motion.div>
          </motion.div>
        </LinkMe>

        <HelpingBizGrow>
          <WordMask direction="top" delay={tl.creative}>
            10+ years
          </WordMask>
          <WordMask direction="bottom" delay={tl.creative}>
            of helping
          </WordMask>
          <WordMask direction="bottom" delay={tl.creative}>
            biz grow
          </WordMask>
        </HelpingBizGrow>
      </Row>

      <Row>
        <WordMask direction="right" delay={tl.available}>
          Available:
        </WordMask>
        <WordMask direction="left" delay={tl.availableAnswer} altFont={true}>
          {typeof available === "string"
            ? available
            : available
            ? "Yes LFG"
            : "No sers"}
        </WordMask>
      </Row>
    </motion.div>
  );
}

const AnchorProjects = styled(motion.create(Link), {
  overflow: "hidden",
  display: "block",
  width: "100%",
  height: "100%",

  "&:hover": {
    cursor: "pointer",
  },
});

const CarouselTitle = styled(motion.h2, {
  position: "absolute",
  bottom: "-20px",
  left: "-10px",
  width: "100%",
  whiteSpace: "nowrap",
  fontSize: "7.5vw",
  include: "fontAlt",
  zIndex: 100,
  mixBlendMode: "difference",
});

const HelpingBizGrow = styled("h1", {
  include: "fontAlt",
  alignSelf: "stretch",
  display: "flex",
  flex: "0 0 auto",
  flexDirection: "column",
  justifyContent: "center",
});

const Ampersand = styled("span", {
  include: "fontAlt",
});

const LinkMe = styled(Link, {
  overflow: "hidden",
  position: "relative",
  display: "block",
  margin: "0 20px 0 0",
  width: "100%",
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
