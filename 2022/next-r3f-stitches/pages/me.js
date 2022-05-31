import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Me() {
  return <h1>me</h1>;
}

Me.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Header />
      <main>{page}</main>
      <Footer />
    </Layout>
  );
};
