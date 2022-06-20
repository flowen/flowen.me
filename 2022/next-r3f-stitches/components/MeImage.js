import Link from "next/link";
import { styled } from "stitches.config";
import { motion } from "framer-motion";

export default function MeImage({ heightMultiplier = 2, showOverlay = true }) {
  return (
    <motion.div layout transition={{ duration: 0.3 }}>
      <Link href="/me" scroll={false}>
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
    </motion.div>
  );
}

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
