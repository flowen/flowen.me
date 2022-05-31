import Link from "next/link";
import { styled } from "stitches.config";

import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WordMask from "@/components/WordMask";

export const timeline = {
  rou: 0,
  hun: 0.1,
  fan: 0.2,
  uiDev: 0.35,
  motion: 0.5,
  ampersand: 0.7,
  frontend: 0.85,
  creative: 0.9,
  coding: 1.05,
  dob: 1.15,
  contact: 1.3,
  arrow: 1.35,
  cv: 1.45,
  tg: 1.5,
  tw: 1.55,
};

export default function Index() {
  return (
    <main>
      <h1>
        <Flex>
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
              <img src="/assets/img/fx.jpg" alt="coolshit" />
            </AnchorProjects>
          </Link>
        </Flex>

        <Flex>
          <WordMask direction="top" delay={timeline.ampersand}>
            <Ampersand>&amp;</Ampersand>
          </WordMask>
          &nbsp;
          <WordMask direction="top" delay={timeline.frontend}>
            Frontend
          </WordMask>
        </Flex>
      </h1>

      <Me>
        <Link href="/me">
          <LinkMe>
            <Overlay />
            <img src="/assets/img/me.jpg" alt="me" />
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
      </Me>
    </main>
  );
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Header />
      <main>{page}</main>
      <Footer />
    </Layout>
  );
};

export const Flex = styled("div", {
  display: "flex",
  // justifyContent: "space-between",
});

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

const Me = styled("div", {
  display: "flex",
  alignItems: "center",
});

const LinkMe = styled("a", {
  position: "relative",
  margin: "0 7vmin 0 0",
  height: "calc(var(--font-size) * 2)",

  "&:hover": {
    "& > div": {
      opacity: 0,
    },
  },

  "& img": {
    height: "calc(var(--font-size) * 2)",
  },
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

const CreativeCoding = styled("h1", {
  fontFamily: "$fontAlt",
  fontWeight: "400",
});

const Ampersand = styled("span", {
  fontFamily: "$fontAlt",
});
