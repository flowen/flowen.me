import Link from "next/link";
import { styled } from "stitches.config";

import WordMask from "@/components/WordMask";
import { timeline } from "@/pages/index";

export default function Header() {
  return (
    <HeaderStyles>
      <h1>
        <WordMask direction="top" delay={timeline.rou}>
          <Link href="/">Rou</Link>
        </WordMask>
        <WordMask direction="top" delay={timeline.hun}>
          <Link href="/">Hun</Link>
        </WordMask>
        <WordMask direction="top" delay={timeline.fan}>
          <Link href="/">Fan</Link>
        </WordMask>
      </h1>
    </HeaderStyles>
  );
}

const HeaderStyles = styled("header", {
  display: "flex",
  "& h1": {
    display: "flex",
    justifyContent: "space-between",
  },
});
