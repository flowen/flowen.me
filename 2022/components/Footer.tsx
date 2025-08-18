import { AnimatePresence } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "stitches.config";
import WordMask from "@/components/WordMask";
import { timeline } from "@/utils/timelines";
import { useEffect, useRef } from "react";

export default function Footer() {
  const router = useRouter();
  const isExitingRef = useRef(false);

  useEffect(() => {
    // Only apply exit animation fix when on the /me page
    if (router.pathname !== "/me") return;

    const handleRouteChangeStart = (url: string) => {
      // Store a flag in sessionStorage indicating we're navigating within the app
      if (typeof window !== "undefined") {
        sessionStorage.setItem("nextNavigation", "true");
      }
      // Set exiting ref to true immediately (synchronous)
      isExitingRef.current = true;

      if (url !== router.asPath) {
        // Prevent the default navigation
        router.events.emit("routeChangeError");

        window.history.pushState(null, "", router.asPath);

        setTimeout(() => {
          router.push(url);
        }, 300);

        return false;
      }
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router]);

  return (
    <footer>
      <h1>
        <WordMask direction="top" delay={timeline.footer.dob}>
          <Zeroes>0000</Zeroes>&apos;831229
        </WordMask>
      </h1>

      <Wrapper>
        <WordMask direction="top" delay={timeline.footer.contact}>
          <span style={{ fontWeight: "normal" }}>Contact</span>
        </WordMask>
        &nbsp;
        <WordMask direction="left" delay={timeline.footer.arrow}>
          &#10143;
        </WordMask>
        &nbsp;
        <WordMask direction="left" delay={timeline.footer.tg}>
          <a
            href="https://www.linkedin.com/in/flowen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LI
          </a>
        </WordMask>
        &nbsp;
        <WordMask direction="left" delay={timeline.footer.tg}>
          <a
            href="https://t.me/flowen"
            target="_blank"
            rel="noopener noreferrer"
          >
            TG
          </a>
        </WordMask>
        &nbsp;
        <WordMask direction="left" delay={timeline.footer.tw}>
          <a
            href="https://x.com/flowen_af"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </WordMask>
      </Wrapper>

      <AnimatePresence mode="wait">
        {router.pathname !== "/" && (
          <WordMask direction="bottom" altFont>
            <Link href="/" scroll={false}>
              Return to index
            </Link>
          </WordMask>
        )}
      </AnimatePresence>
    </footer>
  );
}

const Wrapper = styled("div", {
  display: "flex",
  include: "fontAlt",
});

const Zeroes = styled("span", {
  fontFeatureSettings: '"aalt" on',
  fontWeight: "400",
  textDecoration: "line-through",
});
