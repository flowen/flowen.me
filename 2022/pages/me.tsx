"use client";

import { useRef, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import { styled } from "stitches.config";
import { Overlay } from "@/pages/index";
import { Row } from "@/components/Row";
import WordMask from "@/components/WordMask";
import Logo from "@/assets/svg/logo.svg";

const HEIGHTMULTIPLIER = 3.25;

interface MeProps {
  now: string;
  timeline: {
    [key: string]: number;
  };
}

export default function Me({ now, timeline }: MeProps) {
  const meImgRef = useRef<HTMLImageElement>(null);
  const tlMe = {
    now: 0.35,
    nowContent: 0.5,
  };

  const tl = { ...timeline, ...tlMe };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <motion.div>
      <Head>
        <title>Freelance frontend UI developer and designer, Rou Hun Fan</title>
      </Head>

      <Row css={{ position: "relative" }}>
        <Wrapper
          style={{ height: `calc(var(--font-size) * ${HEIGHTMULTIPLIER})` }}
          exit={{ overflow: "hidden" }}
        >
          <motion.img
            ref={meImgRef}
            src="/assets/img/me.webp"
            alt="me"
            style={{
              height: `calc(var(--font-size) * ${HEIGHTMULTIPLIER})`,
            }}
            layoutId="me-image"
            exit={{ y: "-100%" }}
          />
        </Wrapper>

        <LogoWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Logo />
        </LogoWrapper>
      </Row>

      <h1>
        <WordMask direction="top" delay={tl.now}>
          /NOW
        </WordMask>

        <WordMask
          direction="top"
          delay={tl.nowContent}
          altFont
          html={now}
          css={{ fontSize: "5vw", marginBottom: "5vh" }}
        />
      </h1>
    </motion.div>
  );
}

const Wrapper = styled(motion.div, {
  position: "relative",
});

const LogoWrapper = styled(motion.div, {
  position: "absolute",
  top: "5vw",
  left: "27.5vw",

  "& svg": {
    height: `calc(var(--font-size) * ${HEIGHTMULTIPLIER})`,
  },
});

import fsPromises from "fs/promises";
import path from "path";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return {
    props: data,
  };
};
