<template>
  <section class="about">
    <Testimonial
      quote="Rou Hun does it all. Armed with a startup mentality. Not only did he design our application, he also assisted us by managing our team of developers, perform Manual frontend-testing and occasionally jumped in the code &amp; styles himself."
      citee="Michael Freund, Lead innovation"
      :citee-image="require('~/assets/img/testimonial-michael.jpg')"
      citee-company="Richner Stutz"
      citee-company-url="https://richnerstutz.ch/en/"
    />

    <BGROU ref="svg" class="bg-svg bg-svg--rou" />

    <SalesCopy />

    <Testimonial
      quote="Rou Hun is a multi-skilled powerhouse. When I hire him to code the front-end I know I'm saving time on design instructions &amp; decisions. There's no friction in collaboration and he adds extra value to our business and operations this way"
      citee="Daniel Heitz, Cofounder"
      :citee-image="require('~/assets/img/testimonial-daniel.jpg')"
      citee-company="Gebrueders Heitz"
      citee-company-url="https://gebruederheitz.de/"
    />

    <BGHUN class="bg-svg bg-svg--hun" />

    <ContactHero />

    <FanStamp />
  </section>
</template>

<script>
import Testimonial from "@/components/Testimonial";
import SalesCopy from "@/components/SalesCopy";
import ContactHero from "@/components/ContactHero";
import FanStamp from "@/components/FanStamp";

import BGROU from "@/assets/img/bg-ROU.svg?inline";
import BGHUN from "@/assets/img/bg-HUN.svg?inline";
import gsap from "gsap";

export default {
  components: {
    Testimonial,
    BGROU,
    BGHUN,
    SalesCopy,
    ContactHero,
    FanStamp,
  },
  transition: {
    css: false,
    mode: "out-in",
    appear: true,
    enter: function (el, done) {
      const svg = el.querySelector(".bg-svg--rou");

      gsap
        .timeline({ onComplete: done })
        .to(svg, { y: "-150vh" })
        .addLabel("start")
        .to(el, { y: 0 }, "start")
        .to(svg, { y: 0 }, "start");
    },
    leave: function (el, done) {
      const svg = el.querySelector(".bg-svg--hun");

      gsap
        .timeline({ onComplete: done, defaults: { ease: "power4.in", duration: 1.5 } })
        .to(svg, { yPercent: -100 })
        .to(el, { yPercent: -100 }, "-=1.25");
    },
  },
};
</script>

<style lang="scss">
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12.5vh;
  transform: translateY(200vh);

  .no-js & {
    transform: translateY(0);
  }

  .testimonial {
    margin-top: 25vh;
    margin-bottom: 25vh;
  }

  .bg-svg {
    pointer-events: none;
    z-index: z("behind");
    position: absolute;
    left: 10%;
    width: 80%;

    &--rou {
      top: 0;

      transform: translateY(-100vh);

      .no-js & {
        transform: translateY(0);
      }
    }

    &--hun {
      left: 20vw;
      max-width: 60vw;
      top: 200vh;
    }
  }

  .holder {
    position: relative;
  }

  .fan-stamp {
    margin: 50vh auto;
  }

  &__problems {
    max-width: 500px;
    margin: 5vh auto;
    font-size: clamp(20px, 4.5vw, 28px);
    text-align: center;
  }
}
</style>
