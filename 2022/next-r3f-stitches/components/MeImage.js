import React from "react";
import Link from "next/link";
import { styled } from "stitches.config";

const MeImage = React.forwardRef(
  ({ heightMultiplier = 2, showOverlay = true }, ref) => {
    return (
      <div ref={ref}>
        <Link href="/me" scroll={false}>
          <LinkMe
            onClick={handleClick}
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
      </div>
    );
  }
);

MeImage.displayName = "MeImage";
export default MeImage;

const LinkMe = styled("a", {
  position: "relative",
  display: "block",
  margin: "0 7vh 2vh 0",

  "&:hover": {
    "& > div": {
      opacity: 0,
    },
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
