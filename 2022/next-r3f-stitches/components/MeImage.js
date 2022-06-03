import Link from "next/link";
import { styled } from "stitches.config";

export default function MeImage({ heightMultiplier = 2, showOverlay = true }) {
  return (
    <Link href="/me">
      <LinkMe
        style={{ height: `calc(var(--font-size) * ${heightMultiplier})` }}
      >
        <Overlay
          style={{
            opacity: showOverlay ? 1 : 0,
          }}
        />
        <img
          src="/assets/img/me.jpg"
          alt="me"
          style={{ height: `calc(var(--font-size) * ${heightMultiplier})` }}
        />
      </LinkMe>
    </Link>
  );
}

const LinkMe = styled("a", {
  position: "relative",
  margin: "0 7vmin 2vmin 0",
  height: "calc(var(--font-size) * 2)",

  "&:hover": {
    "& > div": {
      opacity: 0,
    },
  },

  "& img": {
    height: "calc(var(--font-size) * 2)",
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
  transition: "opacity var(--d-slower) var(--ease-out)",
});
