import { styled } from "stitches.config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WordMask from "@/components/WordMask";

const timeline = {
  header: {
    rou: 0,
    hun: 0.1,
    fan: 0.2,
  },
  now: 0.35,
  nowContent: 0.5,
  footer: {
    dob: 1.15,
    contact: 1.3,
    arrow: 1.35,
    cv: 1.45,
    tg: 1.5,
    tw: 1.55,
  },
};

export default function Me() {
  return (
    <main>
      <Header timeline={timeline.header} />
      <div>
        <img src="/assets/img/me.jpg" alt="me" />

        <h1>
          <WordMask direction="top" delay={timeline.now}>
            /NOW
          </WordMask>
          <WordMaskAlt direction="top" delay={timeline.nowContent} alt>
            Enjoying my son &amp; looking for a job
          </WordMaskAlt>
        </h1>
      </div>

      <Footer timeline={timeline.footer} />
    </main>
  );
}

const WordMaskAlt = styled(WordMask, {
  fontFamily: "$fontAlt",
});
