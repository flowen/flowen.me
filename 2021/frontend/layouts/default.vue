<template>
  <div class="hi-thx-4-checkin-ma-code-hf">
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

import visual from "assets/img/visual.jpg";
import climbing from "assets/img/climbing.jpg";
import testimonial from "assets/img/testimonial-michael.jpg";

export default {
  components: { Header, FanStamp, MouseCursor },
  async mounted() {
    await this.$imagePreload([visual, climbing, testimonial], (e) => console.log(e)); // element, loaded src, src index, loaded count, src list length, progress

    const header = document.querySelector(".header");
    const fanstamp = document.querySelector(".fan-stamp");

    gsap
      .timeline()
      .delay(0.2)
      .to(header, { rotate: 0, scale: 1 })
      .to(fanstamp, { rotate: 0, scale: 1 }, "-=.2");
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

<style lang="scss">
.fan-stamp {
  position: fixed;
  right: var(--margin);
  bottom: var(--margin);
  transform: rotate(-7.4deg) scale(0);

  @media (max-aspect-ratio: 3/5) {
    display: none;
  }

  .no-js & {
    transform: rotate(0deg) scale(1);
  }
}
</style>

<style lang="scss" scoped>
.header {
  transform: rotate(-7.4) scale(0);

  .no-js & {
    transform: rotate(0deg) scale(1);
  }
}
</style>
