import Link from "next/link";

import { Row } from "@/components/Row";
import WordMask from "@/components/WordMask";

export default function Header({ timeline }) {
  return (
    <header>
      <Row
        as="h1"
        css={{
          width: "100%",
          justifyContent: "space-between",
          "& a": {
            textDecoration: "none",
          },
        }}
      >
        <WordMask direction="top" delay={timeline.rou}>
          <Link href="/" scroll={false}>
            Rou
          </Link>
        </WordMask>
        &nbsp;
        <WordMask direction="top" delay={timeline.hun}>
          <Link href="/" scroll={false}>
            Hun
          </Link>
        </WordMask>
        &nbsp;
        <WordMask direction="top" delay={timeline.fan}>
          <Link href="/" scroll={false}>
            Fan
          </Link>
        </WordMask>
      </Row>
    </header>
  );
}
