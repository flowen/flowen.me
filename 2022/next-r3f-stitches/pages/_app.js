import { styled } from "@stitches/react";
import "../styles/vars.css";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;

const Layout = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10vmin 0 15vmin",
});
