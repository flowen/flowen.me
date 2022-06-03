import { styled } from "stitches.config";

import { Row } from "@/components/Row";
import WordMask from "@/components/WordMask";
import MeImage from "@/components/MeImage";

import Logo from "@/assets/svg/logo.svg";

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

export default function Me() {
  return (
    <main>
      <Row css={{ position: "relative" }}>
        <MeImage heightMultiplier={3} showOverlay={false} />
        <LogoSVG />
      </Row>

      <h1>
        <WordMask direction="top" delay={timeline.now}>
          /NOW
        </WordMask>
        <WordMask direction="top" delay={timeline.nowContent} altFont={true}>
          Enjoying my son &amp; looking for a job
        </WordMask>
      </h1>
    </main>
  );
}

const LogoSVG = styled(Logo, {
  position: "absolute",
  top: "5vw",
  right: "5vw",
  height: "calc(var(--font-size) * 3)",
});
