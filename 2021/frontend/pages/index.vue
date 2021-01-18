<template>
  <main class="main">
    <Intro />
    <!-- <Testimonials />
    <SalesCopy />
    <Projects />
    <ContactHero /> -->
  </main>
</template>

<script>
import Intro from "@/components/Intro.vue";
import Testimonials from "@/components/Testimonials.vue";
import SalesCopy from "@/components/SalesCopy.vue";
import Projects from "@/components/Projects.vue";
import ContactHero from "@/components/ContactHero.vue";

export default {
  components: {
    Intro,
    ContactHero,
    Testimonials,
    SalesCopy,
    Projects,
  },
  beforeMount() {
    document.documentElement.addEventListener("mousemove", this.mousePos);
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    document.documentElement.removeEventListener("mousemove", this.mousePos);
  },
  methods: {
    mousePos(e) {
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

<style lang="scss" scoped></style>
