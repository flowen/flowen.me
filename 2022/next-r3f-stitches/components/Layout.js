import { styled } from "@stitches/react";
import { useRouter } from "next/router";

import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  const timeline = {
    header: {
      rou: 0,
      hun: 0.1,
      fan: 0.2,
    },
    footer: {
      dob: 1.15,
      contact: 1.3,
      arrow: 1.35,
      cv: 1.45,
      tg: 1.5,
      tw: 1.55,
    },
  };

  const router = useRouter();
  console.log(router.route);

  return (
    <Wrapper>
      <Header timeline={timeline.header} />

      {children}

      <Footer timeline={timeline.footer} />
      <Nav />
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  maxWidth: "720px",
  margin: "0 auto",
  padding: "10vmin 0 15vmin",
});
