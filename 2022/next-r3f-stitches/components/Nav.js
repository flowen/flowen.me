import Link from "next/link";
import { styled } from "@stitches/react";

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/">home</Link>&nbsp;
      <Link href="/404">404</Link>&nbsp;
      <Link href="/test-three">three</Link>&nbsp;
    </NavStyles>
  );
}

const NavStyles = styled("nav", {
  position: "fixed",
  bottom: "10px",
  left: "10px",
  "& a": {
    fontSize: "12px",
    margin: "0 12px",
  },
});
