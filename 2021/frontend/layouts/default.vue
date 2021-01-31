<template>
  <div class="pagewrapper no-js">
    <MouseCursor />
    <Header />

    <FanStamp />

    <nuxt />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import FanStamp from "@/components/FanStamp.vue";
import MouseCursor from "@/components/MouseCursor.vue";

import gsap from "gsap";

export default {
  components: { Header, FanStamp, MouseCursor },
  mounted() {
    const pagewrapper = document.querySelector(".pagewrapper");
    pagewrapper.classList.remove("no-js");
    pagewrapper.classList.add("js");

    const fanstamp = document.querySelector(".fan-stamp");

    const header = document.querySelector(".header");
    gsap
      .timeline()
      .delay(0.2)
      .to(header, {
        duration: 0.35,
        ease: "power2.out",
        rotate: 0,
        scale: 1,
      })
      .to(
        fanstamp,
        {
          duration: 0.35,
          ease: "power2.out",
          rotate: 0,
          scale: 1,
        },
        "-=.2"
      );
  },
  beforeMount() {
    document.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleMouseMove(e) {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    },
    handleResize() {
      document.documentElement.style.setProperty("--ww", `${window.innerWidth}px`);
      document.documentElement.style.setProperty("--wh", `${window.innerHeight}px`);
    },
  },
};
</script>

<style lang="scss"></style>

<style lang="scss" scoped>
.fan-stamp {
  position: fixed;
  right: var(--margin);
  bottom: var(--margin);

  @media screen and (max-width: 379px) {
    display: none;
  }

  .js & {
    transform: rotate(-7.4deg) scale(0);
  }
}
</style>
