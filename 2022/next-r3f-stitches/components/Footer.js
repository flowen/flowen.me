import { styled } from "stitches.config";

import WordMask from "@/components/WordMask";
import { Flex } from "@/pages/index";

export default function Footer({ timeline }) {
  return (
    <footer className="footer">
      <h1>
        <WordMask direction="top" delay={timeline.dob}>
          <span className="font-line-through">0000</span>‘831229
        </WordMask>
      </h1>

      <Contact>
        <Flex>
          <WordMask direction="top" delay={timeline.contact}>
            <span style={{ fontWeight: "normal" }}>Contact</span>
          </WordMask>
          &nbsp;
          <WordMask direction="left" delay={timeline.arrow}>
            &#10143;
          </WordMask>
          &nbsp;
        </Flex>

        <Flex>
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
        </Flex>
      </Contact>
    </footer>
  );
}

const Contact = styled("h1", {
  display: "flex",
  fontFamily: "$fontAlt",
  fontWeight: "400",
});
