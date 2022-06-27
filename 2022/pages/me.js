import Head from "next/head";

import { motion } from "framer-motion";
import { styled } from "stitches.config";

import { Overlay } from "@/pages/index";
import { Row } from "@/components/Row";
import WordMask from "@/components/WordMask";
import Logo from "@/assets/svg/logo.svg";

const heightMultiplier = 3;

const timeline = {
  header: {
    rou: 0,
    hun: 0.1,
    fan: 0.2,
  },
  now: 0.35,
  nowContent: 0.5,
  footer: {
    dob: 1.15,
    contact: 1.3,
    arrow: 1.35,
    cv: 1.45,
    tg: 1.5,
    tw: 1.55,
  },
};

export default function Me({ now }) {
  return (
    <motion.div>
      <Head>
        <title>Freelance frontend UI developer and designer, Rou Hun Fan</title>
      </Head>

      <Row css={{ position: "relative" }}>
        <Wrapper
          style={{ height: `calc(var(--font-size) * ${heightMultiplier})` }}
          exit={{ overflow: "hidden" }}
        >
          <Overlay
            animate={{ opacity: 0 }}
            exit={{ opacity: 1, y: "-100%" }}
            layoutId="overlay"
          />

          <motion.img
            src="/assets/img/me.jpg"
            alt="me"
            style={{
              height: `calc(var(--font-size) * ${heightMultiplier})`,
            }}
            layoutId="me-image"
            exit={{ y: "-100%", opacity: 0 }}
          />
        </Wrapper>

        <MotionLogo
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </Row>

      <h1>
        <WordMask direction="top" delay={timeline.now}>
          /NOW
        </WordMask>
        <WordMask
          direction="top"
          delay={timeline.nowContent}
          altFont
          html={now}
        />
      </h1>
    </motion.div>
  );
}

const Wrapper = styled(motion.div, {
  position: "relative",
});

const LogoSVG = styled(Logo, {
  position: "absolute",
  top: "5vw",
  right: "5vw",
  height: "calc(var(--font-size) * 3)",
});

const MotionLogo = motion(LogoSVG);

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
