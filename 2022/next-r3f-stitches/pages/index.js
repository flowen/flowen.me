import { styled } from "stitches.config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WordMask from "@/components/WordMask";

export default function Index() {
  return (
    <div>
      <Header />

      <main>
        <h1>
          <Flex>
            <div>
              <WordMask direction="top" delay={0.25}>
                UI dev
              </WordMask>
              <WordMask direction="right" delay={0.5}>
                Motion
              </WordMask>
            </div>

            <img src="/assets/img/fx.jpg" alt="coolshit" />
          </Flex>
        </h1>

        <Me>
          <MeImage>
            <Overlay />
            <img src="/assets/img/me.jpg" />
          </MeImage>

          <CreativeCoding>
            <div>Creative</div>
            <div>Coding</div>
          </CreativeCoding>
        </Me>
      </main>

      <Footer />
    </div>
  );
}

const Flex = styled("div", {
  display: "flex",

  "& img": {
    height: "calc(13vmin * 2)",
    margin: "2vmin 0 0 7vmin",
  },
});

const Me = styled("div", {
  display: "flex",
});

const MeImage = styled("div", {
  position: "relative",
  margin: "0 7vmin 0 0",

  "& img": {
    display: "block",
    height: "calc(13vmin * 2)",
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

const CreativeCoding = styled("div", {
  fontFamily: "$fontAlt",
});
