import { styled } from "stitches.config";

import WordMask from "@/components/WordMask";
import { Row } from "@/pages/index";

export default function Footer({ timeline }) {
  return (
    <footer>
      <h1>
        <WordMask direction="top" delay={timeline.dob}>
          <Zeroes>0000</Zeroes>‘831229
        </WordMask>
      </h1>

      <Wrapper>
        <WordMask direction="top" delay={timeline.contact}>
          <span style={{ fontWeight: "normal" }}>Contact</span>
        </WordMask>
        &nbsp;
        <WordMask direction="left" delay={timeline.arrow}>
          &#10143;
        </WordMask>
        &nbsp;
        <WordMask direction="left" delay={timeline.cv}>
          <a
            href="https://read.cv/flowen"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </WordMask>
        &nbsp;
        <WordMask direction="left" delay={timeline.tg}>
          <a
            href="https://t.me/flowen"
            target="_blank"
            rel="noopener noreferrer"
          >
            TG
          </a>
        </WordMask>
        &nbsp;
        <WordMask direction="left" delay={timeline.tw}>
          <a
            href="https://twitter.com/flowen_af"
            target="_blank"
            rel="noopener noreferrer"
          >
            TW
          </a>
        </WordMask>
      </Wrapper>
    </footer>
  );
}

const Wrapper = styled("div", {
  display: "flex",
  fontFamily: "$fontAlt",
  fontFeatureSettings: '"aalt" on',
  fontWeight: "400",
});

const Zeroes = styled("span", {
  fontFeatureSettings: '"aalt" on',
  fontWeight: "400",
  textDecoration: "line-through",
});
