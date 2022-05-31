import { styled } from "@stitches/react";
import Nav from "@/components/Nav";

export default function Layout({ children }) {
  return (
    <LayoutStyles>
      {children}

      <Nav />
    </LayoutStyles>
  );
}

const LayoutStyles = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "10vmin auto 15vmin",
});
