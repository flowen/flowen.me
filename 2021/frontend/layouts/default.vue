<template>
  <div class="hi-thx-4-checkin-ma-code-hf">
    <MouseCursor ref="preloader" class="preloading" />

    <div if="finishedLoading">
      <Header />
      <FanStamp ref="fanstamp" />

      <nuxt />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import FanStamp from "@/components/FanStamp.vue";
import MouseCursor from "@/components/MouseCursor.vue";

import gsap from "gsap";

import visual from "@/assets/img/visual.jpg";
import climbing from "@/assets/img/climbing.jpg";
import testimonial1 from "@/assets/img/testimonial-michael.jpg";
import testimonial2 from "@/assets/img/testimonial-daniel.jpg";
import coder from "@/assets/img/creative-coder-hero.jpg";
import sweatin from "@/assets/img/sweatin-in-taiwan.jpg";

export default {
  components: { Header, FanStamp, MouseCursor },
  data() {
    return {
      imagesPreload: [visual, climbing, testimonial1, testimonial2, coder, sweatin],
      finishedLoading: false,
    };
  },
  mounted() {
    this.$imagePreload(this.imagesPreload, async (e) => {
      if (e.progress === 100) {
        await gsap
          .timeline({
            onComplete: () => {
              this.finishedLoading = true;
              setTimeout(this.enter, 200);
            },
          })
          .to(this.$refs.preloader.$el, { autoAlpha: 0 })
          .add(() => {
            this.$refs.preloader.$el.classList.remove("preloading");
          })
          .to(this.$refs.preloader.$el, { autoAlpha: 1 });
      }
    });
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
    enter() {
      gsap.to(this.$refs.fanstamp.$el, { rotate: 0, scale: 1 });
    },
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
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: firebrick;
}

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
