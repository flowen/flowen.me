"use client";

import Link from "next/link";
import { easeOut, motion } from "motion/react";
import { styled } from "../stitches.config";
import WordMask from "@/components/WordMask";

interface Archive {
  archive: ArchiveItem[];
}

interface ArchiveItem {
  name: string;
  url?: string;
}

const staggerVariant = {
  initial: ({ index, total }: { index: number; total: number }) => ({
    opacity: 0,
    filter: "blur(8px)",
    scaleX: 0.7,
    transition: {
      duration: 0.15,
      delay: easeInCubic(index / total) * 0.75,
      ease: easeOut,
    },
  }),
  whileInView: ({ index, total }: { index: number; total: number }) => ({
    opacity: 1,
    filter: "blur(0)",
    scaleX: 1,
    transition: {
      duration: 0.15,
      delay: easeInCubic(index / total) * 0.75,
      ease: easeOut,
    },
  }),
  exit: () => ({
    opacity: 0,
    filter: "blur(8px)",
    scaleX: 0.7,
    transition: {
      duration: 0.35,
      ease: easeOut,
    },
  }),
};

const easeInCubic = (t: number) => t * t * t;

export default function ProjectsArchive({ archive }: Archive) {
  return (
    <>
      <WrapLink>
        <WordMask direction="top" delay={0}>
          <_Link href="/projects" scroll={false}>
            Return to Projects
          </_Link>
        </WordMask>
      </WrapLink>
      <WordMask direction="top" delay={0}>
        <P>
          Whatever I could remember or was too lazy to add to the projects page
        </P>
      </WordMask>
      <Archive>
        {archive.map(({ name, url }, index) => (
          <ArchiveItem
            key={index}
            variants={staggerVariant}
            initial="initial"
            whileInView="whileInView"
            exit="exit"
            custom={{ index, total: archive.length }}
            style={{ transformOrigin: "left center" }}
          >
            {url ? (
              <Anchor href={url} target="_blank" rel="noopener noreferrer">
                {name}
              </Anchor>
            ) : (
              name
            )}
          </ArchiveItem>
        ))}
      </Archive>
    </>
  );
}

const Archive = styled("ul", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  listStyle: "none",
  padding: 0,
  margin: 0,
});

const WrapLink = styled("div", {
  position: "sticky",
  top: "0",
  backgroundColor: "hsl(var(--dark) / 0.75)",
  backdropFilter: "blur(3px)",
  padding: "0 0 2vw 0",
  zIndex: 100,
});

const _Link = styled(Link, {
  fontFamily: "var(--font-alt)",
  fontSize: "5vw",
});

const P = styled(motion.p, {
  fontFamily: "var(--font-alt)",
  fontSize: "6vw",
  margin: "1em 0",
  maxWidth: "600px",
});

const ArchiveItem = styled(motion.li, {
  fontSize: "20px",
  margin: "1em 0",
  textTransform: "lowercase",
});
const Anchor = styled("a", {
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    textDecorationThickness: "1px",
    textUnderlineOffset: "1px",
  },
});

import { GetStaticProps } from "next";
import fsPromises from "fs/promises";
import path from "path";

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath, "utf8");
  const data = JSON.parse(jsonData);

  return {
    props: data,
  };
};
