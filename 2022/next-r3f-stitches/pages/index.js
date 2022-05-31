import { styled } from "stitches.config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WordMask from "@/components/WordMask";

const timeline = {
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
    <div>
      <Header timeline={timeline} />

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

            <img src="/assets/img/fx.jpg" alt="coolshit" />
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
          <MeImage>
            <Overlay />
            <img src="/assets/img/me.jpg" />
          </MeImage>

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

      <Footer timeline={timeline} />
    </div>
  );
}

export const Flex = styled("div", {
  display: "flex",
  // justifyContent: "space-between",

  "& img": {
    height: "calc(13vmin * 2)",
    margin: "2vmin 0 0 7vmin",
  },
});

const Me = styled("div", {
  display: "flex",
  alignItems: "center",
});

const MeImage = styled("div", {
  position: "relative",
  margin: "0 7vmin 0 0",

  "& img": {
    display: "block",
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
});

const CreativeCoding = styled("h1", {
  fontFamily: "$fontAlt",
  fontWeight: "400",
});

const Ampersand = styled("span", {
  fontFamily: "$fontAlt",
});
