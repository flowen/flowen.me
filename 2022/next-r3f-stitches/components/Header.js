import { styled } from "stitches.config";
import WordMask from "@/components/WordMask";

export default function Header({ timeline }) {
  return (
    <header className="header">
      <Wrapper>
        <WordMask direction="top" delay={timeline.rou}>
          Rou
        </WordMask>
        <WordMask direction="top" delay={timeline.hun}>
          Hun
        </WordMask>
        <WordMask direction="top" delay={timeline.fan}>
          Fan
        </WordMask>
      </Wrapper>
    </header>
  );
}

const Wrapper = styled("h1", {
  display: "flex",
  justifyContent: "space-between",
});
