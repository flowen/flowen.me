import Layout from "@/components/Layout";

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
