"use client";

import Link from "next/link";
import { styled } from "../stitches.config";
import { easeOut, motion } from "motion/react";

interface Archive {
  archive: ArchiveItem[];
}

interface ArchiveItem {
  name: string;
  url?: string;
}

export const ArchiveItemVariants = {
  initial: {
    opacity: 0,
    filter: "blur(8px)",
    scaleX: 0.7,
    transition: {
      opacity: { duration: 0.1, delay: 0, ease: easeOut },
      scale: { duration: 0.15, delay: 0.05, ease: easeOut },
      filter: { duration: 0.25, delay: 0.1, ease: easeOut },
    },
  },
  whileInView: {
    opacity: 1,
    filter: "blur(0)",
    scaleX: 1,
    transition: {
      opacity: { duration: 0.1, delay: 0, ease: easeOut },
      scale: { duration: 0.15, delay: 0.05, ease: easeOut },
      filter: { duration: 0.25, delay: 0.1, ease: easeOut },
    },
  },
  exit: {
    opacity: 0,
    filter: "blur(8px)",
    scaleX: 0.7,
    transition: {
      opacity: { duration: 0.2, delay: 0, ease: easeOut },
      scale: { duration: 0.1, delay: 0, ease: easeOut },
      filter: { duration: 0.1, delay: 0, ease: easeOut },
    },
  },
};

export default function ProjectsArchive({ archive }: Archive) {
  return (
    <Archive>
      <WrapLink>
        <_Link href="/projects">Return to Projects</_Link>
      </WrapLink>
      {archive.map(({ name, url }, index) => (
        <ArchiveItem
          key={index}
          variants={ArchiveItemVariants}
          initial="initial"
          whileInView="whileInView"
          exit="exit"
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

const WrapLink = styled(motion.div, {
  position: "sticky",
  top: "2vw",
  backgroundColor: "hsl(var(--dark) / 0.75)",
  backdropFilter: "blur(2px)",
});

const _Link = styled(Link, {
  fontFamily: "var(--font-alt)",
  fontSize: "2vw",
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
