<template>
  <section class="contact">
    <div class="contact__blabla">
      <div class="contact__visual">
        <img class="contact__visual-img" src="~assets/img/visual.jpg" alt="" />

        <svg
          class="contact__visual-svg"
          x="0px"
          y="0px"
          viewBox="0 0 384 264"
          xml:space="preserve"
          style="enable-background: new 0 0 384 264"
        >
          <clipPath id="clip">
            <path
              d="M234.3,0l90.4,0c1.7,0,2.5,2,1.3,3.2L168.5,161c-3.3,3.3-3.3,3.3-10.3,3.3l-88,0c-1.7,0-2.5-2-1.3-3.2
            L226.2,3.6C229.8,0,230,0,234.3,0z"
            />
            <path
              d="M279.3,63.2l67.5,0c1.7,0,2.5,2,1.3,3.2l-156.9,157c-4.5,4-4.5,4.1-10.8,4.1l-66.1,0c-1.7,0-2.5-2-1.3-3.2
            L269.3,68C274.1,63.3,274.2,63.2,279.3,63.2z"
            />
            <path
              d="M326,113.7l52.1,0c1.7,0,2.5,2,1.3,3.2L244.8,251.7c-4.4,4.3-4.2,4.1-9.7,4.3l-51.6,0c-1.7,0-2.5-2-1.3-3.2
            l136.1-136.3C320.9,113.9,321.4,113.7,326,113.7z"
            />
            <path
              d="M136.8,49l28.4,0c1.7,0,2.5,2,1.3,3.2L43.9,172.1c-3.1,3-3,3.3-6.8,3.3l-28.5,0c-1.7,0-2.5-2-1.3-3.2l123.1-120
            C133.2,49.3,133.5,49,136.8,49z"
            />
          </clipPath>
        </svg>
      </div>

      <p class="contact__hype">
        Hire me for campaign &amp; micro-sites, jam-stack, motion and interactivity. I often work in
        multidisciplinary teams to build websites and apps. Integrating front-end code into backend
        frameworks or Headless solutions. Strong communicator in a team between PM, design and
        backend.
        <br /><br />
        ✌️ 10% discount when paid in Bitcoin
        <br /><br />
        📍 Birmingham, UK &amp; Utrecht, NL
        <br /><br />
        🎨 I dream in CSS
      </p>

      <BGFAN ref="svg" class="bg-svg" />

      <p class="asking-for-problems">
        I also run a small coding studio with a good friend and
        <a href="https://problem.studio" target="_blank" rel="noopener noreferrer">
          we fix problems 💙 in proper fashion </a
        >. We’re a tiny full-stack team offering concept, design and development all in one.
      </p>

      <p>Contact me here:</p>

      <FindMe />
    </div>

    <FanStamp />
  </section>
</template>

<script>
import FindMe from "@/components/FindMe.vue";
import FanStamp from "@/components/FanStamp.vue";
import BGFAN from "@/assets/img/bg-FAN.svg?inline";

import gsap from "gsap";

export default {
  components: {
    FindMe,
    FanStamp,
    BGFAN,
  },
  transition: {
    css: false,
    mode: "out-in",
    appear: true,
    enter: function (el, done) {
      const visual = el.querySelector(".contact__visual");
      const svg = el.querySelector(".bg-svg");

      gsap
        .timeline({ onComplete: done })
        .to(svg, { y: "-200vh" })
        .addLabel("start")
        .to(el, { y: 0 }, "start-=0.4")
        .to(svg, { y: "0vh" }, "start-=0.4")
        .add(() => visual.classList.add("js--on"), "-=.8");
    },
    leave: function (el, done) {
      const svg = el.querySelector(".bg-svg");

      gsap
        .timeline({ onComplete: done, defaults: { ease: "power4.in", duration: 1.5 } })
        .to(svg, { yPercent: -100 })
        .to(el, { yPercent: -100 }, "-=1.25");
    },
  },
};
</script>

<style lang="scss">
.contact {
  transform: translateY(200vh);

  .no-js & {
    transform: translateY(0);
  }

  &__blabla {
    width: 70vw;
    max-width: 926px;
    margin: 35vh auto 12.5vh;
    font-family: var(--font-title);
    font-size: clamp(24px, 5vw, 72px);
    line-height: 1.1;
    color: var(--yellow);
    text-align: center;
  }

  .bg-svg {
    pointer-events: none;
    z-index: z("behind");
    position: absolute;
    top: 30vh;
    left: 10%;
    width: 80%;
  }

  &__visual {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);

    &-img {
      mask: url(~assets/img/clip.svg);
      mask-size: cover;
      mask-repeat: no-repeat;
      opacity: 0;
    }

    &.js--on .contact__visual-img {
      animation: mask-play 1.2s 1 forwards;
    }

    @keyframes mask-play {
      from {
        opacity: 0;
        mask-position: -800% 0%;
      }
      to {
        opacity: 1;
        mask-position: 200% 0%;
      }
    }

    &-svg {
      display: none;
      width: 100%;
      height: 100%;
    }
  }

  &__hype {
    position: relative;
    z-index: ("hype");
  }
}

.asking-for-problems {
  max-width: 500px;
  margin: 12.5vh auto;

  font-family: var(--font-base);
  color: var(--off-white);
  font-size: clamp(16px, 4vw, 24px);

  a {
    color: var(--off-white);
  }
}
</style>
