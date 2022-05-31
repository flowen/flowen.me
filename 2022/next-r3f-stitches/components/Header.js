import Link from "next/link";

import { Row } from "@/pages/index";
import WordMask from "@/components/WordMask";

export default function Header({ timeline }) {
  return (
    <Row
      css={{
        "& a": {
          textDecoration: "none",
        },
      }}
    >
      <WordMask direction="top" delay={timeline.rou}>
        <Link href="/">Rou</Link>
      </WordMask>
      &nbsp;
      <WordMask direction="top" delay={timeline.hun}>
        <Link href="/">Hun</Link>
      </WordMask>
      &nbsp;
      <WordMask direction="top" delay={timeline.fan}>
        <Link href="/">Fan</Link>
      </WordMask>
    </Row>
  );
}
