<template>
  <div class="about">
    <Testimonial
      quote="Rou Hun does it all. Armed with a startup mentality. Not only did he design our application, he also assisted us by managing our team of developers, perform Manual frontend-testing and occasionally jumped in the code &amp; styles himself."
      citee="Michael Freund, Lead innovation"
      :citee-image="require('~/assets/img/testimonial-michael.jpg')"
      citee-company="Richner Stutz"
      citee-company-url="https://richnerstutz.ch/en/"
    />

    <SalesCopy />

    <Testimonial
      quote="Rou Hun is a multi-skilled powerhouse. When I hire him to code the front-end I know I'm saving time on design instructions &amp; decisions. There's no friction in collaboration and he adds extra value to our business and operations this way"
      citee="Daniel Heitz, Cofounder"
      :citee-image="require('~/assets/img/testimonial-daniel.jpg')"
      citee-company="Gebrueders Heitz"
      citee-company-url="https://gebruederheitz.de/"
    />

    <p class="problems">
      A good friend and I also run a small coding studio and
      <a href="https://problem.studio"> we fix problems 💙 in proper fashion </a>. We’re a tiny
      full-stack team that operates on quick scale and with a focus on quality.
    </p>

    <ContactHero />

    <FanStamp />
  </div>
</template>

<script>
import Testimonial from "~/components/Testimonial.vue";
import SalesCopy from "@/components/SalesCopy.vue";
import ContactHero from "@/components/ContactHero.vue";
import FanStamp from "@/components/FanStamp.vue";

import gsap from "gsap";

export default {
  components: {
    Testimonial,
    SalesCopy,
    ContactHero,
    FanStamp,
  },
  transition: {
    css: false,
    mode: "out-in",
    appear: true,
    enter: function (el, done) {
      gsap
        .timeline({ onComplete: done })
        .addLabel("start")
        .to(
          el,
          {
            opacity: 1,
          },
          "start"
        )
        .to(
          el,
          {
            duration: 1.5,
            y: 0,
          },
          "start"
        );
    },
    leave: function (el, done) {
      gsap.timeline({ onComplete: done }).to(el, {
        duration: 1.5,
        ease: "power4.in",
        yPercent: -100,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;

  transform: translateY(200vh);

  .no-js & {
    opacity: 1;
    transform: translateY(0);
  }

  section {
    margin: 15vh auto;
  }

  .fan-stamp {
    margin: 50vh auto;
  }

  .problems {
    max-width: 500px;
    margin: 5vh auto;
    font-size: clamp(20px, 4.5vw, 28px);
    text-align: center;
  }
}
</style>
