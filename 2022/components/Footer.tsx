import Link from "next/link";
import { styled } from "stitches.config";
import WordMask from "@/components/WordMask";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

interface Timeline {
  dob: number;
  contact: number;
  arrow: number;
  cv: number;
  tg: number;
  tw: number;
}

interface FooterProps {
  timeline: Timeline;
}

export default function Footer({ timeline }: FooterProps) {
  const router = useRouter();
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
            href="https://www.linkedin.com/in/flowen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LI
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
            href="https://x.com/flowen_af"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </WordMask>
      </Wrapper>

      <AnimatePresence mode="wait">
        {router.pathname !== "/" && (
          <WordMask direction="bottom" altFont>
            <Link href="/" scroll={false}>
              Return to index
            </Link>
          </WordMask>
        )}
      </AnimatePresence>
    </footer>
  );
}

const Wrapper = styled("div", {
  display: "flex",
  include: "fontAlt",
});

const Zeroes = styled("span", {
  fontFeatureSettings: '"aalt" on',
  fontWeight: "400",
  textDecoration: "line-through",
});
